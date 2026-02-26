# MailerLite Integração — Cheat Sheet

## 🚀 Teste Rápido

```bash
# 1. Validar setup
cd projeto\ MAR/metodo-mar
node scripts/test-mailerlite.js

# 2. Iniciar servidor
npm run dev

# 3. Acessar http://localhost:3000/quiz
# 4. Completar quiz
# 5. Preencher nome + email em /resultado
# 6. Enviar para MailerLite
```

## 📊 Mapeamento Perfis → Grupos

```javascript
{
  "invisivel": "180420798593369672",
  "desconhecida": "180420814244415166",
  "emergente": "180420827910506018",
  "estabelecida": "180420839360955831"
}
```

## 🔑 Variáveis de Ambiente

Arquivo: `.env.local`

```bash
MAILERLITE_API_KEY=eyJ0eXAi...
MAILERLITE_GROUP_INVISIVEL=180420798593369672
MAILERLITE_GROUP_DESCONHECIDA=180420814244415166
MAILERLITE_GROUP_EMERGENTE=180420827910506018
MAILERLITE_GROUP_ESTABELECIDA=180420839360955831
```

## 📡 Endpoints API

### POST /api/quiz-result
Enviar dados do quiz

```bash
curl -X POST http://localhost:3000/api/quiz-result \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@example.com",
    "name": "João Silva",
    "profile": "invisivel",
    "scores": {
      "invisivel": 18,
      "desconhecida": 5,
      "emergente": 2,
      "estabelecida": 0
    }
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Contato adicionado ao grupo invisivel com sucesso",
  "subscriberId": "12345678"
}
```

### GET /api/quiz-result?action=health
Testar conexão

```bash
curl http://localhost:3000/api/quiz-result?action=health
```

**Response:**
```json
{
  "connected": true,
  "message": "Conectado ao MailerLite com sucesso"
}
```

## 💾 Dados Salvos no MailerLite

```json
{
  "email": "usuario@example.com",
  "fields": {
    "name": "João Silva",
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

## 🔧 Solução de Problemas

| Problema | Solução |
|----------|---------|
| API Key inválida | Verificar `.env.local` e copiar chave exata do MailerLite |
| Contato não criado | Checar se email é válido e grupo ID existe |
| Erro 409 (duplicado) | Sistema atualiza contato automaticamente |
| Erro de conexão | Verificar internet e acesso a `api.mailerlite.com` |

## 📁 Arquivos Criados

```
metodo-mar/
├── .env.local ← Credenciais (⚠️ NUNCA COMMITAR)
├── MAILERLITE-SETUP.md ← Documentação completa
├── MAILERLITE-CHEATSHEET.md ← Este arquivo
├── src/
│   ├── lib/
│   │   └── mailerlite-integration.ts ← Utilitário
│   ├── app/
│   │   ├── api/
│   │   │   └── quiz-result/
│   │   │       └── route.ts ← API endpoint
│   │   └── resultado/
│   │       └── page.tsx ← Página atualizada
│   └── ...
├── scripts/
│   └── test-mailerlite.js ← Script de teste
└── ...
```

## 🧪 Casos de Teste

### Teste 1: Novo contato
1. Email novo, nome preenchido
2. Esperado: Criado em MailerLite + adicionado ao grupo

### Teste 2: Contato duplicado
1. Mesmo email, 2ª vez
2. Esperado: Atualizado (não duplicado)

### Teste 3: Email inválido
1. Email vazio ou formato errado
2. Esperado: Erro exibido na página

### Teste 4: Perfil correto
1. Completar quiz, verificar perfil exibido
2. Verificar em MailerLite se foi adicionado ao grupo correto

## 🔗 Links Úteis

- MailerLite Dashboard: https://app.mailerlite.com
- MailerLite API Docs: https://developers.mailerlite.com
- Projeto: http://localhost:3000/quiz

## 📝 Próximos Passos

### Curto prazo (essa semana)
- [ ] Testar integração completa
- [ ] Criar automações MailerLite por grupo
- [ ] Testar email sequences

### Médio prazo (próximo mês)
- [ ] Integrar Hotmart para rastreamento
- [ ] Analytics de conversão
- [ ] Otimizar copy por perfil

### Longo prazo
- [ ] IA gerando emails personalizados
- [ ] Lead scoring automático
- [ ] Recomendações de produto por perfil

---

**Última atualização:** 2026-02-25
