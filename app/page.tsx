"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, Lock, BookOpen, Award, ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  quiz: Question[];
}

const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "Chapitre 1 : L'Obligation de l'Apprentissage et du Repentir",
    subtitle: "Les fondements de la responsabilité du musulman (At-Tawbah)",
    summary:
      "Ce premier chapitre aborde les obligations fondamentales de tout musulman pubère et doué de raison (Mukallaf). Il traite de l'obligation d'apprendre les règles de la religion nécessaires au quotidien et de l'impératif du repentir immédiat.",
    details: [
      "1. La responsabilité légale (Al-Taklif) : Elle incombe à toute personne ayant atteint la majorité légale (la puberté) et jouissant de ses facultés mentales.",
      "2. L'obligation de la science individuelle (Fard 'Ayn) : Il est obligatoire pour chaque croyant d'apprendre les règles qui régissent ses obligations quotidiennes (prière, purification, jeûne, ainsi que les règles du commerce s'il est commerçant).",
      "3. La réalité du Repentir (At-Tawbah) : Le repentir est une obligation immédiate pour tout péché. Il ne s'agit pas seulement d'une formule verbale.",
      "4. Les conditions du Repentir sincère : 1) Le regret du péché commis, 2) L'arrêt immédiat du péché, 3) La ferme résolution de ne plus jamais y revenir.",
      "5. La restitution des droits : Si le péché implique le droit d'un être humain (vol, injustice), le repentir n'est complet qu'après avoir rendu le droit à son propriétaire ou demandé son pardon."
    ],
    quiz: [
      {
        id: 1,
        question: "À partir de quand une personne devient-elle légalement responsable (Mukallaf) en Islam ?",
        options: [
          "Dès l'âge de 7 ans",
          "Lorsqu'elle atteint la puberté et possède la raison",
          "À partir de 18 ans révolus",
          "Uniquement lorsqu'elle a accompli le Hajj"
        ],
        answer: 1,
        explanation: "La responsabilité légale (Al-Taklif) commence à la puberté pour toute personne jouissant de sa raison."
      },
      {
        id: 2,
        question: "Qu'appelle-t-on la science dont l'apprentissage est une obligation individuelle (Fard 'Ayn) ?",
        options: [
          "L'apprentissage de l'astronomie et des sciences profanes",
          "L'apprentissage complet de la mémorisation du Coran",
          "L'apprentissage des règles nécessaires pour accomplir correctement ses obligations quotidiennes (prière, purification...)",
          "La maîtrise approfondie de l'héritage légal"
        ],
        answer: 2,
        explanation: "Chaque musulman doit obligatoirement apprendre la science nécessaire à la pratique de ses devoirs quotidiens."
      },
      {
        id: 3,
        question: "Quelles sont les trois conditions principales du repentir vis-à-vis d'Allah ?",
        options: [
          "Le regret, l'arrêt du péché et la ferme résolution de ne pas y revenir",
          "Jeûner trois jours, donner l'aumône et demander pardon",
          "Faire les grandes ablutions et prier deux rak'ahs",
          "Attendre le mois de Ramadan pour demander le pardon"
        ],
        answer: 0,
        explanation: "Le repentir sincère envers Allah requiert le regret, la cessation immédiate du péché et l'intention ferme de ne plus le commettre."
      },
      {
        id: 4,
        question: "Si le péché concerne le droit d'une personne (ex: un vol), quelle est la condition supplémentaire ?",
        options: [
          "Multiplier les prières surérogatoires",
          "Rendre le droit à son propriétaire ou obtenir son pardon",
          "Demander pardon uniquement à Allah dans le secret",
          "Donner le double du montant volé aux pauvres"
        ],
        answer: 1,
        explanation: "Les injustices envers les créatures nécessitent la restitution du droit ou l'absolution accordée par la victime."
      }
    ]
  },
  {
    id: 2,
    title: "Chapitre 2 : Les Grandes Ablutions et la Purification Majeure",
    subtitle: "Règles du Ghusl et des impuretés majeures (Al-Janabah)",
    summary:
      "Ce chapitre détaille les causes qui rendent le lavage mortuaire ou rituel obligatoire (Ghusl), les obligations (Fara'id) et traditions (Sunan) liées à cette purification majeure selon l'école Malikite.",
    details: [
      "1. Les causes rendant le Ghusl obligatoire : La grande impureté (Janabah) causée par les rapports intimes ou l'émission de liquide séminal, ainsi que la fin de la période des menstrues (Hayd) et des lochies (Nifas).",
      "2. Les obligations du Ghusl (Fara'id) : 1) L'intention (Niyyah), 2) Le fait de faire couler l'eau sur tout le corps, 3) Le frottement du corps avec la main (Dalk), 4) La continuité sans interruption prolongée (Muwalah).",
      "3. Les Sunan du Ghusl : Le lavage initial des mains jusqu'aux poignets, le rinçage de la bouche (Madmadah), l'aspiration/expiration de l'eau par le nez (Istinshaq), et le lavage des oreilles.",
      "4. L'ordre recommandé : Commencer par laver les parties intimes, accomplir les ablutions mineures (sans laver les pieds ou en les lavant), puis verser l'eau sur la tête trois fois en frottant le cuir chevelu, puis laver le côté droit du corps, puis le côté gauche."
    ],
    quiz: [
      {
        id: 1,
        question: "Parmi les actes suivants, lequel est une obligation (Fard) du Ghusl selon l'école Malikite ?",
        options: [
          "Le rinçage de la bouche (Madmadah)",
          "Le frottement du corps avec la main (Dalk)",
          "Commencer par le côté droit",
          "Répéter le lavage trois fois"
        ],
        answer: 1,
        explanation: "Le Dalk (frottement du corps avec la main pendant que l'eau coule) est une obligation dans le madhhab malikite."
      },
      {
        id: 2,
        question: "Quelle est la première chose à formuler intérieurement avant de commencer le Ghusl ?",
        options: [
          "La récitation à haute voix de la Fatiha",
          "L'intention (Niyyah) de se purifier de la grande impureté",
          "L'invocation de clôture des ablutions",
          "Le Takbir"
        ],
        answer: 1,
        explanation: "L'intention est une condition et une obligation indispensable pour la validité du Ghusl."
      },
      {
        id: 3,
        question: "Laquelle de ces situations rend le Ghusl obligatoire ?",
        options: [
          "Le sommeil profond allongé",
          "L'émission de gaz",
          "La fin de la période des menstrues",
          "Le fait de toucher une impureté avec la main"
        ],
        answer: 2,
        explanation: "La fin des menstrues et des lochies impose la réalisation du Ghusl pour pouvoir reprendre la prière."
      },
      {
        id: 4,
        question: "Que signifie la 'Muwalah' dans le cadre du Ghusl ?",
        options: [
          "Sécher le corps avec une serviette propre",
          "Faire couler l'eau trois fois sur chaque membre",
          "L'enchaînement continu des actes sans interruption prolongée",
          "Utiliser au minimum un litre d'eau"
        ],
        answer: 2,
        explanation: "La Muwalah consiste à réaliser la purification d'un seul trait sans laisser les membres sécher entre les étapes."
      }
    ]
  },
  {
    id: 3,
    title: "Chapitre 3 : Les Conditions et Piliers de la Prière",
    subtitle: "Shuroot wa Arkan As-Salah",
    summary:
      "Ce chapitre présente les conditions préalables indispensables avant de commencer la prière ainsi que les piliers (éléments fondamentaux) qui composent la prière elle-même.",
    details: [
      "1. Les conditions de validité (Shuroot As-Sihhah) : 1) La purification des impuretés rituelles et matérielles (corps, habits, lieu), 2) Le recouvrement de la 'Awrah, 3) L'orientation vers la Qibla, 4) L'entrée du temps prescrit.",
      "2. La 'Awrah dans la prière : Pour l'homme, du nombril aux genoux. Pour la femme libre, tout le corps à l'exception du visage et des mains.",
      "3. Les Piliers de la prière (Arkan As-Salah) : Ce sont les éléments sans lesquels la prière est invalide. Ils incluent : L'intention, le Takbir d'ouverture (Takbirat Al-Ihram), la station debout pour ce Takbir, la récitation de la Fatiha pour l'imam et celui qui prie seul, le Ruku' (inclinaison), le Sujud (prosternation) sur le front, le redressement de ces postures, et le Salam final.",
      "4. Le respect du rythme (At-Tuma'ninah) : Le repos marqué dans chaque position (Ruku', Sujud) est un pilier essentiel. Prier de manière précipitée annule la prière."
    ],
    quiz: [
      {
        id: 1,
        question: "Quelle est la 'Awrah de l'homme à couvrir obligatoirement durant la prière ?",
        options: [
          "Des épaules jusqu'aux chevilles",
          "Du nombril jusqu'aux genoux",
          "Seulement le buste",
          "Tout le corps sauf la tête"
        ],
        answer: 1,
        explanation: "La 'Awrah minimale de l'homme dans la prière s'étend du nombril jusqu'aux genoux."
      },
      {
        id: 2,
        question: "Quel est le statut du respect du rythme et du repos (Tuma'ninah) dans chaque posture ?",
        options: [
          "C'est une simple recommandation (Fadilah)",
          "C'est une tradition appuyée (Sunnah Mu'akkadah)",
          "C'est un pilier obligatoire (Rukn) sans lequel la prière est nulle",
          "C'est facultatif si l'on est pressé"
        ],
        answer: 2,
        explanation: "La Tuma'ninah (s'immobiliser un instant dans chaque position) est un pilier fondamental de la prière."
      },
      {
        id: 3,
        question: "Laquelle de ces propositions est une condition préalable (Shart) et non un pilier interne de la prière ?",
        options: [
          "La prosternation (Sujud)",
          "L'orientation vers la Qibla",
          "La récitation de la sourate Al-Fatiha",
          "L'inclinaison (Ruku')"
        ],
        answer: 1,
        explanation: "S'orienter vers la Qibla est une condition de validité qui doit être réalisée avant même de commencer la prière."
      },
      {
        id: 4,
        question: "Que se passe-t-il si une personne prie sciemment avant l'entrée du temps prescrit ?",
        options: [
          "Sa prière est valide mais détestable",
          "Sa prière compte comme une prière surérogatoire et valide son obligation",
          "Sa prière est totalement invalide et doit être refaite dans son temps",
          "Elle doit simplement faire deux prosternations d'oubli"
        ],
        answer: 2,
        explanation: "L'entrée du temps prescrit est une condition obligatoire. Prier avant l'heure rend la prière nulle."
      }
    ]
  },
  {
    id: 4,
    title: "Chapitre 4 : Les Erreurs et la Prosternation d'Oubli",
    subtitle: "Sujud As-Sahw (Sujud Al-Qabli et Al-Ba'di)",
    summary:
      "Ce chapitre explique comment corriger les erreurs, omissions ou ajouts involontaires commis pendant la prière grâce aux prosternations de réparation.",
    details: [
      "1. La prosternation antérieure (Sujud Al-Qabli) : Elle s'effectue AVANT le Salam final. Elle est requise en cas d'omission involontaire de deux Sunnan ou plus (par exemple oublier le premier Tashahhud).",
      "2. La prosternation postérieure (Sujud Al-Ba'di) : Elle s'effectue APPRÈS le Salam final. Elle est requise en cas d'ajout involontaire dans la prière (par exemple faire une inclinaison ou une Raka'ah supplémentaire).",
      "3. Cumul de l'omission et de l'ajout : Si le prieur commet à la fois un oubli (omission de Sunnah) et un ajout, la prosternation antérieure (Qabli) prime et s'effectue avant le Salam.",
      "4. Omission d'un Pilier (Rukn) : Le Sujud As-Sahw ne peut JAMAIS remplacer un pilier oublié (comme la Fatiha ou le Ruku'). Si un pilier est omis, la Raka'ah entière est nulle et doit être remplacée, puis suivie d'un Sujud Ba'di."
    ],
    quiz: [
      {
        id: 1,
        question: "Quand doit-on effectuer le Sujud Al-Qabli (prosternation antérieure) ?",
        options: [
          "Après avoir prononcé le Salam final",
          "Avant la récitation de la Fatiha",
          "Juste avant de prononcer le Salam final",
          "Au tout début de la prière"
        ],
        answer: 2,
        explanation: "Le Sujud Al-Qabli s'accomplit juste avant le Salam final pour réparer une omission de Sunnan."
      },
      {
        id: 2,
        question: "Quelle prosternation doit-on faire si l'on a ajouté par erreur une 5ème Raka'ah dans une prière de 4 Raka'at ?",
        options: [
          "Sujud Al-Qabli (avant le Salam)",
          "Sujud Al-Ba'di (après le Salam)",
          "Aucune prosternation n'est nécessaire",
          "Il faut recommencer toute la prière"
        ],
        answer: 1,
        explanation: "Un ajout involontaire dans la prière se répare au moyen du Sujud Al-Ba'di, effectué après le Salam."
      },
      {
        id: 3,
        question: "Si l'on oublie un pilier fondamental (Rukn) comme le Ruku', le Sujud As-Sahw suffit-il à réparer ?",
        options: [
          "Oui, deux prosternations suffisent",
          "Non, le pilier omis doit obligatoirement être rattrapé",
          "Oui, à condition de donner une aumône",
          "Non, la prière est définitivement annulée sans rattrapage possible"
        ],
        answer: 1,
        explanation: "Un pilier (Rukn) ne peut jamais être compensé par une simple prosternation. La Raka'ah doit être reconstruite."
      },
      {
        id: 4,
        question: "Que fait-on si l'on a à la fois omis une Sunnah et commis un ajout involontaire ?",
        options: [
          "On fait deux prosternations avant le Salam et deux après le Salam",
          "La prosternation antérieure (Qabli) prend le dessus et s'effectue avant le Salam",
          "La prosternation postérieure (Ba'di) s'impose",
          "On annule la prière"
        ],
        answer: 1,
        explanation: "En cas de combinaison d'omission et d'ajout, la règle prioritaire est d'accomplir le Sujud Al-Qabli."
      }
    ]
  }
];

export default function FiqhApp() {
  const [unlockedChapter, setUnlockedChapter] = useState<number>(1);
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const currentChapter = CHAPTERS.find((ch) => ch.id === selectedChapterId) || CHAPTERS[0];
  const currentQuestion = currentChapter.quiz[currentQuestionIndex];

  // Sauvegarder la progression
  const handleAnswerSelect = (index: number) => {
    if (!isAnswerSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleValidateAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex + 1 < currentChapter.quiz.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      
      // Si le score est >= 75% (ex: 3 sur 4)
      const passed = score >= Math.ceil(currentChapter.quiz.length * 0.75);
      if (passed && currentChapter.id === unlockedChapter) {
        const nextLevel = unlockedChapter + 1;
        setUnlockedChapter(nextLevel);
      }

      // Appel API de sauvegarde du progrès
      try {
        await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chapterId: currentChapter.id,
            score: score,
            totalQuestions: currentChapter.quiz.length,
            passed: passed
          })
        });
      } catch (error) {
        console.error("Erreur lors de la sauvegarde du progrès :", error);
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

  const handleSelectChapter = (id: number) => {
    if (id <= unlockedChapter) {
      setSelectedChapterId(id);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setScore(0);
      setIsQuizCompleted(false);
    }
  };

  const isPassed = score >= Math.ceil(currentChapter.quiz.length * 0.75);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-emerald-800 text-white py-6 shadow-md">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-7 h-7 text-emerald-300" />
              Fiqh App - Matn Al-Akhdari
            </h1>
            <p className="text-emerald-200 text-sm mt-1">
              Apprenez les règles essentielles de la purification et de la prière
            </p>
          </div>
          <div className="bg-emerald-900 px-4 py-2 rounded-lg border border-emerald-700 text-sm">
            Niveau débloqué : <span className="font-bold text-emerald-300">{unlockedChapter} / {CHAPTERS.length}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Navigation des Chapitres */}
        <aside className="md:col-span-1 space-y-3">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Chapitres du Matn</h2>
          {CHAPTERS.map((ch) => {
            const isUnlocked = ch.id <= unlockedChapter;
            const isSelected = ch.id === selectedChapterId;

            return (
              <button
                key={ch.id}
                onClick={() => handleSelectChapter(ch.id)}
                disabled={!isUnlocked}
                className={`w-text-left p-4 rounded-xl border transition flex items-center justify-between w-full ${
                  isSelected
                    ? "bg-emerald-50 border-emerald-600 text-emerald-900 font-medium shadow-sm"
                    : isUnlocked
                    ? "bg-white border-slate-200 text-slate-700 hover:border-emerald-300"
                    : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-75"
                }`}
              >
                <div className="flex items-center gap-3">
                  {isUnlocked ? (
                    <CheckCircle className={`w-5 h-5 ${isSelected ? "text-emerald-600" : "text-slate-400"}`} />
                  ) : (
                    <Lock className="w-5 h-5 text-slate-400" />
                  )}
                  <span className="text-sm font-medium">Chapitre {ch.id}</span>
                </div>
                {!isUnlocked && <span className="text-xs bg-slate-200 px-2 py-0.5 rounded text-slate-600">Verrouillé</span>}
              </button>
            );
          })}
        </aside>

        {/* Zone de Cours et Quiz */}
        <section className="md:col-span-2 space-y-6">
          
          {/* Section Explications du Cours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              Cours théorique
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-3 mb-1">{currentChapter.title}</h2>
            <p className="text-sm text-slate-500 mb-4">{currentChapter.subtitle}</p>
            
            <p className="text-slate-700 leading-relaxed mb-6 bg-slate-50 p-4 rounded-xl border-l-4 border-emerald-600">
              {currentChapter.summary}
            </p>

            <h3 className="text-md font-semibold text-slate-800 mb-3">Détails et règles à retenir :</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              {currentChapter.details.map((detail, index) => (
                <li key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Section Quiz */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
                Évaluation (Quiz)
              </span>
              {!isQuizCompleted && (
                <span className="text-xs text-slate-500">
                  Question {currentQuestionIndex + 1} sur {currentChapter.quiz.length}
                </span>
              )}
            </div>

            {!isQuizCompleted ? (
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  {currentQuestion.question}
                </h3>

                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, idx) => {
                    let btnStyle = "bg-slate-50 border-slate-200 text-slate-700 hover:border-indigo-300";
                    
                    if (selectedAnswer === idx) {
                      btnStyle = "bg-indigo-50 border-indigo-600 text-indigo-900 font-medium";
                    }

                    if (isAnswerSubmitted) {
                      if (idx === currentQuestion.answer) {
                        btnStyle = "bg-emerald-100 border-emerald-600 text-emerald-900 font-medium";
                      } else if (selectedAnswer === idx) {
                        btnStyle = "bg-red-100 border-red-500 text-red-900";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        disabled={isAnswerSubmitted}
                        className={`w-full text-left p-4 rounded-xl border transition text-sm ${btnStyle}`}
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
                      className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-medium px-6 py-2.5 rounded-xl transition text-sm"
                    >
                      Valider la réponse
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      {currentQuestionIndex + 1 < currentChapter.quiz.length ? "Question suivante" : "Voir le résultat"}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Écran de Fin de Quiz */
              <div className="text-center py-6">
                <Award className={`w-16 h-16 mx-auto mb-3 ${isPassed ? "text-emerald-600" : "text-amber-500"}`} />
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {isPassed ? "Félicitations !" : "Révisez encore un peu"}
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Vous avez obtenu <span className="font-bold text-indigo-600">{score}</span> sur <span className="font-bold">{currentChapter.quiz.length}</span> bonnes réponses.
                  {isPassed
                    ? " Vous avez débloqué le chapitre suivant !"
                    : " Il vous faut au moins 3 bonnes réponses sur 4 pour valider ce chapitre."}
                </p>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleResetQuiz}
                    className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium px-5 py-2.5 rounded-xl transition text-sm flex items-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" /> Recommencer le quiz
                  </button>
                  {isPassed && currentChapter.id < CHAPTERS.length && (
                    <button
                      onClick={() => handleSelectChapter(currentChapter.id + 1)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      Passer au Chapitre {currentChapter.id + 1}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}