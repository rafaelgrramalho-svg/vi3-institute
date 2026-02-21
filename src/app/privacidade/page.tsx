import Link from "next/link";
import { SITE, LINKS } from "@/lib/constants";

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white text-navy-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-navy-500 hover:text-gold-600">
          &larr; Voltar ao início
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-navy-500">Última atualização: Fevereiro de 2026</p>

        <div className="mt-8 space-y-6 text-navy-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy-900">1. Informações Coletadas</h2>
            <p className="mt-2">Coletamos as seguintes informações:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Nome e email (ao preencher o quiz ou realizar compra)</li>
              <li>Respostas do quiz de posicionamento</li>
              <li>Dados de navegação (cookies, IP, páginas visitadas)</li>
              <li>Dados de transação financeira (processados pela Hotmart)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">2. Uso das Informações</h2>
            <p className="mt-2">Utilizamos seus dados para:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Fornecer o resultado do quiz personalizado</li>
              <li>Enviar conteúdo educativo e ofertas relevantes por email</li>
              <li>Processar compras e fornecer suporte</li>
              <li>Melhorar nossos produtos e serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">3. Compartilhamento</h2>
            <p className="mt-2">
              Não vendemos seus dados. Compartilhamos informações apenas com:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Hotmart (processamento de pagamentos e entrega do produto)</li>
              <li>Ferramenta de email marketing (envio de comunicações)</li>
              <li>Google Analytics (dados anonimizados de navegação)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">4. Cookies</h2>
            <p className="mt-2">
              Utilizamos cookies para melhorar a experiência de navegação,
              rastrear conversões e personalizar anúncios. Você pode
              desabilitar cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">5. Seus Direitos (LGPD)</h2>
            <p className="mt-2">
              Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Acessar seus dados pessoais</li>
              <li>Solicitar correção de dados incorretos</li>
              <li>Solicitar exclusão dos seus dados</li>
              <li>Revogar consentimento para comunicações</li>
              <li>Solicitar portabilidade dos dados</li>
            </ul>
            <p className="mt-2">
              Para exercer esses direitos, envie um email para{" "}
              <a href={`mailto:${LINKS.email}`} className="text-gold-600 hover:text-gold-700">
                {LINKS.email}
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">6. Segurança</h2>
            <p className="mt-2">
              Adotamos medidas de segurança para proteger seus dados pessoais,
              incluindo criptografia SSL e armazenamento seguro. Pagamentos
              são processados pela Hotmart, que possui certificação PCI DSS.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-900">7. Contato</h2>
            <p className="mt-2">
              Para dúvidas sobre privacidade, entre em contato:{" "}
              <a href={`mailto:${LINKS.email}`} className="text-gold-600 hover:text-gold-700">
                {LINKS.email}
              </a>
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
