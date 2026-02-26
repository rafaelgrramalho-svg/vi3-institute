"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/constants";
import { profiles, quizQuestions, QuizProfile } from "@/lib/quiz-data";

interface QuizResult {
  profile?: QuizProfile;
  answers?: number[];
}

export default function ResultadoPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Carregar dados do quiz do sessionStorage
  useEffect(() => {
    const savedResult = sessionStorage.getItem("quizResult");
    const savedAnswers = sessionStorage.getItem("quizAnswers");

    if (savedResult && savedAnswers) {
      setQuizResult({
        profile: JSON.parse(savedResult),
        answers: JSON.parse(savedAnswers),
      });
    } else {
      // Se não houver resultado, redirecionar para o quiz
      router.push("/quiz");
    }
  }, [router]);

  // Calcular scores do quiz
  const calculateScores = (answers?: number[]) => {
    if (!answers) return null;

    const scores = { invisivel: 0, desconhecida: 0, emergente: 0, estabelecida: 0 };

    answers.forEach((answerIndex, questionIndex) => {
      const question = quizQuestions[questionIndex];
      if (question && question.options[answerIndex]) {
        const option = question.options[answerIndex];
        scores.invisivel += option.scores.invisivel;
        scores.desconhecida += option.scores.desconhecida;
        scores.emergente += option.scores.emergente;
        scores.estabelecida += option.scores.estabelecida;
      }
    });

    return scores;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!quizResult?.profile) {
        throw new Error("Resultado do quiz não encontrado");
      }

      const scores = calculateScores(quizResult.answers);

      // Enviar dados para MailerLite via API
      const response = await fetch("/api/quiz-result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.toLowerCase().trim(),
          name: nome.trim(),
          profile: quizResult.profile.id,
          answers: quizResult.answers,
          scores,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar resultado");
      }

      // Marcar como enviado
      setSubmitted(true);

      // Limpar sessionStorage
      sessionStorage.removeItem("quizResult");
      sessionStorage.removeItem("quizAnswers");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      setError(errorMessage);
      console.error("Erro ao enviar resultado:", errorMessage);
    } finally {
      setLoading(false);
    }
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
        {/* Resultado do Quiz */}
        {quizResult?.profile && (
          <div className="mb-10 rounded-2xl border-2 border-gold-500/30 bg-gold-500/5 p-8">
            <h2 className="text-2xl font-bold text-gold-400">Seu Perfil de Autoridade</h2>
            <h3 className="mt-2 text-3xl font-extrabold leading-tight">
              {quizResult.profile.title}
            </h3>
            <p className="mt-3 text-lg text-gold-300">{quizResult.profile.subtitle}</p>
            <p className="mt-6 text-base text-navy-200">{quizResult.profile.description}</p>

            <div className="mt-8">
              <h4 className="font-semibold text-gold-400">Seus Pontos Fortes:</h4>
              <ul className="mt-3 space-y-2">
                {quizResult.profile.strengths.map((strength, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-navy-200">
                    <span className="mt-1 text-gold-400">✓</span>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gold-400">Áreas de Atenção:</h4>
              <ul className="mt-3 space-y-2">
                {quizResult.profile.risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-navy-200">
                    <span className="mt-1 text-red-400">⚠</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 rounded-lg bg-navy-900/50 p-4 text-center text-base text-navy-100">
              <strong>Próximo Passo:</strong> {quizResult.profile.cta}
            </p>
          </div>
        )}

        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
          Seu resultado personalizado está pronto!
        </h1>

        <p className="mt-6 text-lg text-navy-300">
          Para enviar seu resultado e as estratégias específicas do Método M.A.R. para seu tipo de profissional, precisamos de:
        </p>

        {/* Error Message */}
        {error && (
          <div className="mt-6 rounded-lg bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

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
            disabled={loading}
            className={`w-full rounded-lg px-8 py-4 text-lg font-bold transition ${
              loading
                ? "bg-gold-600 text-navy-950 cursor-not-allowed opacity-75"
                : "animate-pulse-gold bg-gold-500 text-navy-950 hover:bg-gold-400"
            }`}
          >
            {loading ? "Enviando..." : "Enviar Meu Resultado"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-navy-400">
          Seu email está seguro e protegido. Nunca compartilhamos informações.
        </p>
      </div>
    </main>
  );
}
