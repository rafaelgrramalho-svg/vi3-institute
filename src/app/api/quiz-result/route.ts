import { NextRequest, NextResponse } from "next/server";
import { submitQuizToMailerLite, QuizSubmissionData } from "@/lib/mailerlite-integration";

/**
 * POST /api/quiz-result
 * Recebe dados do quiz e envia para MailerLite
 *
 * Body:
 * {
 *   email: string (obrigatório)
 *   name?: string
 *   profile: "invisivel" | "desconhecida" | "emergente" | "estabelecida"
 *   answers?: number[]
 *   scores?: { invisivel: number, desconhecida: number, emergente: number, estabelecida: number }
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar dados obrigatórios
    if (!body.email || !body.profile) {
      return NextResponse.json(
        {
          success: false,
          error: "Email e perfil são obrigatórios",
        },
        { status: 400 }
      );
    }

    // Preparar dados para MailerLite
    const submissionData: QuizSubmissionData = {
      email: body.email.toLowerCase().trim(),
      name: body.name?.trim(),
      profile: body.profile,
      answers: body.answers,
      scores: body.scores,
    };

    // Enviar para MailerLite
    const result = await submitQuizToMailerLite(submissionData);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || result.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: result.message,
        subscriberId: result.subscriberId,
      },
      { status: 201 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Erro em POST /api/quiz-result:", errorMessage);

    return NextResponse.json(
      {
        success: false,
        error: "Erro ao processar resultado do quiz",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/quiz-result/health
 * Verifica se MailerLite está conectado
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  if (action === "health") {
    const { testMailerLiteConnection } = await import("@/lib/mailerlite-integration");
    const testResult = await testMailerLiteConnection();

    return NextResponse.json(testResult);
  }

  return NextResponse.json(
    {
      error: "Ação não especificada. Use ?action=health",
    },
    { status: 400 }
  );
}
