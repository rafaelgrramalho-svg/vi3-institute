# MailerLite — Implementação Passo-a-Passo das Automações

## 🎬 Visão Geral do Que Você Vai Fazer

```
1. Logar em MailerLite
2. Criar 4 automações (uma por grupo)
3. Copiar/colar emails persuasivos
4. Testar
5. Ativar
6. Ganhar dinheiro 💰
```

---

## 📋 PASSO 1: Preparar os Emails

### 1.1 Abra Este Arquivo
Arquivo: `EMAILS-COPY-READY.md` (no mesmo diretório)

### 1.2 Copie o Primeiro Email (INVISÍVEL)
- Subject: Escolha uma das 4 opções
- Body HTML: Copie TODO o conteúdo HTML
- Link: Substitua `{{link_curso_mar}}` por: `https://pay.hotmart.com/F104338791L`

### 1.3 Salve em Notepad (opcional)
Para ter à mão enquanto cola no MailerLite:
```
Subject: {{subscriber.name}}, descobrimos por que você está invisível no mercado
Body: [copiar HTML inteiro]
Link: https://pay.hotmart.com/F104338791L
```

---

## 🚀 PASSO 2: Primeira Automação (INVISÍVEL)

### 2.1 Abra MailerLite
https://app.mailerlite.com

### 2.2 Navegue para Automations
```
Menu Esquerdo → Automations → Create Automation
```

### 2.3 Configure o Trigger
```
✓ "Subscriber enters a group"
✓ Selecione: "MAR-Invisivel"
✓ Click "Continue"
```

### 2.4 Configure o Email
```
✓ Click "Add Action" → "Send Email"
```

### 2.5 Preenchendo o Email

#### Subject Line
Copie uma das opções do EMAILS-COPY-READY.md:
```
{{subscriber.name}}, descobrimos por que você está invisível no mercado
```

#### Body (Conteúdo)
1. Click no campo de "Email content"
2. Clique em "Code" (canto superior direito)
3. **Apague tudo** que estiver lá
4. Cole o **HTML inteiro** do Email 1 (Invisível)
5. Substitua `{{link_curso_mar}}` por: `https://pay.hotmart.com/F104338791L`

Dica: Use Ctrl+H (Find/Replace) para facilitar:
```
Find: {{link_curso_mar}}
Replace with: https://pay.hotmart.com/F104338791L
```

### 2.6 Teste o Email
```
✓ Clique "Preview" (globo no canto superior)
✓ Verifique formatação
✓ Clique em links para confirmar que vão para Hotmart
```

### 2.7 Nomeie a Automação
```
Name: "Diagnóstico - Invisível"
```

### 2.8 Ative
```
✓ Clique "Activate automation" (canto superior direito)
```

**Parabéns! Primeira automação ativada! 🎉**

---

## 🔁 PASSO 3: Segunda Automação (DESCONHECIDA)

### 3.1 Novo Trigger
```
Menu Esquerdo → Automations → Create Automation
✓ "Subscriber enters a group"
✓ Selecione: "MAR-Desconhecida"
✓ Click "Continue"
```

### 3.2 Email
```
✓ Click "Add Action" → "Send Email"
```

### 3.3 Preencher
- **Subject:** Copie do arquivo EMAILS-COPY-READY.md (seção EMAIL 2)
- **Body:** Copie HTML inteiro do Email 2
- **Substituir:** `{{link_curso_mar}}` → Link do Hotmart
- **Name:** "Diagnóstico - Desconhecida"

### 3.4 Ativar
```
✓ Preview
✓ Teste links
✓ Activate automation
```

---

## 🔁 PASSO 4: Terceira Automação (EMERGENTE)

Repita o mesmo processo:
- **Trigger:** MAR-Emergente
- **Subject:** Email 3 do arquivo
- **Body:** HTML do Email 3
- **Name:** "Diagnóstico - Emergente"

---

## 🔁 PASSO 5: Quarta Automação (ESTABELECIDA)

Repita o mesmo processo:
- **Trigger:** MAR-Estabelecida
- **Subject:** Email 4 do arquivo
- **Body:** HTML do Email 4
- **Name:** "Diagnóstico - Estabelecida"

---

## ✅ Checklist de Cada Automação

Para CADA uma das 4 automações, confirme:

- [ ] Trigger correto (grupo certo)
- [ ] Subject preenchido
- [ ] HTML body copiado
- [ ] Link do Hotmart substituído
- [ ] Formatação verificada no Preview
- [ ] Links testados (clicaram e foram pra Hotmart)
- [ ] Nome descritivo ("Diagnóstico - [Perfil]")
- [ ] Automação ativada

---

## 🧪 TESTE PRÁTICO (Opcional mas Recomendado)

### Opção 1: Usar Seu Email
1. Vá para `/quiz` do seu site local (http://localhost:3000/quiz)
2. Responda as 7 perguntas (escolha respostas para "Invisível")
3. Preencha seu email + nome na página de resultado
4. Envie
5. Verifique seu email — o email de diagnóstico deve chegar

### Opção 2: Teste Direto no MailerLite
1. Automations → Selecione "Diagnóstico - Invisível"
2. Clique "Test"
3. Preencha seu email
4. Click "Send test"
5. Verifique seu email

---

## 📊 Monitorar Performance

### Aonde Ficam as Métricas?
```
MailerLite → Automations → Clique na automação
→ Abaixo vai ter: Opens, Clicks, Conversions
```

### Métricas Importantes
```
Taxa de Abertura (target: 35-45%)
Taxa de Clique (target: 10-20%)
Taxa de Conversão (target: 5-15%)
```

### Otimizar
```
Se abertura baixa → Testar novo subject
Se clique baixo → Revisar copy do email
Se conversão baixa → Verificar se link está funcionando
```

---

## 🚨 Troubleshooting

### Problema: Email não chega
**Solução:**
1. Verificar spam
2. Conferir se trigger está ativado
3. Verificar se o group ID está certo

### Problema: Formatação ruim
**Solução:**
1. Copiar novamente o HTML
2. Colar em um editor de texto primeiro (remover formatação)
3. Depois colar no MailerLite

### Problema: Link não funciona
**Solução:**
1. Testar o link no navegador
2. Confirmar que tem `https://`
3. Confirmar que é o link certo do Hotmart

### Problema: Múltiplos emails chegando
**Solução:**
1. Você pode ter ativado a automação 2x
2. Vá em Automations, delete as duplicatas
3. Deixe apenas 1 ativa

---

## 💡 Dicas Pro

### Dica 1: Schedule Smarter
MailerLite permite agendar envios. Se preferir:
```
Em vez de "enviar imediatamente"
Configure: "Enviar em 5 minutos depois que entra no grupo"
(Pra dar tempo de o pessoa ver o resultado do quiz)
```

### Dica 2: Adicionar P.S. Dinâmico
Se quiser oferecer mentoria (R$ 499):
```
Adicione ao final do email:

"P.P.S. — Quer uma orientação 1-on-1?
[AGENDAR SESSÃO ESTRATÉGICA]"

Link: seu_link_de_agendamento_aqui
```

### Dica 3: A/B Testing
MailerLite permite testar 2 subjects:
```
Automations → Sua automação → Clique no email
→ "A/B Test" → Adicione variant
```

Deixa rodar por 24h e vence o que performar melhor.

### Dica 4: Follow-up Email
Você pode criar 2ª automação que dispara 3 dias depois:
```
1º Email: Diagnóstico (imediato)
2º Email: Lembrete + urgência (3 dias depois)
```

Mas comece com 1 email primeiro, monitore, depois expanda.

---

## 📞 Suporte

### Dúvidas sobre MailerLite?
- Docs oficial: https://docs.mailerlite.com
- Chat ao vivo em app.mailerlite.com (canto inferior direito)

### Dúvidas sobre o Texto?
- Arquivo: `EMAIL-AUTOMATIONS-SETUP.md` (documentação completa)
- Arquivo: `EMAILS-COPY-READY.md` (copy para copiar/colar)

---

## ⏱️ Tempo Estimado

```
Primeira automação: 10-15 min
Automações 2, 3, 4: 5 min cada (total: 15 min)

TOTAL: ~25-30 minutos

Depois é só ativar e ganhar dinheiro 💰
```

---

## 🎬 Próximo Passo

### Quando Tiver 4 Automações Ativas:

1. **Testar Quiz Completo**
   - Ir em `/quiz`
   - Completar 7 perguntas
   - Ver resultado
   - Preencher email + nome
   - Enviar
   - Verificar email

2. **Monitorar por 1 Semana**
   - Quantas pessoas fizeram quiz
   - Quantas abriram email
   - Quantas clicaram no link
   - Quantas compraram

3. **Otimizar**
   - Se muita gente não abre → testar novo subject
   - Se abre mas não clica → revisar copy
   - Se clica mas não compra → revisar landing page do Hotmart

---

## 📝 Template Para Anotar

Quando implementar, anote aqui:

```
AUTOMAÇÃO 1 - INVISÍVEL
✓ Ativada em: ___/___/___
✓ Subject escolhido: ______________________
✓ Link verificado: [SIM / NÃO]

AUTOMAÇÃO 2 - DESCONHECIDA
✓ Ativada em: ___/___/___
✓ Subject escolhido: ______________________
✓ Link verificado: [SIM / NÃO]

AUTOMAÇÃO 3 - EMERGENTE
✓ Ativada em: ___/___/___
✓ Subject escolhido: ______________________
✓ Link verificado: [SIM / NÃO]

AUTOMAÇÃO 4 - ESTABELECIDA
✓ Ativada em: ___/___/___
✓ Subject escolhido: ______________________
✓ Link verificado: [SIM / NÃO]
```

---

**Você consegue! Qualquer dúvida, consulte os arquivos de referência. 🚀**

Feito com ❤️ para Rafael Rocha e Instituto V.I.3
