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
  evidences?: string[]; // Preuves scripturaires
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
  malikiSubtleties: string[]; // Spécificités de l'école malékite
  quiz: { question: string; options: string[]; answerIndex: number; explanation: string }[];
  glossary: { term: string; arabic: string; definition: string }[];
}

const LESSONS: Lesson[] = [
  {
    id: '1.1',
    number: 'Leçon 1.1',
    title: "Les Catégories d'Eau et la Statut Juridique de la Purification (At-Tahārah)",
    subtitle: "Étude approfondie sur la distinction entre eau pure, purifiante et impure en Fiqh Malékite",
    arabicText: "فَصْلٌ: أَنْوَاعُ الْمِيَاهِ وَأَحْكامُ الطَّهَارَةِ. لاَ يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلاَ رَفْعُ الْحَدَثِ إِلاَّ بِالْمَاءِ الْمُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.",
    translation: "Section : Les catégories d'eau et les règles de purification. Il n'est pas permis d'enlever une impureté matérielle (Najasah) ni de lever une impureté rituelle (Hadath) si ce n'est avec de l'eau pure et purifiante (Al-Ma' Al-Mutlaq)...",
    introduction: "La purification (At-Tahārah) est la première clé des actes d'adoration en droit musulman. Dans le rite malékite, toute prière accomplie sans une purification valide est nulle. La purification se divise en deux grandes branches : la purification rituelle (qui lève le Hadath) et la purification physique (qui élimine la Najasah). Pour réaliser l'une ou l'autre, le juriste malékite exige l'utilisation d'un type d'eau bien spécifique : l'eau pure et purifiante (Al-Mā' Al-Muṭlaq).",
    sections: [
      {
        title: "I. Définition et Typologie des Eaux",
        content: "En jurisprudence malékite, l'eau est analysée à travers deux concepts : sa propreté intrinsèque (Tāhir) et sa capacité à purifier un autre corps (Muṭahhir).\n\n1. L'Eau Absolue ou Purifiante (Al-Mā' Al-Muṭlaq) :\nIl s'agit de toute eau qui demeure sur sa création d'origine, qu'elle descende du ciel (pluie, neige, grêle) ou qu'elle jaillisse de la terre (sources, puits, fleuves, mers). Cette eau est à la fois pure en elle-même (Tāhir) et purifiante (Muṭahhir). Elle est la SEULE utilisable pour le Wudu, le Ghusl et le nettoyage des impuretés.\n\n2. L'Eau Pure mais non-purifiante (Mā' Tāhir Ghayr Muṭahhir) :\nC'est une eau propre à la base, mais dont l'une des trois caractéristiques (couleur, goût ou odeur) a été modifiée par un corps propre qui s'en distingue habituellement (ex: du thé, du jus, du savon, du lait ou du parfum). Cette eau reste propre pour la boisson ou la cuisine, mais IL EST INTERDIT de l'utiliser pour la purification rituelle.\n\n3. L'Eau Impure (Mā' Najis) :\nC'est une eau (en grande ou petite quantité) dont au moins une des trois caractéristiques a été altérée par une impureté matérielle (urine, sang, cadavre). Son utilisation est strictement interdite tant pour les rites que pour la consommation.",
        evidences: [
          "Coran (Sourate Al-Anfal, 8:11) : « Et Il fit descendre du ciel une eau sur vous afin de vous purifier par elle. »",
          "Hadith (Rapporté par d'Aba Dawood) : « L'eau est pure et purifiante, rien ne la rend impure (sauf ce qui altère son odeur, son goût ou sa couleur). »"
        ]
      },
      {
        title: "II. Les Trois Caractéristiques d'Altération (Les Critères d'Évaluation)",
        content: "Le juriste évalue l'état juridique de l'eau en examinant scrupuleusement trois propriétés organoleptiques :\n\n- La Couleur (Al-Lawn)\n- Le Goût (At-Ta'm)\n- L'Odeur (Ar-Rīḥ)\n\nSi une seule de ces propriétés subit une modification à cause d'une substance étrangère qu'il est habituellement possible d'éviter, l'eau perd immédiatement son statut d'eau 'Mutlaq'."
      },
      {
        title: "III. La Règle Exceptionnelle des Éléments Inséparables (Mā Yufāriquhu Ghāliban)",
        content: "Le texte de Matn Al-Akhdari précise : '...par ce qui lui est habituellement étranger'. Cela signifie que si l'eau change à cause d'un élément naturel qui lui est indissociable ou très difficile à séparer, L'EAU RESTE PURE ET PURIFIANTE.\n\nExemples d'altérations tolérées en Fiqh Malékite :\n- L'eau modifiée par la vase, la mousse ou le limon au fond d'un puits.\n- L'eau altérée par les minéraux du sol (ex: eau sulfureuse des sources thermales).\n- L'eau stockée dans des citernes en cuir ou des conduits en cuivre qui lui donnent un goût d'étanchéité."
      }
    ],
    malikiSubtleties: [
      "L'école malékite est réputée pour sa souplesse concernant les grandes quantités d'eau stagnante : tant que les 3 qualités (goût, couleur, odeur) n'ont pas changé, l'eau reste purifiante même si une impureté y est tombée.",
      "L'utilisation d'eau chauffée au soleil (Mā' Mushammas) est juridiquement valide sans détestation (Karahah) chez les Malékites, contrairement à l'école Shafi'ite."
    ],
    practicalCases: [
      {
        situation: "Un individu prépare son eau de Wudu dans un seau. Un peu de savon y tombe et l'eau devient légèrement moussante et parfumée.",
        ruling: "Eau Propre mais Non-Purifiante (Tāhir Ghayr Muṭahhir).",
        explanation: "Le savon a altéré les caractéristiques de l'eau. Il peut l'utiliser pour se laver les mains au quotidien, mais son Wudu sera invalide s'il l'utilise."
      },
      {
        situation: "L'eau du robinet d'une mosquée ressort légèrement jaunâtre à cause de la rouille ou des minéraux contenus dans les canalisations en fer.",
        ruling: "Eau Absolue et Purifiante (Mā' Muṭlaq).",
        explanation: "La rouille des tuyaux est considérée comme un composant lié au stockage et difficile à séparer. Le Wudu accompli avec cette eau est 100% valide."
      },
      {
        situation: "Une flaque d'eau de pluie est piétinée et devient très marron à cause de la terre.",
        ruling: "Eau Purifiante.",
        explanation: "La terre (At-Turab) fait partie de la catégorie des éléments purifiants par essence. Le mélange d'eau et de terre propre ne retire pas à l'eau son pouvoir purifiant."
      }
    ],
    quiz: [
      {
        question: "Qu'est-ce que 'Al-Mā' Al-Muṭlaq' en jurisprudence musulmane ?",
        options: [
          "Une eau mélangée à des huiles essentielles propres",
          "L'eau naturelle qui n'a subi aucune modification de sa couleur, goût ou odeur par un corps étranger",
          "L'eau qui a été bouillie au préalable"
        ],
        answerIndex: 1,
        explanation: "Al-Mā' Al-Muṭlaq désigne l'eau absolue sur sa nature d'origine."
      },
      {
        question: "Si de l'eau change d'odeur à cause de la mousse ou de la terre au fond d'un puits, quel est son statut ?",
        options: [
          "Elle devient impure (Najis)",
          "Elle demeure pure et purifiante car il s'agit d'un élément naturel indissociable",
          "Elle devient utilisable uniquement pour la cuisine"
        ],
        answerIndex: 1,
        explanation: "Tout ce qui est difficile à séparer de l'eau dans son milieu naturel est toléré."
      }
    ],
    glossary: [
      { term: "Al-Mā' Al-Muṭlaq", arabic: "الْمَاءُ الْمُطْلَق", definition: "L'eau absolue, pure et purifiante, n'ayant subi aucune altération." },
      { term: "At-Tahārah", arabic: "الطَّهَارَة", definition: "La purification rituelle du corps, des habits et du lieu." },
      { term: "Najasah", arabic: "النَّجَاسَة", definition: "Souillure matérielle (urine, sang, etc.) devant être nettoyée." }
    ]
  },
  {
    id: '1.2',
    number: 'Leçon 1.2',
    title: "Les Obligations Obligatoires de l'Ablution (Farā'iḍ Al-Wuḍū')",
    subtitle: "Les 7 piliers fondamentaux sans lesquels l'ablution est nulle dans le Fiqh Malékite",
    arabicText: "فَرَائِضُ الْوُضُوءِ سَبْعَةٌ: النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ، وَغَسْلُ الْوَجْهِ، وَغَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ جَمِيعِ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ، وَالدَّلْكُ، وَالْمُوَالاَةُ.",
    translation: "Les obligations de l'ablution sont au nombre de sept : l'intention au moment du lavage du visage, le lavage du visage, le lavage des bras jusqu'aux coudes inclus, l'essuyage complet de la tête, le lavage des pieds jusqu'aux chevilles incluses, le frictionnement (Dalk) et la continuité (Muwalah).",
    introduction: "Dans l'école de l'Imam Malik, l'ablution mineure (Wuḍū') ne se résume pas à faire couler de l'eau sur le corps. Elle obéit à sept règles strictes appelées Farā'iḍ (Arkan/Piliers). Si l'un de ces 7 actes est omis, même par oubli, le Wuḍū' n'a aucune valeur juridique et la prière effectuée avec est invalide.",
    sections: [
      {
        title: "I. Analyse Détaillée des 7 Piliers de l'Ablution",
        content: "1. L'Intention (An-Niyyah) :\nL'intention est un acte du cœur. Elle doit obligatoirement se manifester au moment exact où l'eau touche la première partie du visage. La personne doit avoir à l'esprit : soit de lever l'état d'impureté (Raf' al-Hadath), soit d'accomplir l'obligation de la prière.\n\n2. Le Lavage du Visage (Ghasl Al-Wajh) :\nLes limites géométriques du visage sont : \n- Verticalement : De la racine habituelle des cheveux jusqu'au bas du menton.\n- Horizontalement : D'un lobe d'oreille à l'autre.\n\n3. Le Lavage des Bras jusqu'aux Coudes inclus (Ghasl al-yadayn) :\nIl faut laver depuis le bout des doigts jusqu'au-dessus de l'articulation du coude. Attention : Même si la personne a lavé ses mains au début de l'ablution (Sunnah), elle DOIT relaver les mains avec les bras dans cette étape.\n\n4. L'Essuyage Complet de la Tête (Masḥ Jamī' Ar-Ra's) :\nC'est une grande particularité du rite Malékite : il est obligatoire d'essuyer l'ENSEMBLE du cuir chevelu, depuis la naissance des cheveux sur le front jusqu'à la nuque. Essuyer seulement quelques cheveux rend l'ablution nulle.\n\n5. Le Lavage des Pieds jusqu'aux Chevilles incluses (Ghasl ar-rijlayn) :\nLes deux chevilles saillantes (Al-Ka'bayn) doivent être intégralement lavées et mouillées.\n\n6. Le Frictionnement Obligatoire (Ad-Dalk) :\nLe Dalk consiste à passer la main sur le membre en même temps qu'on verse l'eau ou immédiatement après, avant que l'eau ne sèche. Se contenter de tremper son membre sous le robinet sans le frotter avec la main est INVALIDE chez les Malékites.\n\n7. La Continuité Temporelle (Al-Muwālāh / Al-Fawr) :\nL'individu doit enchaîner le lavage des membres les uns après les autres sans interruption prolongée. Le repère temporel est qu'un membre ne doit pas avoir le temps de sécher complètement dans des conditions climatiques normales."
      }
    ],
    malikiSubtleties: [
      "Le Dalk (frictionnement avec la main) est un pilier obligatoire (Fard) uniquement dans l'école malékite. Pour la majorité des autres écoles, c'est une Sunnah.",
      "L'essuyage de la tête doit couvrir 100% de la surface, y compris les cheveux longs qui pendent au-delà de la tête."
    ],
    practicalCases: [
      {
        situation: "Une personne met son bras sous le jet du robinet et laisse l'eau ruisseler sur tout le bras sans y passer la main.",
        ruling: "Ablution Invalide (selon le Fiqh Malékite).",
        explanation: "Il manque l'obligation du Dalk (frictionnement à la main)."
      },
      {
        situation: "Un fidèle essuie seulement la frange sur le devant de sa tête comme le font d'autres rites.",
        ruling: "Ablution Invalide dans le rite Malékite.",
        explanation: "L'Imam Malik exige le recouvrement intégral du crâne."
      }
    ],
    quiz: [
      {
        question: "Combien d'obligations (Farā'iḍ) composent l'ablution selon l'école malékite ?",
        options: ["4 obligations", "7 obligations", "10 obligations"],
        answerIndex: 1,
        explanation: "Elles sont au nombre de 7 : Niyyah, Visage, Bras, Tête complète, Pieds, Dalk, Muwalah."
      }
    ],
    glossary: [
      { term: "Ad-Dalk", arabic: "الدَّلْك", definition: "Le fait de passer la main sur le membre lavé avec de l'eau." },
      { term: "Al-Muwālāh", arabic: "الْمُوَالاَة", definition: "Enchaîner les membres sans marquer d'interruption prolongée." }
    ]
  }
];

export default function FiqhAppPage() {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'cours' | 'pratique' | 'matn' | 'quiz' | 'glossaire'>('cours');
  
  const [isPlaying, setIsPlaying] = useState(false);
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
      utterance.rate = rate;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans pb-16">
      
      {/* HEADER DE L'APPLICATION */}
      <header className="bg-[#0f4c3a] text-white border-b border-emerald-900 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-1">
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

            <div className="flex items-center gap-3 self-end md:self-auto">
              <span className="bg-emerald-900/80 text-emerald-200 border border-emerald-700 text-xs px-3 py-1.5 rounded-lg font-semibold">
                Niveau {selectedLessonIndex + 1} / {LESSONS.length}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL EN 2 COLONNES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLONNE GAUCHE : PROGRAMME / SOMMAIRE (3 Cols) */}
        <aside className="lg:col-span-3 space-y-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">
              Sommaire du Manuel
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

        {/* COLONNE DROITE : CORPS DU COURS ET ONGLETS (9 Cols) */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* BARRE D'ONGLETS PÉDAGOGIQUES */}
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('cours')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'cours'
                  ? 'bg-[#0f4c3a] text-white shadow'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              📖 Cours Magistral
            </button>

            <button
              onClick={() => setActiveTab('pratique')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'pratique'
                  ? 'bg-[#0f4c3a] text-white shadow'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              💡 Cas Pratiques ({currentLesson.practicalCases.length})
            </button>

            <button
              onClick={() => setActiveTab('matn')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'matn'
                  ? 'bg-[#0f4c3a] text-white shadow'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              📜 Texte Matn Arabe
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'quiz'
                  ? 'bg-[#0f4c3a] text-white shadow'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              ✍️ Evaluation
            </button>

            <button
              onClick={() => setActiveTab('glossaire')}
              className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'glossaire'
                  ? 'bg-[#0f4c3a] text-white shadow'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              📚 Lexique
            </button>
          </div>

          {/* 1. ONGLET : COURS MAGISTRAL DÉTAILLÉ */}
          {activeTab === 'cours' && (
            <article className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-8">
              
              {/* Introduction du cours */}
              <div className="bg-emerald-50/60 border-l-4 border-[#0f4c3a] p-5 rounded-r-xl">
                <h3 className="text-xs font-black text-[#0f4c3a] uppercase tracking-wider mb-2">
                  Introduction & Contexte Juridique
                </h3>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {currentLesson.introduction}
                </p>
              </div>

              {/* Sections rédigées détaillées */}
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

                    {/* Preuves scripturaires (DaliI) */}
                    {section.evidences && section.evidences.length > 0 && (
                      <div className="mt-3 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1.5">
                        <span className="font-bold text-emerald-900 uppercase tracking-wider text-[11px] block mb-1">
                          📖 Preuves tirées des sources (Adillah) :
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

              {/* Spécificités Malékites */}
              {currentLesson.malikiSubtleties && (
                <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 space-y-2">
                  <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-2">
                    <span>⚖️</span> Particularités de l'École Malékite (Mashhur Al-Madhhab)
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

          {/* 2. ONGLET : CAS PRATIQUES & CASUISTIQUE */}
          {activeTab === 'pratique' && (
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Applications Concrètes & Casuistique (Masā'il)
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Étude de cas de la vie quotidienne résolus selon la jurisprudence du Fiqh Malékite.
                </p>

                <div className="space-y-4">
                  {currentLesson.practicalCases.map((c, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50">
                      <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex justify-between items-start gap-4">
                        <span className="text-xs font-extrabold text-[#0f4c3a] bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-md">
                          Cas #{idx + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-800 bg-white px-3 py-1 rounded-md border border-slate-200">
                          Décision : {c.ruling}
                        </span>
                      </div>
                      <div className="p-4 space-y-2">
                        <p className="text-xs sm:text-sm font-semibold text-slate-900">
                          Situation : « {c.situation} »
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <strong className="text-slate-800">Explication juridique :</strong> {c.explanation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. ONGLET : TEXTE MATN ARABE & AUDIO */}
          {activeTab === 'matn' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Texte original de Matn Al-Akhdari (المتن)
                </h3>
                <p className="text-xs text-slate-500">
                  Le texte poétique de référence pour la mémorisation (Hifz).
                </p>
              </div>

              {/* Encadré Arabe */}
              <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-6">
                <p
                  className="text-2xl sm:text-4xl font-serif leading-loose text-slate-900 font-medium"
                  lang="ar"
                  dir="rtl"
                >
                  {currentLesson.arabicText}
                </p>

                {/* Lecteur Audio */}
                <div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-full shadow-sm border border-emerald-200">
                  <button
                    onClick={togglePlay}
                    className="bg-[#0f4c3a] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-full transition-all"
                  >
                    {isPlaying ? '⏸️ Pause' : '▶️ Écouter la récitation'}
                  </button>
                  <span className="text-xs text-slate-400">|</span>
                  <button
                    onClick={() => setRate(rate === 0.8 ? 1.0 : 0.8)}
                    className="text-xs font-bold text-slate-700 hover:text-slate-900 px-2 py-1 bg-slate-100 rounded-md"
                  >
                    Vitesse: {rate}x
                  </button>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Traduction française du Matn
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  « {currentLesson.translation} »
                </p>
              </div>
            </div>
          )}

          {/* 4. ONGLET : QUIZ */}
          {activeTab === 'quiz' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
              <h3 className="text-base font-bold text-slate-900">
                Évaluation des connaissances
              </h3>

              <div className="space-y-6">
                {currentLesson.quiz.map((q, qIdx) => (
                  <div key={qIdx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <p className="font-bold text-sm text-slate-900">
                      Question {qIdx + 1} : {q.question}
                    </p>
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
                            className={`w-full text-left px-4 py-3 rounded-lg text-xs sm:text-sm border transition-all flex justify-between items-center ${style}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && isCorrect && <span>✓</span>}
                          </button>
                        );
                      })}
                    </div>
                    {quizAnswers[qIdx] !== undefined && (
                      <p className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 mt-2">
                        💡 <strong>Explication :</strong> {q.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. ONGLET : GLOSSAIRE */}
          {activeTab === 'glossaire' && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Glossaire des Termes Techniques de la Leçon
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {currentLesson.glossary.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-[#0f4c3a]">{item.term}</h4>
                      <p className="text-xs text-slate-600 mt-1">{item.definition}</p>
                    </div>
                    <span className="text-xl font-serif text-slate-800" lang="ar" dir="rtl">
                      {item.arabic}
                    </span>
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