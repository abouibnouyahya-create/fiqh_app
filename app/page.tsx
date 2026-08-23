"use client";

import React, { useState } from "react";
import { BookOpen, Award, ArrowRight, RotateCcw, HelpCircle, CheckCircle, Lock, Globe } from "lucide-react";

type Language = "fr" | "en";

interface Question {
  id: number;
  question: { fr: string; en: string };
  options: { fr: string[]; en: string[] };
  answer: number;
  explanation: { fr: string; en: string };
}

interface Lesson {
  id: string;
  chapterId: number;
  title: { fr: string; en: string };
  arabicText: string;
  frenchTranslation: string;
  englishTranslation: string;
  explanations: {
    concept: { fr: string; en: string };
    description: { fr: string; en: string };
    examples?: { fr: string[]; en: string[] };
  }[];
  keyPoints: { fr: string[]; en: string[] };
  quiz: Question[];
}

const LESSONS: Lesson[] = [
  {
    id: "1.1",
    chapterId: 1,
    title: {
      fr: "Leçon 1.1 : Les types d'eaux et la purification (At-Taharah)",
      en: "Lesson 1.1: Types of Water & Purification (At-Taharah)"
    },
    arabicText: "فَصْلٌ: أَنْوَاعُ المِيَاهِ وَأَحْكَامُ الطَّهَارَةِ. لَا يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلَا رَفْعُ الحَدَثِ إِلَّا بِالمَاءِ المُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.",
    frenchTranslation: "Section : Les catégories d'eau et les règles de purification. Il n'est pas permis d'enlever une impureté matérielle (Najasah) ni de lever une impureté rituelle (Hadath) si ce n'est avec de l'eau pure et purifiante (Al-Ma' Al-Moutlaq), c'est-à-dire une eau dont la couleur, le goût ou l'odeur n'ont pas été altérés par une substance étrangère qui s'en sépare habituellement.",
    englishTranslation: "Section: Categories of water and rules of purification. Removing physical impurity (Najasah) or removing ritual impurity (Hadath) is not permissible except with pure and purifying water (Al-Ma' Al-Mutlaq), which is water whose color, taste, or smell has not been altered by a substance that is normally detached from it.",
    explanations: [
      {
        concept: {
          fr: "1. Qu'est-ce que l'Eau Pure et Purifiante (Al-Ma' Al-Mutlaq) ?",
          en: "1. What is Pure and Purifying Water (Al-Ma' Al-Mutlaq)?"
        },
        description: {
          fr: "En Fiqh Malikite, l'eau purifiante est l'eau qui conserve sa nature originelle (eau de pluie, de puits, de rivière, de mer, de source). Elle est qualifiée de 'Tahour' (طَهُور) : elle est pure en elle-même et a la capacité de purifier autre chose.",
          en: "In Maliki Fiqh, purifying water retains its original natural state (rain, well, river, sea, or spring water). It is classified as 'Tahur' (طَهُور): pure in itself and capable of purifying other things."
        }
      },
      {
        concept: {
          fr: "2. Les Trois Caractéristiques Fondamentales",
          en: "2. The Three Fundamental Characteristics"
        },
        description: {
          fr: "Pour vérifier si une eau est utilisable pour la purification, il faut observer ses trois attributs :",
          en: "To verify if water can be used for ritual purification, observe its three attributes:"
        },
        examples: {
          fr: ["Le Goût (الطَّعْم)", "La Couleur (اللَّوْن)", "L'Odeur (الرَّائِحَة)"],
          en: ["Taste (الطَّعْم)", "Color (اللَّوْن)", "Smell (الرَّائِحَة)"]
        }
      },
      {
        concept: {
          fr: "3. Différence entre 'Hadath' et 'Najasah'",
          en: "3. Difference between 'Hadath' and 'Najasah'"
        },
        description: {
          fr: "• Al-Hadath : État d'impureté rituelle (immatérielle) qui empêche de prier (ex: besoin naturel). Se lève par le Wudu ou Ghusl.\n• An-Najasah : Souillure matérielle physique (ex: urine, sang). Se nettoie en lavant la zone.",
          en: "• Al-Hadath: State of ritual (immaterial) impurity preventing prayer (e.g. natural relief). Removed via Wudu or Ghusl.\n• An-Najasah: Physical, tangible filth (e.g. urine, blood). Cleaned by washing the affected area."
        }
      }
    ],
    keyPoints: {
      fr: [
        "L'eau purifiante (Al-Ma' Al-Mutlaq) est la seule utilisable pour la purification rituelle.",
        "L'altération de la couleur, du goût ou de l'odeur par un produit étranger annule son pouvoir purifiant.",
        "L'eau de mer, de puits et de pluie sont toutes purifiantes par nature."
      ],
      en: [
        "Purifying water (Al-Ma' Al-Mutlaq) is the only type allowed for ritual purification.",
        "Alteration of taste, color, or smell by foreign substances removes its purifying status.",
        "Sea water, well water, and rain water are naturally purifying."
      ]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Qu'est-ce que 'Al-Ma' Al-Mutlaq' en jurisprudence musulmane ?",
          en: "What is 'Al-Ma' Al-Mutlaq' in Islamic jurisprudence?"
        },
        options: {
          fr: [
            "Une eau mélangée à du parfum",
            "Une eau pure et purifiante qui conserve sa nature originelle",
            "Une eau bouillie uniquement avec des plantes",
            "Une eau réservée exclusivement à la boisson"
          ],
          en: [
            "Water mixed with perfume",
            "Pure and purifying water in its natural state",
            "Water boiled strictly with herbs",
            "Water meant exclusively for drinking"
          ]
        },
        answer: 1,
        explanation: {
          fr: "Al-Ma' Al-Mutlaq désigne l'eau naturelle à l'état pur (pluie, puits, mer) qui n'a pas été altérée.",
          en: "Al-Ma' Al-Mutlaq refers to natural water in its pure state (rain, well, sea) that remains unaltered."
        }
      },
      {
        id: 2,
        question: {
          fr: "Quels sont les trois attributs de l'eau à vérifier ?",
          en: "What are the three attributes of water to verify?"
        },
        options: {
          fr: [
            "La température, la quantité et le récipient",
            "La couleur, le goût et l'odeur",
            "La provenance, le prix et la clarté",
            "La profondeur, la vitesse et le volume"
          ],
          en: [
            "Temperature, quantity, and container",
            "Color, taste, and smell",
            "Origin, price, and clarity",
            "Depth, speed, and volume"
          ]
        },
        answer: 1,
        explanation: {
          fr: "Si l'un des trois attributs (couleur, goût, odeur) est altéré, l'eau perd ses propriétés purifiantes.",
          en: "If any of the three attributes (color, taste, smell) is altered, the water loses its purifying status."
        }
      }
    ]
  },
  {
    id: "1.2",
    chapterId: 1,
    title: {
      fr: "Leçon 1.2 : Les Obligations des Ablutions (Fara'id Al-Wudu)",
      en: "Lesson 1.2: Obligatory Acts of Ablution (Fara'id Al-Wudu)"
    },
    arabicText: "فَرَائِضُ الوُضُوءِ سَبْعَةٌ: النِّيَّةُ، وَغَسْلُ الوَجْهِ، وَغَسْلُ اليَدَيْنِ إِلَى المِرْفَقَيْنِ، وَمَسْحُ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الكَعْبَيْنِ، وَالدَّلْكُ، وَالـمُوَالَاةُ.",
    frenchTranslation: "Les actes obligatoires (Fara'id) des ablutions sont au nombre de sept : 1) L'intention, 2) Le lavage du visage, 3) Le lavage des mains jusqu'aux coudes compris, 4) L'essuyage de la tête, 5) Le lavage des pieds jusqu'aux chevilles comprises, 6) Le frottement (Dalk), 7) La continuité sans interruption (Muwalah).",
    englishTranslation: "The obligatory elements (Fara'id) of Wudu are seven: 1) Intention (Niyyah), 2) Washing the face, 3) Washing the arms up to the elbows, 4) Wiping the head, 5) Washing the feet up to the ankles, 6) Rubbing/Scrubbing (Dalk), 7) Continuity without interruption (Muwalah).",
    explanations: [
      {
        concept: {
          fr: "Les 7 Piliers du Wudu dans l'école Malikite",
          en: "The 7 Pillars of Wudu in the Maliki School"
        },
        description: {
          fr: "Le Wudu est invalide si l'un de ces 7 piliers est omis :\n1. Intention (Niyyah)\n2. Lavage du visage\n3. Lavage des bras jusqu'aux coudes inclus\n4. Essuyage de toute la tête\n5. Lavage des pieds jusqu'aux chevilles\n6. Frottement de la main sur la peau mouillée (Dalk)\n7. Enchaînement sans pause prolongée (Muwalah)",
          en: "Wudu is invalid if any of these 7 pillars is omitted:\n1. Intention (Niyyah)\n2. Washing the face\n3. Washing arms including elbows\n4. Wiping the entire head\n5. Washing feet including ankles\n6. Rubbing skin with hand while washing (Dalk)\n7. Continuous flow without long breaks (Muwalah)"
        }
      }
    ],
    keyPoints: {
      fr: [
        "Les Fara'id du Wudu sont au nombre de 7.",
        "Le frottement (Dalk) et la continuité (Muwalah) sont des obligations strictes chez les Malikites."
      ],
      en: [
        "The obligatory acts of Wudu are 7.",
        "Rubbing (Dalk) and continuity (Muwalah) are strict obligations in the Maliki school."
      ]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Combien d'actes obligatoires compte le Wudu selon l'école Malikite ?",
          en: "How many obligatory acts are there in Wudu according to the Maliki school?"
        },
        options: {
          fr: ["4 actes", "5 actes", "7 actes", "10 actes"],
          en: ["4 acts", "5 acts", "7 acts", "10 acts"]
        },
        answer: 2,
        explanation: {
          fr: "L'école Malikite exige 7 obligations strictes pour la validité du Wudu.",
          en: "The Maliki school requires 7 strict obligations for Wudu to be valid."
        }
      }
    ]
  }
];

export default function FiqhApp() {
  const [lang, setLang] = useState<Language>("fr");
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

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
  };

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

  const handleNextQuestion = () => {
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
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const handleSelectLesson = (index: number) => {
    if (index <= unlockedLessonIndex) {
      setCurrentLessonIndex(index);
      setViewMode("course");
      handleResetQuiz();
    }
  };

  const isPassed = score >= Math.ceil(lesson.quiz.length * 0.75);

  const UI_TEXT = {
    fr: {
      subtitle: "FIQH MALIKITE — MATN AL-AKHDARI",
      level: "Niveau",
      lessons: "Leçons",
      allLessons: "Toutes les leçons",
      locked: "Verrouillé",
      courseTab: "Cours & Explications",
      quizTab: "Quiz",
      translationTitle: "Traduction",
      explanationsTitle: "Explications Détaillées",
      keyPointsTitle: "Points clés à retenir",
      nextStep: "Étape suivante : Passer au Quiz",
      question: "Question",
      explanation: "Explication",
      validate: "Valider la réponse",
      nextQuestion: "Question suivante",
      viewResult: "Voir le résultat",
      congrats: "Félicitations !",
      tryAgain: "Encore un effort !",
      scoreMessage: (s: number, total: number) => `Vous avez obtenu ${s} / ${total} bonnes réponses.`,
      restartQuiz: "Recommencer le quiz",
      nextLesson: "Leçon suivante",
      glossaryTitle: "Glossaire Multilingue du Fiqh"
    },
    en: {
      subtitle: "MALIKI FIQH — MATN AL-AKHDARI",
      level: "Level",
      lessons: "Lessons",
      allLessons: "All Lessons",
      locked: "Locked",
      courseTab: "Lesson & Explanations",
      quizTab: "Quiz",
      translationTitle: "Translation",
      explanationsTitle: "Detailed Explanations",
      keyPointsTitle: "Key Takeaways",
      nextStep: "Next Step: Take the Quiz",
      question: "Question",
      explanation: "Explanation",
      validate: "Submit Answer",
      nextQuestion: "Next Question",
      viewResult: "View Results",
      congrats: "Congratulations!",
      tryAgain: "Keep Trying!",
      scoreMessage: (s: number, total: number) => `You scored ${s} / ${total}.`,
      restartQuiz: "Retake Quiz",
      nextLesson: "Next Lesson",
      glossaryTitle: "Multilingual Fiqh Glossary"
    }
  };

  const text = UI_TEXT[lang];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-6 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
              {text.subtitle}
            </span>
            <h1 className="text-xl md:text-2xl font-bold mt-1">{lesson.title[lang]}</h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="bg-emerald-800 border border-emerald-700 rounded-lg p-1 flex items-center gap-1">
              <Globe className="w-4 h-4 ml-2 text-emerald-300" />
              <button
                onClick={() => toggleLanguage("fr")}
                className={`px-2 py-1 text-xs rounded font-bold transition ${
                  lang === "fr" ? "bg-emerald-600 text-white" : "text-emerald-200 hover:text-white"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => toggleLanguage("en")}
                className={`px-2 py-1 text-xs rounded font-bold transition ${
                  lang === "en" ? "bg-emerald-600 text-white" : "text-emerald-200 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <div className="bg-emerald-800 border border-emerald-700 px-3 py-1.5 rounded-lg text-xs md:text-sm">
              {text.level} : <span className="font-bold text-emerald-300">{unlockedLessonIndex + 1} / {LESSONS.length} {text.lessons}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Barre Latérale */}
        <aside className="md:col-span-1 space-y-2">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">{text.allLessons}</h2>
          {LESSONS.map((l, idx) => {
            const isUnlocked = idx <= unlockedLessonIndex;
            const isSelected = idx === currentLessonIndex;

            return (
              <button
                key={l.id}
                onClick={() => handleSelectLesson(idx)}
                disabled={!isUnlocked}
                className={`w-full text-left p-3 rounded-xl border transition text-xs flex items-center justify-between ${
                  isSelected
                    ? "bg-emerald-700 text-white font-bold border-emerald-700 shadow-sm"
                    : isUnlocked
                    ? "bg-white text-slate-700 hover:bg-emerald-50 border-slate-200"
                    : "bg-slate-200 text-slate-500 border-slate-200 cursor-not-allowed opacity-75"
                }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  {isUnlocked ? (
                    <CheckCircle className={`w-4 h-4 shrink-0 ${isSelected ? "text-emerald-300" : "text-emerald-600"}`} />
                  ) : (
                    <Lock className="w-4 h-4 shrink-0 text-slate-500" />
                  )}
                  <span className="truncate">Leçon {l.id}</span>
                </div>
                {!isUnlocked && (
                  <span className="text-[10px] bg-slate-300 text-slate-700 px-2 py-0.5 rounded font-semibold ml-1 shrink-0">
                    {text.locked}
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Contenu Principal */}
        <section className="md:col-span-3">
          {/* Mode Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setViewMode("course")}
              className={`flex-1 py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${
                viewMode === "course"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <BookOpen className="w-4 h-4" /> {text.courseTab}
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
              <HelpCircle className="w-4 h-4" /> {text.quizTab} ({lesson.quiz.length})
            </button>
          </div>

          {/* MODE COURS */}
          {viewMode === "course" && (
            <div className="space-y-6">
              {/* Texte Arabe */}
              <div className="bg-emerald-50 border-r-4 border-emerald-700 p-6 rounded-2xl shadow-sm text-right">
                <p className="text-xl md:text-2xl font-serif leading-loose text-emerald-950" dir="rtl">
                  {lesson.arabicText}
                </p>
              </div>

              {/* Traduction (Dynamique selon la langue sélectionnée) */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                  {text.translationTitle} ({lang.toUpperCase()})
                </h3>
                <p className="text-slate-800 leading-relaxed italic">
                  {lang === "fr" ? lesson.frenchTranslation : lesson.englishTranslation}
                </p>
              </div>

              {/* Explications */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900 border-b pb-3">{text.explanationsTitle}</h3>

                {lesson.explanations.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-semibold text-emerald-800 text-base">{exp.concept[lang]}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">{exp.description[lang]}</p>
                    {exp.examples && (
                      <ul className="list-disc list-inside text-xs text-slate-600 bg-slate-50 p-3 rounded-lg space-y-1">
                        {exp.examples[lang].map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Points Clés */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-md font-bold text-slate-900 mb-4">{text.keyPointsTitle} :</h3>
                <ul className="space-y-2">
                  {lesson.keyPoints[lang].map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setViewMode("quiz");
                  handleResetQuiz();
                }}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-base"
              >
                {text.nextStep} ({lesson.id}) <ArrowRight className="w-5 h-5" />
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
                      {text.question} {currentQuestionIndex + 1} / {lesson.quiz.length}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6">
                    {currentQuestion.question[lang]}
                  </h3>

                  <div className="space-y-3 mb-6">
                    {currentQuestion.options[lang].map((option, idx) => {
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
                      <span className="font-bold block mb-1">{text.explanation} :</span>
                      {currentQuestion.explanation[lang]}
                    </div>
                  )}

                  <div className="flex justify-end">
                    {!isAnswerSubmitted ? (
                      <button
                        onClick={handleValidateAnswer}
                        disabled={selectedAnswer === null}
                        className="bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold px-6 py-3 rounded-xl transition text-sm"
                      >
                        {text.validate}
                      </button>
                    ) : (
                      <button
                        onClick={handleNextQuestion}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                      >
                        {currentQuestionIndex + 1 < lesson.quiz.length ? text.nextQuestion : text.viewResult}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Award className={`w-16 h-16 mx-auto mb-4 ${isPassed ? "text-emerald-600" : "text-amber-500"}`} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {isPassed ? text.congrats : text.tryAgain}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6">
                    {text.scoreMessage(score, lesson.quiz.length)}
                  </p>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={handleResetQuiz}
                      className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" /> {text.restartQuiz}
                    </button>
                    {isPassed && currentLessonIndex + 1 < LESSONS.length && (
                      <button
                        onClick={() => handleSelectLesson(currentLessonIndex + 1)}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                      >
                        {text.nextLesson} ({LESSONS[currentLessonIndex + 1].id}) <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Mini-Glossaire Fiqh FR/EN/AR */}
          <div className="mt-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">{text.glossaryTitle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-emerald-800 block">طَهَارَة (Taharah)</span>
                <span className="text-slate-600">FR: Purification</span>
                <span className="text-slate-600 block">EN: Purification</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-emerald-800 block">فَرْضٌ / فَرَائِض (Fard)</span>
                <span className="text-slate-600">FR: Obligation</span>
                <span className="text-slate-600 block">EN: Obligatory act</span>
              </div>
              <div className="p-2 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-emerald-800 block">سُنَّةٌ / سُنَن (Sunnah)</span>
                <span className="text-slate-600">FR: Tradition recommandée</span>
                <span className="text-slate-600 block">EN: Recommended practice</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}