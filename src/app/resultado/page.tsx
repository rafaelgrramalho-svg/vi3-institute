"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

export default function ResultadoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com uma ferramenta de email/CRM
    // Por enquanto, apenas marca como enviado
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-navy-950 text-white">
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="mb-6 text-6xl">✅</div>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Perfeito, {nome}!
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-300">
            Recebemos seu email e seu resultado personalizado está a caminho!
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-navy-400">
            Em breve você receberá um email com:
          </p>
          <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-left text-navy-300">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-gold-400">✓</span>
              Seu perfil personalizado de autoridade
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-gold-400">✓</span>
              As estratégias específicas do Método M.A.R. para seu tipo de profissional
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-gold-400">✓</span>
              Um plano de ação de 90 dias para aumentar seu valor no mercado
            </li>
          </ul>
          <p className="mx-auto mt-10 max-w-2xl text-sm text-navy-400">
            Verifique seu email (inclusive a pasta de spam) nos próximos minutos.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-navy-950 text-white">
      {/* Header */}
      <div className="border-b border-navy-800 px-6 py-4">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-400">
          Seu Resultado do Quiz
        </p>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
          Seu resultado personalizado está pronto!
        </h1>

        <p className="mt-6 text-lg text-navy-300">
          Para enviar seu resultado e as estratégias específicas do Método M.A.R. para seu tipo de profissional, precisamos de:
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gold-400">
              Seu Nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-navy-700 bg-navy-900 px-4 py-3 text-white placeholder-navy-500 transition focus:border-gold-500 focus:outline-none"
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gold-400">
              Seu Melhor Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-navy-700 bg-navy-900 px-4 py-3 text-white placeholder-navy-500 transition focus:border-gold-500 focus:outline-none"
              placeholder="seu.email@exemplo.com"
            />
          </div>

          <button
            type="submit"
            className="animate-pulse-gold w-full rounded-lg bg-gold-500 px-8 py-4 text-lg font-bold text-navy-950 transition hover:bg-gold-400"
          >
            Enviar Meu Resultado
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-navy-400">
          Seu email está seguro e protegido. Nunca compartilhamos informações.
        </p>
      </div>
    </main>
  );
}
