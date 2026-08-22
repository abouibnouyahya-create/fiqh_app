'use client';

import { useState } from 'react';

const COURSES_DATA = [
  {
    chapterId: 1,
    chapterTitleFr: 'Chapitre 1 : La Purification (At-Tahara)',
    chapterTitleAr: 'الطهارة',
    lessons: [
      {
        id: 'lesson-1-1',
        number: '1.1',
        titleFr: 'Les types d\'eau et la purification',
        titleAr: 'أنواع المياه وأحكام الطهارة',
        matnArabe: 'فَصْلٌ: أَنْوَاعُ المِيَاهِ وَأَحْكَامُ الطَّهَارَةِ. لاَ يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلاَ رَفْعُ الحَدَثِ إِلاَّ بِالمَاءِ المُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.',
        content: [
          'Il est obligatoire d\'utiliser une eau pure et purifiante (Al-Ma\' Al-Moutlaq) pour enlever une impureté ou lever l\'état d\'impureté rituelle.',
          'L\'eau perd sa qualité purifiante si l\'un de ses 3 attributs (couleur, goût ou odeur) est altéré par une substance étrangère.'
        ],
        quiz: {
          question: 'Quelle est la règle concernant l\'eau dont l\'odeur ou la couleur est altérée par une impureté ?',
          options: [
            'Elle demeure pure et utilisable pour le Woudou.',
            'Elle devient impure (Najis) et ne peut pas être utilisée.',
            'Elle est détestable (Makrouh) mais valide.'
          ],
          correctIndex: 1,
          explanation: 'Toute eau dont une des qualités est altérée par une impureté devient impure et inutilisable.'
        }
      },
      {
        id: 'lesson-1-2',
        number: '1.2',
        titleFr: 'Les 7 Obligations (Fara\'id) du Woudou',
        titleAr: 'فرائض الوضوء',
        matnArabe: 'فَصْلٌ: وَفَرَائِضُ الْوُضُوءِ سَبْعَةٌ: النِّيَّةُ، وَغَسْلُ الْوَجْهِ، وَغَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ جَمِيعِ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ، وَالدَّلْكُ، وَالْمُوَالاَةُ.',
        content: [
          'Les 7 obligations sont : L\'Intention (Niyyah), le lavage du visage, le lavage des bras jusqu\'aux coudes, l\'essuyage de TOUTE la tête, le lavage des pieds avec les chevilles, le frotter (Ad-Dalk) et la continuité (Al-Muwalah).',
          'Dans le madhhab Malikite, Ad-Dalk (frotter la main sur le membre avec l\'eau) et le Mas\'h complet de la tête sont obligatoires.'
        ],
        quiz: {
          question: 'Combien d\'obligations (Fara\'id) le Matn Al-Akhdari fixe-t-il pour le Woudou ?',
          options: ['5 obligations', '7 obligations', '10 obligations'],
          correctIndex: 1,
          explanation: 'Le Matn Al-Akhdari établit exactement 7 obligations pour la validité du Woudou.'
        }
      },
      {
        id: 'lesson-1-3',
        number: '1.3',
        titleFr: 'Les Annulations du Woudou (Nawaqid)',
        titleAr: 'نواقض الوضوء',
        matnArabe: 'فَصْلٌ: نَوَاقِضُ الْوُضُوءِ فَأَحْدَاثٌ وَأَسْبَابٌ؛ فَالأَحْدَاثُ: الْبَوْلُ، وَالْغَائِطُ، وَالرِّيحُ، وَالْمَذْيُ، وَالْوَدْيُ. وَالأَسْبَابُ: النَّوْمُ الثَّقِيلُ، وَالإِغْمَاءُ، وَالسُّكْرُ، وَالْجُنُونُ، وَالَّذَّةُ بِمَسِّ أَوْ قُبْلَةٍ، وَمَسُّ الذَّكَرِ بِبَطْنِ الْكَفِّ، وَالشَّكُّ فِي الْحَدَثِ.',
        content: [
          'Les annulations se divisent en Événements directs (urine, selles, gaz, madhy, wady) et Causes de perte de conscience (sommeil lourd, évanouissement, ivresse, folie).',
          'Le contact direct avec désir, le toucher de la partie intime avec la paume de la main ou le plat des doigts, ainsi que le doute sur la rupture (Ash-Shakk) annulent également le Woudou.'
        ],
        quiz: {
          question: 'Que doit faire un fidèle qui est certain d\'avoir fait son Woudou mais a un doute sur son annulation ?',
          options: [
            'Ignorer le doute et accomplir sa prière.',
            'Refaire son Woudou par précaution.',
            'Faire un simple Tayammum.'
          ],
          correctIndex: 1,
          explanation: 'Dans l\'école Malikite, le doute sur l\'annulation (Ash-Shakk fi Al-Hadath) oblige à refaire le Woudou.'
        }
      }
    ]
  },
  {
    chapterId: 2,
    chapterTitleFr: 'Chapitre 2 : La Prière (At-Salat)',
    chapterTitleAr: 'الصلاة',
    lessons: [
      {
        id: 'lesson-2-1',
        number: '2.1',
        titleFr: 'Conditions et Horaires de la Prière',
        titleAr: 'شروط الصلاة ومواقيتها',
        matnArabe: 'فَصْلٌ: وَمَوَاقِيتُ الصَّلاَةِ: الظُّهْرُ مِنْ زَوَالِ الشَّمْسِ إِلَى آخِرِ الْقَامَةِ، وَالْعَصْرُ مِنْ آخِرِ الْقَامَةِ إِلَى الاِصْفِرَارِ، وَالْمَغْرِبُ غُرُوبُ الشَّمْسِ، وَالْعِشَاءُ مِنْ غُِيُوبِ الشَّفَقِ الأَحْمَرِ إِلَى ثُلُثِ اللَّيْلِ، وَالصُّبْحُ مِنْ طُلُوعِ الْفَجْرِ الصَّادِقِ إِلَى الإِسْفَارِ.',
        content: [
          'Les 4 conditions de validité : Purification rituelle, propreté du corps/vêtements/lieu, couverture de la \'Awrah, orientation vers la Qibla.',
          'Le temps de chaque prière doit être respecté strictement selon les repères naturels du soleil et de la lumière.'
        ],
        quiz: {
          question: 'Quel repère marque le début du temps de la prière de l\'Isha selon Al-Akhdari ?',
          options: [
            'Le coucher du soleil.',
            'La disparition de la lueur rouge du crépuscule (Ash-Shafaq Al-Ahmar).',
            'Le milieu de la nuit.'
          ],
          correctIndex: 1,
          explanation: 'Le temps de l\'Isha débute avec la disparition de la lueur rougeâtre à l\'horizon.'
        }
      },
      {
        id: 'lesson-2-2',
        number: '2.2',
        titleFr: 'Les Piliers (Arkan) et Sunan de la prière',
        titleAr: 'أركان الصلاة وسننها',
        matnArabe: 'فَصْلٌ: وَفَرَائِضُ الصَّلاَةِ: النِّيَّةُ، وَتَكْبِيرَةُ الإِحْرَامِ، وَالْقِيَامُ لَهَا، وَالْفَاتِحَةُ، وَالْقِيَامُ لَهَا، وَالرُّكُوعُ، وَالرَّفْعُ مِنْهُ، وَالسُّجُودُ، وَالرَّفْعُ مِنْهُ، وَالاِعْتِدَالُ، وَالطُّمَأْنِينَةُ، وَالتَّسْلِيمُ، وَالْجُلُوسُ لَهُ، وَتَرْتِيبُ الأَدَاءِ.',
        content: [
          'Les 14 piliers obligatoires (Fara\'id) : L\'Intention, le Takbir d\'ouverture et sa station debout, la récitation de la Fatiha et sa station debout, le Ruku\', le Sujud, la quiétude (Tuma\'ninah), et le Salam final.',
          'La quiétude (marquer un temps d\'arrêt dans chaque position) est une obligation stricte.'
        ],
        quiz: {
          question: 'Selon Al-Akhdari, quelle est la règle concernant la quiétude (Tuma\'ninah) pendant la prière ?',
          options: [
            'C\'est un pilier obligatoire (Fard) dont l\'omission annule la prière.',
            'C\'est une simple Sunnah facultative.',
            'Elle n\'est recommandée que pour les prières obligatoires.'
          ],
          correctIndex: 0,
          explanation: 'Dans le madhhab Malikite, At-Tuma\'ninah est un pilier de la prière.'
        }
      },
      {
        id: 'lesson-2-3',
        number: '2.3',
        titleFr: 'La Prosternation de l\'oubli (Sajdat As-Sahw)',
        titleAr: 'سجود السهو',
        matnArabe: 'فَصْلٌ: وَلِلسَّهْوِ فِي الصَّلاَةِ سَجْدَتَانِ؛ فَلِلنَّقْصِ قَبْلَ السَّلاَمِ بَعْدَ التَّشَهُّدَيْنِ، وَلِلزِّيَادَةِ بَعْدَ السَّلاَمِ. وَمَنْ نَقَصَ وَزَادَ سَجَدَ قَبْلَ السَّلاَمِ.',
        content: [
          'En cas de manque (omission de 2 Sunnan ou plus) : Deux prosternations AVANT le Salam final (Al-Qabli).',
          'En cas d\'ajout involontaire : Deux prosternations APRÈS le Salam final (Al-Ba\'di).',
          'En cas de cumul (omission + ajout) : La prosternation se fait AVANT le Salam.'
        ],
        quiz: {
          question: 'Si un fidèle ajoute un Ruku\' par oubli ET oublie une Sunnah dans la même prière, que doit-il faire ?',
          options: [
            'Prosterner deux fois AVANT le Salam (Al-Qabli).',
            'Prosterner deux fois APRÈS le Salam (Al-Ba\'di).',
            'Refaire entièrement sa prière.'
          ],
          correctIndex: 0,
          explanation: 'Lorsque l\'ajout et l\'omission se combinent, la prosternation AVANT le Salam (Al-Qabli) s\'applique.'
        }
      }
    ]
  },
  {
    chapterId: 3,
    chapterTitleFr: 'Chapitre 3 : Omissions Majeures et Réparations',
    chapterTitleAr: 'سهو الفروض والسنن',
    lessons: [
      {
        id: 'lesson-3-1',
        number: '3.1',
        titleFr: 'L\'omission d\'un Fard et la levée du premier Tashahhud',
        titleAr: 'سهو الفرض والقيام عن التشهد الأول',
        matnArabe: 'فَصْلٌ: وَمَنْ نَسِيَ فَرْضًا فَلاَ تُجْزِيهِ السَّجْدَتَانِ عَنْهُ، بَلْ يَعُودُ إِلَيْهِ مَا لَمْ يَرْكَعْ فِي الرَّكْعَةِ الَّتِي تَلِيهَا، فَيُبْطِلُ مَا فَعَلَهُ بَعْدَهُ وَيَعُودُ إِلَى الفَرْضِ. وَمَنْ قَامَ مِنْ رَكْعَتَيْنِ قَبْلَ أَنْ يَجْلِسَ يَرْجِعُ مَا لَمْ تُفَارِقْ يَدَاهُ وَرُكْبَتَاهُ الأَرْضَ.',
        content: [
          'L\'omission d\'un pilier (Fard) ne peut jamais être réparée par Sajdat As-Sahw : il faut réaccomplir le Fard omis tant qu\'on ne s\'est pas incliné (Ruku\') dans la raka\'ah suivante.',
          'En cas d\'oubli de la première assise (Tashahhud) : on se rassied si les mains/genoux n\'ont pas quitté le sol.',
          'Si l\'on s\'est déjà redressé debout, on ne se rassied plus et on effectue Sajdat Al-Qabli à la fin.'
        ],
        quiz: {
          question: 'Si un fidèle oublie un Fard (comme la Fatiha ou un Ruku\'), la prosternation de l\'oubli suffit-elle ?',
          options: [
            'Oui, Sajdat As-Sahw compense tout oubli.',
            'Non, Sajdat As-Sahw ne remplace jamais un Fard (pilier obligatoire).',
            'Oui, si l\'on fait Sajdat Al-Ba\'di.'
          ],
          correctIndex: 1,
          explanation: 'Un Fard omis doit obligatoirement être rattrapé. Sajdat As-Sahw ne remplace pas un pilier.'
        }
      },
      {
        id: 'lesson-3-2',
        number: '3.2',
        titleFr: 'Le doute sur le nombre de Rak\'at (Ash-Shakk)',
        titleAr: 'الشك في عدد الركعات',
        matnArabe: 'فَصْلٌ: وَمَنْ شَكَّ فِي صَلاَتِهِ فَلْيَبْنِ عَلَى مَا اسْتَيْقَنَ وَهُوَ الأَقَلُّ، وَيَأْتِي بِمَا شَكَّ فِيهِ، ثُمَّ يَسْجُدُ بَعْدَ السَّلاَمِ.',
        content: [
          'En cas de doute sur le nombre de rak\'at accomplies, le fidèle doit se baser sur le nombre minimum certain.',
          'Il complète ensuite sa prière en accomplissant la rak\'ah manquante.',
          'Après le Salam final, il effectue la prosternation d\'oubli (Sajdat Al-Ba\'di).'
        ],
        quiz: {
          question: 'Si un prieur hésite pendant sa prière entre avoir accompli 2 ou 3 rak\'at, que doit-il faire ?',
          options: [
            'Considérer qu\'il a fait 3 rak\'at et terminer sa prière.',
            'Considérer qu\'il a fait 2 rak\'at, compléter sa prière puis faire Sajdat Al-Ba\'di après le Salam.',
            'Annuler sa prière et la recommencer depuis le début.'
          ],
          correctIndex: 1,
          explanation: 'Il se base sur le minimum certain (2 rak\'at), complète la prière puis fait Sajdat Al-Ba\'di.'
        }
      }
    ]
  },
  {
    chapterId: 4,
    chapterTitleFr: 'Chapitre 4 : La Prière en Groupe et le Retardataire',
    chapterTitleAr: 'صلاة الجماعة والمسبوق',
    lessons: [
      {
        id: 'lesson-4-1',
        number: '4.1',
        titleFr: 'Le statut du retardataire (Al-Masbūq)',
        titleAr: 'أحكام المسبوق',
        matnArabe: 'فَصْلٌ: وَمَنْ أَدْرَكَ مَعَ الإِمَامِ رَكْعَةً فَأَكْثَرَ فَهُوَ مُدْرِكٌ لِلْجَمَاعَةِ، وَمَنْ أَدْرَكَ دُونَهَا فَلاَ يُدْرِكُ الْجَمَاعَةَ. وَالْمَسْبُوقُ يُقَضِّي مَا فَاتَهُ فِي الْقَوْلِ وَيَبْنِي فِي الْفِعْلِ.',
        content: [
          'On rattrape la prière en groupe en attrapant au moins une rak\'ah complète avec l\'imam (s\'incliner avant qu\'il ne se redresse).',
          'Règle fondamentale malikite : On rattrape les paroles (récitations) et on construit sur les actes (gestes).',
          'Les rak\'at rattrapées après le Salam de l\'imam sont considérées comme le début pour la récitation (Fatiha + Sourate).'
        ],
        quiz: {
          question: 'Selon l\'école Malikite, quelle est la règle d\'or pour le retardataire (Al-Masbūq) qui rattrape ses rak\'at manquantes ?',
          options: [
            'Il refait tout depuis le début sans tenir compte de l\'imam.',
            'Il rattrape les paroles (Qawl) et construit sur les actes (Fi\'l).',
            'Il imite l\'imam uniquement pour la prosternation d\'oubli.'
          ],
          correctIndex: 1,
          explanation: 'Le Masbūq applique la règle : "Yaqḍī fī al-qawl wa yabnī fī al-fi\'l" (Rattraper la récitation comme le début, et suivre la continuité des gestes).'
        }
      },
      {
        id: 'lesson-4-2',
        number: '4.2',
        titleFr: 'Le suivi des prosternations d\'oubli de l\'Imam par le Masbūq',
        titleAr: 'متابعة المسبوق للإمام في سجود السهو',
        matnArabe: 'فَصْلٌ: وَإِذَا سَجَدَ الإِمَامُ قَبْلَ السَّلاَمِ سَجَدَ مَعَهُ الْمَسْبُوقُ، وَإِنْ كَانَ لَمْ يَدْرُكْ مَعَهُ رَكْعَةً فَلاَ يَسْجُدُ مَعَهُ. وَإِنْ سَجَدَ الإِمَامُ بَعْدَ السَّلاَمِ لَمْ يَسْجُدْ مَعَهُ الْمَسْبُوقُ حَتَّى يُتِمَّ صَلاَتَهُ فَيَسْجُدَ بَعْدَ سَلاَمِهِ.',
        content: [
          'Sajdat Al-Qabli (avant Salam) : Le Masbūq se prosterne avec l\'imam s\'il a attrapé au moins une rak\'ah complète.',
          'Si le Masbūq n\'a attrapé aucune rak\'ah (joint après le dernier Ruku\'), il ne suit pas l\'imam dans Sajdat Al-Qabli.',
          'Sajdat Al-Ba\'di (après Salam) : Le Masbūq ne le fait pas avec l\'imam ; il se relève, termine ses rak\'at manquantes et l\'effectue après son propre Salam.'
        ],
        quiz: {
          question: 'Si l\'imam fait une prosternation d\'oubli APRÈS le Salam (Al-Ba\'di), quand le Masbūq doit-il la faire ?',
          options: [
            'Il la fait immédiatement avec l\'imam avant de se relever.',
            'Il se relève sans la faire avec l\'imam, termine sa prière, puis l\'effectue après son propre Salam.',
            'Il l\'annule car il est en retard.'
          ],
          correctIndex: 1,
          explanation: 'Le Masbūq se relève directement après le Salam de l\'imam, termine sa prière puis fait Al-Ba\'di après son propre Salam.'
        }
      }
    ]
  }
];

export default function AkhdariCourse() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [lessonIndex, setLessonIndex] = useState(0);
  const [viewState, setViewState] = useState<'lesson' | 'quiz' | 'recap'>('lesson');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const currentChapter = COURSES_DATA[currentChapterIndex];
  const currentLesson = currentChapter.lessons[lessonIndex];

  const saveProgressToApi = async (lessonId: string) => {
    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'user-demo-id', lessonId }),
      });
    } catch (e) {
      console.error('Erreur de sauvegarde API', e);
    }
  };

  const handleQuizValidation = () => {
    if (selectedOption === null) {
      setErrorMsg('Veuillez sélectionner une réponse.');
      return;
    }

    if (selectedOption === currentLesson.quiz.correctIndex) {
      const updatedList = [...new Set([...completedLessons, currentLesson.id])];
      setCompletedLessons(updatedList);
      saveProgressToApi(currentLesson.id);
      setErrorMsg('');

      if (lessonIndex === currentChapter.lessons.length - 1) {
        setViewState('recap');
      } else {
        setSelectedOption(null);
        setLessonIndex((prev) => prev + 1);
        setViewState('lesson');
      }
    } else {
      setErrorMsg('Réponse incorrecte. Relisez attentivement le texte avant de réessayer.');
    }
  };

  const handleNextChapter = () => {
    if (currentChapterIndex + 1 < COURSES_DATA.length) {
      setCurrentChapterIndex((prev) => prev + 1);
      setLessonIndex(0);
      setSelectedOption(null);
      setViewState('lesson');
    } else {
      alert('Félicitations ! Vous avez terminé toutes les leçons actuellement disponibles.');
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* HEADER */}
        <header className="bg-emerald-950 text-white p-6 rounded-2xl shadow-lg border-b-4 border-emerald-500">
          <div className="flex justify-between items-center mb-2">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Fiqh Malikite — Matn Al-Akhdari
            </span>
            <span className="text-xs bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full font-medium">
              {currentChapter.chapterTitleFr}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold">
            {viewState === 'recap'
              ? `Validation du Chapitre ${currentChapter.chapterId}`
              : `Leçon ${currentLesson.number} : ${currentLesson.titleFr}`}
          </h1>
        </header>

        {/* LEÇON */}
        {viewState === 'lesson' && (
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div className="bg-emerald-50 border-r-4 border-emerald-600 p-5 rounded-r-xl text-right dir-rtl font-serif text-xl leading-loose text-emerald-950">
              {currentLesson.matnArabe}
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed">
              <h3 className="font-bold text-slate-900 text-lg">Points clés à retenir :</h3>
              <ul className="space-y-2">
                {currentLesson.content.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setViewState('quiz')}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow transition-all"
            >
              Étape suivante : Passer au Quiz ({currentLesson.number}) &rarr;
            </button>
          </div>
        )}

        {/* QUIZ */}
        {viewState === 'quiz' && (
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div className="border-b pb-3">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Contrôle de connaissances</span>
              <h2 className="text-lg font-bold text-slate-900 mt-1">{currentLesson.quiz.question}</h2>
            </div>

            <div className="space-y-3">
              {currentLesson.quiz.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => { setSelectedOption(idx); setErrorMsg(''); }}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-sm ${
                    selectedOption === idx
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {errorMsg && (
              <p className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-200">
                {errorMsg}
              </p>
            )}

            <div className="flex gap-4">
              <button
                onClick={() => setViewState('lesson')}
                className="w-1/3 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-xl text-sm"
              >
                &larr; Relire la leçon
              </button>
              <button
                onClick={handleQuizValidation}
                className="w-2/3 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow text-sm"
              >
                Valider et continuer
              </button>
            </div>
          </div>
        )}

        {/* RÉCAPITULATIF */}
        {viewState === 'recap' && (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-200 text-center space-y-8">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-4xl font-bold shadow-inner">
              ✓
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Niveau accompli</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                {currentChapter.chapterTitleFr} Validé !
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-lg mx-auto">
                Félicitations ! Vous avez validé toutes les leçons de ce chapitre du <strong>Matn Al-Akhdari</strong>.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Leçons acquises :</h4>
              {currentChapter.lessons.map((l) => (
                <div key={l.id} className="flex items-center justify-between text-sm py-2 border-b border-slate-200 last:border-0">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-800">{l.number} — {l.titleFr}</span>
                    <span className="text-xs text-slate-500 font-serif dir-rtl">{l.titleAr}</span>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">
                    Validé
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleNextChapter}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all text-base"
            >
              Déverrouiller le Chapitre Suivant &rarr;
            </button>
          </div>
        )}

      </div>
    </main>
  );
}