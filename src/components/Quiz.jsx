// Quiz.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Quiz() {
  const questions = [
    {
      q: "What is the primary goal of a startup?",
      options: ["To grow fast", "To stay small", "To avoid investors", "To hire as many employees as possible"],
      correct: 0,
    },
    {
      q: "What is a “pitch” in the startup world?",
      options: [
        "A company’s yearly revenue report",
        "A short presentation to investors",
        "A marketing brochure",
        "A customer complaint letter",
      ],
      correct: 1,
    },
    {
      q: "What do investors usually take in exchange for funding?",
      options: ["Office furniture", "Company shares (equity)", "A monthly salary", "Customer database"],
      correct: 1,
    },
    {
      q: "Which document explains a startup’s product, target market, and business model?",
      options: ["Passport", "Business Plan", "Delivery Note", "Warranty Card"],
      correct: 1,
    },
    {
      q: "What is the term for a company valued at over $1 billion?",
      options: ["Pony", "Unicorn", "Tiger", "Dragon"],
      correct: 1,
    },
  ];

  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const current = questions[step];

  const handleSelect = (i) => {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (i === current.correct) setScore(score + 1);

    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep(step + 1);
        setSelected(null);
        setAnswered(false);
      }
    }, 1200);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-white">

        {/* Progress */}
        <div className="mb-6">
          <div className="h-2 bg-blue-100 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-blue-900 font-medium">
            Question {step + 1} / {questions.length}
          </p>
        </div>

        {/* Question */}
        <motion.h1
          key={step}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-blue-900"
        >
          {current.q}
        </motion.h1>

        {/* Options */}
        <div className="mt-6 space-y-4">
          {current.options.map((opt, i) => {
            const isCorrect = i === current.correct;
            const isSelected = i === selected;

            return (
              <motion.button
                key={i}
                whileHover={{ scale: !answered ? 1.03 : 1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelect(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all
                  ${
                    answered
                      ? isSelected
                        ? isCorrect
                          ? "bg-green-100 border-green-400"
                          : "bg-red-100 border-red-400"
                        : "bg-white border-slate-200"
                      : "bg-white border-slate-200 hover:border-blue-400"
                  }
                `}
              >
                {opt}
              </motion.button>
            );
          })}
        </div>

        {/* Finish Screen */}
        {step === questions.length - 1 && answered && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 text-center"
            >
              <h2 className="text-3xl font-bold text-blue-900">
                Quiz Completed 🎉
              </h2>
              <p className="text-lg text-blue-700 mt-2">
                Your Score: <b>{score}</b> / {questions.length}
              </p>

              <button
                onClick={() => {
                  setStep(0);
                  setScore(0);
                  setSelected(null);
                  setAnswered(false);
                }}
                className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
              >
                Restart Quiz
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
