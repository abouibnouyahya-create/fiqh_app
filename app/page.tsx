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
      "1. Définition et importance de la purification (Taharah) : La purification est la clé de la prière. Elle se divise en deux volets : la purification matérielle (élimination de la Najasah) et la purification rituelle (élévation du Hadath).",
      "2. L'Eau Pure et Purifiante (Al-Ma' Al-Moutlaq) : C'est l'eau qui conserve son état originel naturel sans altération (eau de pluie, de mer, de puits, de fleuve, de neige fondue). Seule cette eau permet de faire les ablutions (Wudu) et le grand lavage (Ghusl).",
      "3. Altération par des substances propres (At-Tahir) : Si une substance propre (du thé, de la de farine, du savon, du lait) modifie l'une des trois qualités de l'eau (couleur, goût ou odeur), l'eau reste propre en elle-même mais perd son pouvoir purifiant (elle devient 'Tahir ghayr Mutahhir'). On ne peut plus l'utiliser pour les ablutions.",
      "4. Altération par des éléments indissociables : Si l'eau change à cause de ce avec quoi elle se trouve naturellement (comme de la vase, du soufre naturel, ou de la mousse d'étang), elle conserve son statut de purifiante car il est difficile de l'en préserver.",
      "5. Altération par une impureté (Najasah) : Si une seule des trois caractéristiques de l'eau est altérée par une impureté (ex: urine, sang), l'eau devient totalement impure (Najis) et impropre à tout usage rituel ou domestique."
    ],
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
    explanation: [
      "1. La Niyyah (L'Intention) : Elle doit être formulée mentalement au moment précis où l'eau touche le visage. Elle consiste à avoir l'intention d'accomplir l'obligation de l'ablution ou d'enlever l'impureté rituelle.",
      "2. Le lavage du visage (Ghasl Al-Wajh) : Ses limites horizontales vont d'une oreille à l'autre, et verticales de la naissance des cheveux au bas du menton.",
      "3. Le lavage des avant-bras jusqu'aux coudes (Ghasl Al-Yadayn) : Les coudes doivent obligatoirement être lavés avec les bras. Les mains doivent être relavées si elles l'ont été au début.",
      "4. L'essuyage complet de la tête (Mash Jami' Ar-Ra's) : Passé des mains mouillées du front jusqu'à la nuque. Dans l'école Malikite, essuyer la totalité de la tête est une obligation (contrairement à d'autres écoles qui n'exigent qu'une partie).",
      "5. Le lavage des pieds jusqu'aux chevilles (Ghasl Ar-Rijlayn) : Les chevilles saillantes doivent être totalement immergées/lavées.",
      "6. Le frictionnement (Ad-Dalk) : Passer la main sur le membre avec de l'eau ou immédiatement après. C'est une obligation spécifique et indispensable de l'école Malikite.",
      "7. La continuité (Al-Muwalah) : Enchaîner le lavage des membres sans interruption qui permettrait au membre précédent de sécher dans des conditions climatiques normales."
    ],
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
    translation: "Et ses Sunan sont : le lavage initial des mains jusqu'aux poignets, le rincage de la bouche (Madmadah), l'aspiration de l'eau par le nez (Istinshaq), son expulsion (Istinthar), le retour de l'essuyage de la tête, l'essuyage des deux oreilles, le renouvellement de l'eau pour elles, et le respect de l'ordre (Tartib).",
    explanation: [
      "1. Lavage initial des mains jusqu'aux poignets : Il s'effectue au tout début avant de tremper les mains dans le récipient ou avant le lavage du visage.",
      "2. La Madmadah (Rinçage de la bouche) : Faire tourner l'eau à l'intérieur de la bouche puis la recracher.",
      "3. L'Istinshaq et l'Istinthar : Aspirer l'eau par les narines à l'aide d'une inspiration légère, puis recracher cette eau (Istinthar) en se pinçant légèrement le nez avec la main gauche.",
      "4. Le retour de l'essuyage de la tête (Radd Mash Ar-Ra's) : Ramener les mains de la nuque vers le front après avoir accompli le premier essuyage obligatoire (du front à la nuque).",
      "5. L'essuyage des oreilles et renouvellement de l'eau : Essuyer l'intérieur des oreilles avec les index et l'extérieur avec les pouces, en utilisant une nouvelle eau fraîche différente de celle de la tête.",
      "6. Le respect de l'ordre (At-Tartib) : Enchaîner les membres dans l'ordre prescrit (visage, bras, tête, pieds)."
    ],
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
    arabicText: "نَوَاقِضُ الْوُضُوءِ: أَهْدَاثٌ وَأَسْبَابٌ؛ فَالأَهْدَاثُ هِيَ الْخَارِجُ الْمُعْتَادُ مِنْ السَّبِيلَيْنِ كَالْبَوْلِ وَالْغَائِطِ وَالرِّيحِ، وَالأَسْبَابُ كَالنَّوْمِ الثَّقِيلِ وَزَوَالِ الْعَقْلِ.",
    translation: "Les annulateurs de l'ablution sont de deux catégories : les impuretés directes (Ahdath) et les causes (Asbab). Les Ahdath sont ce qui sort habituellement par les deux voies (urine, selles, gaz). Les Asbab comprennent le sommeil profond, la perte de conscience et le toucher sensuel.",
    explanation: [
      "1. Les Événements Directs (Al-Ahdath) : Tout ce qui sort habituellement des deux orifices naturels en état de santé (urine, excréments, gaz intestinal, Madhy - liquide pré-séminal, Wady).",
      "2. Les Causes Indirectes (Al-Asbab) : Ce qui peut amener à l'émission d'un événement sans qu'on s'en rende compte. Cela inclut la perte de conscience (évanouissement, ivresse, folie) et le sommeil profond (où l'on perd le contrôle de ses sens).",
      "3. Le sommeil léger vs profond : Un sommeil léger (où l'on entend encore les bruits autour de soi) n'annule pas l'ablution dans l'école Malikite.",
      "4. Les contacts charnels (Al-Lams) : Toucher une personne du sexe opposé avec désir ou intention d'éprouver du plaisir annule l'ablution.",
      "5. Le contact direct de la verge : Le fait de toucher son propre sexe directement avec le plat de la main ou des doigts sans barrière."
    ],
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
      { term: "Al-Madhy", arabic: "الْمَذْي", definition: "Liquide fluide transparent émis lors d'une stimulation ou pensée passionnelle." }
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
    explanation: [
      "1. Les motifs du Ghusl : La grande impureté (Janabah suite au rapport intime ou à l'éjaculation), la fin des menstrues (Hayd) et des lochies (Nifas).",
      "2. L'Intention (Niyyah) : Formuler la volonté de lever la grande impureté (Raf' Al-Hadath Al-Akbar).",
      "3. L'arrosage complet du corps (Ta'mim Al-Jasad) : L'eau doit atteindre absolument chaque partie extérieure du corps sans exception (y compris le nombril, sous les aisselles, l'arrière des genoux).",
      "4. Le Dalk (Frictionnement) : Comme pour le Wudu, passer la main sur l'ensemble du corps avec de l'eau est une obligation chez les Malékites.",
      "5. Le démêlage des cheveux (Takhli' ash-Sha'r) : Faire pénétrer l'eau jusqu'aux racines des cheveux. Si les tresses des femmes sont serrées au point d'empêcher l'eau de toucher le cuir chevelu, elles doivent être défaites."
    ],
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
    explanation: [
      "1. Conditions de dérogation : Le Tayammum remplace le Wudu ou le Ghusl en cas d'absence d'eau suffisante, d'incapacité physique à l'utiliser (maladie), ou de danger réel (froid extrême sans moyen de chauffer l'eau).",
      "2. La surface pure (As-Sa'id At-Tahir) : Tout ce qui forme la croûte naturelle de la terre (pierre, sable, terre, rocher, argile).",
      "3. Les obligations du Tayammum : L'intention, toucher la terre pure (première frappe), essuyer l'intégralité du visage, essuyer les mains jusqu'aux poignets.",
      "4. Essuyer jusqu'aux coudes : Dans l'école Malikite, essuyer des poignets jusqu'aux coudes lors du Tayammum est considéré comme une Sunnah très recommandée (la première partie jusqu'aux poignets étant l'obligation stricte).",
      "5. Validité temporelle : Le Tayammum doit être accompli obligatoirement après l'entrée de l'heure de la prière et n'est valable que pour une seule prière obligatoire à la fois."
    ],
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
    explanation: [
      "1. Différence entre condition (Shart) et pilier (Rukn) : La condition doit être remplie AVANT de démarrer la prière et maintenue tout au long de celle-ci.",
      "2. Purification du Hadath et du Khabath : Être en état de Wudu/Ghusl et s'assurer qu'aucune impureté matérielle (sang, urine) ne se trouve sur le corps, les habits ou l'emplacement de prière.",
      "3. La 'Awrah (Parties intimes à couvrir) : Pour l'homme, la 'Awrah minimale va du nombril aux genoux. Pour la femme libre, l'ensemble du corps à l'exception du visage et des mains.",
      "4. L'orientation vers la Qibla : Se tourner vers la Ka'bah à la Mecque. En cas d'incapacité ou d'ignorance absolue après recherche, des règles particulières s'appliquent.",
      "5. L'entrée du temps (Dukhūl Al-Waqt) : La prière accomplie avant son heure légale n'est absolument pas valide."
    ],
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
          "Elle est valide avec démerite",
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
    explanation: [
      "1. Takbirat Al-Ihram : Le fait de dire 'Allāhu Akbar' pour commencer la prière. La station debout (Al-Qiyam) lors de ce Takbir est elle-même un pilier pour la prière obligatoire.",
      "2. La récitation de la Fatihah : Obligatoire dans chaque unité de prière (Rak'ah) pour l'imam et la personne priant seule (Al-Fard).",
      "3. L'inclinaison (Rukū') et le redressement : S'incliner jusqu'à ce que les mains touchent les genoux et se redresser complètement.",
      "4. La prosternation (Sujūd) : Se prosterner sur 7 membres (front/nez, les deux mains, les deux genoux, le dessous des orteils des deux pieds).",
      "5. La Quiétude (Al-Ṭuma'nīnah) : Marquer un temps d'immobilité dans chaque position (Rukū', Sujūd, redressement). Une prière faite à la hâte sans sérénité est invalide.",
      "6. Le Salut Final (As-Salām) : Prononcer 'As-Salāmu 'Alaykum' en étant assis à la fin de la prière."
    ],
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
                  TRADUCTION DU TEXTE (MATN)
                </h4>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                  {currentLesson.translation}
                </p>
              </div>

              {/* Explications approfondies (Sharh) */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-4">
                  COURS MAGISTRAL & EXPLICATIONS DÉTAILLÉES (SHARH)
                </h4>
                <div className="space-y-4">
                  {currentLesson.explanation.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 leading-relaxed text-sm text-slate-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ONGLET 2: QUIZ (4 QUESTIONS) */}
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