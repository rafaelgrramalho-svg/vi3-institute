/**
 * MailerLite Integration
 * Envia dados de quiz para MailerLite e adiciona contatos aos grupos apropriados
 */

// MailerLite API v1 (com JWT)
const MAILERLITE_API_BASE = "https://api.mailerlite.com/api/v1";
const API_KEY = process.env.MAILERLITE_API_KEY;

// Mapeamento de perfis do quiz para IDs de grupos MailerLite
const PROFILE_TO_GROUP_ID: Record<string, string> = {
  invisivel: process.env.MAILERLITE_GROUP_INVISIVEL || "180420798593369672",
  desconhecida: process.env.MAILERLITE_GROUP_DESCONHECIDA || "180420814244415166",
  emergente: process.env.MAILERLITE_GROUP_EMERGENTE || "180420827910506018",
  estabelecida: process.env.MAILERLITE_GROUP_ESTABELECIDA || "180420839360955831",
};

export interface QuizSubmissionData {
  email: string;
  name?: string;
  profile: "invisivel" | "desconhecida" | "emergente" | "estabelecida";
  answers?: number[];
  scores?: Record<string, number>;
}

/**
 * Envia dados de quiz para MailerLite
 * Cria ou atualiza contato e o adiciona ao grupo correspondente ao perfil
 */
export async function submitQuizToMailerLite(data: QuizSubmissionData): Promise<{
  success: boolean;
  message: string;
  subscriberId?: string;
  error?: string;
}> {
  try {
    if (!API_KEY) {
      throw new Error("MAILERLITE_API_KEY não configurada");
    }

    if (!data.email) {
      throw new Error("Email é obrigatório");
    }

    const groupId = PROFILE_TO_GROUP_ID[data.profile];
    if (!groupId) {
      throw new Error(`Perfil inválido: ${data.profile}`);
    }

    // Preparar dados para MailerLite
    const subscriberData = {
      email: data.email,
      fields: {
        name: data.name || "",
        quiz_profile: data.profile,
        quiz_completed_at: new Date().toISOString(),
      },
      groups: [groupId],
    };

    // Se houver scores, adicionar como campos customizados
    if (data.scores) {
      subscriberData.fields = {
        ...subscriberData.fields,
        quiz_score_invisivel: String(data.scores.invisivel || 0),
        quiz_score_desconhecida: String(data.scores.desconhecida || 0),
        quiz_score_emergente: String(data.scores.emergente || 0),
        quiz_score_estabelecida: String(data.scores.estabelecida || 0),
      };
    }

    // Chamar API MailerLite v2
    const response = await fetch(`${MAILERLITE_API_BASE}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(subscriberData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("MailerLite API Error:", responseData);

      // Se o contato já existe, tentar atualizar
      if (response.status === 409 || responseData.message?.includes("already exists")) {
        return await updateExistingSubscriber(data.email, data.profile, groupId);
      }

      throw new Error(
        responseData.message || `MailerLite API Error: ${response.status}`
      );
    }

    return {
      success: true,
      message: `Contato adicionado ao grupo ${data.profile} com sucesso`,
      subscriberId: responseData.id,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Erro ao enviar quiz para MailerLite:", errorMessage);

    return {
      success: false,
      message: "Erro ao salvar dados do quiz",
      error: errorMessage,
    };
  }
}

/**
 * Atualiza um contato existente no MailerLite
 */
async function updateExistingSubscriber(
  email: string,
  profile: string,
  groupId: string
): Promise<{
  success: boolean;
  message: string;
  subscriberId?: string;
  error?: string;
}> {
  try {
    if (!API_KEY) {
      throw new Error("MAILERLITE_API_KEY não configurada");
    }

    // Primeiro, obter o ID do contato
    const getResponse = await fetch(
      `${MAILERLITE_API_BASE}/subscribers?filter[email]=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const subscribers = await getResponse.json();

    if (!subscribers.data || subscribers.data.length === 0) {
      throw new Error("Contato não encontrado");
    }

    const subscriberId = subscribers.data[0].id;

    // Atualizar contato com novo grupo
    const updateData = {
      fields: {
        quiz_profile: profile,
        quiz_completed_at: new Date().toISOString(),
      },
      groups: [groupId],
    };

    const updateResponse = await fetch(
      `${MAILERLITE_API_BASE}/subscribers/${subscriberId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(updateData),
      }
    );

    if (!updateResponse.ok) {
      throw new Error(`Erro ao atualizar contato: ${updateResponse.status}`);
    }

    return {
      success: true,
      message: `Contato atualizado no grupo ${profile}`,
      subscriberId,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Erro ao atualizar contato:", errorMessage);

    return {
      success: false,
      message: "Erro ao atualizar contato",
      error: errorMessage,
    };
  }
}

/**
 * Testa a conexão com MailerLite
 */
export async function testMailerLiteConnection(): Promise<{
  connected: boolean;
  message: string;
  error?: string;
}> {
  try {
    if (!API_KEY) {
      return {
        connected: false,
        message: "API Key não configurada",
        error: "MAILERLITE_API_KEY ausente no .env.local",
      };
    }

    const response = await fetch(`${MAILERLITE_API_BASE}/me`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    if (!response.ok) {
      return {
        connected: false,
        message: "Falha na autenticação MailerLite",
        error: `HTTP ${response.status}`,
      };
    }

    return {
      connected: true,
      message: "Conectado ao MailerLite com sucesso",
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      connected: false,
      message: "Erro ao testar conexão",
      error: errorMessage,
    };
  }
}
