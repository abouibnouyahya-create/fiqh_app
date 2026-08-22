"use client";

import React, { useState } from "react";
import { CheckCircle, Lock, BookOpen, Award, ArrowRight, RotateCcw, HelpCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface Lesson {
  id: string;
  chapterId: number;
  title: string;
  arabicText: string;
  frenchTranslation: string;
  explanations: {
    concept: string;
    description: string;
    examples?: string[];
  }[];
  keyPoints: string[];
  quiz: Question[];
}

const LESSONS: Lesson[] = [
  {
    id: "1.1",
    chapterId: 1,
    title: "Leçon 1.1 : Les types d'eaux et la purification (At-Tahara)",
    arabicText: "فَصْلٌ: أَنْوَاعُ المِيَاهِ وَأَحْكَامُ الطَّهَارَةِ. لَا يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلَا رَفْعُ الحَدَثِ إِلَّا بِالمَاءِ المُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.",
    frenchTranslation: "Section : Les catégories d'eau et les règles de purification. Il n'est pas permis d'enlever une impureté matérielle (Najasah) ni de lever une impureté rituelle (Hadath) si ce n'est avec de l'eau pure et purifiante (Al-Ma' Al-Moutlaq), c'est-à-dire une eau dont la couleur, le goût ou l'odeur n'ont pas été altérés par une substance étrangère qui s'en sépare habituellement.",
    explanations: [
      {
        concept: "1. Qu'est-ce que l'Eau Pure et Purifiante (Al-Ma' Al-Moutlaq) ?",
        description: "En Fiqh Malikite, l'eau purifiante est l'eau qui conserve sa nature originelle telle qu'elle a été descendue du ciel ou jaillie de la terre (eau de pluie, de puits, de rivière, de mer, de source). Elle est qualifiée de 'Tahour' (طَهُور) : elle est pure en elle-même et a la capacité de purifier autre chose.",
      },
      {
        concept: "2. Les Trois Caractéristiques Fondamentales de l'Eau",
        description: "Pour vérifier si une eau est toujours utilisable pour le Woudou (ablutions), le Ghusl ou le lavage des vêtements souillés, il faut observer trois attributs :",
        examples: [
          "Le Goût (الطَّعْم)",
          "La Couleur (اللَّوْن)",
          "L'Odeur (الرَّائِحَة)"
        ]
      },
      {
        concept: "3. La différence entre 'Hadath' et 'Najasah'",
        description: "• Al-Hadath (الحَدَث) : C'est un état d'impureté rituelle (immatérielle) qui empêche de prier (ex: émettre un gaz, aller aux toilettes, grande impureté). Il se lève par le Woudou ou le Ghusl.\n• An-Najasah (النَّجَاسَة) : C'est une souillure matérielle physique présente sur le corps, les vêtements ou le lieu de prière (ex: urine, sang). Elle se nettoie en lavant la zone avec de l'eau.",
      },
      {
        concept: "4. Ce qui altère l'eau et ce qui ne l'altère pas",
        description: "• Si l'eau change de goût, de couleur ou d'odeur à cause d'un produit étranger (ex: du savon, du thé, du jus, du parfum) : elle devient pure mais NON purifiante (Tahir ghayr Tahour). On ne peut pas faire les ablutions avec.\n• Exception : Si l'eau change à cause de son environnement naturel (ex: de la vase, des algues, de la terre de son lit), elle reste totalement PURIFIANTE.",
      }
    ],
    keyPoints: [
      "Il est obligatoire d'utiliser une eau pure et purifiante (Al-Ma' Al-Moutlaq) pour enlever une impureté ou lever l'état d'impureté rituelle.",
      "L'eau perd sa qualité purifiante si l'un de ses 3 attributs (couleur, goût ou odeur) est altéré par une substance étrangère qui ne fait pas partie de son milieu naturel.",
      "Si de l'eau est mélangée à du thé ou du savon, elle est propre/pure pour l'usage quotidien mais valide zéro ablution.",
      "L'eau de mer, de pluie et de puits sont toutes des eaux purifiantes valides."
    ],
    quiz: [
      {
        id: 1,
        question: "Qu'est-ce que 'Al-Ma' Al-Moutlaq' en jurisprudence musulmane ?",
        options: [
          "Une eau mélangée à du parfum pour sentir bon",
          "Une eau pure et purifiante qui conserve sa nature originelle",
          "Une eau bouillie uniquement avec des plantes",
          "Une eau réservée exclusivement à la boisson"
        ],
        answer: 1,
        explanation: "Al-Ma' Al-Moutlaq désigne l'eau naturelle à l'état pur (pluie, puits, mer) qui n'a pas été altérée par d'autres substances."
      },
      {
        id: 2,
        question: "Quels sont les trois attributs de l'eau à vérifier pour s'assurer de sa pureté rituelle ?",
        options: [
          "La température, la quantité et le récipient",
          "La couleur, le goût et l'odeur",
          "La provenance, le prix et la clarté",
          "La profondeur, la vitesse et le volume"
        ],
        answer: 1,
        explanation: "Si l'un des trois attributs (couleur, goût, odeur) est modifié par une substance étrangère, l'eau peut perdre ses propriétés purifiantes."
      },
      {
        id: 3,
        question: "Si du savon ou du sirop modifie la couleur et le goût de l'eau, peut-on faire le Woudou avec ?",
        options: [
          "Oui, car l'eau est devenue encore plus propre",
          "Non, l'eau est pure mais n'est plus purifiante pour les ablutions",
          "Oui, mais uniquement pour la prière du Sobh",
          "Uniquement si l'on ne trouve pas d'autre eau pendant 3 jours"
        ],
        answer: 1,
        explanation: "Une eau altérée par une substance étrangère propre devient 'Tahir' (pure) mais pas 'Tahour' (purifiante). Elle ne permet donc pas de lever le Hadath."
      },
      {
        id: 4,
        question: "Quelle est la différence entre le Hadath et la Najasah ?",
        options: [
          "Le Hadath est une souillure matérielle et la Najasah est un état mental",
          "Le Hadath est l'état d'impureté rituelle (ex: besoin naturel) et la Najasah est une souillure physique (ex: urine sur un vêtement)",
          "Il n'y a aucune différence, ce sont deux termes exactement identiques",
          "La Najasah s'élimine avec le Tayammum et le Hadath avec du savon"
        ],
        answer: 1,
        explanation: "Le Hadath est l'état rituel nécessitant les ablutions, tandis que la Najasah est une substance impure concrète à laver."
      }
    ]
  }
];

export default function FiqhApp() {
  const [unlockedLessonIndex, setUnlockedLessonIndex] = useState<number>(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"course" | "quiz">("course");
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const lesson = LESSONS[currentLessonIndex];
  const currentQuestion = lesson.quiz[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleValidateAnswer = () => {
    if (selectedAnswer === null) return;
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex + 1 < lesson.quiz.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      const passed = score >= Math.ceil(lesson.quiz.length * 0.75);
      
      if (passed && currentLessonIndex === unlockedLessonIndex && unlockedLessonIndex + 1 < LESSONS.length) {
        setUnlockedLessonIndex((prev) => prev + 1);
      }

      try {
        await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lessonId: lesson.id,
            score: score,
            totalQuestions: lesson.quiz.length,
            passed: passed
          })
        });
      } catch (err) {
        console.error("Erreur d'enregistrement :", err);
      }
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const isPassed = score >= Math.ceil(lesson.quiz.length * 0.75);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-12">
      {/* Top Header */}
      <header className="bg-emerald-900 text-white py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
              FIQH MALIKITE — MATN AL-AKHDARI
            </span>
            <h1 className="text-xl md:text-2xl font-bold mt-1">{lesson.title}</h1>
          </div>
          <div className="bg-emerald-800 border border-emerald-700 px-3 py-1.5 rounded-lg text-xs md:text-sm">
            Niveau : <span className="font-bold text-emerald-300">{unlockedLessonIndex + 1} / {LESSONS.length}</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 mt-8">
        
        {/* Navigation Mode Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setViewMode("course")}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${
              viewMode === "course"
                ? "bg-emerald-700 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <BookOpen className="w-4 h-4" /> Cours & Explications
          </button>
          <button
            onClick={() => {
              setViewMode("quiz");
              handleResetQuiz();
            }}
            className={`flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${
              viewMode === "quiz"
                ? "bg-emerald-700 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <HelpCircle className="w-4 h-4" /> Quiz d'évaluation ({lesson.quiz.length} questions)
          </button>
        </div>

        {/* MODE COURS */}
        {viewMode === "course" && (
          <div className="space-y-6">
            {/* Texte Arabe Original */}
            <div className="bg-emerald-50 border-r-4 border-emerald-700 p-6 rounded-2xl shadow-sm text-right">
              <p className="text-xl md:text-2xl font-serif leading-loose text-emerald-950 dir-rtl" dir="rtl">
                {lesson.arabicText}
              </p>
            </div>

            {/* Traduction Française */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Traduction française</h3>
              <p className="text-slate-800 leading-relaxed italic">{lesson.frenchTranslation}</p>
            </div>

            {/* Explications Étape par Étape */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b pb-3">Explications Détaillées du Cours</h3>

              {lesson.explanations.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-semibold text-emerald-800 text-base">{exp.concept}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{exp.description}</p>
                  {exp.examples && (
                    <ul className="list-disc list-inside text-xs text-slate-600 bg-slate-50 p-3 rounded-lg space-y-1">
                      {exp.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Points Clés à retenir */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-md font-bold text-slate-900 mb-4">Points clés à retenir :</h3>
              <ul className="space-y-2">
                {lesson.keyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button */}
            <button
              onClick={() => {
                setViewMode("quiz");
                handleResetQuiz();
              }}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-base"
            >
              Étape suivante : Passer au Quiz ({lesson.id}) <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* MODE QUIZ */}
        {viewMode === "quiz" && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            {!isQuizCompleted ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    Question {currentQuestionIndex + 1} / {lesson.quiz.length}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6">{currentQuestion.question}</h3>

                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, idx) => {
                    let style = "bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-400";
                    if (selectedAnswer === idx) {
                      style = "bg-emerald-50 border-emerald-600 text-emerald-900 font-medium";
                    }
                    if (isAnswerSubmitted) {
                      if (idx === currentQuestion.answer) {
                        style = "bg-emerald-100 border-emerald-600 text-emerald-950 font-semibold";
                      } else if (selectedAnswer === idx) {
                        style = "bg-red-100 border-red-500 text-red-950";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        disabled={isAnswerSubmitted}
                        className={`w-full text-left p-4 rounded-xl border text-sm transition ${style}`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>

                {isAnswerSubmitted && (
                  <div className="p-4 mb-6 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold block mb-1">Explication :</span>
                    {currentQuestion.explanation}
                  </div>
                )}

                <div className="flex justify-end">
                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleValidateAnswer}
                      disabled={selectedAnswer === null}
                      className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl transition text-sm"
                    >
                      Valider la réponse
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      {currentQuestionIndex + 1 < lesson.quiz.length ? "Question suivante" : "Voir le résultat"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Écran de Fin de Quiz */
              <div className="text-center py-8">
                <Award className={`w-16 h-16 mx-auto mb-4 ${isPassed ? "text-emerald-600" : "text-amber-500"}`} />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {isPassed ? "Félicitations !" : "Encore un effort !"}
                </h3>
                <p className="text-slate-600 text-sm mb-6">
                  Vous avez obtenu <span className="font-bold text-emerald-700">{score}</span> / <span className="font-bold">{lesson.quiz.length}</span> bonnes réponses.
                  {isPassed
                    ? " Vous avez parfaitement assimilé cette leçon !"
                    : " Relisez attentivement le cours avant de réessayer le quiz."}
                </p>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleResetQuiz}
                    className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Recommencer le quiz
                  </button>
                  <button
                    onClick={() => setViewMode("course")}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition text-sm"
                  >
                    Revenir au cours
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}