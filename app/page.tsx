"use client";

import React, { useState } from "react";
import { BookOpen, Award, ArrowRight, RotateCcw, HelpCircle, CheckCircle, Lock } from "lucide-react";

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
        description: "En Fiqh Malikite, l'eau purifiante est l'eau qui conserve sa nature originelle (eau de pluie, de puits, de rivière, de mer, de source). Elle est qualifiée de 'Tahour' (طَهُور) : elle est pure en elle-même et a la capacité de purifier autre chose.",
      },
      {
        concept: "2. Les Trois Caractéristiques Fondamentales de l'Eau",
        description: "Pour vérifier si une eau est utilisable pour les ablutions ou le lavage d'impuretés, il faut observer ses trois attributs :",
        examples: [
          "Le Goût (الطَّعْم)",
          "La Couleur (اللَّوْن)",
          "L'Odeur (الرَّائِحَة)"
        ]
      },
      {
        concept: "3. La différence entre 'Hadath' et 'Najasah'",
        description: "• Al-Hadath (الحَدَث) : État d'impureté rituelle (immatérielle) qui empêche de prier (ex: besoin naturel). Se lève par le Woudou ou Ghusl.\n• An-Najasah (النَّجَاسَة) : Souillure matérielle physique (ex: urine, sang). Se nettoie en lavant la zone avec de l'eau.",
      },
      {
        concept: "4. Altération de l'eau",
        description: "Si l'eau change de goût, de couleur ou d'odeur par une substance étrangère (savon, thé, jus), elle devient pure mais NON purifiante (Tahir ghayr Tahour). En revanche, si elle change à cause de son milieu naturel (vase, algues), elle reste purifiante.",
      }
    ],
    keyPoints: [
      "L'eau purifiante (Al-Ma' Al-Moutlaq) est la seule utilisable pour la purification rituelle.",
      "L'altération de la couleur, du goût ou de l'odeur par un produit étranger annule son pouvoir purifiant.",
      "L'eau de mer, de puits et de pluie sont toutes purifiantes par nature."
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
        explanation: "Si l'un des trois attributs (couleur, goût, odeur) est modifié par une substance étrangère, l'eau perd ses propriétés purifiantes."
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
        explanation: "Une eau altérée par une substance étrangère propre devient 'Tahir' (pure) mais pas 'Tahour' (purifiante)."
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
  },
  {
    id: "1.2",
    chapterId: 1,
    title: "Leçon 1.2 : Les Obligations des Ablutions (Fara'id Al-Woudou)",
    arabicText: "فَرَائِضُ الوُضُوءِ سَبْعَةٌ: النِّيَّةُ، وَغَسْلُ الوَجْهِ، وَغَسْلُ اليَدَيْنِ إِلَى المِرْفَقَيْنِ، وَمَسْحُ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الكَعْبَيْنِ، وَالدَّلْكُ، وَالـمُوَالَاةُ.",
    frenchTranslation: "Les actes obligatoires (Fara'id) des ablutions sont au nombre de sept : 1) L'intention, 2) Le lavage du visage, 3) Le lavage des mains jusqu'aux coudes compris, 4) L'essuyage de la tête, 5) Le lavage des pieds jusqu'aux chevilles comprises, 6) Le frottement (Dalk), 7) La continuité sans interruption (Muwalah).",
    explanations: [
      {
        concept: "1. Les 7 Piliers Indispensables (Fara'id)",
        description: "Selon le Madhhab Malikite, le Woudou est invalide si l'un de ces 7 piliers est omis volontairement ou par oubli :",
        examples: [
          "1. Niyyah (النِّيَّة) : Formuler l'intention d'accomplir le Woudou pour lever le Hadath ou rendre la prière licite.",
          "2. Ghasl Al-Wajh (غَسْل الوَجْهِ) : Laver le visage du haut du front jusqu'au bas du menton, et d'une oreille à l'autre.",
          "3. Ghasl Al-Yadayn (غَسْل اليَدَيْنِ) : Laver les deux bras en incluant obligatoirement les coudes.",
          "4. Mas'h Ar-Ra's (مَسْح الرَّأْسِ) : Passer les mains mouillées sur l'ensemble de la tête, du front jusqu'à la nuque.",
          "5. Ghasl Ar-Rijlayn (غَسْل الرِّجْلَيْنِ) : Laver les deux pieds en englobant les chevilles (K'abayn).",
          "6. Ad-Dalk (الدَّلْك) : Passer la main sur le membre en même temps ou immédiatement après le passage de l'eau (Spécificité Malikite).",
          "7. Al-Muwalah (المُوَالَاة) : Enchaîner les membres sans marquer de pause prolongée qui laisserait sécher le membre précédent."
        ]
      },
      {
        concept: "2. La particularité du Dalk (Frottement)",
        description: "Contrairement à d'autres écoles où le simple fait d'immerger un membre suffit, l'école Malikite exige d'effectuer un léger frottement avec la main sur la peau mouillée pour que le lavage soit valide.",
      }
    ],
    keyPoints: [
      "Les Fara'id du Woudou sont au nombre de 7.",
      "Le frottement (Dalk) et la continuité (Muwalah) sont des obligations strictes chez les Malikites.",
      "L'essuyage de la tête doit couvrir l'intégralité de la tête et pas seulement une mèche."
    ],
    quiz: [
      {
        id: 1,
        question: "Combien d'actes obligatoires (Fara'id) compte le Woudou dans l'école Malikite ?",
        options: ["4 actes", "5 actes", "7 actes", "10 actes"],
        answer: 2,
        explanation: "L'école Malikite compte 7 obligations strictes pour la validité des ablutions."
      },
      {
        id: 2,
        question: "Qu'est-ce que le 'Dalk' dans les ablutions ?",
        options: [
          "Le fait de se sécher avec une serviette en coton",
          "Le frottement de la main sur le membre pendant ou juste après le passage de l'eau",
          "Le rinçage de la bouche trois fois de suite",
          "Le nettoyage entre les orteils avec un bâtonnet"
        ],
        answer: 1,
        explanation: "Le Dalk est le passage de la main sur le membre avec de l'eau, obligatoire selon l'école Malikite."
      },
      {
        id: 3,
        question: "Jusqu'où faut-il obligatoirement laver les bras lors de l'étape du lavage des mains ?",
        options: [
          "Jusqu'aux poignets uniquement",
          "Jusqu'au milieu de avant-bras",
          "Jusqu'aux coudes inclus",
          "Jusqu'aux épaules"
        ],
        answer: 2,
        explanation: "Le lavage des bras doit inclure obligatoirement les coudes (Al-Mirfaqayn)."
      },
      {
        id: 4,
        question: "Que signifie la condition de 'Muwalah' ?",
        options: [
          "Faire ses ablutions avec de l'eau tiède",
          "L'enchaînement des étapes sans interruption prolongée permettant au membre de sécher",
          "Répéter chaque geste exactement trois fois",
          "Réciter une invocation spéciale à chaque membre"
        ],
        answer: 1,
        explanation: "La Muwalah exige d'accomplir le Woudou d'un seul trait sans laisser le membre précédent sécher."
      }
    ]
  },
  {
    id: "1.3",
    chapterId: 1,
    title: "Leçon 1.3 : Les Traditions et Actes Recommandés (Sunan wa Fada'il Al-Woudou)",
    arabicText: "وَسُنَنُهُ: غَسْلُ اليَدَيْنِ إِلَى الكُوعَيْنِ عِنْدَ البِدَايَةِ، وَالمَضْمَضَةُ، وَالاِسْتِنْشَاقُ، وَالاِسْتِنْثَارُ، وَرَدُّ مَسْحِ الرَّأْسِ، وَمَسْحُ الأُذُنَيْنِ، وَتَجْدِيدُ المَاءِ لَهُمَا، وَالتَّرْتِيبُ بَيْنَ الفَرَائِضِ.",
    frenchTranslation: "Ses traditions (Sunan) sont : 1) Le lavage initial des mains jusqu'aux poignets, 2) Le rinçage de la bouche (Madmadah), 3) L'aspiration de l'eau par le nez (Istinshaq), 4) L'expiration de l'eau du nez (Istinthar), 5) Le retour de l'essuyage de la tête, 6) L'essuyage des oreilles, 7) Le renouvellement de l'eau pour les oreilles, 8) L'ordre chronologique entre les actes obligatoires.",
    explanations: [
      {
        concept: "1. Distinguer les Sunan des Fara'id",
        description: "Si une Sunnah est oubliée, le Woudou reste valide et la prière est valable. Cependant, il est fortement recommandé de les accomplir pour suivre la pratique exacte du Prophète (ﷺ).",
      },
      {
        concept: "2. Explication des Sunan du Nez et de la Bouche",
        description: "• Al-Madmadah (المَضْمَضَة) : Faire tourner l'eau dans sa bouche puis la recracher.\n• Al-Istinshaq (الاِسْتِنْشَاق) : Aspirer légèrement l'eau par les narines.\n• Al-Istinthar (الاِسْتِنْثَار) : Rejeter l'eau du nez en s'aidant du pouce et de l'index de la main gauche.",
      },
      {
        concept: "3. L'essuyage des Oreilles et le Retour de la Tête",
        description: "• Le premier passage des mains sur la tête du front à la nuque est un Fard (Obligation). Le retour de la nuque vers le front est une Sunnah.\n• L'essuyage de l'intérieur et de l'extérieur des oreilles se fait avec une nouvelle eau (et non l'eau restante de la tête).",
      }
    ],
    keyPoints: [
      "Oublier une Sunnah n'annule pas la prière ni les ablutions.",
      "Le retour des mains de la nuque au front est une Sunnah (l'aller est l'obligation).",
      "Le rejet de l'eau du nez (Istinthar) se fait idéalement avec la main gauche."
    ],
    quiz: [
      {
        id: 1,
        question: "Quel est le statut du rinçage de la bouche (Madmadah) dans le Woudou ?",
        options: [
          "C'est une obligation majeure (Fard)",
          "C'est une tradition (Sunnah)",
          "C'est un acte détestable (Makruh)",
          "C'est une condition d'annulation de la prière"
        ],
        answer: 1,
        explanation: "La Madmadah est une Sunnah. Si elle est omise, le Woudou demeure valide."
      },
      {
        id: 2,
        question: "Comment s'appelle l'action d'expulser l'eau hors du nez après l'avoir aspirée ?",
        options: ["Al-Madmadah", "Al-Istinshaq", "Al-Istinthar", "Ad-Dalk"],
        answer: 2,
        explanation: "Al-Istinthar est l'expulsion de l'eau des narines, de préférence en utilisant la main gauche."
      },
      {
        id: 3,
        question: "Lequel de ces actes concernant la tête est considéré comme une Sunnah ?",
        options: [
          "Le premier aller des mains du front vers la nuque",
          "Le retour des mains de la nuque vers le front",
          "Le lavage de la tête avec du savon",
          "Le rasage des cheveux avant les ablutions"
        ],
        answer: 1,
        explanation: "L'aller est le Fard (obligation), tandis que le mouvement de retour est une Sunnah."
      },
      {
        id: 4,
        question: "Faut-il reprendre de l'eau propre pour l'essuyage des oreilles ?",
        options: [
          "Non, on utilise toujours l'eau qui reste sur la tête",
          "Oui, le renouvellement de l'eau pour les oreilles est une Sunnah",
          "Il est interdit d'essuyer les oreilles",
          "Uniquement pendant la prière du Vendredi"
        ],
        answer: 1,
        explanation: "Renouveler l'eau (Tajdid al-Ma') spécialement pour essuyer les oreilles fait partie des Sunan du Woudou."
      }
    ]
  },
  {
    id: "1.4",
    chapterId: 1,
    title: "Leçon 1.4 : Les Annulatifs des Ablutions (Nawaqid Al-Woudou)",
    arabicText: "نَوَاقِضُ الوُضُوءِ تَنْقَسِمُ إِلَى أَحْدَاثٍ وَأَسْبَابِ أَحْدَاثٍ. فَالأَحْدَاثُ هِيَ: الخَارِجُ الـمُعْتَادُ مِنْ السَّبِيلَيْنِ عَلَى سَبِيلِ الصِّحَّةِ. وَأَسْبَابُ الأَحْدَاثِ: النَّوْمُ الثَّقِيلُ، وَزَوَالُ العَقْلِ بِسُكْرٍ أَوْ جُنُونٍ أَوْ إِغْمَاءٍ، وَلَمْسُ المَرْأَةِ بِلَذَّةٍ، وَمَسُّ الذَّكَرِ بِبَطْنِ الكَفِّ.",
    frenchTranslation: "Les facteurs d'annulation des ablutions se divisent en évènements directs (Ahdath) et causes d'évènements (Asbab Ahdath). Les évènements directs sont les sorties habituelles par les deux voies en état de santé. Les causes sont : le sommeil profond, la perte de conscience (ivresse, folie, évanouissement), le toucher d'une femme avec désir, et le contact direct de la verge avec la paume de la main.",
    explanations: [
      {
        concept: "1. Deux catégories d'annulatifs",
        description: "En Fiqh Malikite, ce qui rompt le Woudou est classé en deux groupes distincts :",
        examples: [
          "A. Les Évènements Directs (Ahdath) : Ce qui sort des voies naturelles (urine, matières fécales, gaz, pré-sécrétion/Madhy).",
          "B. Les Causes d'Évènements (Asbab Ahdath) : Situations où la personne ne contrôle plus ses sens et peut émettre un Hadath sans s'en rendre compte."
        ]
      },
      {
        concept: "2. Le Sommeil et la Perte de Conscience",
        description: "• Le sommeil profond (Nom Thaqil) annule le Woudou, quelle que soit la posture (assis ou allongé), car l'individu ne ressent plus rien.\n• Le sommeil léger (Nom Khafif) ne rompt pas le Woudou s'il est court.\n• L'évanouissement, l'anesthésie ou l'ivresse annulent systématiquement le Woudou.",
      },
      {
        concept: "3. Le Toucher et le Contact Physique",
        description: "• Toucher une personne du sexe opposé annule le Woudou SI le toucher est accompagné de désir ou si l'intention était d'en ressentir.\n• Toucher ses propres parties intimes (la verge) directement avec la paume de la main ou la face interne des doigts annule le Woudou.",
      }
    ],
    keyPoints: [
      "Les annulatifs se divisent en Hadath direct (sorties naturelles) et Cause de Hadath (sommeil, perte de conscience).",
      "Le sommeil profond rompt le Woudou, le sommeil léger ne le rompt pas.",
      "Le contact avec les parties intimes annule le Woudou s'il est fait avec le plat de la main sans obstacle."
    ],
    quiz: [
      {
        id: 1,
        question: "Comment se divisent les facteurs d'annulation des ablutions (Nawaqid) ?",
        options: [
          "En actes obligatoires et actes interdits",
          "En évènements directs (Ahdath) et causes d'évènements (Asbab Ahdath)",
          "En actes de jour et actes de nuit",
          "En erreurs mineures et erreurs majeures"
        ],
        answer: 1,
        explanation: "Les juristes divisent les annulatifs entre le Hadath direct (ex: gaz) et sa cause potentielle (ex: sommeil profond)."
      },
      {
        id: 2,
        question: "Quel type de sommeil annule obligatoirement le Woudou ?",
        options: [
          "Une légère somnolence assis tout en entendant les gens parler",
          "Le sommeil profond où la personne perd totalement conscience de son environnement",
          "Fermer les yeux pendant 10 secondes",
          "Le fait de bailler plusieurs fois"
        ],
        answer: 1,
        explanation: "Le sommeil profond (Nom Thaqil) entraîne la perte de contrôle et annule donc le Woudou."
      },
      {
        id: 3,
        question: "Dans quel cas le contact physique avec une personne du sexe opposé annule-t-il les ablutions chez les Malikites ?",
        options: [
          "Dans tous les cas sans exception, même par inadvertance",
          "Si le contact a lieu avec une intention ou une sensation de plaisir/désir",
          "Uniquement s'il y a un serrage de main d'au moins 5 minutes",
          "Cela n'annule jamais le Woudou quelles que soient les circonstances"
        ],
        answer: 1,
        explanation: "Dans le Madhhab Malikite, c'est la présence de la recherche ou du ressenti du désir (Ladhah) qui annule les ablutions."
      },
      {
        id: 4,
        question: "Toucher ses parties intimes annule-t-il le Woudou ?",
        options: [
          "Non, jamais",
          "Oui, si le contact se fait directement avec l'intérieur de la main (paume ou doigts) sans tissu interposé",
          "Uniquement si on utilise le dos de la main",
          "Uniquement pendant la nuit"
        ],
        answer: 1,
        explanation: "Le contact direct de la verge avec la paume ou le plat des doigts annule le Woudou selon le texte du Matn."
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

  const handleSelectLesson = (index: number) => {
    if (index <= unlockedLessonIndex) {
      setCurrentLessonIndex(index);
      setViewMode("course");
      handleResetQuiz();
    }
  };

  const isPassed = score >= Math.ceil(lesson.quiz.length * 0.75);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-6 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
              FIQH MALIKITE — MATN AL-AKHDARI
            </span>
            <h1 className="text-xl md:text-2xl font-bold mt-1">{lesson.title}</h1>
          </div>
          <div className="bg-emerald-800 border border-emerald-700 px-3 py-1.5 rounded-lg text-xs md:text-sm">
            Niveau : <span className="font-bold text-emerald-300">{unlockedLessonIndex + 1} / {LESSONS.length} Leçons</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Barre Latérale des Leçons avec Cadenas */}
        <aside className="md:col-span-1 space-y-2">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">Toutes les leçons</h2>
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
                    Verrouillé
                  </span>
                )}
              </button>
            );
          })}
        </aside>

        {/* Zone de Contenu Principal */}
        <section className="md:col-span-3">
          {/* Boutons de Mode */}
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
              <HelpCircle className="w-4 h-4" /> Quiz ({lesson.quiz.length} questions)
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

              {/* Traduction */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">Traduction française</h3>
                <p className="text-slate-800 leading-relaxed italic">{lesson.frenchTranslation}</p>
              </div>

              {/* Explications */}
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

              {/* Points Clés */}
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

              {/* Action Button */}
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
                      ? " Vous avez déverrouillé la leçon suivante !"
                      : " Il faut obtenir au moins 3 bonnes réponses sur 4 pour déverrouiller la suite."}
                  </p>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={handleResetQuiz}
                      className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" /> Recommencer le quiz
                    </button>
                    {isPassed && currentLessonIndex + 1 < LESSONS.length && (
                      <button
                        onClick={() => handleSelectLesson(currentLessonIndex + 1)}
                        className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                      >
                        Leçon suivante ({LESSONS[currentLessonIndex + 1].id}) <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}