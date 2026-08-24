'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  Repeat,
  Volume2,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Search,
  RotateCcw,
  Check,
  GraduationCap,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Structure des données pour les 8 leçons du Matn
interface Lesson {
  id: number;
  chapter: string;
  title: string;
  arabicText: string;
  translation: string;
  explanation: string;
}

const LESSONS: Lesson[] = [
  {
    id: 1,
    chapter: "Chapitre 1",
    title: "La Purification et les Eaux (كِتَابُ الطَّهَارَةِ وَأَحْكَامُ الْمِيَاهِ)",
    arabicText: "الطهَارَةُ هِيَ الرَّفْعُ لِمَا يَمْنَعُ الصَّلاَةَ مِنْ حَدَثٍ أَوْ خَبَثٍ، وَالْمَاءُ الطَّهُورُ هُوَ الْمَاءُ الْمُطْلَقُ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رِيحُهُ بِنَجَاسَةٍ.",
    translation: "La purification consiste à lever l'état d'impureté rituelle (Hadath) ou matérielle (Khabath) qui empêche la prière. L'eau purifiante est l'eau pure et naturelle dont la couleur, le goût ou l'odeur n'ont pas été altérés par une impureté.",
    explanation: "Ce premier texte pose la définition de la purification en droit islamique et précise la condition essentielle de l'eau utilisable pour la purification."
  },
  {
    id: 2,
    chapter: "Chapitre 2",
    title: "Les Obligations de l'Ablution (فَرَائِضُ الْوُضُوءِ)",
    arabicText: "فَرَائِضُ الْوُضُوءِ سَبْعَةٌ: النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ، وَغَسْلُ الْوَجْهِ، وَغَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ جَمِيعِ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ، وَالدَّلْكُ، وَالْمُوَالاَةُ.",
    translation: "Les obligations de l'ablution (Wudu) sont au nombre de sept : l'intention lors du lavage du visage, le lavage du visage, le lavage des bras jusqu'aux coudes inclus, l'essuyage complet de la tête, le lavage des pieds jusqu'aux chevilles, le frictionnement (Dalk) et la continuité (Muwalat).",
    explanation: "Sans l'accomplissement de ces 7 piliers, l'ablution n'est pas valide."
  },
  {
    id: 3,
    chapter: "Chapitre 3",
    title: "Les Actes Recommandés de l'Ablution (سُنَنُ الْوُضُوءِ)",
    arabicText: "وَسُنَنُهُ: غَسْلُ الْيَدَيْنِ إِلَى الْكُوعَيْنِ عِنْدَ الاِبْتِدَاءِ، وَالْمَضْمَضَةُ، وَالاِسْتِنْشَاقُ، وَالاِسْتِنْثَارُ، وَرَدُّ مَسْحِ الرَّأْسِ، وَمَسْحُ الأُذُنَيْنِ، وَتَجْدِيدُ الْمَاءِ لَهُمَا، وَالتَّرْتِيبُ بَيْنَ الْفَرَائِضِ.",
    translation: "Et ses actes recommandés (Sunan) sont : laver les mains jusqu'aux poignets au début, rincer la bouche, aspirer l'eau par le nez, la rejeter, effectuer le retour du massage de la tête, essuyer les oreilles, renouveler l'eau pour les oreilles, et respecter l'ordre des piliers obligatoires.",
    explanation: "Les Sunan complètent les obligations et augmentent la récompense de l'adorateur."
  },
  {
    id: 4,
    chapter: "Chapitre 4",
    title: "Les Annulateurs de l'Ablution (نَوَاقِضُ الْوُضُوءِ)",
    arabicText: "نَوَاقِضُ الْوُضُوءِ: أَهْدَاثٌ وَأَسْبَابٌ؛ فَالأَهْدَاثُ هِيَ الْخَارِجُ الْمُعْتَادُ مِنْ السَّبِيلَيْنِ كَالْبَوْلِ وَالْغَائِطِ وَالرِّيحِ، وَالأَسْبَابُ كَالنَّوْمِ الثَّقِيلِ وَزَوَالِ الْعَقْلِ وَمَسِّ الذَّكَرِ بِبَطْنِ الْكَفِّ.",
    translation: "Les annulateurs de l'ablution sont les évacuations directes et leurs causes : les évacuations concernent les sorties habituelles par les deux voies (urine, selles, gaz). Les causes comprennent le sommeil profond, la perte de conscience et le contact direct des parties intimes.",
    explanation: "Lorsqu'un de ces éléments survient, il est nécessaire de refaire ses ablutions pour prier."
  },
  {
    id: 5,
    chapter: "Chapitre 5",
    title: "Le Grand Lavage Rituel (أَحْكَامُ الْغُسْلِ وَفَرَائِضُهُ)",
    arabicText: "فَرَائِضُ الْغُسْلِ: النِّيَّةُ عِنْدَ بَدْئِهِ، وَتَعْمِيمُ جَمِيعِ الْجَسَدِ بِالْمَاءِ، وَالدَّلْكُ، وَالْمُوَالاَةُ، وَتَخْلِيلُ الشَّعْرِ حَتَّى يَصِلَ الْمَاءُ إِلَى أُصُولِهِ.",
    translation: "Les obligations du grand lavage (Ghusl) sont : l'intention au moment de commencer, l'arrosage de l'ensemble du corps avec de l'eau, le frictionnement (Dalk), la continuité (Muwalat), et le passage des doigts dans les cheveux pour mouiller le cuir chevelu.",
    explanation: "Le Ghusl est obligatoire après une grande impureté (Janabah, fin des règles, etc.)."
  },
  {
    id: 6,
    chapter: "Chapitre 6",
    title: "L'Ablution Sèche (أَحْكَامُ التَّيَمُّمِ)",
    arabicText: "يَتَيَمَّمُ الْمَرِيضُ وَالْمُسَافِرُ عِنْدَ عَدَمِ الْمَاءِ أَوْ الْعَجْزِ عَنْ اسْتِعْمَالِهِ، وَفَرَائِضُهُ: النِّيَّةُ، وَالصَّعِيدُ الطَّاهِرُ، وَالضَّرْبَةُ الأُولَى، وَمَسْحُ الْوَجْهِ، وَمَسْحُ الْيَدَيْنِ إِلَى الْكُوعَيْنِ، وَالْمُوَالاَةُ.",
    translation: "Le malade ou le voyageur recourt au Tayammum en cas d'absence d'eau ou d'incapacité de l'utiliser. Ses obligations sont : l'intention, l'usage d'une surface terrestre pure, le premier tapotement, l'essuyage du visage, l'essuyage des mains jusqu'aux poignets, et la continuité.",
    explanation: "Le Tayammum est une dérogation facilitatrice permettant de préserver la prière à son heure."
  },
  {
    id: 7,
    chapter: "Chapitre 7",
    title: "Les Conditions de la Prière (شُرُوطُ الصَّلاَةِ)",
    arabicText: "شُرُوطُ الصَّلاَةِ: طَهَارَةُ الْحَدَثِ، وَطَهَارَةُ الْخَبَثِ مِنَ الثَّوْبِ وَالْبَدَنِ وَالْمَكَانِ، وَسَتْرُ الْعَوْرَةِ، وَاسْتِقْبَالُ الْقِبْلَةِ، وَدُخُولُ الْوَقْتِ.",
    translation: "Les conditions de validité de la prière sont : la purification de l'impureté rituelle, la propreté des vêtements, du corps et du lieu de prière, le fait de couvrir sa 'Awrah, l'orientation vers la Qibla et l'entrée de l'heure prescrite.",
    explanation: "Ces prérequis doivent être réunis avant d'entamer la prière."
  },
  {
    id: 8,
    chapter: "Chapitre 8",
    title: "Les Piliers de la Prière (أَرْكَانُ الصَّلاَةِ)",
    arabicText: "أَرْكَانُ الصَّلاَةِ: تَكْبِيرَةُ الإِحْرَامِ، وَالْقِيَامُ لَهَا، وَقِرَاءَةُ الْفَاتِحَةِ، وَالرُّكُوعُ، وَالرَّفْعُ مِنْهُ، وَالسُّجُودُ عَلَى الأَعْضَاءِ السَّبْعَةِ، وَالرَّفْعُ مِنْهُ، وَالطَّمَأْنِينَةُ، وَالاِعْتِدَالُ، وَالسَّلاَمُ.",
    translation: "Les piliers de la prière sont : le Takbir d'inauguration (Takbirat Al-Ihram), la station debout pour celui-ci, la récitation de Al-Fatihah, l'inclinaison (Ruku'), le redressement, la prosternation (Sujud) sur les 7 membres, le redressement entre les prosternations, la sérénité (Sukun) et le Salut final (Salam).",
    explanation: "Ce sont les éléments constitutifs indispensables de chaque prière."
  }
];

export default function MatnLearningPage() {
  // États de l'application
  const [playingLessonId, setPlayingLessonId] = useState<number | null>(null);
  const [isLooping, setIsLooping] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.8);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedExplanation, setExpandedExplanation] = useState<number | null>(null);

  // Charger la progression depuis le localStorage
  useEffect(() => {
    const saved = localStorage.getItem('matn_completed_lessons');
    if (saved) {
      try {
        setCompletedLessons(JSON.parse(saved));
      } catch (e) {
        console.error("Erreur lors du chargement de la progression", e);
      }
    }
  }, []);

  // Nettoyage de la synthèse vocale lors du démonte du composant
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Gestion de la lecture audio
  const speakLesson = (lesson: Lesson) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert("Votre navigateur ne supporte pas la synthèse vocale.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(lesson.arabicText);
    utterance.lang = 'ar-SA';
    utterance.rate = playbackSpeed;

    utterance.onend = () => {
      if (isLooping) {
        speakLesson(lesson);
      } else {
        setPlayingLessonId(null);
      }
    };

    utterance.onerror = () => {
      setPlayingLessonId(null);
    };

    setPlayingLessonId(lesson.id);
    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setPlayingLessonId(null);
  };

  const togglePlay = (lesson: Lesson) => {
    if (playingLessonId === lesson.id) {
      stopAudio();
    } else {
      speakLesson(lesson);
    }
  };

  const toggleComplete = (id: number) => {
    let updated: number[];
    if (completedLessons.includes(id)) {
      updated = completedLessons.filter(lessonId => lessonId !== id);
    } else {
      updated = [...completedLessons, id];
    }
    setCompletedLessons(updated);
    localStorage.setItem('matn_completed_lessons', JSON.stringify(updated));
  };

  const cycleSpeed = () => {
    const speeds = [0.6, 0.8, 1.0, 1.2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const newSpeed = speeds[nextIdx];
    setPlaybackSpeed(newSpeed);

    // Si une leçon est en cours de lecture, relancer avec la nouvelle vitesse
    if (playingLessonId !== null) {
      const currentLesson = LESSONS.find(l => l.id === playingLessonId);
      if (currentLesson) {
        speakLesson(currentLesson);
      }
    }
  };

  const toggleExplanation = (id: number) => {
    setExpandedExplanation(expandedExplanation === id ? null : id);
  };

  // Filtrage des leçons
  const filteredLessons = LESSONS.filter(l =>
    l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.arabicText.includes(searchQuery) ||
    l.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressPercentage = Math.round((completedLessons.length / LESSONS.length) * 100);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-20 font-sans">
      {/* En-tête de la page */}
      <header className="bg-gradient-to-b from-emerald-900 to-emerald-800 text-white pt-10 pb-12 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-700/60 backdrop-blur px-3.5 py-1.5 rounded-full text-xs font-medium text-amber-300 mb-4 border border-emerald-600">
            <Sparkles className="w-4 h-4" /> Programme Complet de Mémorisation (المتون)
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Matn Al-Fiqh - المتن الفقهي
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Écoutez, répétez en boucle et validez les 8 leçons fondamentales pour une mémorisation (Hifz) fluide et efficace.
          </p>

          {/* Barre de Progression */}
          <div className="mt-8 bg-emerald-950/40 p-4 rounded-2xl max-w-md mx-auto border border-emerald-700/50">
            <div className="flex justify-between items-center text-xs text-emerald-200 mb-2 font-medium">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-400" /> Progression globale
              </span>
              <span className="font-bold text-amber-300">{completedLessons.length} / {LESSONS.length} Mémorisées ({progressPercentage}%)</span>
            </div>
            <div className="w-full bg-emerald-950/60 rounded-full h-2.5 overflow-hidden border border-emerald-700/30">
              <div
                className="bg-gradient-to-r from-amber-400 to-amber-300 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Zone de Contenu */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6">

        {/* Barre d'outils et recherche */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-4 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher une leçon ou mot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* Bouton Mode Boucle */}
            <button
              onClick={() => setIsLooping(!isLooping)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 border transition-all ${
                isLooping
                  ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <Repeat className={`w-3.5 h-3.5 ${isLooping ? 'animate-spin-slow' : ''}`} />
              <span>{isLooping ? 'Boucle Active' : 'Activer Boucle'}</span>
            </button>

            {/* Bouton Vitesse */}
            <button
              onClick={cycleSpeed}
              className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-all flex items-center gap-1.5"
              title="Changer la vitesse de lecture"
            >
              <Volume2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Vitesse {playbackSpeed}x</span>
            </button>
          </div>
        </div>

        {/* Liste des 8 Leçons */}
        <div className="space-y-6">
          {filteredLessons.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-500">Aucune leçon ne correspond à votre recherche.</p>
            </div>
          ) : (
            filteredLessons.map((lesson) => {
              const isPlaying = playingLessonId === lesson.id;
              const isDone = completedLessons.includes(lesson.id);

              return (
                <article
                  key={lesson.id}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isPlaying
                      ? 'border-amber-400 ring-2 ring-amber-400/20 shadow-md'
                      : isDone
                      ? 'border-emerald-200 bg-emerald-50/20'
                      : 'border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  {/* Entête de Carte */}
                  <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-3">
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-lg">
                        {lesson.chapter}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-slate-800">
                        {lesson.title}
                      </h2>
                    </div>

                    {/* Bouton de Validation */}
                    <button
                      onClick={() => toggleComplete(lesson.id)}
                      className={`p-2 rounded-xl transition-all flex items-center gap-1.5 text-xs font-medium ${
                        isDone
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'
                      }`}
                      title={isDone ? "Marquer comme non mémorisé" : "Marquer comme mémorisé"}
                    >
                      <Check className="w-4 h-4" />
                      <span className="hidden sm:inline">{isDone ? 'Mémorisé' : 'À mémoriser'}</span>
                    </button>
                  </div>

                  {/* Corps de Carte : Texte Arabe (Matn) */}
                  <div className="p-5 sm:p-6">
                    <div className="bg-amber-50/30 rounded-xl p-5 mb-5 border border-amber-100 text-right">
                      <p
                        className="text-2xl sm:text-3xl font-serif leading-loose text-emerald-950 font-medium tracking-wide"
                        lang="ar"
                        dir="rtl"
                      >
                        {lesson.arabicText}
                      </p>
                    </div>

                    {/* Traduction Française */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                      <strong className="text-slate-800 font-semibold">Traduction : </strong>
                      {lesson.translation}
                    </p>

                    {/* Explication Déroulante */}
                    <div className="border-t border-slate-100 pt-3 mt-4">
                      <button
                        onClick={() => toggleExplanation(lesson.id)}
                        className="text-xs text-emerald-700 font-semibold flex items-center gap-1 hover:text-emerald-800 transition-colors"
                      >
                        {expandedExplanation === lesson.id ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" /> Masquer la note d'explication
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" /> En savoir plus sur ce chapitre
                          </>
                        )}
                      </button>

                      {expandedExplanation === lesson.id && (
                        <div className="mt-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed animate-fadeIn">
                          {lesson.explanation}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Barre de Contrôle Audio de la Leçon */}
                  <div className="bg-slate-50/80 p-3 px-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => togglePlay(lesson)}
                        className={`p-3 rounded-full text-white transition-all shadow-md flex items-center justify-center ${
                          isPlaying
                            ? 'bg-amber-500 hover:bg-amber-600 ring-4 ring-amber-100'
                            : 'bg-emerald-700 hover:bg-emerald-800'
                        }`}
                        title={isPlaying ? "Pause" : "Écouter la récitation"}
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>

                      <span className="text-xs font-semibold text-slate-600">
                        {isPlaying ? 'Récitation en cours...' : 'Écouter le Matn'}
                      </span>
                    </div>

                    <div className="text-xs text-slate-400 font-mono">
                      Vitesse : {playbackSpeed}x
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}