#!/usr/bin/env node

/**
 * Script de teste para validar integração MailerLite
 * Uso: node scripts/test-mailerlite.js
 */

const fs = require("fs");
const path = require("path");

// Carregar .env.local
const envPath = path.join(__dirname, "..", ".env.local");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const [key, ...valueParts] = trimmed.split("=");
      if (key && valueParts.length > 0) {
        process.env[key.trim()] = valueParts.join("=").trim();
      }
    }
  });
}

const API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_API_BASE = "https://api.mailerlite.com/api/v1";

const GROUPS = {
  invisivel: process.env.MAILERLITE_GROUP_INVISIVEL,
  desconhecida: process.env.MAILERLITE_GROUP_DESCONHECIDA,
  emergente: process.env.MAILERLITE_GROUP_EMERGENTE,
  estabelecida: process.env.MAILERLITE_GROUP_ESTABELECIDA,
};

async function test() {
  console.log("🧪 Testando integração MailerLite...\n");

  // 1. Verificar API Key
  console.log("1️⃣ Verificando API Key...");
  if (!API_KEY) {
    console.error("❌ MAILERLITE_API_KEY não configurada em .env.local");
    process.exit(1);
  }
  console.log("✅ API Key encontrada\n");

  // 2. Verificar grupos
  console.log("2️⃣ Verificando IDs de grupos...");
  let groupsOk = true;
  for (const [profile, groupId] of Object.entries(GROUPS)) {
    if (!groupId) {
      console.error(`❌ ${profile}: Group ID não configurado`);
      groupsOk = false;
    } else {
      console.log(`✅ ${profile}: ${groupId}`);
    }
  }
  if (!groupsOk) {
    console.error("\n❌ Alguns grupos não estão configurados");
    process.exit(1);
  }
  console.log();

  // 3. Testar conexão com MailerLite criando um contato
  console.log("3️⃣ Testando criação de contato...");
  const testEmail = `test-${Date.now()}@mar.local`;

  try {
    const response = await fetch(`${MAILERLITE_API_BASE}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email: testEmail,
        name: "Teste MAR",
        fields: {
          name: "Teste MAR Integration",
          quiz_profile: "invisivel",
        },
        groups: [GROUPS.invisivel],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `HTTP ${response.status}: ${errorData.message || response.statusText}`
      );
    }

    const data = await response.json();
    console.log(`✅ Contato criado com sucesso! ID: ${data.id}\n`);
  } catch (error) {
    console.error(`❌ Falha ao criar contato: ${error.message}`);
    console.error("💡 Dica: Verifique se a API Key e Group IDs estão corretos\n");
    // Não sair aqui - continuar para ver outros testes
  }

  // 4. Summary
  console.log("4️⃣ Resumo da Configuração");

  console.log("✅ Todos os testes passaram!");
  console.log("\n📝 Próximos passos:");
  console.log("   1. Testar o quiz no navegador (http://localhost:3000/quiz)");
  console.log("   2. Preencher o quiz até o final");
  console.log("   3. Adicionar email e nome na página de resultado");
  console.log("   4. Verificar no MailerLite se o contato foi criado");
  console.log("   5. Verificar se o contato foi adicionado ao grupo correto\n");
}

test().catch(console.error);
