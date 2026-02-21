import Link from "next/link";
import { SITE, LOW_TICKET } from "@/lib/constants";

export default function ObrigadoEbookPage() {
  return (
    <main className="min-h-screen bg-navy-950 text-white">
      {/* Confirmação da compra do ebook */}
      <section className="px-6 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-3xl text-success">
            &#10003;
          </div>
          <h1 className="mt-6 text-3xl font-extrabold md:text-4xl">
            Parabéns! Seu ebook já está disponível.
          </h1>
          <p className="mt-4 text-lg text-navy-300">
            O {LOW_TICKET.ebookName} e a {LOW_TICKET.spreadsheetName} foram
            enviados para seu email. Verifique também a caixa de spam.
          </p>

          <div className="mt-8 rounded-xl border border-navy-700 bg-navy-900 p-6 text-left">
            <h3 className="font-bold text-gold-400">Próximos passos:</h3>
            <ol className="mt-3 space-y-2 text-navy-300">
              <li className="flex gap-3">
                <span className="font-bold text-gold-500">1.</span>
                Abra seu email e baixe o ebook + planilha
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-500">2.</span>
                Comece pela introdução — entenda os 3 pilares
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-500">3.</span>
                Faça os exercícios do Pilar 1 (Diagnóstico)
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-500">4.</span>
                Use a planilha para organizar seus clientes
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Transição — Upsell para o curso */}
      <section className="border-t border-navy-800 px-6 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Uma pergunta honesta
          </p>
          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
            Você quer <span className="text-gold-400">ler</span> sobre autoridade...{" "}
            ou quer <span className="text-gold-400">se tornar</span> uma autoridade?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            O ebook te mostra o caminho. Mas o curso completo te leva até lá
            — com videoaulas, exercícios guiados, scripts prontos,
            comunidade e mentoria individual.
          </p>

          <Link
            href="/oferta"
            className="animate-pulse-gold mt-8 inline-block w-full max-w-md rounded-lg bg-gold-500 px-8 py-5 text-xl font-bold text-navy-950 transition hover:bg-gold-400"
          >
            QUERO CONHECER O CURSO COMPLETO
          </Link>

          <p className="mt-4 text-sm text-navy-500">
            Conheça o Método M.A.R. completo com 24 videoaulas, workbook,
            scripts prontos e consultoria individual.
          </p>
        </div>
      </section>

      {/* Sem obrigação */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-sm text-navy-500">
            Não quer o curso agora? Sem problema. Aproveite seu ebook e comece
            a aplicar. Quando sentir que precisa de mais, estaremos aqui.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-800 px-6 py-8 text-center text-sm text-navy-500">
        <p>&copy; {new Date().getFullYear()} {SITE.institute}. Todos os direitos reservados.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/termos" className="hover:text-gold-400">Termos de Uso</Link>
          <Link href="/privacidade" className="hover:text-gold-400">Política de Privacidade</Link>
          <Link href="/suporte" className="hover:text-gold-400">Suporte</Link>
        </div>
      </footer>
    </main>
  );
}
