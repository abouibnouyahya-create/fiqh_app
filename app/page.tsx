"use client";

import React, { useState } from "react";
import { BookOpen, Award, ArrowRight, RotateCcw, HelpCircle, CheckCircle, Lock, Globe, Search, BookMarked, BrainCircuit, GraduationCap, Download, Check } from "lucide-react";

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

interface GlossaryItem {
  ar: string;
  trans: string;
  fr: string;
  en: string;
  desc: { fr: string; en: string };
}

interface Flashcard {
  ar: string;
  trans: string;
  front: { fr: string; en: string };
  back: { fr: string; en: string };
}

const GLOSSARY: GlossaryItem[] = [
  { ar: "طَهَارَة", trans: "Taharah", fr: "Purification rituelle", en: "Ritual Purification", desc: { fr: "Action d'éliminer l'impureté rituelle ou matérielle.", en: "The act of removing physical or ritual impurity." } },
  { ar: "فَرْضٌ", trans: "Fard / Faridah", fr: "Obligation stricte", en: "Strict Obligation", desc: { fr: "Acte dont l'accomplissement est exigé et dont l'omission annule l'acte d'adoration.", en: "Mandatory act whose omission invalidates worship." } },
  { ar: "سُنَّةٌ", trans: "Sunnah", fr: "Pratique recommandée", en: "Recommended Practice", desc: { fr: "Tradition prophétique complétant les obligations.", en: "Prophetic tradition complementing mandatory acts." } },
  { ar: "حَدَث", trans: "Hadath", fr: "Impureté rituelle (Immatérielle)", en: "Ritual Impurity (Immaterial)", desc: { fr: "État d'impureté exigeant le Wudu ou le Ghusl (ex: gaz, sommeil).", en: "State of impurity requiring Wudu or Ghusl." } },
  { ar: "نَجَاسَة", trans: "Najasah / Khabath", fr: "Impureté physique (Matérielle)", en: "Physical Filth (Material)", desc: { fr: "Souillure physique sur le corps, les habits ou le lieu (ex: urine).", en: "Physical stain on body, clothing, or location." } },
  { ar: "دَلْك", trans: "Dalk", fr: "Frottement", en: "Rubbing / Scrubbing", desc: { fr: "Passer la main sur le membre avec de l'eau (Obligation Malikite).", en: "Passing the hand over the body part with water (Maliki obligation)." } },
  { ar: "مُوَالَاة", trans: "Muwalah", fr: "Continuité", en: "Continuity", desc: { fr: "Enchaîner les membres sans interruption prolongée.", en: "Washing body parts consecutively without long breaks." } },
  { ar: "تَيَمُّم", trans: "Tayammum", fr: "Ablution sèche", en: "Dry Ablution", desc: { fr: "Purification avec de la terre pure en cas d'absence d'eau.", en: "Purification using pure earth when water is unavailable." } }
];

const FLASHCARDS: Flashcard[] = [
  { ar: "طَهَارَة", trans: "Taharah", front: { fr: "Quelle est la définition de la Taharah ?", en: "What is the definition of Taharah?" }, back: { fr: "La purification rituelle du corps, des habits et du lieu d'impuretés rituelles (Hadath) ou matérielles (Najasah).", en: "Ritual purification of body, clothing, and place from ritual (Hadath) or physical (Najasah) impurities." } },
  { ar: "دَلْك", trans: "Dalk", front: { fr: "Le Dalk est-il obligatoire en Fiqh Malikite ?", en: "Is Dalk mandatory in Maliki Fiqh?" }, back: { fr: "Oui, faire passer la main sur le membre avec de l'eau est l'une des 7 obligations (Fara'id) du Wudu.", en: "Yes, passing the hand over the body part while pouring water is one of the 7 obligations (Fara'id) of Wudu." } },
  { ar: "مُوَالَاة", trans: "Muwalah", front: { fr: "Que signifie la Muwalah ?", en: "What does Muwalah mean?" }, back: { fr: "La continuité : laver les membres les uns après les autres sans pause qui assècherait le membre précédent.", en: "Continuity: washing body parts in succession without long delays that dry out previous parts." } },
  { ar: "تَيَمُّم", trans: "Tayammum", front: { fr: "Quand autorise-t-on le Tayammum ?", en: "When is Tayammum permitted?" }, back: { fr: "En cas d'absence d'eau, d'incapacité d'utiliser l'eau ou de maladie, après l'entrée du temps de prière.", en: "When water is unavailable, unusable due to illness/harm, and strictly after prayer time enters." } }
];

const FINAL_EXAM_QUESTIONS: Question[] = [
  {
    id: 1,
    question: {
      fr: "Quelle est la condition essentielle concernant l'eau pour la levée du Hadath ?",
      en: "What is the essential condition regarding water for removing Hadath?"
    },
    options: {
      fr: ["Qu'elle soit bouillie", "Qu'elle soit pure et purifiante (Al-Ma' Al-Mutlaq)", "Qu'elle contienne du parfum", "Qu'elle soit stockée dans un récipient en argent"],
      en: ["It must be boiled", "It must be pure and purifying (Al-Ma' Al-Mutlaq)", "It must contain perfume", "It must be stored in a silver vessel"]
    },
    answer: 1,
    explanation: {
      fr: "Seule l'eau naturelle à l'état pur (Al-Ma' Al-Mutlaq) permet d'enlever le Hadath.",
      en: "Only natural water in its pure state (Al-Ma' Al-Mutlaq) removes Hadath."
    }
  },
  {
    id: 2,
    question: {
      fr: "Combien y a-t-il d'obligations (Fara'id) dans le Wudu selon l'école Malikite ?",
      en: "How many obligatory acts (Fara'id) are in Wudu according to the Maliki school?"
    },
    options: {
      fr: ["4 obligations", "5 obligations", "7 obligations", "9 obligations"],
      en: ["4 obligations", "5 obligations", "7 obligations", "9 obligations"]
    },
    answer: 2,
    explanation: {
      fr: "L'école Malikite établit 7 obligations strictes pour le Wudu.",
      en: "The Maliki school establishes 7 strict obligations for Wudu."
    }
  },
  {
    id: 3,
    question: {
      fr: "Le frottement (Dalk) est-il un acte obligatoire ou recommandé dans le Wudu et le Ghusl malikite ?",
      en: "Is rubbing (Dalk) obligatory or recommended in Maliki Wudu and Ghusl?"
    },
    options: {
      fr: ["Recommandé (Sunnah)", "Obligatoire (Fard)", "Superérogatoire (Nafl)", "Déconseillé (Makruh)"],
      en: ["Recommended (Sunnah)", "Obligatory (Fard)", "Supererogatory (Nafl)", "Disliked (Makruh)"]
    },
    answer: 1,
    explanation: {
      fr: "Le Dalk (frottement) est une obligation (Fard) distinctive de l'école Malikite.",
      en: "Dalk (rubbing) is a distinctive obligatory act (Fard) in the Maliki school."
    }
  },
  {
    id: 4,
    question: {
      fr: "Quelle est la règle concernant le Tayammum quant au moment de son exécution ?",
      en: "What is the rule regarding the timing of Tayammum?"
    },
    options: {
      fr: ["Il peut être fait avant l'heure de la prière", "Il doit obligatoirement être fait après l'entrée du temps de la prière", "Il se fait uniquement la nuit", "Il est valide pour toutes les prières de la journée"],
      en: ["It can be done before prayer time", "It must strictly be performed after prayer time enters", "It is only performed at night", "It remains valid for all daily prayers"]
    },
    answer: 1,
    explanation: {
      fr: "Le Tayammum exige l'entrée préalable du temps de la prière concernée.",
      en: "Tayammum requires the prior entry of the specific prayer time."
    }
  }
];

const LESSONS: Lesson[] = [
  {
    id: "1.1",
    chapterId: 1,
    title: { fr: "Leçon 1.1 : Les types d'eaux et la purification (At-Tahara)", en: "Lesson 1.1: Types of Water & Purification (At-Taharah)" },
    arabicText: "فَصْلٌ: أَنْوَاعُ المِيَاهِ وَأَحْكَامُ الطَّهَارَةِ. لَا يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلَا رَفْعُ الحَدَثِ إِلَّا بِالمَاءِ المُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.",
    frenchTranslation: "Section : Les catégories d'eau et les règles de purification. Il n'est pas permis d'enlever une impureté matérielle (Najasah) ni de lever une impureté rituelle (Hadath) si ce n'est avec de l'eau pure et purifiante (Al-Ma' Al-Moutlaq)...",
    englishTranslation: "Section: Categories of water and rules of purification. Removing physical impurity (Najasah) or removing ritual impurity (Hadath) is not permissible except with pure and purifying water...",
    explanations: [
      {
        concept: { fr: "1. Qu'est-ce que l'Eau Pure et Purifiante (Al-Ma' Al-Mutlaq) ?", en: "1. What is Pure and Purifying Water (Al-Ma' Al-Mutlaq)?" },
        description: { fr: "En Fiqh Malikite, l'eau purifiante est l'eau qui conserve sa nature originelle (eau de pluie, de puits, de rivière, de mer).", en: "In Maliki Fiqh, purifying water retains its original natural state (rain, well, river, sea)." }
      }
    ],
    keyPoints: {
      fr: ["L'eau purifiante est la seule utilisable.", "L'altération de couleur, goût ou odeur la disqualifie."],
      en: ["Purifying water is the only allowed type.", "Changes in color, taste, or smell disqualify it."]
    },
    quiz: [
      {
        id: 1,
        question: { fr: "Qu'est-ce que 'Al-Ma' Al-Mutlaq' ?", en: "What is 'Al-Ma' Al-Mutlaq'?" },
        options: { fr: ["Eau parfumée", "Eau pure et purifiante originelle", "Eau bouillie", "Eau potable seulement"], en: ["Perfumed water", "Original pure & purifying water", "Boiled water", "Drinking water only"] },
        answer: 1,
        explanation: { fr: "Al-Ma' Al-Mutlaq est l'eau dans son état naturel pur.", en: "Al-Ma' Al-Mutlaq is water in its natural pure state." }
      }
    ]
  },
  {
    id: "1.2",
    chapterId: 1,
    title: { fr: "Leçon 1.2 : Les Obligations des Ablutions (Fara'id Al-Wudu)", en: "Lesson 1.2: Obligatory Acts of Wudu (Fara'id Al-Wudu)" },
    arabicText: "فَرَائِضُ الوُضُوءِ سَبْعَةٌ: النِّيَّةُ، وَغَسْلُ الوَجْهِ، وَغَسْلُ اليَدَيْنِ إِلَى المِرْفَقَيْنِ، وَمَسْحُ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الكَعْبَيْنِ، وَالدَّلْكُ، وَالـمُوَالَاةُ.",
    frenchTranslation: "Les actes obligatoires (Fara'id) des ablutions sont au nombre de sept...",
    englishTranslation: "The obligatory elements (Fara'id) of Wudu are seven...",
    explanations: [
      {
        concept: { fr: "Les 7 Piliers du Wudu", en: "The 7 Pillars of Wudu" },
        description: { fr: "1. Intention, 2. Visage, 3. Bras jusqu'aux coudes, 4. Tête, 5. Pieds, 6. Dalk (frottement), 7. Muwalah (continuité).", en: "1. Intention, 2. Face, 3. Arms to elbows, 4. Head, 5. Feet, 6. Dalk (rubbing), 7. Muwalah (continuity)." }
      }
    ],
    keyPoints: {
      fr: ["7 obligations au total chez les Malikites.", "Dalk et Muwalah sont obligatoires."],
      en: ["7 total obligations in the Maliki school.", "Dalk and Muwalah are mandatory."]
    },
    quiz: [
      {
        id: 1,
        question: { fr: "Combien d'actes obligatoires compte le Wudu ?", en: "How many obligatory acts in Wudu?" },
        options: { fr: ["4", "5", "7", "10"], en: ["4", "5", "7", "10"] },
        answer: 2,
        explanation: { fr: "Il y a 7 obligations d'après l'école Malikite.", en: "There are 7 obligations according to the Maliki school." }
      }
    ]
  },
  {
    id: "1.3",
    chapterId: 1,
    title: { fr: "Leçon 1.3 : Les Sunan des Ablutions", en: "Lesson 1.3: Recommended Acts of Wudu" },
    arabicText: "وَسُنَنُهُ: غَسْلُ اليَدَيْنِ إِلَى الكُوعَيْنِ عِنْدَ الِابْتِدَاءِ...",
    frenchTranslation: "Les actes recommandés (Sunan) du Wudu sont au nombre de 8...",
    englishTranslation: "The Sunan (recommended acts) of Wudu are 8...",
    explanations: [
      {
        concept: { fr: "Sunan du Wudu", en: "Sunan of Wudu" },
        description: { fr: "Les Sunan complètent les Fara'id.", en: "Sunan complement the Fara'id." }
      }
    ],
    keyPoints: { fr: ["8 Sunan au total."], en: ["8 Sunan in total."] },
    quiz: [
      {
        id: 1,
        question: { fr: "Nombre de Sunan du Wudu ?", en: "Number of Sunan in Wudu?" },
        options: { fr: ["5", "7", "8", "12"], en: ["5", "7", "8", "12"] },
        answer: 2,
        explanation: { fr: "8 Sunan reconnues.", en: "8 recognized Sunan." }
      }
    ]
  },
  {
    id: "1.4",
    chapterId: 1,
    title: { fr: "Leçon 1.4 : Les Annulateurs des Ablutions", en: "Lesson 1.4: Nullifiers of Wudu" },
    arabicText: "نَوَاقِضُ الوُضُوءِ: أَحْدَاثٌ وَأَسْبَابٌ...",
    frenchTranslation: "Les annulateurs sont divisés en Ahdath et Asbab...",
    englishTranslation: "Nullifiers are divided into Ahdath and Asbab...",
    explanations: [
      {
        concept: { fr: "Classification des annulateurs", en: "Classification of nullifiers" },
        description: { fr: "Ahdath (évacuations) et Asbab (perte de conscience/contact).", en: "Ahdath (discharges) and Asbab (loss of consciousness/contact)." }
      }
    ],
    keyPoints: { fr: ["Sommeil lourd annule le Wudu."], en: ["Heavy sleep breaks Wudu."] },
    quiz: [
      {
        id: 1,
        question: { fr: "Le sommeil léger annule-t-il le Wudu ?", en: "Does light sleep break Wudu?" },
        options: { fr: ["Oui", "Non, seul le sommeil lourd", "Oui si >5 min", "Seulement la nuit"], en: ["Yes", "No, only heavy sleep", "Yes if >5 mins", "Only at night"] },
        answer: 1,
        explanation: { fr: "Seul le sommeil lourd annule.", en: "Only heavy sleep invalidates." }
      }
    ]
  },
  {
    id: "2.1",
    chapterId: 2,
    title: { fr: "Leçon 2.1 : La Grande Purification (Al-Ghusl)", en: "Lesson 2.1: Major Purification (Al-Ghusl)" },
    arabicText: "فَرَائِضُ الغُسْلِ: النِّيَّةُ، وَعُمُومُ الجَسَدِ بِالمَاءِ...",
    frenchTranslation: "Obligations du Ghusl : Intention, eau sur tout le corps, Dalk, Muwalah, racines des cheveux.",
    englishTranslation: "Obligations of Ghusl: Intention, water over whole body, Dalk, Muwalah, hair roots.",
    explanations: [
      { concept: { fr: "Ghusl", en: "Ghusl" }, description: { fr: "Eau sur 100% de la peau.", en: "Water over 100% of body." } }
    ],
    keyPoints: { fr: ["Racines des cheveux obligatoires."], en: ["Hair roots mandatory."] },
    quiz: [
      {
        id: 1,
        question: { fr: "Faut-il mouiller la racine des cheveux ?", en: "Must hair roots be wet?" },
        options: { fr: ["Non", "Oui (Fard)", "Hommes seulement", "Vendredi seulement"], en: ["No", "Yes (Fard)", "Men only", "Friday only"] },
        answer: 1,
        explanation: { fr: "Obligation stricte.", en: "Strict obligation." }
      }
    ]
  },
  {
    id: "2.2",
    chapterId: 2,
    title: { fr: "Leçon 2.2 : La Purification Sèche (At-Tayammum)", en: "Lesson 2.2: Dry Ablution (At-Tayammum)" },
    arabicText: "فَرَائِضُ التَّيَمُّمِ: النِّيَّةُ، وَالصَّعِيدُ الطَّاهِرُ...",
    frenchTranslation: "Obligations du Tayammum : Intention, sol pur, première frappe, visage, mains, continuité, entrée du temps.",
    englishTranslation: "Obligations of Tayammum: Intention, pure earth, first strike, face, hands, continuity, prayer time entry.",
    explanations: [
      { concept: { fr: "Tayammum", en: "Tayammum" }, description: { fr: "Remplacé en cas d'absence d'eau.", en: "Replaces Wudu when water unavailable." } }
    ],
    keyPoints: { fr: ["Requiert l'entrée du temps."], en: ["Requires prayer time entry."] },
    quiz: [
      {
        id: 1,
        question: { fr: "Peut-on faire Tayammum avant l'heure de prière ?", en: "Can Tayammum be done before prayer time?" },
        options: { fr: ["Oui", "Non, entrée du temps obligatoire", "Si voyage", "Le matin"], en: ["Yes", "No, prayer time entry required", "If traveling", "Morning"] },
        answer: 1,
        explanation: { fr: "L'entrée du temps est requise.", en: "Prayer time entry is required." }
      }
    ]
  },
  {
    id: "2.3",
    chapterId: 2,
    title: { fr: "Leçon 2.3 : Les Conditions de la Prière", en: "Lesson 2.3: Conditions of Prayer" },
    arabicText: "شُرُوطُ الصَّلَاةِ: طَهَارَةُ الحَدَثِ، وَطَهَارَةُ الخَبَثِ...",
    frenchTranslation: "Conditions de validité : Purification Hadath/Najasah, 'Awrah, Qibla, Entrée du temps.",
    englishTranslation: "Conditions: Purification Hadath/Najasah, 'Awrah, Qibla, Prayer time.",
    explanations: [
      { concept: { fr: "Conditions", en: "Conditions" }, description: { fr: "Avant la prière.", en: "Before prayer." } }
    ],
    keyPoints: { fr: ["Purification corps, vêtements, lieu."], en: ["Clean body, clothes, place."] },
    quiz: [
      {
        id: 1,
        question: { fr: "Que purifier avant de prier ?", en: "What must be clean before praying?" },
        options: { fr: ["Mains", "Corps, vêtements et lieu", "Vêtements", "Cœur seulement"], en: ["Hands", "Body, clothes, and place", "Clothes", "Heart only"] },
        answer: 1,
        explanation: { fr: "Purification globale requise.", en: "Global purification required." }
      }
    ]
  },
  {
    id: "2.4",
    chapterId: 2,
    title: { fr: "Leçon 2.4 : Les Piliers de la Prière (Arkan As-Salah)", en: "Lesson 2.4: Pillars of Prayer" },
    arabicText: "أَرْكَانُ الصَّلَاةِ: النِّيَّةُ، وَتَكْبِيرَةُ الإِحْرَامِ...",
    frenchTranslation: "Piliers : Intention, Takbir, Fatiha, Ruku', Sujud, Tuma'ninah, Salam.",
    englishTranslation: "Pillars: Intention, Takbir, Fatiha, Ruku', Sujud, Tuma'ninah, Taslim.",
    explanations: [
      { concept: { fr: "Piliers", en: "Pillars" }, description: { fr: "Ne peuvent pas être omis.", en: "Cannot be omitted." } }
    ],
    keyPoints: { fr: ["Fatiha obligatoire.", "Quiétude (Tuma'ninah) requise."], en: ["Fatiha mandatory.", "Tranquility (Tuma'ninah) required."] },
    quiz: [
      {
        id: 1,
        question: { fr: "Que fait l'omission d'un pilier ?", en: "What does omitting a pillar do?" },
        options: { fr: ["Valide", "Invalide la Rak'ah/Prière", "Aumône suffit", "Rien"], en: ["Valid", "Invalidates Rak'ah/Prayer", "Charity suffices", "Nothing"] },
        answer: 1,
        explanation: { fr: "Annule la raka'ah concernée.", en: "Invalidates the affected Rak'ah." }
      }
    ]
  }
];

export default function FiqhApp() {
  const [lang, setLang] = useState<Language>("fr");
  const [unlockedLessonIndex, setUnlockedLessonIndex] = useState<number>(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"course" | "quiz" | "glossary" | "flashcards" | "exam">("course");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Flashcards state
  const [flashcardIndex, setFlashcardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  // Quiz / Exam State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
  const [examPassed, setExamPassed] = useState<boolean>(false);

  const lesson = LESSONS[currentLessonIndex];
  const activeQuestions = viewMode === "exam" ? FINAL_EXAM_QUESTIONS : lesson.quiz;
  const currentQuestion = activeQuestions[currentQuestionIndex];
  const progressPercentage = Math.round(((unlockedLessonIndex + 1) / LESSONS.length) * 100);
  const allLessonsCompleted = unlockedLessonIndex === LESSONS.length - 1;

  const toggleLanguage = (newLang: Language) => setLang(newLang);

  const handleAnswerSelect = (index: number) => {
    if (!isAnswerSubmitted) setSelectedAnswer(index);
  };

  const handleValidateAnswer = () => {
    if (selectedAnswer === null) return;
    if (selectedAnswer === currentQuestion.answer) setScore((prev) => prev + 1);
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      const passed = score >= Math.ceil(activeQuestions.length * 0.75);
      if (viewMode === "quiz" && passed && currentLessonIndex === unlockedLessonIndex && unlockedLessonIndex + 1 < LESSONS.length) {
        setUnlockedLessonIndex((prev) => prev + 1);
      }
      if (viewMode === "exam" && passed) {
        setExamPassed(true);
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

  const filteredGlossary = GLOSSARY.filter((item) =>
    item.trans.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ar.includes(searchTerm) ||
    item[lang].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isPassed = score >= Math.ceil(activeQuestions.length * 0.75);

  const UI_TEXT = {
    fr: {
      subtitle: "FIQH MALIKITE — MATN AL-AKHDARI",
      overallProgress: "Progression globale",
      level: "Niveau",
      allLessons: "Toutes les leçons",
      locked: "Verrouillé",
      courseTab: "Cours",
      quizTab: "Quiz",
      glossaryTab: "Glossaire",
      flashcardsTab: "Révision",
      examTab: "Examen Final",
      translationTitle: "Traduction",
      explanationsTitle: "Explications Détaillées",
      keyPointsTitle: "Points clés à retenir",
      nextStep: "Passer au Quiz",
      question: "Question",
      explanation: "Explication",
      validate: "Valider la réponse",
      nextQuestion: "Question suivante",
      viewResult: "Voir le résultat",
      congrats: "Félicitations !",
      tryAgain: "Encore un effort !",
      scoreMessage: (s: number, total: number) => `Score obtenu : ${s} / ${total}`,
      restartQuiz: "Recommencer",
      nextLesson: "Leçon suivante",
      searchPlaceholder: "Rechercher un terme (ex: Fard, Wudu)...",
      flipCard: "Cliquer pour retourner la carte",
      certificateTitle: "ATTESTATION DE RÉUSSITE",
      certificateSub: "Délivrée pour la maîtrise des bases du Fiqh Malikite (Matn Al-Akhdari)",
      certifiedTo: "Décerné à l'Étudiant(e)",
      printCert: "Télécharger / Imprimer l'Attestation"
    },
    en: {
      subtitle: "MALIKI FIQH — MATN AL-AKHDARI",
      overallProgress: "Overall Progress",
      level: "Level",
      allLessons: "All Lessons",
      locked: "Locked",
      courseTab: "Course",
      quizTab: "Quiz",
      glossaryTab: "Glossary",
      flashcardsTab: "Revision",
      examTab: "Final Exam",
      translationTitle: "Translation",
      explanationsTitle: "Detailed Explanations",
      keyPointsTitle: "Key Takeaways",
      nextStep: "Take the Quiz",
      question: "Question",
      explanation: "Explanation",
      validate: "Submit Answer",
      nextQuestion: "Next Question",
      viewResult: "View Results",
      congrats: "Congratulations!",
      tryAgain: "Keep Trying!",
      scoreMessage: (s: number, total: number) => `Score achieved: ${s} / ${total}`,
      restartQuiz: "Restart",
      nextLesson: "Next Lesson",
      searchPlaceholder: "Search term (e.g. Fard, Wudu)...",
      flipCard: "Click to flip card",
      certificateTitle: "CERTIFICATE OF COMPLETION",
      certificateSub: "Awarded for mastering Maliki Fiqh fundamentals (Matn Al-Akhdari)",
      certifiedTo: "Awarded to the Student",
      printCert: "Download / Print Certificate"
    }
  };

  const text = UI_TEXT[lang];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-6 px-4 shadow-lg print:hidden">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold">
                {text.subtitle}
              </span>
              <h1 className="text-xl md:text-2xl font-bold mt-1">{lesson.title[lang]}</h1>
            </div>

            <div className="flex items-center gap-3">
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
                {text.level} : <span className="font-bold text-emerald-300">{unlockedLessonIndex + 1} / {LESSONS.length}</span>
              </div>
            </div>
          </div>

          {/* Barre de Progression Globale */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-emerald-200 font-medium">
              <span>{text.overallProgress}</span>
              <span>{progressPercentage}%</span>
            </div>
            <div className="w-full bg-emerald-950 h-2.5 rounded-full overflow-hidden border border-emerald-800">
              <div
                className="bg-emerald-400 h-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Barre Latérale */}
        <aside className="md:col-span-1 space-y-2 print:hidden">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">{text.allLessons}</h2>
          {LESSONS.map((l, idx) => {
            const isUnlocked = idx <= unlockedLessonIndex;
            const isSelected = idx === currentLessonIndex && viewMode === "course";

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
          {/* Navigation Mode */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-6 print:hidden">
            <button
              onClick={() => setViewMode("course")}
              className={`py-3 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-1 ${
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
              className={`py-3 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-1 ${
                viewMode === "quiz"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <HelpCircle className="w-4 h-4" /> {text.quizTab}
            </button>
            <button
              onClick={() => setViewMode("glossary")}
              className={`py-3 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-1 ${
                viewMode === "glossary"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <BookMarked className="w-4 h-4" /> {text.glossaryTab}
            </button>
            <button
              onClick={() => setViewMode("flashcards")}
              className={`py-3 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-1 ${
                viewMode === "flashcards"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <BrainCircuit className="w-4 h-4" /> {text.flashcardsTab}
            </button>
            <button
              onClick={() => {
                if (allLessonsCompleted) {
                  setViewMode("exam");
                  handleResetQuiz();
                }
              }}
              disabled={!allLessonsCompleted}
              className={`py-3 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-1 ${
                viewMode === "exam"
                  ? "bg-emerald-700 text-white shadow-md"
                  : allLessonsCompleted
                  ? "bg-amber-600 text-white hover:bg-amber-700 shadow-md"
                  : "bg-slate-200 text-slate-400 border border-slate-200 cursor-not-allowed"
              }`}
            >
              <GraduationCap className="w-4 h-4" /> {text.examTab}
            </button>
          </div>

          {/* MODE COURS */}
          {viewMode === "course" && (
            <div className="space-y-6">
              <div className="bg-emerald-50 border-r-4 border-emerald-700 p-6 rounded-2xl shadow-sm text-right">
                <p className="text-xl md:text-2xl font-serif leading-loose text-emerald-950" dir="rtl">
                  {lesson.arabicText}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                  {text.translationTitle} ({lang.toUpperCase()})
                </h3>
                <p className="text-slate-800 leading-relaxed italic">
                  {lang === "fr" ? lesson.frenchTranslation : lesson.englishTranslation}
                </p>
              </div>

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

          {/* MODE FLASHCARDS */}
          {viewMode === "flashcards" && (
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-center">
              <div className="flex justify-between items-center text-xs text-slate-500 font-bold">
                <span>FLASHCARD {flashcardIndex + 1} / {FLASHCARDS.length}</span>
                <span>{FLASHCARDS[flashcardIndex].trans}</span>
              </div>

              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="w-full h-64 bg-emerald-50 border-2 border-dashed border-emerald-600 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition hover:bg-emerald-100/50 shadow-inner"
              >
                {!isFlipped ? (
                  <div className="space-y-3">
                    <span className="text-2xl font-serif text-emerald-950 block">{FLASHCARDS[flashcardIndex].ar}</span>
                    <p className="text-base font-semibold text-slate-800">{FLASHCARDS[flashcardIndex].front[lang]}</p>
                    <span className="text-xs text-emerald-700 underline block mt-4">{text.flipCard}</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm text-slate-800 font-medium leading-relaxed">{FLASHCARDS[flashcardIndex].back[lang]}</p>
                    <span className="text-xs text-emerald-700 underline block mt-4">{text.flipCard}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between gap-4">
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIndex((prev) => (prev > 0 ? prev - 1 : FLASHCARDS.length - 1));
                  }}
                  className="px-4 py-2 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Précédent
                </button>
                <button
                  onClick={() => {
                    setIsFlipped(false);
                    setFlashcardIndex((prev) => (prev + 1) % FLASHCARDS.length);
                  }}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800"
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {/* MODE QUIZ ET EXAMEN */}
          {(viewMode === "quiz" || viewMode === "exam") && (
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              {!isQuizCompleted ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                      {text.question} {currentQuestionIndex + 1} / {activeQuestions.length}
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
                        {currentQuestionIndex + 1 < activeQuestions.length ? text.nextQuestion : text.viewResult}
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
                    {text.scoreMessage(score, activeQuestions.length)}
                  </p>

                  {/* CERTIFICAT DE REUSSITE FINAL */}
                  {viewMode === "exam" && examPassed && (
                    <div className="border-4 border-double border-emerald-700 p-6 md:p-8 rounded-2xl bg-amber-50/40 my-6 text-center space-y-4 print:border-black">
                      <GraduationCap className="w-12 h-12 mx-auto text-emerald-800" />
                      <h4 className="text-xl font-serif font-bold text-emerald-950 tracking-wider">{text.certificateTitle}</h4>
                      <p className="text-xs text-slate-600 max-w-md mx-auto">{text.certificateSub}</p>
                      <div className="py-2">
                        <span className="text-xs uppercase text-slate-500 font-bold block">{text.certifiedTo}</span>
                        <span className="text-lg font-bold text-emerald-900 border-b-2 border-emerald-700 pb-1 inline-block px-4 mt-1">Étudiant(e) du Matn Al-Akhdari</span>
                      </div>
                      <div className="pt-4">
                        <button
                          onClick={() => window.print()}
                          className="bg-emerald-800 text-white font-bold px-4 py-2 rounded-lg text-xs flex items-center gap-2 mx-auto hover:bg-emerald-900 print:hidden"
                        >
                          <Download className="w-4 h-4" /> {text.printCert}
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={handleResetQuiz}
                      className="border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-xl transition text-sm flex items-center gap-2"
                    >
                      <RotateCcw className="w-4 h-4" /> {text.restartQuiz}
                    </button>
                    {viewMode === "quiz" && isPassed && currentLessonIndex + 1 < LESSONS.length && (
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

          {/* MODE GLOSSAIRE DYNAMIQUE */}
          {viewMode === "glossary" && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                <input
                  type="text"
                  placeholder={text.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGlossary.map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-lg font-serif font-bold text-emerald-900" dir="rtl">{item.ar}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">{item.trans}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-800">
                      {lang === "fr" ? item.fr : item.en}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}