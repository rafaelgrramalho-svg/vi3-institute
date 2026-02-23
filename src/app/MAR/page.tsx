"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE, PRODUCT, LOW_TICKET } from "@/lib/constants";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white text-navy-950">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-6 inline-block rounded-full bg-gold-500/20 px-4 py-2">
              <span className="text-sm font-semibold text-gold-400">🚀 Método Internacional Comprovado</span>
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Preste serviço como um especialista e{" "}
              <span className="text-gold-400">cobre mais em 90 dias</span>, sem perder clientes!
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-300 md:text-xl">
              Ser uma autoridade reconhecida é a chave para aumentar em{" "}
              <span className="font-bold text-gold-400">68%</span> as vendas e só é alcançável através do Método M.A.R.
            </p>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative">
              <Image
                src="/images/foto-01-rafael.webp"
                alt="Rafael Rocha - Criador do Método M.A.R."
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">Quem Sou Eu</p>
              <h2 className="mt-2 text-3xl font-extrabold">Rafael Rocha</h2>
              <p className="mt-1 text-lg font-medium text-gold-600">Estrategista e Criador do Método M.A.R.</p>
              <p className="mt-6 leading-relaxed text-navy-600">
                Com sólida formação em Direito e Contabilidade. Ao longo de 15 anos atuando em ambientes de alto rigor
                técnico e análise de conformidade, Rafael desenvolveu uma habilidade única: identificar por que
                profissionais extremamente competentes falham em comunicar seu real valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHT SECTION */}
      <section className="bg-white px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-lg text-navy-600">
            Para ser reconhecido como autoridade, não é preciso ter anos de experiência, nem certificações caras, nem
            aparecer na mídia ou ter milhares de seguidores
          </p>
        </div>
      </section>

      {/* TRANSFORMATIONS SECTION */}
      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Transformações Reais de Profissionais Como Você
          </h2>

          <div className="space-y-6">
            {[
              {
                name: "Laura Cardoso",
                role: "Paisagista",
                image: "/images/foto-14-laura.webp",
                before: "R$ 4.500/mês | 50h/semana",
                after: "R$ 6.500/mês | 35h/semana",
              },
              {
                name: "João Honório",
                role: "Corretor de Imóveis",
                image: "/images/foto-15-joao.webp",
                before: "R$ 5.400/mês | 1-2 vendas",
                after: "R$ 13.600/mês | 2-6 vendas",
              },
              {
                name: "Ana Costa",
                role: "Psicóloga Clínica",
                image: "/images/foto-16-ana.webp",
                before: "R$ 3.000/mês | Agenda lotada",
                after: "R$ 7.600/mês | Agenda equilibrada",
              },
            ].map((case_, i) => (
              <div key={i} className="flex flex-col gap-6 rounded-xl bg-white p-8 md:flex-row md:items-center">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={case_.image}
                    alt={case_.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-lg font-bold">{case_.name}</p>
                  <p className="text-sm text-gold-600">{case_.role}</p>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="rounded-lg bg-navy-50 px-4 py-2 text-center">
                      <p className="text-xs font-semibold text-navy-400">ANTES</p>
                      <p className="font-bold text-navy-700">{case_.before}</p>
                    </div>
                    <span className="hidden text-2xl text-gold-500 sm:block">→</span>
                    <div className="rounded-lg bg-success/10 px-4 py-2 text-center">
                      <p className="text-xs font-semibold text-success">DEPOIS</p>
                      <p className="font-bold text-success">{case_.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Você Já Tentou de Tudo, Mas Ainda...</h2>

          <div className="mt-12 space-y-4">
            {[
              {
                emoji: "😰",
                text: "Cobra muito barato e trabalha demais sem ver o retorno financeiro que merece?",
              },
              {
                emoji: "😓",
                text: "Tem medo de aumentar os preços e perder os clientes que já conquistou?",
              },
              {
                emoji: "😔",
                text: "Não sabe como justificar um preço premium sem parecer caro demais?",
              },
              {
                emoji: "😤",
                text: "Compete por preço com profissionais menos qualificados e se sente desvalorizado?",
              },
              {
                emoji: "😩",
                text: "Não tem um método claro para precificar seus serviços de forma estratégica?",
              },
            ].map((problem, i) => (
              <div key={i} className="flex gap-4 rounded-lg bg-navy-50 p-6">
                <span className="text-3xl">{problem.emoji}</span>
                <p className="text-lg text-navy-700">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="bg-navy-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            E Se Existisse Um Sistema Científico Para Multiplicar Seus Preços?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Apresentamos o Método M.A.R. - O único sistema baseado em ciência comportamental e dados reais de centenas
            profissionais
          </p>
          <p className="mt-6 text-2xl font-bold">Os 3 Pilares do Método M.A.R.</p>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🎯",
                title: "Pilar 1: O Mapa do Tesouro (Diagnóstico)",
                desc: "Ir além da superfície, oferecendo um entendimento profundo do problema do cliente e um plano claro para a solução com técnicas de vendas como Spin Selling.",
              },
              {
                icon: "⚡",
                title: "Pilar 2: A Receita Exclusiva (Personalização)",
                desc: "Criar soluções sob medida, que se encaixam perfeitamente nas necessidades e desejos individuais do cliente, conforme ensinamentos de Clayton Christensen.",
              },
              {
                icon: "🚀",
                title: "Pilar 3: A Metamorfose Espelhada (Prova)",
                desc: "Construir uma base inabalável de credibilidade e confiança, de acordo com Robert Cialdini, mostrando ao cliente que a transformação é real e alcançável.",
              },
            ].map((pilar, i) => (
              <div key={i} className="rounded-xl border border-navy-200 bg-navy-50 p-8">
                <p className="text-4xl">{pilar.icon}</p>
                <h3 className="mt-4 text-xl font-bold text-navy-900">{pilar.title}</h3>
                <p className="mt-3 text-navy-700">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section id="oferta" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">O Que Você Recebe no Método M.A.R.</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border-2 border-gold-400 bg-gold-50 p-8">
              <p className="text-3xl">📚</p>
              <h3 className="mt-4 text-xl font-bold">Curso Completo</h3>
              <p className="mt-2 text-navy-700">Aprenda e Aplique na Prática o Método</p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-8 shadow-sm">
              <p className="text-3xl">🎁</p>
              <h3 className="mt-4 text-xl font-bold">Bônus 1: Simulador de Vendas por I.A.</h3>
              <ul className="mt-4 space-y-2 text-navy-600">
                <li>✓ Aprenda a construir seu simulador</li>
                <li>✓ Treine a hora que quiser</li>
                <li>✓ Simulador de cenários</li>
                <li>✓ Seja o vendedor ou o cliente</li>
              </ul>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-8 shadow-sm">
              <p className="text-3xl">🎁</p>
              <h3 className="mt-4 text-xl font-bold">Bônus 2: Ebook M.A.R.</h3>
              <p className="mt-2 text-navy-600">Acesso ao material de referência completo</p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-8 shadow-sm">
              <p className="text-3xl">🎁</p>
              <h3 className="mt-4 text-xl font-bold">Bônus 3: Planilha de Controle de Clientes</h3>
              <p className="mt-2 text-navy-600">Ferramenta pronta para organizar e acompanhar seus clientes</p>
            </div>

            <div className="rounded-xl border border-navy-200 bg-white p-8 shadow-sm">
              <p className="text-3xl">🎁</p>
              <h3 className="mt-4 text-xl font-bold">Bônus 4: Templates de Arquétipos de Clientes</h3>
              <p className="mt-2 text-navy-600">Templates prontos para identificar e segmentar seus clientes ideais</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-12 text-center shadow-sm">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-4xl text-success">
            7
          </div>
          <h3 className="mt-6 text-2xl font-bold">Garantia de 7 dias</h3>
          <p className="mt-4 text-lg text-navy-600">
            Nós temos absoluta certeza que o Método M.A.R. vai aumentar a sua receita. Mas, se em até{" "}
            <strong>7 dias</strong> após a sua inscrição você não estiver satisfeito, por qualquer motivo, devolvemos
            100% do valor pago. Sem burocracia, sem perguntas.
          </p>
          <p className="mt-4 text-lg font-semibold text-gold-600">O risco é todo nosso. A transformação é toda sua.</p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {[
              {
                id: "faq-1",
                q: "Como sei que o Método M.A.R. funciona para meu nicho?",
                a: "O Método M.A.R. foi aplicado com sucesso em 47 nichos diferentes, incluindo consultores, coaches, designers, psicólogos, arquitetos, advogados e muitos outros. Os princípios são universais porque são baseados em psicologia comportamental e ciência de precificação.",
              },
              {
                id: "faq-2",
                q: "Quanto tempo leva para ver resultados?",
                a: "A maioria dos alunos implementa as primeiras mudanças no primeiro mês e vê os primeiros resultados em 30-60 dias. O método é desenhado para implementação progressiva e segura.",
              },
              {
                id: "faq-3",
                q: "E se eu perder clientes ao aumentar os preços?",
                a: "O Método M.A.R. inclui estratégias específicas de transição que minimizam a perda de clientes. Nossos dados mostram que 87% dos alunos mantêm ou aumentam sua base de clientes após aplicar o método.",
              },
              {
                id: "faq-4",
                q: "Preciso de conhecimento prévio em precificação?",
                a: "Não! O método é desenhado para profissionais de qualquer nível. Começamos do zero e avançamos passo a passo, com exemplos práticos e aplicáveis.",
              },
              {
                id: "faq-5",
                q: "Por quanto tempo tenho acesso ao conteúdo?",
                a: "Você tem acesso por um ano a todo o conteúdo, incluindo atualizações futuras.",
              },
              {
                id: "faq-6",
                q: "A garantia é real mesmo?",
                a: "Sim, 100% real. Você tem 7 dias para aplicar o método. Se não ficar satisfeito por qualquer motivo, basta enviar um email e devolvemos seu investimento integral. Sem perguntas, sem burocracia.",
              },
            ].map((faq) => (
              <div key={faq.id} className="border border-navy-200">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between bg-navy-50 px-6 py-4 font-semibold text-navy-900 hover:bg-navy-100"
                >
                  <span>{faq.q}</span>
                  <span className={`transform transition ${openFaq === faq.id ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === faq.id && <div className="bg-white px-6 py-4 text-navy-700">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL SECTION */}
      <section className="bg-gradient-to-b from-navy-950 to-navy-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Está Pronto Para Multiplicar Seus Resultados?</h2>
          <p className="mt-6 text-xl text-navy-300">
            Junte-se a 247+ profissionais que já transformaram sua precificação e seus resultados com o Método M.A.R.
          </p>

          <div className="mt-10 rounded-xl bg-navy-800 p-8">
            <p className="text-sm text-navy-400 line-through">De R$ 997,00</p>
            <p className="mt-4 text-4xl font-extrabold text-gold-400">{PRODUCT.installments}</p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:justify-center">
            <a
              href={PRODUCT.checkoutUrl}
              className="animate-pulse-gold rounded-lg bg-gold-500 px-8 py-5 text-xl font-bold text-navy-950 transition hover:bg-gold-400"
            >
              GARANTIR MINHA VAGA AGORA
            </a>
            <p className="text-sm text-navy-400">🔒 Pagamento 100% seguro via Hotmart</p>
          </div>

          <div className="mt-8">
            <Link
              href="/ebookmar"
              className="inline-block rounded-lg border-2 border-navy-600 px-8 py-4 font-bold text-white transition hover:border-gold-500 hover:text-gold-400"
            >
              NÃO QUERO AGORA
            </Link>
          </div>

          <p className="mt-8 text-sm text-navy-500">
            Não quer investir agora? Comece com o Ebook por {LOW_TICKET.priceFormatted} e conheça o método.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-navy-200 bg-white px-6 py-8">
        <div className="mx-auto max-w-5xl text-center text-sm text-navy-500">
          <p>&copy; {new Date().getFullYear()} {SITE.institute}. Todos os direitos reservados.</p>
          <div className="mt-4 flex justify-center gap-4">
            <Link href="/privacidade" className="hover:text-navy-900">
              Política de Privacidade
            </Link>
            <span>|</span>
            <Link href="/termos" className="hover:text-navy-900">
              Termos de Uso
            </Link>
            <span>|</span>
            <Link href="/suporte" className="hover:text-navy-900">
              Suporte
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
