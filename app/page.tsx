'use client';

import React, { useState, useEffect } from 'react';

interface Lesson {
  id: string;
  number: string;
  title: string;
  arabicText: string;
  translation: string;
  explanation: string[];
  quiz: { question: string; options: string[]; answerIndex: number }[];
  glossary: { term: string; arabic: string; definition: string }[];
  revisionPoints: string[];
}

const LESSONS: Lesson[] = [
  {
    id: '1.1',
    number: 'Leçon 1.1',
    title: "Les types d'eaux et la purification (At-Taharah)",
    arabicText: "فَصْلٌ: أَنْوَاعُ الْمِيَاهِ وَأَحْكامُ الطَّهَارَةِ. لاَ يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلاَ رَفْعُ الْحَدَثِ إِلاَّ بِالْمَاءِ الْمُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.",
    translation: "Section : Les catégories d'eau et les règles de purification. Il n'est pas permis d'enlever une impureté matérielle (Najasah) ni de lever une impureté rituelle (Hadath) si ce n'est avec de l'eau pure et purifiante (Al-Ma' Al-Moutlaq) dont ni la couleur, ni le goût, ni l'odeur n'ont été altérés par ce qui lui est habituellement étranger.",
    explanation: [
      "La purification (Taharah) est la condition essentielle pour la validité de la prière.",
      "L'eau pure et purifiante (Al-Ma' Al-Moutlaq) conserve toutes ses caractéristiques naturelles d'origine (eau de pluie, de source, de puits, de mer).",
      "Si l'eau change d'odeur, de couleur ou de goût à cause d'une substance propre (comme du thé, du jus ou du savon), elle reste propre mais perde son caractère purifiant pour les ablutions."
    ],
    quiz: [
      {
        question: "Quelle eau peut être utilisée pour faire l'ablution (Wudu) ?",
        options: ["Eau de fleur d'oranger", "Eau pure et purifiante (Al-Ma' Al-Moutlaq)", "Eau mélangée à du savon"],
        answerIndex: 1
      },
      {
        question: "Que se passe-t-il si la couleur ou le goût de l'eau change avec du jus ?",
        options: ["Elle devient impure", "Elle reste purifiante", "Elle reste propre mais ne purifie plus"],
        answerIndex: 2
      }
    ],
    glossary: [
      { term: "At-Taharah", arabic: "الطَّهَارَة", definition: "La purification rituelle du corps, des habits et du lieu." },
      { term: "Al-Hadath", arabic: "الْحَدَث", definition: "L'état d'impureté spirituelle/rituelle nécessitant l'ablution ou le grand lavage." },
      { term: "Najasah", arabic: "النَّجَاسَة", definition: "Impureté matérielle physique (ex: urine, sang)." }
    ],
    revisionPoints: [
      "Retenir la définition de l'eau purifiante (Al-Ma' Al-Moutlaq).",
      "Distinguer la différence entre lever le Hadath (impureté rituelle) et enlever la Najasah (impureté physique).",
      "Connaître les 3 caractéristiques de l'eau : couleur, goût, odeur."
    ]
  },
  {
    id: '1.2',
    number: 'Leçon 1.2',
    title: "Les Obligations de l'Ablution (Wudu)",
    arabicText: "فَرَائِضُ الْوُضُوءِ سَبْعَةٌ: النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ، وَغَسْلُ الْوَجْهِ، وَغَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ جَمِيعِ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ، وَالدَّلْكُ، وَالْمُوَالاَةُ.",
    translation: "Les obligations de l'ablution sont au nombre de sept : l'intention au moment du lavage du visage, le lavage du visage, le lavage des bras jusqu'aux coudes inclus, l'essuyage complet de la tête, le lavage des pieds jusqu'aux chevilles incluses, le frictionnement (Dalk) et la continuité (Muwalah).",
    explanation: [
      "Dans l'école Malikite, les obligations (Farā'iḍ) du Wudu sont au nombre de 7.",
      "Le frictionnement (Dalk) consiste à passer la main sur le membre en même temps que l'eau ou juste après.",
      "La continuité (Muwalah) signifie enchaîner le lavage des membres sans interruption prolongée permettant au membre précédent de sécher dans des conditions normales."
    ],
    quiz: [
      {
        question: "Combien y a-t-il d'obligations (Farā'iḍ) dans l'ablution selon l'école Malikite ?",
        options: ["4 obligations", "6 obligations", "7 obligations"],
        answerIndex: 2
      },
      {
        question: "Qu'est-ce que le 'Dalk' dans l'ablution ?",
        options: ["Rincer la bouche", "Le frictionnement du membre avec la main", "L'intention dans le cœur"],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "An-Niyyah", arabic: "النِّيَّة", definition: "L'intention formulée dans le cœur pour accomplir l'acte d'adoration." },
      { term: "Ad-Dalk", arabic: "الدَّلْك", definition: "Frictionner la peau avec la main lors du lavage." },
      { term: "Al-Muwalah", arabic: "الْمُوَالاَة", definition: "Enchaîner les actes de l'ablution sans pause prolongée." }
    ],
    revisionPoints: [
      "Répéter de mémoire les 7 obligations du Wudu.",
      "Assurer l'intention au moment exact du lavage du visage.",
      "Ne pas oublier d'inclure les coudes et les chevilles lors du lavage."
    ]
  }
];

export default function FiqhAppPage() {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'cours' | 'quiz' | 'glossaire' | 'revision'>('cours');
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [rate, setRate] = useState(0.8);

  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});

  const currentLesson = LESSONS[selectedLessonIndex] || LESSONS[0];

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSelectLesson = (index: number) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setSelectedLessonIndex(index);
    setQuizAnswers({});
  };

  const togglePlay = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert("Votre navigateur ne supporte pas la synthèse vocale.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentLesson.arabicText);
      utterance.lang = 'ar-SA';
      utterance.rate = rate;

      utterance.onend = () => {
        if (isLooping) {
          togglePlay();
        } else {
          setIsPlaying(false);
        }
      };

      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const cycleSpeed = () => {
    const speeds = [0.6, 0.8, 1.0, 1.2];
    const nextRate = speeds[(speeds.indexOf(rate) + 1) % speeds.length];
    setRate(nextRate);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleQuizSelect = (qIdx: number, oIdx: number) => {
    setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
  };

  return (
    <div className="min-h-screen bg-[#f4f7f5] text-slate-800 font-sans pb-12">
      {/* Header */}
      <header className="bg-[#0b5c3a] text-white px-6 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-emerald-200 text-xs font-semibold tracking-wider uppercase mb-2">
                FIQH MALIKITE — MATN AL-AKHDARI
              </p>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                {currentLesson.number} : {currentLesson.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-3.5 py-2 rounded-lg text-xs flex items-center gap-2 shadow-sm">
                📲 Installer l'App
              </button>
              <div className="bg-emerald-950/40 p-1.5 rounded-lg border border-emerald-700/60 flex items-center gap-1 text-xs">
                <span>🌐</span>
                <span className="font-bold text-white px-1.5 py-0.5 rounded bg-emerald-700">FR</span>
                <span className="text-emerald-300 px-1.5 py-0.5">EN</span>
              </div>
            </div>
          </div>

          <div className="mt-4 inline-block bg-emerald-900/50 text-emerald-200 text-xs font-medium px-3 py-1 rounded-md border border-emerald-700/50">
            Niveau : <span className="font-bold text-white">{selectedLessonIndex + 1} / {LESSONS.length}</span>
          </div>

          <div className="mt-4 max-w-full">
            <div className="flex justify-between text-xs text-emerald-200 mb-1 font-medium">
              <span>Progression globale</span>
              <span>{Math.round(((selectedLessonIndex + 1) / LESSONS.length) * 100)}%</span>
            </div>
            <div className="w-full bg-emerald-950/60 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full transition-all duration-300"
                style={{ width: `${((selectedLessonIndex + 1) / LESSONS.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Navigation Leçons */}
        <aside className="md:col-span-1 space-y-2">
          <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3 px-1">
            TOUTES LES LEÇONS
          </h3>
          <div className="space-y-2">
            {LESSONS.map((lesson, index) => {
              const isSelected = selectedLessonIndex === index;
              return (
                <button
                  key={lesson.id}
                  onClick={() => handleSelectLesson(index)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${
                    isSelected
                      ? 'bg-[#0b5c3a] text-white shadow'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400' : 'bg-emerald-500'}`} />
                    {lesson.number}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Zone de contenu dynamic */}
        <main className="md:col-span-3 space-y-6">
          
          {/* Navigation Onglets */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-200/50 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab('cours')}
              className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'cours' ? 'bg-[#0b5c3a] text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📖 Cours
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'quiz' ? 'bg-[#0b5c3a] text-white shadow' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60'
              }`}
            >
              ❓ Quiz
            </button>
            <button
              onClick={() => setActiveTab('glossaire')}
              className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'glossaire' ? 'bg-[#0b5c3a] text-white shadow' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60'
              }`}
            >
              📚 Glossaire
            </button>
            <button
              onClick={() => setActiveTab('revision')}
              className={`flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'revision' ? 'bg-[#0b5c3a] text-white shadow' : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200/60'
              }`}
            >
              🔄 Révision
            </button>
          </div>

          {/* ONGLET 1: COURS */}
          {activeTab === 'cours' && (
            <div className="space-y-6">
              {/* Carte Audio + Texte Arabe */}
              <div className="bg-emerald-50/40 border border-emerald-200/60 rounded-2xl p-6 shadow-sm">
                <p
                  className="text-2xl md:text-3xl font-serif text-right leading-loose text-slate-900 font-medium mb-6"
                  lang="ar"
                  dir="rtl"
                >
                  {currentLesson.arabicText}
                </p>

                <div className="pt-4 border-t border-emerald-300/60 flex flex-wrap items-center justify-between gap-4 bg-white p-3 px-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className={`px-4 py-2 rounded-full text-white text-xs font-bold flex items-center gap-2 transition-all shadow ${
                        isPlaying ? 'bg-amber-600 hover:bg-amber-700' : 'bg-[#0b5c3a] hover:bg-emerald-800'
                      }`}
                    >
                      {isPlaying ? '⏸️ Pause' : '▶️ Écouter la récitation'}
                    </button>
                    <button
                      onClick={() => setIsLooping(!isLooping)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        isLooping
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      🔁 {isLooping ? 'Boucle activée' : 'Mode Boucle (Hifz)'}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">Vitesse :</span>
                    <button
                      onClick={cycleSpeed}
                      className="px-3 py-1 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md border border-slate-300 shadow-sm"
                    >
                      {rate}x
                    </button>
                  </div>
                </div>
              </div>

              {/* Traduction */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  TRADUCTION (FR)
                </h4>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                  {currentLesson.translation}
                </p>
              </div>

              {/* Explications détaillées du cours */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
                  EXPLICATION DÉTAILLÉE (SHARH)
                </h4>
                <ul className="space-y-3">
                  {currentLesson.explanation.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ONGLET 2: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
              <h3 className="text-base font-bold text-slate-900">
                Quiz d'évaluation — {currentLesson.number}
              </h3>
              {currentLesson.quiz.map((q, qIdx) => (
                <div key={qIdx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 space-y-3">
                  <p className="font-semibold text-sm text-slate-800">{qIdx + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((option, oIdx) => {
                      const selected = quizAnswers[qIdx] === oIdx;
                      const isCorrect = oIdx === q.answerIndex;
                      const hasAnswered = quizAnswers[qIdx] !== undefined;

                      let btnStyle = "bg-white text-slate-700 border-slate-200 hover:bg-slate-100";
                      if (hasAnswered) {
                        if (isCorrect) btnStyle = "bg-emerald-100 text-emerald-900 border-emerald-400 font-bold";
                        else if (selected) btnStyle = "bg-red-100 text-red-900 border-red-300";
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleQuizSelect(qIdx, oIdx)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-medium border transition-all ${btnStyle}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ONGLET 3: GLOSSAIRE */}
          {activeTab === 'glossaire' && (
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Termes clés de la leçon
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {currentLesson.glossary.map((item, idx) => (
                  <div key={idx} className="p-4 bg-emerald-50/30 rounded-xl border border-emerald-100 flex flex-col md:flex-row justify-between gap-2">
                    <div>
                      <span className="font-bold text-emerald-900 text-sm">{item.term}</span>
                      <p className="text-xs text-slate-600 mt-1">{item.definition}</p>
                    </div>
                    <span className="text-xl font-serif text-emerald-800 self-start md:self-center" lang="ar" dir="rtl">
                      {item.arabic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ONGLET 4: RÉVISION */}
          {activeTab === 'revision' && (
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Points clés à retenir (Fiche de Révision)
              </h3>
              <div className="space-y-3">
                {currentLesson.revisionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-amber-50/50 rounded-lg border border-amber-200/60">
                    <span className="text-amber-600 font-bold">✓</span>
                    <p className="text-xs md:text-sm font-medium text-slate-800">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}