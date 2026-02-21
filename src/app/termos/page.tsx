import Link from "next/link";
import { SITE, LINKS } from "@/lib/constants";

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white text-navy-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-navy-500 hover:text-gold-600">
          &larr; Voltar ao início
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold">Termos de Uso</h1>
        <p className="mt-2 text-sm text-navy-500">Última atualização: Fevereiro de 2026</p>

        <div className="mt-8 space-y-6 text-navy-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy-900">1. Aceitação dos Termos</h2>
            <p className="mt-2">
              Ao acessar e utilizar o site do {SITE.fullName} e seus produtos digitais,
              você concorda com estes Termos de Uso. Se não concordar, por favor não
              utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">2. Descrição do Serviço</h2>
            <p className="mt-2">
              O {SITE.name} é um programa de educação online que oferece cursos,
              ebooks e materiais complementares sobre posicionamento profissional
              e estratégias de vendas. O conteúdo é disponibilizado através da
              plataforma Hotmart.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">3. Propriedade Intelectual</h2>
            <p className="mt-2">
              Todo o conteúdo do {SITE.name}, incluindo textos, vídeos, materiais
              didáticos, templates e metodologias, é protegido por direitos autorais
              e pertence ao {SITE.institute}. É proibida a reprodução, distribuição
              ou comercialização sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">4. Política de Reembolso</h2>
            <p className="mt-2">
              Oferecemos garantia de 90 dias. Caso não esteja satisfeito com o
              produto, você pode solicitar o reembolso integral dentro deste prazo,
              diretamente pela plataforma Hotmart, sem necessidade de justificativa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">5. Resultados</h2>
            <p className="mt-2">
              Os resultados apresentados em depoimentos e casos de sucesso são
              exemplos reais, porém individuais. Os resultados podem variar de
              acordo com o empenho, dedicação e aplicação de cada aluno.
              Não garantimos resultados financeiros específicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">6. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre estes termos, entre em contato pelo email{" "}
              <a href={`mailto:${LINKS.email}`} className="text-gold-600 hover:text-gold-700">
                {LINKS.email}
              </a>.
            </p>
          </section>
        </div>
      </div>

      <footer className="border-t border-navy-200 px-6 py-8 text-center text-sm text-navy-400">
        <p>&copy; {new Date().getFullYear()} {SITE.institute}. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
