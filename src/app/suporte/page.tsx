import Link from "next/link";
import { SITE, LINKS } from "@/lib/constants";

export default function SuportePage() {
  return (
    <main className="min-h-screen bg-white text-navy-900">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="text-sm text-navy-500 hover:text-gold-600">
          &larr; Voltar ao início
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold">Suporte</h1>

        <p className="mt-4 text-lg text-navy-600">
          Estamos aqui para te ajudar. Escolha o canal mais conveniente para você.
        </p>

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-navy-200 p-6">
            <h3 className="text-lg font-bold">Email</h3>
            <p className="mt-1 text-navy-600">Resposta em até 24 horas úteis.</p>
            <a
              href={`mailto:${LINKS.email}`}
              className="mt-3 inline-block font-semibold text-gold-600 hover:text-gold-700"
            >
              {LINKS.email}
            </a>
          </div>

          <div className="rounded-xl border border-navy-200 p-6">
            <h3 className="text-lg font-bold">WhatsApp</h3>
            <p className="mt-1 text-navy-600">Atendimento em horário comercial (9h-18h).</p>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-semibold text-gold-600 hover:text-gold-700"
            >
              Abrir WhatsApp
            </a>
          </div>

          <div className="rounded-xl border border-navy-200 p-6">
            <h3 className="text-lg font-bold">Grupo Privado</h3>
            <p className="mt-1 text-navy-600">
              Alunos do M.A.R. têm acesso ao grupo exclusivo com suporte da comunidade.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-navy-50 p-6">
          <h3 className="font-bold">Perguntas comuns</h3>
          <ul className="mt-4 space-y-3 text-navy-600">
            <li>
              <strong>Não recebi o email de acesso:</strong> Verifique spam/lixo eletrônico.
              Se não encontrar, entre em contato por email ou WhatsApp.
            </li>
            <li>
              <strong>Problemas com pagamento:</strong> Entre em contato com a Hotmart
              ou nos envie um email com o comprovante.
            </li>
            <li>
              <strong>Garantia:</strong> Solicite o reembolso em até 90 dias após a compra
              diretamente pela plataforma Hotmart.
            </li>
          </ul>
        </div>
      </div>

      <footer className="border-t border-navy-200 px-6 py-8 text-center text-sm text-navy-400">
        <p>&copy; {new Date().getFullYear()} {SITE.institute}. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
