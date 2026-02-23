import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function InstitutoPage() {
  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/logo-fundo-escuro.png)',
        backgroundColor: '#0a1929'
      }}>

      {/* OVERLAY COM TRANSPARÊNCIA */}
      <div className="min-h-screen bg-black/50 flex flex-col items-center justify-between px-6 py-20">

        {/* SEÇÃO SUPERIOR - TÍTULO */}
        <div className="text-center max-w-2xl flex-1 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Esta Página está em Construção
          </h1>
        </div>

        {/* SEÇÃO INFERIOR - TEXTOS E CTA */}
        <div className="text-center max-w-2xl">
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Estamos preparando algo extraordinário para você. Em breve, estaremos de volta com todo o poder do Instituto V.I.3.
          </p>

          {/* CTA */}
          <div className="flex flex-col gap-4 sm:justify-center mb-6">
            <Link
              href="/MAR"
              className="inline-block rounded-lg bg-navy-950 px-8 py-3 text-base font-bold text-white transition hover:bg-navy-900"
            >
              Conheça o Método M.A.R.
            </Link>
          </div>

          {/* INFORMAÇÃO */}
          <p className="text-gray-400 text-xs md:text-sm">
            Para dúvida, entre em contato por email: <a href="mailto:contato@vi3.com.br" className="text-gold-400 hover:text-gold-300 transition">contato@vi3.com.br</a>
          </p>
        </div>

      </div>

    </main>
  );
}
