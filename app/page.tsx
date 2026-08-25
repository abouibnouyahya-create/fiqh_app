'use client';

import React, { useState, useEffect } from 'react';

interface PracticalCase {
  situation: string;
  ruling: string;
  explanation: string;
}

interface DetailedSection {
  title: string;
  content: string;
  evidences?: string[];
}

interface Lesson {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  arabicText: string;
  translation: string;
  introduction: string;
  sections: DetailedSection[];
  practicalCases: PracticalCase[];
  malikiSubtleties: string[];
  quiz: { question: string; options: string[]; answerIndex: number; explanation: string }[];
  glossary: { term: string; arabic: string; definition: string }[];
}

const LESSONS: Lesson[] = [
  {
    id: '1.1',
    number: 'Leçon 1.1',
    title: "Les Catégories d'Eau et le Statut de la Purification (At-Tahārah)",
    subtitle: "Étude sur la distinction entre eau pure, purifiante et impure en Fiqh Malékite",
    arabicText: "فَصْلٌ: أَنْوَاعُ الْمِيَاهِ وَأَحْكامُ الطَّهَارَةِ. لاَ يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلاَ رَفْعُ الْحَدَثِ إِلاَّ بِالْمَاءِ الْمُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.",
    translation: "Section : Les catégories d'eau et les règles de purification. Il n'est pas permis d'enlever une impureté matérielle (Najasah) ni de lever une impureté rituelle (Hadath) si ce n'est avec de l'eau pure et purifiante (Al-Ma' Al-Mutlaq)...",
    introduction: "La purification (At-Tahārah) est la condition préalable à la validité de la prière. Dans le rite malékite, la purification rituelle (qui lève le Hadath) et le nettoyage des impuretés (Najasah) exigent l'utilisation exclusive d'une eau pure et purifiante (Al-Mā' Al-Muṭlaq).",
    sections: [
      {
        title: "I. Définition et Typologie des Eaux",
        content: "En jurisprudence malékite, l'eau se divise en trois catégories selon ses propriétés :\n\n1. L'Eau Absolue ou Purifiante (Al-Mā' Al-Muṭlaq) :\nEau restée sur sa nature d'origine (pluie, mer, puits, fleuve). Elle est pure en elle-même (Tāhir) et purifiante (Muṭahhir). C'est la SEULE eau valide pour le Wudu et le Ghusl.\n\n2. L'Eau Pure non-purifiante (Mā' Tāhir Ghayr Muṭahhir) :\nEau dont l'une des trois caractéristiques (couleur, goût, odeur) a été modifiée par une substance propre étrangère (thé, jus, savon). Elle reste propre pour la boisson ou la cuisine, mais est INVALIDE pour le Wudu.\n\n3. L'Eau Impure (Mā' Najis) :\nEau dont au moins une caractéristique a été altérée par une impureté matérielle (urine, sang). Son utilisation est strictement interdite.",
        evidences: [
          "Coran (Sourate Al-Anfal, 8:11) : « Et Il fit descendre du ciel une eau sur vous afin de vous purifier par elle. »",
          "Hadith : « L'eau est pure et purifiante, rien ne la rend impure (sauf ce qui altere son odeur, son goût ou sa couleur). »"
        ]
      },
      {
        title: "II. Les Trois Critères d'Évaluation Organoleptiques",
        content: "Le juriste évalue la pureté de l'eau en observant trois critères :\n- La Couleur (Al-Lawn)\n- Le Goût (At-Ta'm)\n- L'Odeur (Ar-Rīḥ)\n\nSi l'un de ces trois facteurs subit une modification par un corps étranger qu'il est possible d'éviter, l'eau perd sa capacité purifiante."
      },
      {
        title: "III. La Règle des Altérations Naturelles Tolérées",
        content: "Si l'eau change à cause d'un élément naturel indissociable du milieu où elle se trouve (ex: la vase au fond d'un puits, la mousse, les minéraux du sol ou les canalisations), L'EAU RESTE PURIFIANTE. La gêne est levée en jurisprudence."
      }
    ],
    malikiSubtleties: [
      "Chez les Malékites, tant que les 3 caractéristiques de l'eau n'ont pas changé, l'eau reste purifiante, même en petite quantité.",
      "L'eau chauffée au soleil (Mā' Mushammas) est totalement valide sans détestation (Karahah)."
    ],
    practicalCases: [
      {
        situation: "Du savon tombe dans une bassine d'eau et l'eau devient moussante.",
        ruling: "Eau Propre mais Non-Purifiante.",
        explanation: "Le savon a altéré la nature de l'eau. Invalide pour le Wudu."
      },
      {
        situation: "L'eau du robinet ressort légèrement jaunâtre à cause de la rouille des tuyaux.",
        ruling: "Eau Purifiante (Mā' Muṭlaq).",
        explanation: "La rouille est liée au stockage/transport et difficile à séparer."
      }
    ],
    quiz: [
      {
        question: "Qu'est-ce que 'Al-Mā' Al-Muṭlaq' ?",
        options: [
          "Une eau mélangée à du parfum",
          "L'eau naturelle n'ayant subi aucune altération de sa couleur, goût ou odeur",
          "L'eau bouillie uniquement"
        ],
        answerIndex: 1,
        explanation: "C'est l'eau absolue restée dans son état naturel."
      }
    ],
    glossary: [
      { term: "Al-Mā' Al-Muṭlaq", arabic: "الْمَاءُ الْمُطْلَق", definition: "Eau absolue, pure et purifiante." },
      { term: "At-Tahārah", arabic: "الطَّهَارَة", definition: "La purification rituelle du corps, des habits et du lieu." }
    ]
  },
  {
    id: '1.2',
    number: 'Leçon 1.2',
    title: "Les Obligations Obligatoires de l'Ablution (Farā'iḍ Al-Wuḍū')",
    subtitle: "Les 7 piliers fondamentaux selon le Fiqh Malékite",
    arabicText: "فَرَائِضُ الْوُضُوءِ سَبْعَةٌ: النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ، وَغَسْلُ الْوَجْهِ، وَغَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ جَمِيعِ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ، وَالدَّلْكُ، وَالْمُوَالاَةُ.",
    translation: "Les obligations de l'ablution sont au nombre de sept : l'intention au moment du lavage du visage, le lavage du visage, le lavage des bras jusqu'aux coudes, l'essuyage complet de la tête, le lavage des pieds jusqu'aux chevilles, le frictionnement (Dalk) et la continuité (Muwalah).",
    introduction: "L'ablution mineure (Wuḍū') repose sur 7 piliers obligatoires (Farā'iḍ). L'omission d'un seul de ces actes rend l'ablution nulle.",
    sections: [
      {
        title: "I. Les 7 Piliers de l'Ablution",
        content: "1. An-Niyyah (L'Intention) : Formulée dans le cœur lors du premier lavage du visage.\n2. Ghasl Al-Wajh (Lavage du visage) : Du haut du front au menton, et d'une oreille à l'autre.\n3. Ghasl Al-Yadayn (Lavage des bras) : Du bout des doigts jusqu'aux coudes inclus.\n4. Masḥ Jamī' Ar-Ra's (Essuyage complet de la tête) : Couvrir l'intégralité du crâne.\n5. Ghasl Ar-Rijlayn (Lavage des pieds) : Jusqu'aux chevilles incluses.\n6. Ad-Dalk (Le Frictionnement) : Passer la main sur le membre avec l'eau.\n7. Al-Muwālāh (La Continuité) : Enchaîner les membres sans interruption."
      }
    ],
    malikiSubtleties: [
      "Le Dalk (frictionner avec la main) est un pilier obligatoire (Fard) uniquement chez les Malékites.",
      "L'essuyage de la tête doit couvrir 100% de la surface du crâne."
    ],
    practicalCases: [
      {
        situation: "Laisser l'eau couler sur son bras sans y passer la main.",
        ruling: "Invalide en Fiqh Malékite.",
        explanation: "Il manque le frictionnement obligatoire (Dalk)."
      }
    ],
    quiz: [
      {
        question: "Combien d'obligations composent l'ablution dans le rite malékite ?",
        options: ["4 obligations", "7 obligations", "10 obligations"],
        answerIndex: 1,
        explanation: "Le Fiqh Malékite compte 7 Farā'iḍ."
      }
    ],
    glossary: [
      { term: "Ad-Dalk", arabic: "الدَّلْك", definition: "Frictionner le membre avec la main lors du lavage." }
    ]
  }
];

export default function FiqhAppPage() {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'cours' | 'pratique' | 'matn' | 'quiz' | 'glossaire'>('cours');
  const [isPlaying, setIsPlaying] = useState(false);
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
    setActiveTab('cours');
  };

  const togglePlay = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentLesson.arabicText);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.85;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-16">
      <header className="bg-[#0f4c3a] text-white border-b border-emerald-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase mb-1">
                <span>📚 Enseignement du Fiqh Malékite</span>
                <span>•</span>
                <span>Matn Al-Akhdari</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {currentLesson.number} : {currentLesson.title}
              </h1>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-3xl">
                {currentLesson.subtitle}
              </p>
            </div>
            <span className="bg-emerald-900/80 text-emerald-200 border border-emerald-700 text-xs px-3 py-1.5 rounded-lg font-semibold">
              Leçon {selectedLessonIndex + 1} / {LESSONS.length}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">
              Programme du Cours
            </h3>
            <nav className="space-y-1.5">
              {LESSONS.map((lesson, index) => {
                const isActive = selectedLessonIndex === index;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => handleSelectLesson(index)}
                    className={`w-full text-left p-3 rounded-xl text-xs font-bold transition-all flex flex-col gap-1 ${
                      isActive
                        ? 'bg-[#0f4c3a] text-white shadow-md'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                    }`}
                  >
                    <span className={`text-[10px] uppercase font-extrabold ${isActive ? 'text-emerald-300' : 'text-emerald-700'}`}>
                      {lesson.number}
                    </span>
                    <span className="line-clamp-2 leading-snug">{lesson.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <main className="lg:col-span-9 space-y-6">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('cours')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'cours' ? 'bg-[#0f4c3a] text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              📖 Cours Magistral
            </button>
            <button
              onClick={() => setActiveTab('pratique')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'pratique' ? 'bg-[#0f4c3a] text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              💡 Cas Pratiques ({currentLesson.practicalCases.length})
            </button>
            <button
              onClick={() => setActiveTab('matn')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'matn' ? 'bg-[#0f4c3a] text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              📜 Texte Matn Arabe
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'quiz' ? 'bg-[#0f4c3a] text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              ✍️ Évaluation
            </button>
            <button
              onClick={() => setActiveTab('glossaire')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'glossaire' ? 'bg-[#0f4c3a] text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              📚 Glossaire
            </button>
          </div>

          {activeTab === 'cours' && (
            <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-8">
              <div className="bg-emerald-50/60 border-l-4 border-[#0f4c3a] p-5 rounded-r-xl">
                <h3 className="text-xs font-black text-[#0f4c3a] uppercase tracking-wider mb-2">
                  Introduction du Cours
                </h3>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {currentLesson.introduction}
                </p>
              </div>

              <div className="space-y-8">
                {currentLesson.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0f4c3a]" />
                      {section.title}
                    </h3>
                    <div className="text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line space-y-2">
                      {section.content}
                    </div>
                    {section.evidences && section.evidences.length > 0 && (
                      <div className="mt-3 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1.5">
                        <span className="font-bold text-emerald-900 uppercase tracking-wider text-[11px] block mb-1">
                          📖 Preuves scripturaires (Adillah) :
                        </span>
                        {section.evidences.map((evidence, eIdx) => (
                          <p key={eIdx} className="italic font-serif text-slate-800">
                            • {evidence}
                          </p>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {currentLesson.malikiSubtleties && (
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 space-y-2">
                  <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-2">
                    <span>⚖️</span> Subtilités du Rite Malékite
                  </h4>
                  <ul className="space-y-2">
                    {currentLesson.malikiSubtleties.map((sub, sIdx) => (
                      <li key={sIdx} className="text-xs sm:text-sm text-amber-950 flex items-start gap-2">
                        <span className="font-bold">•</span>
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          )}

          {activeTab === 'pratique' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 mb-1">Cas Pratiques & Casuistique</h3>
              <div className="space-y-4">
                {currentLesson.practicalCases.map((c, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                    <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex justify-between items-start gap-4">
                      <span className="text-xs font-extrabold text-[#0f4c3a] bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-md">
                        Cas #{idx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-800 bg-white px-3 py-1 rounded-md border border-slate-200">
                        {c.ruling}
                      </span>
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">Situation : « {c.situation} »</p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">Explication :</strong> {c.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'matn' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-base font-bold text-slate-900">Texte Matn Al-Akhdari (المتن)</h3>
              <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-6 text-center space-y-6">
                <p className="text-2xl sm:text-4xl font-serif leading-loose text-slate-900" lang="ar" dir="rtl">
                  {currentLesson.arabicText}
                </p>
                <button
                  onClick={togglePlay}
                  className="bg-[#0f4c3a] hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all"
                >
                  {isPlaying ? '⏸️ Pause' : '▶️ Écouter la récitation'}
                </button>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Traduction française</h4>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">« {currentLesson.translation} »</p>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-base font-bold text-slate-900">Évaluation des connaissances</h3>
              {currentLesson.quiz.map((q, qIdx) => (
                <div key={qIdx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <p className="font-bold text-sm text-slate-900">{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const hasAnswered = quizAnswers[qIdx] !== undefined;
                      const isSelected = quizAnswers[qIdx] === oIdx;
                      const isCorrect = oIdx === q.answerIndex;
                      let style = "bg-white text-slate-700 border-slate-200 hover:bg-slate-100";
                      if (hasAnswered) {
                        if (isCorrect) style = "bg-emerald-600 text-white font-bold border-emerald-600";
                        else if (isSelected) style = "bg-rose-500 text-white font-bold border-rose-500";
                      }
                      return (
                        <button
                          key={oIdx}
                          onClick={() => setQuizAnswers(prev => ({ ...prev, [qIdx]: oIdx }))}
                          className={`w-full text-left px-4 py-3 rounded-lg text-xs sm:text-sm border transition-all ${style}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'glossaire' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">Glossaire de la Leçon</h3>
              <div className="grid grid-cols-1 gap-3">
                {currentLesson.glossary.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-[#0f4c3a]">{item.term}</h4>
                      <p className="text-xs text-slate-600 mt-1">{item.definition}</p>
                    </div>
                    <span className="text-xl font-serif text-slate-800" lang="ar" dir="rtl">{item.arabic}</span>
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