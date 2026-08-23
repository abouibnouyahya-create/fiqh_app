"use client";

import React, { useState } from "react";
import { BookOpen, Award, ArrowRight, RotateCcw, HelpCircle, CheckCircle, Lock, Globe, Search, BookMarked, Check } from "lucide-react";

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

const LESSONS: Lesson[] = [
  {
    id: "1.1",
    chapterId: 1,
    title: {
      fr: "Leçon 1.1 : Les types d'eaux et la purification (At-Tahara)",
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
      en: "Lesson 1.2: Obligatory Acts of Wudu (Fara'id Al-Wudu)"
    },
    arabicText: "فَرَائِضُ الوُضُوءِ سَبْعَةٌ: النِّيَّةُ، وَغَسْلُ الوَجْهِ، وَغَسْلُ اليَدَيْنِ إِلَى المِرْفَقَيْنِ، وَمَسْحُ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الكَعْبَيْنِ، وَالدَّلْكُ، وَالـمُوَالَاةُ.",
    frenchTranslation: "Les actes obligatoires (Fara'id) des ablutions sont au nombre de sept : 1) L'intention, 2) Le lavage du visage, 3) Le lavage des mains jusqu'aux coudes compris, 4) L'essuyage de la tête, 5) Le lavage des pieds jusqu'aux chevilles comprises, 6) Le frottement (Dalk), 7) La continuité sans interruption (Muwalah).",
    englishTranslation: "The obligatory elements (Fara'id) of Wudu are seven: 1) Intention (Niyyah), 2) Washing the face, 3) Washing arms up to the elbows, 4) Wiping the head, 5) Washing feet up to the ankles, 6) Rubbing/Scrubbing (Dalk), 7) Continuity without interruption (Muwalah).",
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
  },
  {
    id: "1.3",
    chapterId: 1,
    title: {
      fr: "Leçon 1.3 : Les Sunan des Ablutions (Sunan Al-Wudu)",
      en: "Lesson 1.3: Recommended Acts of Wudu (Sunan Al-Wudu)"
    },
    arabicText: "وَسُنَنُهُ: غَسْلُ اليَدَيْنِ إِلَى الكُوعَيْنِ عِنْدَ الِابْتِدَاءِ، وَالمَضْمَضَةُ، وَالِاسْتِنْشَاقُ، وَالِاسْتِنْثَارُ، وَرَدُّ مَسْحِ الرَّأْسِ، وَمَسْحُ الأُذُنَيْنِ، وَتَجْدِيدُ المَاءِ لَهُمَا، وَالتَّرْتِيبُ بَيْنَ الفَرَائِضِ.",
    frenchTranslation: "Les actes recommandés (Sunan) du Wudu sont au nombre de 8 : 1) Le lavage des mains jusqu'aux poignets au début, 2) Le rinçage de la bouche (Madmadah), 3) L'aspiration de l'eau par le nez (Istinshaq), 4) Le rejet de l'eau du nez (Istinthar), 5) Le retour de l'essuyage de la tête, 6) L'essuyage des oreilles, 7) Le renouvellement de l'eau pour les oreilles, 8) L'ordre chronologique entre les obligations.",
    englishTranslation: "The Sunan (recommended acts) of Wudu are 8: 1) Washing hands to the wrists at the start, 2) Rinsing the mouth (Madmadah), 3) Sniffing water into the nose (Istinshaq), 4) Blowing water out of the nose (Istinthar), 5) Returning the wipe over the head, 6) Wiping the ears, 7) Fresh water for ears, 8) Proper sequence between obligatory acts.",
    explanations: [
      {
        concept: {
          fr: "Les 8 Sunan des Ablutions",
          en: "The 8 Sunan of Wudu"
        },
        description: {
          fr: "Les Sunan complètent les Fara'id. Omettre une Sunah ne rend pas le Wudu invalide, mais en diminue la récompense.",
          en: "Sunan complement the Fara'id. Omitting a Sunnah does not invalidate Wudu, but reduces its spiritual reward."
        }
      }
    ],
    keyPoints: {
      fr: ["Les Sunan sont au nombre de 8.", "Le rinçage de la bouche et du nez en font partie."],
      en: ["The Sunan are 8 in total.", "Rinsing the mouth and nose are included among them."]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Combien y a-t-il de Sunan dans le Wudu chez les Malikites ?",
          en: "How many Sunan acts are there in Wudu in the Maliki school?"
        },
        options: {
          fr: ["5", "7", "8", "12"],
          en: ["5", "7", "8", "12"]
        },
        answer: 2,
        explanation: {
          fr: "Il y a 8 Sunan reconnues dans le Wudu.",
          en: "There are 8 recognized Sunan acts in Wudu."
        }
      }
    ]
  },
  {
    id: "1.4",
    chapterId: 1,
    title: {
      fr: "Leçon 1.4 : Les Annulateurs des Ablutions (Nawaqid Al-Wudu)",
      en: "Lesson 1.4: Nullifiers of Wudu (Nawaqid Al-Wudu)"
    },
    arabicText: "نَوَاقِضُ الوُضُوءِ: أَحْدَاثٌ وَأَسْبَابٌ. فَالأَحْدَاثُ: البَوْلُ، وَالغَائِطُ، وَالرِّيحُ، وَالـمَذْيُ، وَالوَدْيُ. وَالأَسْبَابُ: النَّوْمُ الثَّقِيلُ، وَالإِغْمَاءُ، وَالسُّكْرُ، وَالجُنُونُ، وَالـمَسُّ، وَالقُبْلَةُ.",
    frenchTranslation: "Les annulateurs du Wudu sont divisés en évacuations directes (Ahdath) et causes d'inconscience/contact (Asbab). Directs : urine, selles, gaz, Mady, Wady. Causes : sommeil lourd, évanouissement, ivresse, folie, toucher d'une partie intime, baiser passionné.",
    englishTranslation: "Nullifiers of Wudu are divided into direct discharges (Ahdath) and indirect causes (Asbab). Direct: urine, feces, wind, Mady, Wady. Causes: heavy sleep, fainting, intoxication, insanity, touching private parts, passionate kissing.",
    explanations: [
      {
        concept: {
          fr: "Classification des Annulateurs",
          en: "Classification of Nullifiers"
        },
        description: {
          fr: "Les annulateurs se divisent en deux catégories majeures : les Ahdath (sécrétions/évacuations naturelles) et les Asbab (perte de conscience ou contact spécifique).",
          en: "Nullifiers are divided into two main categories: Ahdath (natural body discharges) and Asbab (loss of consciousness or specific contact)."
        }
      }
    ],
    keyPoints: {
      fr: ["Le sommeil lourd annule le Wudu.", "Les évacuations naturelles nécessitent un nouveau Wudu."],
      en: ["Heavy sleep breaks Wudu.", "Natural bodily excretions require renewing Wudu."]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Le sommeil léger annule-t-il le Wudu en jurisprudence Malikite ?",
          en: "Does light sleep break Wudu in Maliki jurisprudence?"
        },
        options: {
          fr: ["Oui, toujours", "Non, seul le sommeil lourd l'annule", "Oui, s'il dure plus de 5 minutes", "Seulement la nuit"],
          en: ["Yes, always", "No, only heavy sleep breaks it", "Yes, if over 5 minutes", "Only at night"]
        },
        answer: 1,
        explanation: {
          fr: "Seul le sommeil lourd entraîne l'invalidation du Wudu.",
          en: "Only heavy sleep invalidates Wudu."
        }
      }
    ]
  },
  {
    id: "2.1",
    chapterId: 2,
    title: {
      fr: "Leçon 2.1 : La Grande Purification (Al-Ghusl)",
      en: "Lesson 2.1: Major Ritual Purification (Al-Ghusl)"
    },
    arabicText: "فَرَائِضُ الغُسْلِ: النِّيَّةُ، وَعُمُومُ الجَسَدِ بِالمَاءِ، وَالدَّلْكُ، وَالمُوَالَاةُ، وَتَخْلِيلُ الشَّعْرِ.",
    frenchTranslation: "Les obligations du Ghusl : 1) L'intention, 2) Couvrir tout le corps d'eau, 3) Le frottement (Dalk), 4) La continuité (Muwalah), 5) Pénétrer l'eau à la racine des cheveux.",
    englishTranslation: "Obligations of Ghusl: 1) Intention, 2) Washing the entire body with water, 3) Rubbing (Dalk), 4) Continuity (Muwalah), 5) Passing water through hair roots.",
    explanations: [
      {
        concept: {
          fr: "Obligations du Ghusl",
          en: "Obligations of Ghusl"
        },
        description: {
          fr: "Le Ghusl requiert de mouiller la totalité du corps sans oublier les racines des cheveux et de frotter la peau.",
          en: "Ghusl requires washing the entire body, ensuring water reaches the hair roots and rubbing the skin."
        }
      }
    ],
    keyPoints: {
      fr: ["L'eau doit toucher 100% de la peau.", "Le frottement est obligatoire chez les Malikites."],
      en: ["Water must touch 100% of skin.", "Rubbing (Dalk) is mandatory in the Maliki school."]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Est-il obligatoire de laver les racines des cheveux pendant le Ghusl ?",
          en: "Is it obligatory to reach the roots of the hair during Ghusl?"
        },
        options: {
          fr: ["Non, c'est facultatif", "Oui, c'est une obligation (Fard)", "Seulement pour les hommes", "Seulement le vendredi"],
          en: ["No, it is optional", "Yes, it is obligatory (Fard)", "Only for men", "Only on Friday"]
        },
        answer: 1,
        explanation: {
          fr: "L'eau doit obligatoirement atteindre le cuir chevelu et les racines.",
          en: "Water must reach the scalp and hair roots."
        }
      }
    ]
  },
  {
    id: "2.2",
    chapterId: 2,
    title: {
      fr: "Leçon 2.2 : La Purification Sèche (At-Tayammum)",
      en: "Lesson 2.2: Dry Ablution (At-Tayammum)"
    },
    arabicText: "فَرَائِضُ التَّيَمُّمِ: النِّيَّةُ، وَالصَّعِيدُ الطَّاهِرُ، وَالضَّرْبَةُ الأُولَى، وَمَسْحُ الوَجْهِ، وَمَسْحُ اليَدَيْنِ إِلَى الكُوعَيْنِ، وَالمُوَالَاةُ، وَدُخُولُ الوَقْتِ.",
    frenchTranslation: "Les obligations du Tayammum : 1) L'intention, 2) Un sol pur (Sa'id Tahir), 3) La première frappe, 4) L'essuyage du visage, 5) L'essuyage des mains jusqu'aux poignets, 6) La continuité, 7) L'entrée du temps de prière.",
    englishTranslation: "Obligations of Tayammum: 1) Intention, 2) Pure earth material (Sa'id Tahir), 3) First strike of hands, 4) Wiping the face, 5) Wiping hands to wrists, 6) Continuity, 7) Entry of prayer time.",
    explanations: [
      {
        concept: {
          fr: "Conditions du Tayammum",
          en: "Conditions of Tayammum"
        },
        description: {
          fr: "Le Tayammum remplace le Wudu/Ghusl en cas d'absence d'eau ou de maladie. Il ne peut être fait qu'après l'entrée du temps de la prière.",
          en: "Tayammum replaces Wudu/Ghusl in case of water absence or illness. It can only be performed after prayer time has set in."
        }
      }
    ],
    keyPoints: {
      fr: ["S'effectue avec de la terre, pierre ou sable pur.", "Doit être fait après le début de l'heure de la prière."],
      en: ["Performed using pure earth, stone, or sand.", "Must be done after the prayer time begins."]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Peut-on faire le Tayammum avant l'entrée du temps de la prière ?",
          en: "Can Tayammum be performed before the prayer time enters?"
        },
        options: {
          fr: ["Oui, n'importe quand", "Non, l'entrée du temps est une condition", "Oui, si on voyage", "Seulement le matin"],
          en: ["Yes, anytime", "No, entry of prayer time is required", "Yes, if traveling", "Only in the morning"]
        },
        answer: 1,
        explanation: {
          fr: "L'entrée du temps de la prière concernée est une obligation pour le Tayammum.",
          en: "The entry of the specific prayer time is required for Tayammum."
        }
      }
    ]
  },
  {
    id: "2.3",
    chapterId: 2,
    title: {
      fr: "Leçon 2.3 : Les Conditions de la Prière (Shurut As-Salah)",
      en: "Lesson 2.3: Conditions of Prayer (Shurut As-Salah)"
    },
    arabicText: "شُرُوطُ الصَّلَاةِ: طَهَارَةُ الحَدَثِ، وَطَهَارَةُ الخَبَثِ مِنَ الثَّوْبِ وَالبَدَنِ وَالمَكَانِ، وَسَتْرُ العَوْرَةِ، وَاسْتِقْبَالُ القِبْلَةِ، وَدُخُولُ الوَقْتِ.",
    frenchTranslation: "Les conditions de validité de la prière : 1) Purification de l'impureté rituelle, 2) Purification des souillures physiques (vêtement, corps, lieu), 3) Couvrir la 'Awrah, 4) S'orienter vers la Qibla, 5) L'entrée du temps.",
    englishTranslation: "Conditions for prayer validity: 1) Purity from ritual impurity, 2) Purity from physical filth (clothes, body, place), 3) Covering the 'Awrah, 4) Facing the Qibla, 5) Entry of prayer time.",
    explanations: [
      {
        concept: {
          fr: "Les 5 Conditions Préalables",
          en: "The 5 Prerequisite Conditions"
        },
        description: {
          fr: "Ces conditions doivent être remplies AVANT de commencer la prière sous peine d'invalidation.",
          en: "These conditions must be fulfilled BEFORE starting the prayer, otherwise it is invalid."
        }
      }
    ],
    keyPoints: {
      fr: ["L'orientation vers la Qibla est obligatoire.", "Le lieu, les vêtements et le corps doivent être propres."],
      en: ["Facing the Qibla is mandatory.", "Body, clothing, and location must be clean."]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Que faut-il purifier avant la prière ?",
          en: "What must be clean before praying?"
        },
        options: {
          fr: ["Uniquement les mains", "Le corps, le vêtement et le lieu", "Seulement le vêtement", "Rien d'autre que le coeur"],
          en: ["Hands only", "Body, clothing, and place of prayer", "Clothing only", "Nothing but the heart"]
        },
        answer: 1,
        explanation: {
          fr: "La purification concerne à la fois le corps, les habits et le lieu de prière.",
          en: "Purification applies to body, clothing, and the spot of prayer."
        }
      }
    ]
  },
  {
    id: "2.4",
    chapterId: 2,
    title: {
      fr: "Leçon 2.4 : Les Piliers de la Prière (Arkan As-Salah)",
      en: "Lesson 2.4: Pillars of Prayer (Arkan As-Salah)"
    },
    arabicText: "أَرْكَانُ الصَّلَاةِ: النِّيَّةُ، وَتَكْبِيرَةُ الإِحْرَامِ، وَالقِيَامُ لَهَا، وَالفَاتِحَةُ، وَالقِيَامُ لَهَا، وَالرُّكُوعُ، وَالرَّفْعُ مِنْهُ، وَالسُّجُودُ، وَالرَّفْعُ مِنْهُ، وَالاعْتِدَالُ، وَالطَّمَأْنِينَةُ، وَالسَّلَامُ.",
    frenchTranslation: "Les piliers obligatoires de la prière : L'intention, Takbirat Al-Ihram et la station debout pour celle-ci, la récitation de la Fatiha, le Ruku', le redressement, la prosternation (Sujud), le redressement du Sujud, l'alignement (I'tidal), la sérénité (Tuma'ninah) et le Salam final.",
    englishTranslation: "Obligatory pillars of prayer: Intention, Takbirat Al-Ihram while standing, reciting Al-Fatiha while standing, Ruku', rising from Ruku', Sujud, rising from Sujud, composure (I'tidal), tranquility (Tuma'ninah), and final Taslim.",
    explanations: [
      {
        concept: {
          fr: "Définition des Piliers",
          en: "Definition of Pillars"
        },
        description: {
          fr: "Un pilier (Rukn) ne peut jamais être omis, que ce soit par oubli ou volontairement. Son omission annule la prière.",
          en: "A pillar (Rukn) cannot be omitted, whether accidentally or intentionally. Omitting it invalidates the prayer."
        }
      }
    ],
    keyPoints: {
      fr: ["La Fatiha est un pilier obligatoire à chaque Rak'ah.", "La quiétude (Tuma'ninah) est requise."],
      en: ["Reciting Al-Fatiha is mandatory in every Rak'ah.", "Tranquility (Tuma'ninah) is required in every position."]
    },
    quiz: [
      {
        id: 1,
        question: {
          fr: "Que se passe-t-il si un pilier de la prière est oublié ?",
          en: "What happens if a pillar of prayer is omitted?"
        },
        options: {
          fr: [
            "La prière reste valide",
            "La prière ou la raka'ah est invalide et doit être corrigée",
            "Il suffit d'offrir une aumône",
            "Rien de particulier"
          ],
          en: [
            "Prayer remains valid",
            "The prayer or Rak'ah is invalid and must be corrected",
            "Giving charity compensates for it",
            "Nothing"
          ]
        },
        answer: 1,
        explanation: {
          fr: "Un pilier omis invalide la raka'ah concernée et exige réparation.",
          en: "An omitted pillar invalidates the affected Rak'ah and requires correction."
        }
      }
    ]
  }
];

export default function FiqhApp() {
  const [lang, setLang] = useState<Language>("fr");
  const [unlockedLessonIndex, setUnlockedLessonIndex] = useState<number>(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"course" | "quiz" | "glossary">("course");
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const lesson = LESSONS[currentLessonIndex];
  const currentQuestion = lesson.quiz[currentQuestionIndex];
  const progressPercentage = Math.round(((unlockedLessonIndex + 1) / LESSONS.length) * 100);

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

  const filteredGlossary = GLOSSARY.filter((item) =>
    item.trans.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ar.includes(searchTerm) ||
    item[lang].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isPassed = score >= Math.ceil(lesson.quiz.length * 0.75);

  const UI_TEXT = {
    fr: {
      subtitle: "FIQH MALIKITE — MATN AL-AKHDARI",
      overallProgress: "Progression globale",
      level: "Niveau",
      lessons: "Leçons",
      allLessons: "Toutes les leçons",
      locked: "Verrouillé",
      courseTab: "Cours",
      quizTab: "Quiz",
      glossaryTab: "Glossaire Fiqh",
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
      scoreMessage: (s: number, total: number) => `Vous avez obtenu ${s} / ${total} bonnes réponses.`,
      restartQuiz: "Recommencer le quiz",
      nextLesson: "Leçon suivante",
      searchPlaceholder: "Rechercher un terme (ex: Fard, Wudu, طهارة)..."
    },
    en: {
      subtitle: "MALIKI FIQH — MATN AL-AKHDARI",
      overallProgress: "Overall Progress",
      level: "Level",
      lessons: "Lessons",
      allLessons: "All Lessons",
      locked: "Locked",
      courseTab: "Course",
      quizTab: "Quiz",
      glossaryTab: "Fiqh Glossary",
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
      scoreMessage: (s: number, total: number) => `You scored ${s} / ${total}.`,
      restartQuiz: "Retake Quiz",
      nextLesson: "Next Lesson",
      searchPlaceholder: "Search a term (e.g. Fard, Wudu, طهارة)..."
    }
  };

  const text = UI_TEXT[lang];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans pb-12">
      {/* Header */}
      <header className="bg-emerald-900 text-white py-6 px-4 shadow-lg">
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
        <aside className="md:col-span-1 space-y-2">
          <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">{text.allLessons}</h2>
          {LESSONS.map((l, idx) => {
            const isUnlocked = idx <= unlockedLessonIndex;
            const isSelected = idx === currentLessonIndex && viewMode !== "glossary";

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
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setViewMode("course")}
              className={`flex-1 py-3 rounded-xl font-semibold text-xs md:text-sm transition flex items-center justify-center gap-2 ${
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
              className={`flex-1 py-3 rounded-xl font-semibold text-xs md:text-sm transition flex items-center justify-center gap-2 ${
                viewMode === "quiz"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <HelpCircle className="w-4 h-4" /> {text.quizTab} ({lesson.quiz.length})
            </button>
            <button
              onClick={() => setViewMode("glossary")}
              className={`flex-1 py-3 rounded-xl font-semibold text-xs md:text-sm transition flex items-center justify-center gap-2 ${
                viewMode === "glossary"
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              <BookMarked className="w-4 h-4" /> {text.glossaryTab}
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