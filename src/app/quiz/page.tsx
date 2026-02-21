"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions, calculateProfile } from "@/lib/quiz-data";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion) / quizQuestions.length) * 100;
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;

  function handleNext() {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];

    if (isLastQuestion) {
      const profile = calculateProfile(newAnswers);
      // Salva resultado no sessionStorage para a página de resultado
      sessionStorage.setItem("quizResult", JSON.stringify(profile));
      sessionStorage.setItem("quizAnswers", JSON.stringify(newAnswers));
      router.push("/resultado");
    } else {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-navy-950 text-white">
      {/* Header */}
      <div className="border-b border-navy-800 px-6 py-4">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-400">
          Quiz de Posicionamento
        </p>
      </div>

      {/* Progress */}
      <div className="mx-auto w-full max-w-2xl px-6 pt-8">
        <div className="flex items-center justify-between text-sm text-navy-400">
          <span>Pergunta {currentQuestion + 1} de {quizQuestions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-navy-800">
          <div
            className="progress-bar h-full rounded-full bg-gold-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-8">
        <h2 className="text-2xl font-bold leading-tight md:text-3xl">
          {question.question}
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`rounded-xl border-2 p-5 text-left transition ${
                selectedOption === index
                  ? "border-gold-500 bg-gold-500/10"
                  : "border-navy-700 bg-navy-900 hover:border-navy-500"
              }`}
            >
              <span className="text-base">{option.text}</span>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`w-full rounded-lg px-8 py-4 text-lg font-bold transition ${
              selectedOption !== null
                ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                : "cursor-not-allowed bg-navy-800 text-navy-600"
            }`}
          >
            {isLastQuestion ? "Ver Meu Resultado" : "Próxima Pergunta"}
          </button>
        </div>
      </div>
    </main>
  );
}
