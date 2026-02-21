import Link from "next/link";
import { SITE, MENTORSHIP } from "@/lib/constants";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen bg-navy-950 text-white">
      {/* Confirmação */}
      <section className="px-6 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-3xl text-success">
            &#10003;
          </div>
          <h1 className="mt-6 text-3xl font-extrabold md:text-4xl">
            Parabéns! Você deu o primeiro passo.
          </h1>
          <p className="mt-4 text-lg text-navy-300">
            Seu acesso ao Método M.A.R. foi confirmado. Em instantes você receberá
            um email com as instruções de acesso.
          </p>

          <div className="mt-8 rounded-xl border border-navy-700 bg-navy-900 p-6 text-left">
            <h3 className="font-bold text-gold-400">Próximos passos:</h3>
            <ol className="mt-3 space-y-2 text-navy-300">
              <li className="flex gap-3">
                <span className="font-bold text-gold-500">1.</span>
                Acesse seu email e clique no link de acesso da Hotmart
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-500">2.</span>
                Comece pelo Pilar 1 — Mapa do Tesouro (Diagnóstico)
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-gold-500">3.</span>
                Entre no grupo privado para suporte
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Divisor — Atenção antes da VSL */}
      <section className="border-t border-navy-800 px-6 py-10 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
            Espera — antes de ir...
          </p>
          <h2 className="mt-4 text-2xl font-extrabold md:text-3xl">
            Você quer acelerar seus resultados em{" "}
            <span className="text-gold-400">10x</span>?
          </h2>
          <p className="mt-4 text-lg text-navy-300">
            Assista o vídeo abaixo. São apenas 8 minutos que podem mudar
            completamente a velocidade dos seus resultados.
          </p>
        </div>
      </section>

      {/* VSL — Vídeo de Vendas da Mentoria */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-3xl">
          {/* Player de Vídeo — Substituir pelo embed real (PandaVideo/YouTube) */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-gold-500 bg-navy-900">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/20">
                  <svg className="h-10 w-10 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 text-sm text-navy-400">
                  {/* Substitua este bloco pelo embed do PandaVideo ou YouTube */}
                  Insira aqui o embed do vídeo (PandaVideo recomendado)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copy pós-VSL — Oferta da Mentoria */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border-2 border-gold-500 bg-gradient-to-b from-navy-900 to-navy-950 p-8 md:p-10">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-400">
              Oferta exclusiva — só para quem acabou de entrar
            </p>

            <h2 className="mt-6 text-center text-2xl font-extrabold md:text-3xl">
              O curso te dá o SISTEMA.{" "}
              <span className="text-gold-400">A mentoria te dá o ATALHO.</span>
            </h2>

            <p className="mt-4 text-center text-lg text-navy-300">
              Imagina ter {SITE.author} ao seu lado, analisando o SEU negócio,
              montando o SEU plano de ação e identificando os pontos exatos
              que vão destravar seus resultados nos próximos 90 dias.
            </p>

            {/* Entregáveis da mentoria */}
            <div className="mt-8 rounded-xl bg-navy-800 p-6">
              <h3 className="font-bold text-gold-300">O que você recebe na mentoria:</h3>
              <ul className="mt-4 space-y-3 text-navy-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold-500">&#10003;</span>
                  <div>
                    <strong className="text-white">Diagnóstico 1-on-1 do seu negócio</strong>
                    <p className="text-sm text-navy-400">Análise personalizada do seu posicionamento atual — onde você está e o que te trava</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold-500">&#10003;</span>
                  <div>
                    <strong className="text-white">Mapa do Tesouro personalizado</strong>
                    <p className="text-sm text-navy-400">Pilar 1 aplicado direto ao seu nicho — as perguntas certas para seus clientes específicos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold-500">&#10003;</span>
                  <div>
                    <strong className="text-white">Proposta incomparável montada</strong>
                    <p className="text-sm text-navy-400">Pilar 2 aplicado — criamos juntos sua proposta que ninguém consegue comparar</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold-500">&#10003;</span>
                  <div>
                    <strong className="text-white">Plano de ação de 90 dias</strong>
                    <p className="text-sm text-navy-400">Exatamente o que fazer na semana 1, 2, 3... até o resultado chegar</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold-500">&#10003;</span>
                  <div>
                    <strong className="text-white">Revisão de precificação</strong>
                    <p className="text-sm text-navy-400">Descubra quanto você DEVERIA cobrar — e como justificar sem medo</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-gold-500">&#10003;</span>
                  <div>
                    <strong className="text-white">3 quick-wins para resultado imediato</strong>
                    <p className="text-sm text-navy-400">Ações que você implementa na MESMA semana e já sente diferença</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Ancoragem e preço */}
            <div className="mt-8 rounded-xl border border-navy-700 bg-navy-900/50 p-6 text-center">
              <p className="text-sm text-navy-400">
                Consultoria avulsa com {SITE.author}: <span className="line-through">R$ 997</span>
              </p>
              <p className="mt-1 text-sm text-navy-400">
                Mentoria individual no mercado: <span className="line-through">R$ 2.000 - R$ 5.000</span>
              </p>
              <div className="mt-4 border-t border-navy-700 pt-4">
                <p className="text-sm font-semibold text-gold-400">
                  Seu investimento como novo aluno:
                </p>
                <p className="mt-2 text-4xl font-extrabold text-gold-400">
                  {MENTORSHIP.installments}
                </p>
                <p className="mt-1 text-lg text-navy-300">
                  Total: {MENTORSHIP.priceFormatted}
                </p>
              </div>
            </div>

            {/* Garantia */}
            <p className="mt-6 text-center text-sm text-navy-300">
              Se ao final da sessão você sentir que não valeu cada centavo,
              devolvemos 100% do seu investimento. Simples assim.
            </p>

            <a
              href={MENTORSHIP.checkoutUrl}
              className="animate-pulse-gold mt-6 block rounded-lg bg-gold-500 px-8 py-5 text-center text-xl font-bold text-navy-950 transition hover:bg-gold-400"
            >
              QUERO MINHA MENTORIA ESTRATÉGICA
            </a>

            <p className="mt-4 text-center text-sm text-navy-500">
              Vagas limitadas — {SITE.author} atende no máximo 5 mentorias por mês.
            </p>
          </div>

          {/* Sem obrigação */}
          <p className="mt-8 text-center text-sm text-navy-500">
            Não quer a mentoria agora? Sem problema. Acesse o curso e comece a aplicar.
            Você já tem tudo que precisa para transformar seu posicionamento em 90 dias.
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
