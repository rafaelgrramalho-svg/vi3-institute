import Link from "next/link";
import Image from "next/image";
import { SITE, LOW_TICKET, LINKS } from "@/lib/constants";

export default function LowTicketPage() {
  return (
    <main className="min-h-screen bg-white text-navy-900">
      {/* Hero — Com capa do livro */}
      <section className="bg-navy-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-400">
            Rafael Rocha apresenta:
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl text-center text-3xl font-extrabold leading-tight md:text-5xl">
            Preste serviço como um especialista e{" "}
            <span className="text-gold-400">cobre mais em 90 dias</span>,
            sem perder clientes!
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-navy-300">
            Ser uma autoridade reconhecida é a chave para aumentar em 68% as vendas
            e só é alcançável através do Método M.A.R.
          </p>

          {/* Capa do livro — FOTO 17 */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-64 md:w-80">
              <Image
                src="/images/foto-17-capa-livro.webp"
                alt="Capa do Ebook Método da Autoridade Reconhecida"
                width={320}
                height={453}
                className="rounded-lg shadow-2xl shadow-gold-500/20"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dor — Identificação com a persona */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            Você se reconhece aqui?
          </h2>
          <ul className="mt-6 space-y-4 text-lg">
            {[
              "Trabalha muito, entrega excelência, mas ganha menos do que deveria",
              "Clientes sempre comparam seu preço com concorrentes mais baratos",
              "Manda propostas e a maioria ignora ou pede desconto",
              "É invisível no mercado — ninguém te procura, você corre atrás",
              "Sente vergonha de dizer quanto cobra, porque sabe que é menos do que vale",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 text-danger">&#10007;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-medium text-navy-700">
            O problema não é sua competência.{" "}
            <strong>É que você ainda não tem o SISTEMA certo para ser reconhecido.</strong>
          </p>
        </div>
      </section>

      {/* Novo Mecanismo — Os 3 Pilares */}
      <section className="bg-navy-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-600">
            A descoberta
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold md:text-3xl">
            Neste ebook você vai descobrir o{" "}
            <span className="text-gold-600">Método M.A.R.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-navy-600">
            O sistema científico de 3 pilares que transforma profissionais
            invisíveis em autoridades reconhecidas — sem precisar viralizar,
            sem milhares de seguidores e sem gastar fortunas em marketing.
          </p>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-navy-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <span className="text-xl">🎯</span> Pilar 1: O Mapa do Tesouro (Diagnóstico)
              </h3>
              <p className="mt-2 text-navy-600">
                Ir além da superfície, oferecendo um entendimento profundo do problema
                do cliente e um plano claro para a solução com técnicas de vendas como
                Spin Selling.
              </p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <span className="text-xl">⚡</span> Pilar 2: A Receita Exclusiva (Personalização)
              </h3>
              <p className="mt-2 text-navy-600">
                Criar soluções sob medida, que se encaixam perfeitamente nas necessidades
                e desejos individuais do cliente, conforme ensinamentos de Clayton
                Christensen.
              </p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <span className="text-xl">🚀</span> Pilar 3: A Metamorfose Espelhada (Prova)
              </h3>
              <p className="mt-2 text-navy-600">
                Construir uma base inabalável de credibilidade e confiança, de acordo
                com Robert Cialdini, mostrando ao cliente que a transformação é real
                e alcançável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            O que você receberá no livro
          </h2>

          <div className="mt-8 space-y-4">
            {/* Item Principal — Ebook */}
            <div className="rounded-xl border-2 border-gold-400 bg-gold-50 p-6">
              <div>
                <p className="text-sm font-bold text-gold-600">ITEM PRINCIPAL</p>
                <h3 className="mt-1 text-xl font-bold">{LOW_TICKET.ebookName}</h3>
              </div>
              <ul className="mt-4 space-y-3 text-navy-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-success">&#10003;</span>
                  <div>
                    <strong>Pilar 1 — O Mapa do Tesouro:</strong> Técnicas de diagnóstico
                    baseadas em SPIN Selling para entender profundamente o cliente
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-success">&#10003;</span>
                  <div>
                    <strong>Pilar 2 — A Receita Exclusiva:</strong> Framework de
                    personalização de Clayton Christensen para criar soluções incomparáveis
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-success">&#10003;</span>
                  <div>
                    <strong>Pilar 3 — A Metamorfose Espelhada:</strong> Sistema de prova
                    social de Robert Cialdini para construir credibilidade inabalável
                  </div>
                </li>
              </ul>
            </div>

            {/* Bônus — Planilha */}
            <div className="rounded-xl border border-gold-200 bg-gold-50 p-6">
              <div>
                <p className="text-sm font-bold text-gold-600">BÔNUS</p>
                <h3 className="mt-1 text-xl font-bold">{LOW_TICKET.spreadsheetName}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-navy-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-success">&#10003;</span>
                  Controle completo de leads e clientes
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-success">&#10003;</span>
                  Pipeline de vendas visual e intuitivo
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-success">&#10003;</span>
                  Dashboard de resultados do Método M.A.R.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social — Cases reais com fotos */}
      <section className="bg-navy-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Profissionais que aplicaram o método
          </h2>
          <div className="mt-8 space-y-6">
            {/* Laura Cardoso */}
            <div className="flex flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-sm md:flex-row">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/foto-14-laura.webp"
                  alt="Laura Cardoso — Paisagista"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg font-bold">Laura Cardoso</p>
                <p className="text-sm text-gold-600">Paisagista</p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <div className="rounded-lg bg-navy-50 px-4 py-2 text-center">
                    <p className="text-xs font-semibold text-navy-400">ANTES</p>
                    <p className="text-sm font-bold text-navy-700">R$ 4.500/mês | 50h/semana</p>
                  </div>
                  <span className="hidden text-2xl text-gold-500 sm:block">→</span>
                  <div className="rounded-lg bg-success/10 px-4 py-2 text-center">
                    <p className="text-xs font-semibold text-success">DEPOIS</p>
                    <p className="text-sm font-bold text-success">R$ 6.500/mês | 35h/semana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* João Honório */}
            <div className="flex flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-sm md:flex-row">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/foto-15-joao.webp"
                  alt="João Honório — Corretor de Imóveis"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg font-bold">João Honório</p>
                <p className="text-sm text-gold-600">Corretor de Imóveis</p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <div className="rounded-lg bg-navy-50 px-4 py-2 text-center">
                    <p className="text-xs font-semibold text-navy-400">ANTES</p>
                    <p className="text-sm font-bold text-navy-700">R$ 5.400/mês | 1-2 vendas</p>
                  </div>
                  <span className="hidden text-2xl text-gold-500 sm:block">→</span>
                  <div className="rounded-lg bg-success/10 px-4 py-2 text-center">
                    <p className="text-xs font-semibold text-success">DEPOIS</p>
                    <p className="text-sm font-bold text-success">R$ 13.600/mês | 2-6 vendas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ana Costa */}
            <div className="flex flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-sm md:flex-row">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/foto-16-ana.webp"
                  alt="Ana Costa — Psicóloga Clínica"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg font-bold">Ana Costa</p>
                <p className="text-sm text-gold-600">Psicóloga Clínica</p>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <div className="rounded-lg bg-navy-50 px-4 py-2 text-center">
                    <p className="text-xs font-semibold text-navy-400">ANTES</p>
                    <p className="text-sm font-bold text-navy-700">R$ 3.000/mês | Agenda lotada</p>
                  </div>
                  <span className="hidden text-2xl text-gold-500 sm:block">→</span>
                  <div className="rounded-lg bg-success/10 px-4 py-2 text-center">
                    <p className="text-xs font-semibold text-success">DEPOIS</p>
                    <p className="text-sm font-bold text-success">R$ 7.600/mês | Agenda equilibrada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faça as contas — Valores realísticos */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Faça as contas
          </h2>
          <div className="mt-6 rounded-xl bg-navy-950 p-8 text-white">
            <p className="text-navy-300">
              Se você cobra R$ 500 por projeto e poderia cobrar R$ 1.100 como autoridade...
            </p>
            <p className="mt-4 text-3xl font-extrabold text-gold-400">
              Você está deixando R$ 600 na mesa por projeto
            </p>
            <p className="mt-4 text-navy-300">
              5 projetos/mês = <strong className="text-white">R$ 3.000 perdidos por mês</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Quem Sou Eu — Rafael Rocha */}
      <section className="bg-navy-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-4 border-gold-400">
              <Image
                src="/images/foto-01-rafael.webp"
                alt="Rafael Rocha — Criador do Método M.A.R."
                width={160}
                height={160}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
                Quem Sou Eu
              </p>
              <h2 className="mt-2 text-2xl font-extrabold">Rafael Rocha</h2>
              <p className="mt-1 text-sm font-medium text-gold-600">
                Estrategista e Criador do Método M.A.R.
              </p>
              <p className="mt-4 text-navy-600 leading-relaxed">
                Com sólida formação em Direito e Contabilidade. Ao longo de 15 anos
                atuando em ambientes de alto rigor técnico e análise de conformidade,
                Rafael desenvolveu uma habilidade única: identificar por que profissionais
                extremamente competentes falham em comunicar seu real valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia — SEM preço e SEM botão */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full bg-success/10 px-4 py-2 text-sm font-bold text-success">
            GARANTIA INCONDICIONAL
          </div>
          <h2 className="mt-4 text-2xl font-bold md:text-3xl">
            {LOW_TICKET.guarantee} dias para testar sem risco
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Baixe o ebook, leia, aplique. Se não fizer sentido para você,
            devolvo 100% do investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold">Perguntas Frequentes</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "Funciona no meu nicho?",
                a: "Sim. O Método M.A.R. é baseado em ciência comportamental universal — SPIN Selling, Jobs To Be Done e Cialdini funcionam em qualquer área onde você vende serviço ou expertise. Designers, consultores, coaches, advogados, contadores, psicólogos... todos aplicam.",
              },
              {
                q: "É só um ebook? Vou conseguir aplicar?",
                a: "Não é só um ebook. É um guia prático com exercícios, scripts prontos e a planilha de controle. Você aplica conforme lê. E se quiser ir mais fundo, temos o curso completo do Método M.A.R.",
              },
              {
                q: "Já sou experiente, isso serve para mim?",
                a: "Principalmente para você. O M.A.R. não ensina sua profissão — ensina como ser RECONHECIDO por ela. Quanto mais experiência você tem, maior o gap entre competência e reconhecimento.",
              },
              {
                q: "Qual a diferença do ebook para o curso completo?",
                a: "O ebook apresenta o sistema e os fundamentos com exercícios práticos. O curso completo tem 24 videoaulas, workbook de 21 exercícios, scripts prontos, grupo privado e consultoria individual.",
              },
              {
                q: "E se eu não gostar?",
                a: `Garantia de ${LOW_TICKET.guarantee} dias. Se não fizer sentido, devolvo 100%. Sem perguntas.`,
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg bg-white p-6">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-2 text-navy-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final — Único botão de compra */}
      <section className="bg-navy-950 px-6 py-14 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold md:text-3xl">
            Está pronto para se tornar uma autoridade reconhecida?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            O Método M.A.R. é o sistema que faltava para você sair do anonimato
            e cobrar o que realmente vale seu trabalho.
          </p>

          <div className="mt-8 rounded-xl border border-navy-700 bg-navy-900 p-6">
            <p className="mt-2 text-4xl font-extrabold text-gold-400">
              {LOW_TICKET.priceFormatted}
            </p>
          </div>

          <a
            href={LOW_TICKET.checkoutUrl}
            className="animate-pulse-gold mt-8 inline-block w-full max-w-md rounded-lg bg-gold-500 px-8 py-5 text-xl font-bold text-navy-950 transition hover:bg-gold-400"
          >
            QUERO O EBOOK + PLANILHA
          </a>
          <p className="mt-4 text-sm text-navy-400">
            Pagamento seguro via Hotmart. Acesso imediato após confirmação.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-200 px-6 py-8 text-center text-sm text-navy-400">
        <p>&copy; {new Date().getFullYear()} {SITE.institute}. Todos os direitos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/termos" className="hover:text-navy-900">Termos de Uso</Link>
          <Link href="/privacidade" className="hover:text-navy-900">Política de Privacidade</Link>
          <Link href="/suporte" className="hover:text-navy-900">Suporte</Link>
        </div>
      </footer>
    </main>
  );
}
