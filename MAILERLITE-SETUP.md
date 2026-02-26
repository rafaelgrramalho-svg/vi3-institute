# Integração MailerLite — Setup Completo

## Status ✅

**Data:** 2026-02-25
**Status:** ✅ IMPLEMENTADO E TESTÁVEL
**Autor:** @aios-master (Claude Code)

---

## O que foi implementado?

### 1. Arquivo de Credenciais `.env.local`
- ✅ API Key MailerLite configurada
- ✅ IDs dos 4 grupos mapeados para perfis do quiz

### 2. Utilitário de Integração `src/lib/mailerlite-integration.ts`
- ✅ Função `submitQuizToMailerLite()` - envia dados do quiz
- ✅ Função `updateExistingSubscriber()` - atualiza contatos existentes
- ✅ Função `testMailerLiteConnection()` - testa conexão com API
- ✅ Trata erros e contactos duplicados gracefully

### 3. API Route `src/app/api/quiz-result/route.ts`
- ✅ POST `/api/quiz-result` - recebe dados do quiz
- ✅ GET `/api/quiz-result?action=health` - testa conexão

### 4. Página de Resultado Atualizada `src/app/resultado/page.tsx`
- ✅ Exibe perfil do quiz com pontos fortes e áreas de atenção
- ✅ Integra com API para enviar dados
- ✅ Loading state durante envio
- ✅ Error handling com mensagens claras

### 5. Script de Teste `scripts/test-mailerlite.js`
- ✅ Valida API Key e IDs de grupos
- ✅ Testa conexão com MailerLite
- ✅ Cria contato de teste

---

## Mapeamento de Perfis → Grupos MailerLite

| Perfil | ID Grupo | Descrição |
|--------|----------|-----------|
| **Invisível** | 180420798593369672 | Competente invisível, corre atrás de clientes |
| **Desconhecida** | 180420814244415166 | Marca desconhecida, visto como commodity |
| **Emergente** | 180420827910506018 | Autoridade emergente, resultados inconsistentes |
| **Estabelecida** | 180420839360955831 | Autoridade estabelecida, quer escalar |

---

## Fluxo de Dados Completo

```
[Visitante acessa quiz]
        ↓
[Responde 7 perguntas]
        ↓
[Sistema calcula perfil]
        ↓
[Vai para /resultado]
        ↓
[Vê seu perfil + pontos fortes]
        ↓
[Preenche nome + email]
        ↓
[Clica "Enviar Meu Resultado"]
        ↓
[POST /api/quiz-result] ← Frontend
        ↓
[MailerLite API: criar/atualizar contato] ← Backend
        ↓
[Contato adicionado ao grupo correto]
        ↓
[Confirmação "Perfeito!"
```

---

## Como Testar?

### 1. Validar Setup Local

```bash
cd projeto\ MAR/metodo-mar
node scripts/test-mailerlite.js
```

**Esperado:**
```
✅ API Key encontrada
✅ Todos os IDs de grupos configurados
✅ Conectado! Account: rafaelgrramalho
✅ Contato criado: ID xxxxx
✅ Todos os testes passaram!
```

### 2. Testar no Navegador

1. Iniciar servidor: `npm run dev`
2. Acessar: http://localhost:3000/quiz
3. Responder as 7 perguntas
4. Ver resultado do quiz em `/resultado`
5. Preencher nome + email
6. Clicar "Enviar Meu Resultado"

### 3. Verificar no MailerLite

1. Acesse: https://app.mailerlite.com
2. Vá para "Subscribers"
3. Procure pelo email que acabou de enviar
4. Verifique se foi adicionado ao grupo correto

**Esperado:**
- ✅ Contato criado com nome
- ✅ Campo `quiz_profile` com valor do perfil
- ✅ Campo `quiz_completed_at` com data/hora
- ✅ Adicionado ao grupo (Groups)

---

## Dados Enviados para MailerLite

Cada contato recebe os seguintes dados:

```json
{
  "email": "usuario@exemplo.com",
  "fields": {
    "name": "João da Silva",
    "quiz_profile": "invisivel",
    "quiz_completed_at": "2026-02-25T15:30:00Z",
    "quiz_score_invisivel": "18",
    "quiz_score_desconhecida": "5",
    "quiz_score_emergente": "2",
    "quiz_score_estabelecida": "0"
  },
  "groups": ["180420798593369672"]
}
```

---

## Tratamento de Erros

### Contato Já Existe
Se o usuário faz o quiz 2 vezes com o mesmo email:
- ✅ Sistema detecta (`HTTP 409`)
- ✅ Atualiza dados existentes
- ✅ Muda grupo se perfil mudou

### API Key Inválida
- ❌ Teste falhará com erro claro
- 🔧 Verificar `.env.local`

### Grupo Não Encontrado
- ❌ Contato não será criado
- 🔧 Verificar IDs dos grupos no MailerLite

### Conexão Falhando
- ❌ Erro será exibido na página
- 🔧 Verificar internet / acesso a `api.mailerlite.com`

---

## Próximas Fases (Roadmap)

### Fase 1: Automações MailerLite (Próxima)
- [ ] Criar sequência de email automática por perfil
- [ ] Email 1 (immediate): Confirmação + seu resultado
- [ ] Email 2 (day 1): Estratégias específicas para seu perfil
- [ ] Email 3 (day 3): Case study relevante
- [ ] Email 4 (day 7): CTA para ebook (R$ 29)
- [ ] Email 5 (day 14): CTA para curso (R$ 147)

### Fase 2: Integração com Hotmart (Future)
- [ ] Rastrear compras de ebook/curso
- [ ] Adicionar tags automáticas (`customer_low_ticket`, `customer_full_course`)
- [ ] Notificar Rafael de vendas

### Fase 3: Analytics (Future)
- [ ] Rastrear qual perfil converte melhor
- [ ] Tempo médio entre quiz e compra
- [ ] Taxa de abertura de emails por perfil

---

## Variáveis de Ambiente Necessárias

Todas já estão em `.env.local`:

```bash
# API Key (Bearer Token)
MAILERLITE_API_KEY=eyJ0eXAi...

# IDs dos grupos
MAILERLITE_GROUP_INVISIVEL=180420798593369672
MAILERLITE_GROUP_DESCONHECIDA=180420814244415166
MAILERLITE_GROUP_EMERGENTE=180420827910506018
MAILERLITE_GROUP_ESTABELECIDA=180420839360955831
```

---

## Código de Referência Rápida

### Enviar dados do quiz (Frontend)
```typescript
const response = await fetch("/api/quiz-result", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "user@example.com",
    name: "User Name",
    profile: "invisivel", // invisivel | desconhecida | emergente | estabelecida
    scores: { invisivel: 18, desconhecida: 5, emergente: 2, estabelecida: 0 },
  }),
});
```

### Testar conexão (Frontend)
```typescript
const health = await fetch("/api/quiz-result?action=health");
const result = await health.json();
console.log(result.connected); // true/false
```

---

## Suporte & Troubleshooting

### Pergunta: Como adicionar campos customizados?

**Resposta:** No MailerLite, vá para "Fields" em "Subscribers" e crie os campos. Depois use no código:

```typescript
fields: {
  name: "...",
  seu_campo_custom: "valor",
}
```

### Pergunta: Como adicionar contato a múltiplos grupos?

**Resposta:** Passe array de IDs:

```typescript
groups: [groupId1, groupId2, groupId3]
```

### Pergunta: Como automizar emails por perfil?

**Resposta:** Use "Automations" no MailerLite com trigger `subscriber_enters_group`.

---

## Logs & Debug

### Ver logs da integração
```bash
# Terminal com npm run dev ativo
# Procure por "MailerLite"
```

### Ativar modo debug no frontend
```typescript
// Em src/app/resultado/page.tsx
console.log("submitData:", submissionData);
console.log("apiResponse:", data);
```

---

## Checklist de Lançamento

- [ ] Validar integração com `node scripts/test-mailerlite.js`
- [ ] Testar quiz completo (7 perguntas)
- [ ] Verificar contato criado no MailerLite
- [ ] Testar 2ª vez com mesmo email (deve atualizar)
- [ ] Testar com email inválido (deve mostrar erro)
- [ ] Testar sem internet (deve mostrar erro)
- [ ] Verificar todos os 4 grupos têm contatos
- [ ] Criar automações de email por grupo
- [ ] Deploy no domínio real

---

**Feito com ❤️ por @aios-master**
**Data:** 2026-02-25 | **Versão:** 1.0
