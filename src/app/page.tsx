import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function InstitutoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-400">
              {SITE.institute}
            </p>
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Valor e Inteligência para Transformar{" "}
              <span className="text-gold-400">Profissionais em Autoridades</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-300 md:text-xl">
              Combinamos Business + Psicologia + IA para triplicar o valor de seus produtos e serviços
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:justify-center">
              <Link
                href="/MAR"
                className="animate-pulse-gold rounded-lg bg-gold-500 px-8 py-4 text-center text-lg font-bold text-navy-950 transition hover:bg-gold-400"
              >
                Descubra o Método M.A.R.
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-navy-900">Nossa Missão</h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-700">
                Unir Business + Psicologia + IA para triplicar o valor de produtos e serviços.
              </p>
              <p className="mt-4 text-navy-600">
                No {SITE.institute}, acreditamos que profissionais verdadeiramente competentes não devem
                competir por preço. Eles devem ser reconhecidos como autoridades e cobrar o que realmente
                valem.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/images/foto-01-rafael.webp"
                alt="Rafael Rocha - Fundador do Instituto V.I.3"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
              <div className="absolute -bottom-4 -right-4 rounded-lg bg-gold-500 px-4 py-2 text-white font-bold">
                Rafael Rocha
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-navy-900">
            Nossos Programas
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Método M.A.R. */}
            <div className="rounded-xl border-2 border-gold-400 bg-white p-8 shadow-sm">
              <p className="text-4xl">🎯</p>
              <h3 className="mt-4 text-2xl font-bold text-navy-900">Método M.A.R.</h3>
              <p className="mt-2 text-gold-600 font-medium">
                Mecanismo de Autoridade e Reconhecimento
              </p>
              <p className="mt-4 text-navy-700">
                O sistema científico de 3 pilares que transforma profissionais invisíveis em autoridades reconhecidas — sem precisar viralizar ou ter milhares de seguidores.
              </p>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-navy-600">
                  <strong>📚 Curso Completo:</strong> R$ 147 (10x R$ 14,70)
                </p>
                <p className="text-sm text-navy-600">
                  <strong>🎁 Ebook + Planilha:</strong> R$ 29
                </p>
              </div>

              <Link
                href="/MAR"
                className="mt-6 block rounded-lg bg-gold-500 px-6 py-3 text-center font-bold text-navy-950 transition hover:bg-gold-400"
              >
                Saiba Mais
              </Link>
            </div>

            {/* Ebook M.A.R. */}
            <div className="rounded-xl border border-navy-200 bg-white p-8 shadow-sm">
              <p className="text-4xl">📖</p>
              <h3 className="mt-4 text-2xl font-bold text-navy-900">Ebook M.A.R.</h3>
              <p className="mt-2 text-gold-600 font-medium">
                Seu primeiro passo para a autoridade
              </p>
              <p className="mt-4 text-navy-700">
                Guia prático que revela o sistema de 3 pilares para sair da invisibilidade e ser reconhecido como autoridade — sem milhares de seguidores.
              </p>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-navy-600">
                  <strong>💰 Investimento:</strong> R$ 29
                </p>
                <p className="text-sm text-navy-600">
                  <strong>✓ Garantia:</strong> 7 dias ou 100% de volta
                </p>
              </div>

              <Link
                href="/ebookmar"
                className="mt-6 block rounded-lg border-2 border-gold-500 px-6 py-3 text-center font-bold text-gold-500 transition hover:bg-gold-500 hover:text-navy-950"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-navy-900">
            O Que Nos Define
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🧠",
                title: "Baseado em Ciência",
                desc: "Psicologia comportamental, SPIN Selling, Jobs To Be Done e Princípios de Cialdini",
              },
              {
                icon: "📊",
                title: "Dados Reais",
                desc: "Método validado por centenas de profissionais em 47 nichos diferentes",
              },
              {
                icon: "🚀",
                title: "Resultados Comprovados",
                desc: "87% dos alunos aumentam preços em 50%+ sem perder clientes",
              },
            ].map((valor, i) => (
              <div key={i} className="rounded-lg border border-navy-200 bg-navy-50 p-6 text-center">
                <p className="text-4xl">{valor.icon}</p>
                <h3 className="mt-4 font-bold text-navy-900">{valor.title}</h3>
                <p className="mt-2 text-sm text-navy-700">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-navy-950 to-navy-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Pronto para se tornar uma autoridade reconhecida?
          </h2>
          <p className="mt-6 text-lg text-navy-300">
            Escolha seu caminho: comece com o Ebook ou mergulhe no Método M.A.R. completo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:justify-center">
            <Link
              href="/MAR"
              className="animate-pulse-gold rounded-lg bg-gold-500 px-8 py-4 text-lg font-bold text-navy-950 transition hover:bg-gold-400"
            >
              Conhecer o Método M.A.R.
            </Link>
            <Link
              href="/ebookmar"
              className="rounded-lg border-2 border-gold-500 px-8 py-4 text-lg font-bold text-gold-400 transition hover:bg-gold-500 hover:text-navy-950"
            >
              Começar com Ebook (R$ 29)
            </Link>
          </div>
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
