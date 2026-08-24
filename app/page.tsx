'use client';

import React, { useState, useEffect } from 'react';

interface Lesson {
  id: string;
  number: string;
  title: string;
  arabicText: string;
  translation: string;
}

const LESSONS: Lesson[] = [
  {
    id: '1.1',
    number: 'Leçon 1.1',
    title: "Les types d'eaux et la purification (At-Taharah)",
    arabicText: "فَصْلٌ: أَنْوَاعُ الْمِيَاهِ وَأَحْكامُ الطَّهَارَةِ. لاَ يَجُوزُ إِزَالَةُ النَّجَاسَةِ وَلاَ رَفْعُ الْحَدَثِ إِلاَّ بِالْمَاءِ الْمُطْلَقِ الَّذِي لَمْ يَتَغَيَّرْ لَوْنُهُ أَوْ طَعْمُهُ أَوْ رَائِحَتُهُ بِمَا يُفَارِقُهُ غَالِبًا.",
    translation: "Section : Les catégories d'eau et les règles de purification. Il n'est pas permis d'enlever une impureté matérielle (Najasah) ni de lever une impureté rituelle (Hadath) si ce n'est avec de l'eau pure et purifiante (Al-Ma' Al-Moutlaq)..."
  },
  {
    id: '1.2',
    number: 'Leçon 1.2',
    title: "Les Obligations de l'Ablution (Wudu)",
    arabicText: "فَرَائِضُ الْوُضُوءِ سَبْعَةٌ: النِّيَّةُ عِنْدَ غَسْلِ الْوَجْهِ، وَغَسْلُ الْوَجْهِ، وَغَسْلُ الْيَدَيْنِ إِلَى الْمِرْفَقَيْنِ، وَمَسْحُ جَمِيعِ الرَّأْسِ، وَغَسْلُ الرِّجْلَيْنِ إِلَى الْكَعْبَيْنِ، وَالدَّلْكُ، وَالْمُوَالاَةُ.",
    translation: "Les obligations de l'ablution sont au nombre de sept : l'intention au moment du lavage du visage, le lavage du visage, le lavage des bras jusqu'aux coudes inclus, l'essuyage complet de la tête..."
  },
  {
    id: '1.3',
    number: 'Leçon 1.3',
    title: "Les Actes Recommandés de l'Ablution (Sunan)",
    arabicText: "وَسُنَنُهُ: غَسْلُ الْيَدَيْنِ إِلَى الْكُوعَيْنِ عِنْدَ الاِبْتِدَاءِ، وَالْمَضْمَضَةُ، وَالاِسْتِنْشَاقُ، وَالاِسْتِنْثَارُ، وَرَدُّ مَسْحِ الرَّأْسِ، وَمَسْحُ الأُذُنَيْنِ، وَتَجْدِيدُ الْمَاءِ لَهُمَا، وَالتَّرْتِيبُ.",
    translation: "Et ses Sunan sont : le lavage des mains au début, le rincage de la bouche, l'aspiration et l'évacuation de l'eau du nez, le retour de l'essuyage de la tête, l'essuyage des oreilles..."
  },
  {
    id: '1.4',
    number: 'Leçon 1.4',
    title: "Les Annulateurs de l'Ablution (Nawaqid)",
    arabicText: "نَوَاقِضُ الْوُضُوءِ: أَهْدَاثٌ وَأَسْبَابٌ؛ فَالأَهْدَاثُ هِيَ الْخَارِجُ الْمُعْتَادُ مِنْ السَّبِيلَيْنِ كَالْبَوْلِ وَالْغَائِطِ وَالرِّيحِ، وَالأَسْبَابُ كَالنَّوْمِ الثَّقِيلِ وَزَوَالِ الْعَقْلِ.",
    translation: "Les annulateurs de l'ablution sont les évacuations directes (urine, selles, gaz) et leurs causes (sommeil profond, perte de conscience...)..."
  },
  {
    id: '2.1',
    number: 'Leçon 2.1',
    title: "Le Grand Lavage Rituel (Ghusl)",
    arabicText: "فَرَائِضُ الْغُسْلِ: النِّيَّةُ عِنْدَ بَدْئِهِ، وَتَعْمِيمُ جَمِيعِ الْجَسَدِ بِالْمَاءِ، وَالدَّلْكُ، وَالْمُوَالاَةُ، وَتَخْلِيلُ الشَّعْرِ حَتَّى يَصِلَ الْمَاءُ إِلَى أُصُولِهِ.",
    translation: "Les obligations du grand lavage sont : l'intention au moment de commencer, l'arrosage de l'ensemble du corps avec de l'eau, le frictionnement et la continuité..."
  },
  {
    id: '2.2',
    number: 'Leçon 2.2',
    title: "L'Ablution Sèche (Tayammum)",
    arabicText: "يَتَيَمَّمُ الْمَرِيضُ وَالْمُسَافِرُ عِنْدَ عَدَمِ الْمَاءِ أَوْ الْعَجْزِ عَنْ اسْتِعْمَالِهِ، وَفَرَائِضُهُ: النِّيَّةُ، وَالصَّعِيدُ الطَّاهِرُ، وَالضَّرْبَةُ الأُولَى، وَمَسْحُ الْوَجْهِ وَالْيَدَيْنِ.",
    translation: "Le malade ou le voyageur recourt au Tayammum en cas d'absence d'eau. Ses obligations sont l'intention, l'usage de terre pure, le premier tapotement..."
  },
  {
    id: '2.3',
    number: 'Leçon 2.3',
    title: "Les Conditions de la Prière (Shurut As-Salah)",
    arabicText: "شُرُوطُ الصَّلاَةِ: طَهَارَةُ الْحَدَثِ، وَطَهَارَةُ الْخَبَثِ مِنَ الثَّوْبِ وَالْبَدَنِ وَالْمَكَانِ، وَسَتْرُ الْعَوْرَةِ، وَاسْتِقْبَالُ الْقِبْلَةِ، وَدُخُولُ الْوَقْتِ.",
    translation: "Les conditions de la prière sont la purification rituelle et matérielle du corps, de l'habit et du lieu, le fait de couvrir sa 'Awrah et la Qibla..."
  },
  {
    id: '2.4',
    number: 'Leçon 2.4',
    title: "Les Piliers de la Prière (Arkan As-Salah)",
    arabicText: "أَرْكَانُ الصَّلاَةِ: تَكْبِيرَةُ الإِحْرَامِ، وَالْقِيَامُ لَهَا، وَقِرَاءَةُ الْفَاتِحَةِ، وَالرُّكُوعُ، وَالرَّفْعُ مِنْهُ، وَالسُّجُودُ، وَالطَّمَأْنِينَةُ، وَالاعْتِدَالُ، وَالسَّلاَمُ.",
    translation: "Les piliers de la prière sont le Takbir d'inauguration, la station debout, la récitation de Al-Fatihah, l'inclinaison, la prosternation et le Salut final..."
  }
];

export default function FiqhAppPage() {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'cours' | 'quiz' | 'glossaire' | 'revision'>('cours');
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [rate, setRate] = useState(0.8);

  const currentLesson = LESSONS[selectedLessonIndex];

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
            Niveau : <span className="font-bold text-white">{selectedLessonIndex + 1} / 8</span>
          </div>

          {/* Progression */}
          <div className="mt-4 max-w-full">
            <div className="flex justify-between text-xs text-emerald-200 mb-1 font-medium">
              <span>Progression globale</span>
              <span>{Math.round(((selectedLessonIndex + 1) / 8) * 100)}%</span>
            </div>
            <div className="w-full bg-emerald-950/60 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full transition-all duration-300"
                style={{ width: `${((selectedLessonIndex + 1) / 8) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Sidebar */}
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

        {/* Section Principale */}
        <main className="md:col-span-3 space-y-6">
          
          {/* Navigation Tabs */}
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
            <button
              disabled
              className="flex-1 min-w-[90px] py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 bg-slate-200/70 text-slate-400 cursor-not-allowed"
            >
              🎓 Examen Final
            </button>
          </div>

          {/* Arabe + Lecteur Audio direct */}
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

          {/* Traduction Section */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              TRADUCTION (FR)
            </h4>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
              {currentLesson.translation}
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}