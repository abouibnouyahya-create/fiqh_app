'use client';

import React, { useState, useEffect } from 'react';

interface Lesson {
  id: string;
  number: string;
  title: string;
  arabicText: string;
  translation: string;
  detailedCourse: {
    intro: string;
    points: { title: string; content: string }[];
    practicalCases: string[];
  };
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
    detailedCourse: {
      intro: "En fiqh malékite, la purification (Taharah) est la condition sine qua non de la prière. Elle se divise en deux volets : la levée du Hadath (état d'impureté rituelle) et l'élimination de la Najasah (impureté matérielle sur le corps, l'habit ou le lieu).",
      points: [
        {
          title: "1. L'Eau Pure et Purifiante (Al-Ma' Al-Moutlaq)",
          content: "C'est l'eau qui demeure dans son état naturel d'origine (eau de pluie, de mer, de puits, de fleuve, ou de fonte de neige). Seule cette eau possède la double qualité : être propre en elle-même (Tahir) et avoir le pouvoir de purifier autrui (Mutahhir)."
        },
        {
          title: "2. Les Trois Critères d'Altération",
          content: "Pour déterminer si une eau conserve son statut purifiant, on examine trois propriétés fondamentales : sa couleur, son goût et son odeur. Si l'un de ces trois éléments est altéré par un élément externe indissociable ou séparable, son statut juridique change."
        },
        {
          title: "3. Altération par une substance propre (Tahir)",
          content: "Si du savon, du lait, du thé ou du parfum tombe dans l'eau et en modifie le goût, la couleur ou l'odeur, l'eau reste propre pour les usages domestiques (boisson, cuisine) mais PERD son pouvoir purifiant pour le Wudu et le Ghusl."
        },
        {
          title: "4. Altération par des éléments naturels indissociables",
          content: "L'eau qui change à cause de son emplacement naturel (vase du puits, mousse d'étang, soufre des sources thermales) reste 100% purifiante car il est impossible ou trop difficile de l'en préserver."
        },
        {
          title: "5. Altération par une impureté (Najis)",
          content: "Si une goutte d'urine, de sang ou de substance impure altère la couleur, le goût ou l'odeur de l'eau, celle-ci devient totalement impure (Najis). Il est strictement interdit de l'utiliser pour l'adoration ou la consommation."
        }
      ],
      practicalCases: [
        "Cas 1 : Eau mélangée à un peu de fleur d'oranger -> Propre mais invalide pour le Wudu.",
        "Cas 2 : Eau de robinet légèrement jaunâtre à cause de la rouille du tuyau -> Valide pour le Wudu.",
        "Cas 3 : Puits tombé dans lequel une bête est morte et dont l'odeur a changé -> Impure (Najis), Wudu interdit."
      ]
    },
    quiz: [
      {
        question: "Quelle est la définition exacte de l'eau 'Al-Ma' Al-Moutlaq' ?",
        options: [
          "Une eau mélangée à du parfum propre",
          "L'eau qui conserve ses propriétés naturelles d'origine sans altération",
          "Une eau bouillie uniquement"
        ],
        answerIndex: 1
      },
      {
        question: "Si du jus de citron tombe dans l'eau et change son goût, quelle est sa règle ?",
        options: [
          "Elle devient impure et toxique",
          "Elle reste pure et purifiante pour l'ablution",
          "Elle reste propre mais perd sa capacité à purifier pour l'ablution"
        ],
        answerIndex: 2
      },
      {
        question: "Que se passe-t-il si l'eau change de couleur à cause de la vase naturelle du puits ?",
        options: [
          "Elle reste purifiante car la séparation est difficile",
          "L'ablution devient invalide",
          "Il faut obligatoirement la filtrer avec du savon"
        ],
        answerIndex: 0
      },
      {
        question: "Quelles sont les trois caractéristiques fondamentales examinées pour juger de la pureté de l'eau ?",
        options: [
          "La température, la masse et le volume",
          "La couleur, le goût et l'odeur",
          "La provenance, la clarté et la vitesse d'écoulement"
        ],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "At-Taharah", arabic: "الطَّهَارَة", definition: "La purification rituelle et matérielle requise pour l'adoration." },
      { term: "Al-Ma' Al-Moutlaq", arabic: "الْمَاءُ الْمُطْلَق", definition: "L'eau pure et purifiante dans son état naturel." },
      { term: "Al-Hadath", arabic: "الْحَدَث", definition: "L'état d'impureté rituelle nécessitant le Wudu ou le Ghusl." },
      { term: "Najasah", arabic: "النَّجَاسَة", definition: "Toute impureté matérielle et physique spécifiée par le droit islamique." }
    ],
    revisionPoints: [
      "Retenir les 3 critères de l'eau : couleur, goût, odeur.",
      "Une eau propre altérée par un produit propre ne purifie pas pour les ablutions.",
      "Seule l'eau 'Al-Moutlaq' enlève l'impureté rituelle (Hadath).",
      "La vase ou le soufre naturel n'enlèvent pas le pouvoir purifiant de l'eau."
    ]
  },
  {
    id: '1.2',
    number: 'Leçon 1.2',
    title: "Les Obligations de l'Ablution (Farā'iḍ Al-Wudu)",
    arabicText: "فَرَائِضُ الْوُضُوءِ سَبْعَةٌ: النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ، وَغَسْلُ الْوَجْهِ، وَغَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ جَمِيعِ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ، وَالدَّلْكُ، وَالْمُوَالاَةُ.",
    translation: "Les obligations de l'ablution sont au nombre de sept : l'intention au moment du lavage du visage, le lavage du visage, le lavage des bras jusqu'aux coudes inclus, l'essuyage complet de la tête, le lavage des pieds jusqu'aux chevilles incluses, le frictionnement (Dalk) et la continuité (Muwalah).",
    detailedCourse: {
      intro: "Dans l'école Malikite, l'ablution (Wudu) repose sur sept piliers obligatoires (Fara'id). L'omission d'un seul de ces sept éléments rend l'ablution invalide et la prière nulle.",
      points: [
        {
          title: "1. La Niyyah (L'Intention)",
          content: "Elle prend place dans le cœur au moment précis où l'eau touche le visage. Il s'agit d'avoir la résolution mentale d'accomplir l'obligation de l'ablution ou de lever le Hadath."
        },
        {
          title: "2. Le lavage du visage (Ghasl Al-Wajh)",
          content: "Du haut du front (naissance habituelle des cheveux) jusqu'au bas du menton verticalement, et d'une oreille à l'autre horizontalement."
        },
        {
          title: "3. Le lavage des bras jusqu'aux coudes inclus",
          content: "Les coudes doivent obligatoirement être lavés. Si la personne a lavé ses mains au début (Sunnah), elle doit quand même relaver les mains avec les bras jusqu'aux coudes."
        },
        {
          title: "4. L'essuyage complet de la tête (Mash Jami' Ar-Ra's)",
          content: "Dans l'école Malikite, il est obligatoire d'essuyer la totalité de la tête du front jusqu'à la nuque (contrairement à d'autres écoles qui n'exigent qu'une partie)."
        },
        {
          title: "5. Le lavage des pieds jusqu'aux chevilles incluses",
          content: "Les chevilles saillantes doivent être complètement immergées et lavées."
        },
        {
          title: "6. Le frictionnement (Ad-Dalk)",
          content: "Passer la main sur le membre avec de l'eau ou immédiatement après. C'est une obligation spécifique et stricte du Fiqh Malikite."
        },
        {
          title: "7. La continuité (Al-Muwalah)",
          content: "Enchaîner le lavage des membres sans interruption temporelle qui permettrait au membre précédent de sécher dans des conditions climatiques moyennes."
        }
      ],
      practicalCases: [
        "Cas 1 : Une personne verse l'eau sur son bras sans le toucher avec la main -> Wudu invalide chez les Malékites (Manque le Dalk).",
        "Cas 2 : N'essuyer que l'avant du crâne -> Invalide chez les Malékites (Il faut toute la tête).",
        "Cas 3 : Interrompre son ablution 15 minutes pour répondre au téléphone -> Invalide (Rupture de la Muwalah)."
      ]
    },
    quiz: [
      {
        question: "Combien y a-t-il d'obligations (Farā'iḍ) de l'ablution dans le Fiqh Malikite ?",
        options: ["5 obligations", "7 obligations", "10 obligations"],
        answerIndex: 1
      },
      {
        question: "À quel moment précis l'intention (Niyyah) doit-elle être présente ?",
        options: [
          "En rentrant dans la salle de bain",
          "Au moment exact du lavage du visage",
          "Juste après l'essuyage des pieds"
        ],
        answerIndex: 1
      },
      {
        question: "En quoi consiste la règle obligatoire du 'Dalk' chez les Malékites ?",
        options: [
          "Sécher ses membres avec une serviette",
          "Frictionner la peau avec la main pendant ou juste après l'arrosage d'eau",
          "Rincer trois fois chaque membre"
        ],
        answerIndex: 1
      },
      {
        question: "Quelle est l'étendue obligatoire pour l'essuyage de la tête (Mash Ar-Ra's) ?",
        options: [
          "Un quart de la tête seulement",
          "La totalité de la tête, du front jusqu'à la nuque",
          "Les trois premiers cheveux sur le front"
        ],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "An-Niyyah", arabic: "النِّيَّة", definition: "L'intention du cœur d'accomplir un acte d'adoration." },
      { term: "Ad-Dalk", arabic: "الدَّلْك", definition: "Le frictionnement obligatoire des membres avec la main." },
      { term: "Al-Muwalah", arabic: "الْمُوَالاَة", definition: "L'enchaînement continu des actes sans laisser sécher les membres." },
      { term: "Al-Ka'bayn", arabic: "الْكَعْبَيْن", definition: "Les deux chevilles saillantes aux bas des jambes." }
    ],
    revisionPoints: [
      "Ne pas confondre les 7 obligations (Farā'iḍ) et les actes recommandés (Sunan).",
      "Le Dalk (frictionnement) est obligatoire dans l'école Malikite.",
      "L'essuyage de la tête doit couvrir toute la tête.",
      "Les coudes et les chevilles font partie intégrante du lavage."
    ]
  },
  {
    id: '1.3',
    number: 'Leçon 1.3',
    title: "Les Actes Recommandés de l'Ablution (Sunan Al-Wudu)",
    arabicText: "وَسُنَنُهُ: غَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ عِنْدَ الاِبْتِدَاءِ، وَالْمَضْمَضَةُ، وَالاِسْتِنْشَاقُ، وَالاِسْتِنْثَارُ، وَرَدُّ مَسْحِ الرَّأْسِ، وَمَسْحُ الأُذُنَيْنِ، وَتَجْدِيدُ الْمَاءِ لَهُمَا، وَالتَّرْتِيبُ.",
    translation: "Et ses Sunan sont : le lavage initial des mains jusqu'aux poignets, le rinçage de la bouche (Madmadah), l'aspiration de l'eau par le nez (Istinshaq), son expulsion (Istinthar), le retour de l'essuyage de la tête, l'essuyage des deux oreilles, le renouvellement de l'eau pour elles, et le respect de l'ordre (Tartib).",
    detailedCourse: {
      intro: "Les Sunan sont les pratiques enseignées par le Prophète (ﷺ) qui viennent compléter les Fara'id. Leur omission n'annule pas l'ablution, mais prive le croyant d'une grande récompense.",
      points: [
        {
          title: "1. Lavage des mains au poignet au début",
          content: "Laver les deux mains jusqu'aux poignets au tout début du processus avant de les mettre dans le récipient ou de rincer la bouche."
        },
        {
          title: "2. La Madmadah (Rinçage buccal)",
          content: "Prendre de l'eau dans la bouche, la faire tourner à l'intérieur puis la rejeter."
        },
        {
          title: "3. L'Istinshaq et l'Istinthar",
          content: "Aspirer de l'eau par le nez (Istinshaq) puis l'expulser en se pinçant légèrement le nez avec la main gauche (Istinthar)."
        },
        {
          title: "4. Le retour de l'essuyage de la tête",
          content: "L'aller du front à la nuque est Fard (obligatoire). Le retour de la nuque vers le front est une Sunnah."
        },
        {
          title: "5. L'essuyage des oreilles et l'eau nouvelle",
          content: "Essuyer l'intérieur des oreilles avec les index et l'extérieur avec les pouces, en reprenant de l'eau propre spécialement dédiée aux oreilles."
        },
        {
          title: "6. At-Tartib (L'ordre des membres)",
          content: "Respecter l'ordre traditionnel : Visage -> Bras -> Tête -> Pieds."
        }
      ],
      practicalCases: [
        "Cas 1 : Oublier de se rincer la bouche et faire sa prière -> La prière est valide, l'ablution reste valable.",
        "Cas 2 : Essuyer ses oreilles avec le reste d'eau de la tête -> Valide, mais a manqué la Sunnah d'utiliser une eau nouvelle."
      ]
    },
    quiz: [
      {
        question: "Parmi les actes suivants, lequel est une Sunnah et NON une obligation ?",
        options: [
          "Le lavage du visage",
          "Le rinçage de la bouche (Madmadah)",
          "Le frictionnement (Dalk)"
        ],
        answerIndex: 1
      },
      {
        question: "Comment s'appelle l'acte consistant à expulser l'eau du nez ?",
        options: ["Al-Madmadah", "Al-Istinshaq", "Al-Istinthar"],
        answerIndex: 2
      },
      {
        question: "Quelle est la règle concernant l'eau utilisée pour essuyer les oreilles ?",
        options: [
          "Il est recommandé de prendre de l'eau nouvelle et fraîche",
          "Il faut garder exactement l'eau de l'essuyage de la tête",
          "Les oreilles ne s'essuient jamais à l'eau"
        ],
        answerIndex: 0
      },
      {
        question: "Quelle main est-il recommandé d'utiliser pour l'expulsion de l'eau du nez (Istinthar) ?",
        options: ["La main droite", "La main gauche", "Les deux mains simultanément"],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "Al-Madmadah", arabic: "الْمَضْمَضَة", definition: "Le fait de rincer et faire tourner l'eau dans la bouche." },
      { term: "Al-Istinshaq", arabic: "الاِسْتِنْشَاق", definition: "L'aspiration d'eau par les narines." },
      { term: "Al-Istinthar", arabic: "الاِسْتِنْثَار", definition: "L'expulsion de l'eau hors du nez." },
      { term: "At-Tartib", arabic: "التَّرْتِيب", definition: "Le respect de la séquence ordonnée des actes." }
    ],
    revisionPoints: [
      "Le rinçage de la bouche et du nez sont des Sunan.",
      "Le retour de la main de la nuque au front est une Sunnah (l'aller est obligatoire).",
      "Utiliser une nouvelle eau pour les oreilles est recommandé.",
      "Les Sunan complètent l'ablution mais leur omission n'invalide pas la prière."
    ]
  },
  {
    id: '1.4',
    number: 'Leçon 1.4',
    title: "Les Annulateurs de l'Ablution (Nawaqid Al-Wudu)",
    arabicText: "نَوَاقِضُ الْوُضُوءِ: أَهْدَاثٌ وَأَسْبَابٌ؛ فَالأَهْدَاثُ هِيَ الْخَارِجُ الْمُعْتَادُ مِنْ السَّبِيلَيْنِ كَالْبَوْلِ وَالْغَائِطِ وَالرِّيحِ، وَالأَسْبَابُ كالنَّوْمِ الثَّقِيلِ وَزَوَالِ الْعَقْلِ.",
    translation: "Les annulateurs de l'ablution sont de deux catégories : les impuretés directes (Ahdath) et les causes (Asbab). Les Ahdath sont ce qui sort habituellement par les deux voies (urine, selles, gaz). Les Asbab comprennent le sommeil profond, la perte de conscience et le toucher sensuel.",
    detailedCourse: {
      intro: "Les juristes malékites classent les facteurs qui rompent l'ablution en deux grandes familles : les événements directs (Ahdath) et les causes d'événements (Asbab).",
      points: [
        {
          title: "1. Les Événements Directs (Al-Ahdath)",
          content: "Tout ce qui sort habituellement par les deux orifices naturels (substances solides, liquides ou gazeuses) : urine, excréments, gaz, liquide pré-séminal (Madhy)."
        },
        {
          title: "2. Les Causes Indirectes (Al-Asbab)",
          content: "Ce sont des situations où la personne peut perdre le contrôle de ses sens et émettre un Hadath sans s'en rendre compte : la folie, l'évanouissement, l'ivresse et le sommeil lourd."
        },
        {
          title: "3. La nuance du sommeil (Léger vs Profond)",
          content: "Le sommeil léger (où la personne perçoit les voix autour d'elle) n'annule PAS l'ablution. Seul le sommeil profond (où la personne perd totalement conscience de son environnement) rompt l'ablution."
        },
        {
          title: "4. Le contact physique (Al-Lams)",
          content: "Le contact avec une personne du sexe opposé annule l'ablution si la personne a l'intention de ressentir du plaisir ou si elle ressent effectivement du plaisir lors du contact."
        }
      ],
      practicalCases: [
        "Cas 1 : S'assoupir assis pendant le sermon du vendredi tout en entendant la voix de l'imam -> Sommeil léger, Wudu valide.",
        "Cas 2 : Toucher la main de sa femme sans désir -> Wudu valide."
      ]
    },
    quiz: [
      {
        question: "Quelle catégorie regroupe la sortie d'urine ou de gaz ?",
        options: [
          "Les causes indirectes (Asbab)",
          "Les événements directs (Ahdath)",
          "Les actes annulés par doute uniquement"
        ],
        answerIndex: 1
      },
      {
        question: "Quelle est la règle concernant le sommeil léger selon le Fiqh Malikite ?",
        options: [
          "Il annule obligatoirement l'ablution",
          "Il n'annule pas l'ablution",
          "Il exige le grand lavage (Ghusl)"
        ],
        answerIndex: 1
      },
      {
        question: "Le fait de toucher une personne du sexe opposé annule-t-il l'ablution ?",
        options: [
          "Oui, systématiquement dans tous les cas",
          "Non, jamais quel que soit le contexte",
          "Oui, si cela s'accompagne d'une intention ou d'une sensation de plaisir"
        ],
        answerIndex: 2
      },
      {
        question: "Lequel des éléments suivants est une 'cause' (Sabab) d'annulation et non un 'événement' direct ?",
        options: ["L'évanouissement", "L'émission de gaz", "L'urine"],
        answerIndex: 0
      }
    ],
    glossary: [
      { term: "Nawaqid", arabic: "نَوَاقِض", definition: "Les facteurs qui annulent et rompent la validité de l'ablution." },
      { term: "Ahdath", arabic: "أَهْدَاث", definition: "Sécrétions ou évacuations naturelles sortant des orifices." },
      { term: "Asbab", arabic: "أَسْبَاب", definition: "États (sommeil, évanouissement) pouvant causer l'annulation de la purification." },
      { term: "Al-Madhy", arabic: "الْمَذْي", definition: "Liquide fluide transparent émis lors d'une stimulation passionnelle." }
    ],
    revisionPoints: [
      "Distinguer les Ahdath (évacuations) et les Asbab (perte de conscience/sommeil).",
      "Le sommeil lourd annule l'ablution, le sommeil léger ne l'annule pas.",
      "Le toucher avec plaisir annule l'ablution.",
      "Le doute sur l'annulation oblige à refaire son ablution selon l'avis malékite retenu."
    ]
  },
  {
    id: '2.1',
    number: 'Leçon 2.1',
    title: "Le Grand Lavage Rituel (Ghusl)",
    arabicText: "فَرَائِضُ الْغُسْلِ: النِّيَّةُ عِنْدَ بَدْئِهِ، وَتَعْمِيمُ جَمِيعِ الْجَسَدِ بِالْمَاءِ، وَالدَّلْكُ، وَالْمُوَالاَةُ، وَتَخْلِيلُ الشَّعْرِ حَتَّى يَصِلَ الْمَاءُ إِلَى أُصُولِهِ.",
    translation: "Les obligations du grand lavage sont : l'intention au moment de commencer, l'arrosage de l'ensemble du corps avec de l'eau, le frictionnement (Dalk), la continuité (Muwalah), et le démêlage des cheveux pour que l'eau atteigne le cuir chevelu.",
    detailedCourse: {
      intro: "Le Ghusl est la purification majeure nécessaire pour lever la grande impureté rituelle (Hadath Akbar).",
      points: [
        {
          title: "1. Motifs obligatoires du Ghusl",
          content: "L'état de Janabah (suite à un rapport intime ou une émission séminale), la fin des menstrues (Hayd) et la fin des lochies (Nifas)."
        },
        {
          title: "2. Les 5 Obligations (Fara'id)",
          content: "1) La Niyyah (Intention de lever la grande impureté), 2) Ta'mim Al-Jasad (Couvrir l'intégralité du corps avec de l'eau), 3) Ad-Dalk (Frictionner tout le corps avec la main), 4) Al-Muwalah (Enchaîner sans arrêt prolongé), 5) Takhlil Ash-Sha'r (Faire pénétrer l'eau jusqu'à la racine des cheveux)."
        }
      ],
      practicalCases: [
        "Cas 1 : Prendre une douche sans frictionner son dos -> Le Ghusl n'est pas valide selon l'école malékite (Manque le Dalk).",
        "Cas 2 : Garder des tresses très serrées empêchant l'eau de toucher le cuir chevelu -> Ghusl invalide."
      ]
    },
    quiz: [
      {
        question: "Combien d'obligations fondamentales compte le Ghusl dans l'école Malikite ?",
        options: ["5 obligations", "3 obligations", "12 obligations"],
        answerIndex: 0
      },
      {
        question: "Quelle est la règle concernant le cuir chevelu lors du Ghusl ?",
        options: [
          "Il suffit d'essuyer la surface des cheveux sans mouiller la peau",
          "Il est obligatoire de faire parvenir l'eau jusqu'à la racine des cheveux",
          "Le lavage des cheveux n'est pas nécessaire"
        ],
        answerIndex: 1
      },
      {
        question: "Le frictionnement (Dalk) de tout le corps est-il obligatoire pour le Ghusl ?",
        options: [
          "Non, c'est simplement recommandé",
          "Oui, il est obligatoire d'assurer le frictionnement avec la main",
          "Seulement pour les hommes"
        ],
        answerIndex: 1
      },
      {
        question: "Quel événement nécessite l'accomplissement du Ghusl ?",
        options: [
          "L'émission de gaz ou le sommeil léger",
          "La fin de la période des menstrues (Hayd) ou la Janabah",
          "Le fait de manger de la viande de chameau"
        ],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "Al-Ghusl", arabic: "الْغُسْل", definition: "Le lavage rituel intégral de l'ensemble du corps." },
      { term: "Al-Janabah", arabic: "الْجَنَابَة", definition: "L'état de grande impureté rituelle suite au rapport ou à l'éjaculation." },
      { term: "Ta'mim", arabic: "تَعْمِيم", definition: "Englober et recouvrir entièrement la surface du corps avec de l'eau." },
      { term: "Takhli' ash-Sha'r", arabic: "تَخْلِيلُ الشَّعْر", definition: "Frictionner et faire pénétrer l'eau à travers la chevelure jusqu'aux racines." }
    ],
    revisionPoints: [
      "Le Ghusl requiert l'intention de lever la grande impureté.",
      "L'ensemble du corps doit être lavé et frictionné (Dalk).",
      "Le cuir chevelu et les plis du corps doivent être soigneusement atteints.",
      "Si le Ghusl est accompli avec l'intention du Wudu, il dispense des ablutions mineures."
    ]
  },
  {
    id: '2.2',
    number: 'Leçon 2.2',
    title: "L'Ablution Sèche (At-Tayammum)",
    arabicText: "يَتَيَمَّمُ الْمَرِيضُ وَالْمُسَافِرُ عِنْدَ عَدَمِ الْمَاءِ أَوْ الْعَجْزِ عَنْ اسْتِعْمَالِهِ، وَفَرَائِضُهُ: النِّيَّةُ، وَالصَّعِيدُ الطَّاهِرُ، وَالضَّرْبَةُ الأُولَى، وَمَسْحُ الْوَجْهِ وَالْيَدَيْنِ إِلَى الْكُوعَيْنِ.",
    translation: "Le malade et le voyageur recourent au Tayammum en cas d'absence d'eau ou d'incapacité de l'utiliser. Ses obligations sont : l'intention, l'usage d'une surface terrestre pure (Sa'id Tahir), le premier tapotement, l'essuyage du visage et l'essuyage des mains jusqu'aux poignets.",
    detailedCourse: {
      intro: "Le Tayammum est une dérogation légale (Rukhsa) permettant d'utiliser les éléments purs du sol à la place de l'eau en cas de besoin.",
      points: [
        {
          title: "1. Conditions de dérogation",
          content: "Manque d'eau, crainte pour sa santé (maladie), ou incapacité physique d'atteindre l'eau."
        },
        {
          title: "2. Le support (As-Sa'id At-Tahir)",
          content: "Toute matière naturelle faisant partie du sol : terre, pierre, sable, rocher."
        },
        {
          title: "3. Piliers du Tayammum",
          content: "L'intention, la 1ère frappe sur la terre, l'essuyage du visage et l'essuyage des mains jusqu'aux poignets."
        }
      ],
      practicalCases: [
        "Cas 1 : Effectuer le Tayammum sur une moquette synthétique dépoussiérée -> Invalide chez les Malékites (Il faut du rocher/sable/terre).",
        "Cas 2 : Priérer deux prières obligatoires avec un seul Tayammum -> Invalide (Un Tayammum par prière obligatoire)."
      ]
    },
    quiz: [
      {
        question: "Qu'est-ce que 'As-Sa'id At-Tahir' dans le Tayammum ?",
        options: [
          "Un tissu en coton propre",
          "Toute surface terrestre naturelle pure (terre, pierre, sable)",
          "De la cendre de bois uniquement"
        ],
        answerIndex: 1
      },
      {
        question: "Quelle est la limite obligatoire d'essuyage des mains selon la Fard du Tayammum ?",
        options: [
          "Jusqu'aux épaules",
          "Jusqu'aux poignets (Kū'ayn)",
          "Jusqu'au bout des ongles uniquement"
        ],
        answerIndex: 1
      },
      {
        question: "Combien de prières obligatoires peut-on prier avec un seul Tayammum ?",
        options: [
          "Une seule prière obligatoire à l'entrée de son heure",
          "Toutes les prières de la journée",
          "Cinq prières consécutives"
        ],
        answerIndex: 0
      },
      {
        question: "Dans quelle situation le recours au Tayammum est-il autorisé ?",
        options: [
          "Quand on est simplement pressé par le temps",
          "En cas d'absence d'eau ou d'incapacité médicale d'utiliser l'eau",
          "Chaque fois qu'il fait nuit"
        ],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "At-Tayammum", arabic: "التَّيَمُّم", definition: "La purification rituelle symbolique utilisant les éléments de la terre." },
      { term: "As-Sa'id", arabic: "الصَّعِيد", definition: "Les composants naturels de la surface de la Terre (pierre, sable, terre)." },
      { term: "Al-Kū'ayn", arabic: "الْكُوعَيْن", definition: "Les poignets (articulation entre la main et l'avant-bras)." }
    ],
    revisionPoints: [
      "Le Tayammum s'effectue avec des éléments naturels de la terre.",
      "Il nécessite l'entrée du temps de la prière.",
      "L'essuyage du visage et des mains jusqu'aux poignets est obligatoire.",
      "Il s'annule par tout ce qui annule le Wudu ainsi que par la présence d'eau."
    ]
  },
  {
    id: '2.3',
    number: 'Leçon 2.3',
    title: "Les Conditions de la Prière (Shurūṭ As-Ṣalāh)",
    arabicText: "شُرُوطُ الصَّلاَةِ: طَهَارَةُ الْحَدَثِ، وَطَهَارَةُ الْخَبَثِ مِنَ الثَّوْبِ وَالْبَدَنِ وَالْمَكَانِ، وَسَتْرُ الْعَوْرَةِ، وَاسْتِقْبَالُ الْقِبْلَةِ، وَدُخُولُ الْوَقْتِ.",
    translation: "Les conditions de validité de la prière sont : la purification de l'impureté rituelle (Hadath), la purification des impuretés matérielles (Khabath) du corps, du vêtement et du lieu, le recouvrement de la 'Awrah, l'orientation vers la Qibla et l'entrée du temps de la prière.",
    detailedCourse: {
      intro: "Les Shurut sont les exigences qui doivent être validées avant même de commencer la prière et maintenues jusqu'au salut final.",
      points: [
        {
          title: "1. Purification du Hadath et Khabath",
          content: "Avoir ses ablutions et s'assurer de l'absence totale de souillures physiques (urine, sang) sur l'habit, la peau et le tapis."
        },
        {
          title: "2. Recouvrement de la 'Awrah",
          content: "Pour l'homme : du nombril aux genoux. Pour la femme : tout le corps sauf le visage et les mains."
        },
        {
          title: "3. Direction de la Qibla et Entrée du Temps",
          content: "Être orienté vers la Ka'bah et ne prier qu'une fois l'heure légale commencée."
        }
      ],
      practicalCases: [
        "Cas 1 : Prier 2 minutes avant l'Adhan -> Prière invalide et à refaire.",
        "Cas 2 : Prier avec une tache d'urine sur le pantalon en le sachant -> Prière invalide."
      ]
    },
    quiz: [
      {
        question: "Quelle est la différence essentielle entre une condition (Shart) et un pilier (Rukn) ?",
        options: [
          "La condition s'accomplit après la prière",
          "La condition doit être remplie avant le début de la prière et persister",
          "Il n'y a aucune différence"
        ],
        answerIndex: 1
      },
      {
        question: "Quelle est l'étendue de la 'Awrah de la femme dans la prière ?",
        options: [
          "Du nombril aux genoux",
          "Tout le corps sauf le visage et les mains",
          "La tête uniquement"
        ],
        answerIndex: 1
      },
      {
        question: "Sur quels éléments l'impureté matérielle (Khabath) doit-elle être nettoyée ?",
        options: [
          "Le vêtement, le corps et le lieu de prière",
          "Le vêtement uniquement",
          "Le tapis de prière seulement"
        ],
        answerIndex: 0
      },
      {
        question: "Que se passe-t-il si une prière obligatoire est effectuée 5 minutes avant l'entrée de son heure ?",
        options: [
          "Elle est valide avec démérite",
          "Elle est invalide et doit être refaite à l'heure légale",
          "Elle compte comme une prière surérogatoire validée"
        ],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "Shurūṭ", arabic: "شُرُوط", definition: "Les conditions préalables indispensables à la validité d'un acte." },
      { term: "Al-Khabath", arabic: "الْخَبَث", definition: "Les impuretés physiques matérielles (urine, excréments, sang)." },
      { term: "Al-'Awrah", arabic: "الْعَوْرَة", definition: "Les parties du corps qu'il est légalement obligatoire de couvrir." },
      { term: "Al-Qiblah", arabic: "الْقِبْلَة", definition: "La direction de la Ka'bah sacrée à la Mecque." }
    ],
    revisionPoints: [
      "Vérifier son Wudu et la propreté des habits avant de prier.",
      "La 'Awrah doit être convenablement couverte.",
      "S'orienter fermement vers la Qibla.",
      "S'assurer que l'heure de la prière est effective."
    ]
  },
  {
    id: '2.4',
    number: 'Leçon 2.4',
    title: "Les Piliers de la Prière (Arkān As-Ṣalāh)",
    arabicText: "أَرْكَانُ الصَّلاَةِ: تَكْبِيرَةُ الإِحْرَامِ، وَالْقِيَامُ لَهَا، وَقِرَاءَةُ الْفَاتِحَةِ، وَالرُّكُوعُ، وَالرَّفْعُ مِنْهُ، وَالسُّجُودُ، وَالطَّمَأْنِينَةُ، وَالاعْتِدَالُ، وَالسَّلاَمُ.",
    translation: "Les piliers de la prière sont : le Takbir d'inauguration (Takbirat Al-Ihram), la station debout pour celui-ci, la récitation de Al-Fatihah, l'inclinaison (Rukū'), le redressement, la prosternation (Sujūd), la quiétude (Ṭuma'nīnah), l'alignement rectiligne et le Salut final (As-Salām).",
    detailedCourse: {
      intro: "Les Arkan sont les composants internes et indissociables de la prière.",
      points: [
        {
          title: "1. Takbirat Al-Ihram et Al-Qiyam",
          content: "Dire 'Allahu Akbar' debout au début de la prière."
        },
        {
          title: "2. La Fatihah et l'Inclinaison (Ruku')",
          content: "Réciter la Fatihah à chaque Rak'ah et accomplir le Ruku' avec le redressement."
        },
        {
          title: "3. La Prosternation (Sujud) et la Tuma'ninah",
          content: "Se prosterner sur les 7 membres avec sérénité et marquée de pause (Tuma'ninah)."
        }
      ],
      practicalCases: [
        "Cas 1 : Prier très rapidement sans marquer de pause au Ruku' -> Prière invalide (Manque la Tuma'ninah).",
        "Cas 2 : Oublier la Fatihah dans une Rak'ah -> La Rak'ah est invalide."
      ]
    },
    quiz: [
      {
        question: "Lequel des éléments suivants est un PILIER (Rukn) fondamental de la prière ?",
        options: [
          "La récitation d'une sourate après la Fatihah",
          "La récitation de la sourate Al-Fatihah",
          "Dire 'Subhana Rabbil 'Adheem' pendant l'inclinaison"
        ],
        answerIndex: 1
      },
      {
        question: "Qu'est-ce que la 'Ṭuma'nīnah' (Quiétude) dans la prière ?",
        options: [
          "Faire des invocations très longues",
          "Marquer une pause immobile suffisante dans chaque position rituelle",
          "Fermer les yeux pendant toute la prière"
        ],
        answerIndex: 1
      },
      {
        question: "Sur combien de membres la prosternation (Sujūd) doit-elle s'effectuer ?",
        options: ["3 membres", "5 membres", "7 membres"],
        answerIndex: 2
      },
      {
        question: "Par quel acte précis se termine obligatoirement la prière ?",
        options: [
          "En essuyant son visage avec les deux mains",
          "En prononçant le Salut final : 'As-Salāmu 'Alaykum'",
          "En disant 'Al-Hamdulillah'"
        ],
        answerIndex: 1
      }
    ],
    glossary: [
      { term: "Arkān", arabic: "أَرْكَان", definition: "Les piliers essentiels constituant le corps de l'acte d'adoration." },
      { term: "Takbīrat Al-Iḥrām", arabic: "تَكْبِيرَةُ الإِحْرَام", definition: "Le Takbir initial par lequel on entre dans l'état sacré de la prière." },
      { term: "Al-Ṭuma'nīnah", arabic: "الطَّمَأْنِينَة", definition: "La stabilité et le repos des membres dans chaque posture." },
      { term: "As-Salām", arabic: "السَّلاَم", definition: "La formule de salutation marquant la sortie de la prière." }
    ],
    revisionPoints: [
      "Les piliers oubliés ne peuvent pas être compensés par un simple prosterner d'oubli.",
      "La Fatihah doit être récitée avec soin.",
      "La Tuma'ninah (quiétude) est une condition de validité de chaque geste.",
      "Le Salut final clôture la prière."
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

        {/* Zone de contenu dynamique */}
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
              ❓ Quiz ({currentLesson.quiz.length})
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

          {/* ONGLET 1: COURS DÉTAILLÉ */}
          {activeTab === 'cours' && (
            <div className="space-y-6">
              
              {/* Carte Explication Détaillée & Structure du cours (Mise en avant au sommet) */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                    EXPLICATIONS JURIDIQUES & EXPOSÉ DU COURS (SHARH)
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {currentLesson.detailedCourse.intro}
                  </p>
                </div>

                {/* Points clés du cours */}
                <div className="space-y-4">
                  {currentLesson.detailedCourse.points.map((pt, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-xl p-4">
                      <h4 className="font-bold text-sm text-[#0b5c3a] mb-1">{pt.title}</h4>
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">{pt.content}</p>
                    </div>
                  ))}
                </div>

                {/* Cas pratiques d'application */}
                <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-4">
                  <h4 className="font-bold text-xs uppercase text-amber-900 mb-2">💡 Cas pratiques & Jurisprudence appliquée</h4>
                  <ul className="space-y-1.5">
                    {currentLesson.detailedCourse.practicalCases.map((c, idx) => (
                      <li key={idx} className="text-xs text-amber-950 flex items-start gap-2">
                        <span>•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Texte Arabe original + Récitation Audio */}
              <div className="bg-emerald-50/40 border border-emerald-200/60 rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
                  TEXTE ORIGINAL DE MATN AL-AKHDARI
                </h4>
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

              {/* Traduction littérale */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  TRADUCTION DU TEXTE (MATN)
                </h4>
                <p className="text-slate-700 text-xs md:text-sm leading-relaxed italic">
                  {currentLesson.translation}
                </p>
              </div>

            </div>
          )}

          {/* ONGLET 2: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b pb-4">
                <h3 className="text-base font-bold text-slate-900">
                  Quiz d'évaluation (4 questions) — {currentLesson.number}
                </h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {Object.keys(quizAnswers).length} / 4 répondus
                </span>
              </div>

              {currentLesson.quiz.map((q, qIdx) => (
                <div key={qIdx} className="p-5 bg-slate-50/70 rounded-xl border border-slate-200/80 space-y-3">
                  <p className="font-bold text-sm text-slate-800">
                    Question {qIdx + 1} : {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((option, oIdx) => {
                      const selected = quizAnswers[qIdx] === oIdx;
                      const isCorrect = oIdx === q.answerIndex;
                      const hasAnswered = quizAnswers[qIdx] !== undefined;

                      let btnStyle = "bg-white text-slate-700 border-slate-200 hover:bg-slate-100";
                      if (hasAnswered) {
                        if (isCorrect) btnStyle = "bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm";
                        else if (selected) btnStyle = "bg-rose-500 text-white border-rose-500 font-bold";
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleQuizSelect(qIdx, oIdx)}
                          className={`w-full text-left px-4 py-3 rounded-lg text-xs font-medium border transition-all flex items-center justify-between ${btnStyle}`}
                        >
                          <span>{option}</span>
                          {hasAnswered && isCorrect && <span>✓ Correct</span>}
                          {hasAnswered && selected && !isCorrect && <span>✗ Incorrect</span>}
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
                Lexique & Termes de jurisprudence (Fiqh)
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
                Synthèse & Fiche de Révision (Hifz)
              </h3>
              <div className="space-y-3">
                {currentLesson.revisionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-amber-50/50 rounded-xl border border-amber-200/60">
                    <span className="text-amber-600 font-bold text-base">✓</span>
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