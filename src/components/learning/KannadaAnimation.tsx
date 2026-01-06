import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SpeakButton } from '@/components/SpeakButton';
import { useAccessibility } from '@/hooks/useAccessibility';
import { toast } from 'sonner';

const kannadaLetters = [
  { letter: 'ಅ', romanized: 'a', sound: 'ah' },
  { letter: 'ಆ', romanized: 'aa', sound: 'aah' },
  { letter: 'ಇ', romanized: 'i', sound: 'ee' },
  { letter: 'ಈ', romanized: 'ee', sound: 'eee' },
  { letter: 'ಉ', romanized: 'u', sound: 'oo' },
  { letter: 'ಊ', romanized: 'uu', sound: 'ooo' },
  { letter: 'ಎ', romanized: 'e', sound: 'eh' },
  { letter: 'ಏ', romanized: 'ae', sound: 'ay' },
  { letter: 'ಒ', romanized: 'o', sound: 'oh' },
  { letter: 'ಓ', romanized: 'oo', sound: 'ooh' },
];

const kannadaWords = [
  { word: 'ಅಮ್ಮ', meaning: 'Mother', pronunciation: 'Amma' },
  { word: 'ಅಪ್ಪ', meaning: 'Father', pronunciation: 'Appa' },
  { word: 'ಮನೆ', meaning: 'House', pronunciation: 'Mane' },
  { word: 'ನೀರು', meaning: 'Water', pronunciation: 'Neeru' },
  { word: 'ಹೂವು', meaning: 'Flower', pronunciation: 'Hoovu' },
];

export const KannadaAnimation = ({ grade }: { grade: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mode, setMode] = useState<'letters' | 'words'>('letters');
  const { speak } = useAccessibility();

  const currentLetter = kannadaLetters[currentIndex];
  const currentWord = kannadaWords[currentIndex % kannadaWords.length];

  const handleNext = () => {
    const maxIndex = mode === 'letters' ? kannadaLetters.length - 1 : kannadaWords.length - 1;
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
    toast.success('Great job! Keep learning! 🌟');
  };

  const handlePrevious = () => {
    const maxIndex = mode === 'letters' ? kannadaLetters.length - 1 : kannadaWords.length - 1;
    setCurrentIndex((prev) => (prev - 1 + maxIndex + 1) % (maxIndex + 1));
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-kannada to-accent border-4 border-foreground/20 shadow-xl">
      <h3 className="text-3xl font-bold text-kannada-foreground mb-6 text-center">
        Learn Kannada - ಕನ್ನಡ ಕಲಿಯಿರಿ
      </h3>

      {/* Mode Toggle */}
      <div className="flex justify-center gap-4 mb-8">
        <Button
          onClick={() => { setMode('letters'); setCurrentIndex(0); }}
          variant={mode === 'letters' ? 'default' : 'outline'}
          size="lg"
          className="font-bold text-xl"
        >
          Letters ಅಕ್ಷರಗಳು
        </Button>
        <Button
          onClick={() => { setMode('words'); setCurrentIndex(0); }}
          variant={mode === 'words' ? 'default' : 'outline'}
          size="lg"
          className="font-bold text-xl"
        >
          Words ಪದಗಳು
        </Button>
      </div>

      {mode === 'letters' ? (
        <div className="flex flex-col items-center gap-6">
          {/* Large Letter Display */}
          <div className="text-[150px] font-bold text-foreground animate-bounce leading-none">
            {currentLetter.letter}
          </div>

          {/* Romanized and Sound */}
          <div className="flex items-center gap-4 bg-card/80 px-8 py-4 rounded-2xl">
            <span className="text-3xl font-bold text-foreground">
              {currentLetter.romanized.toUpperCase()} - "{currentLetter.sound}"
            </span>
            <SpeakButton 
              text={`This is the Kannada letter ${currentLetter.romanized}. It sounds like ${currentLetter.sound}`} 
              size="lg"
            />
          </div>

          {/* Progress */}
          <div className="text-xl font-bold text-foreground/80">
            Letter {currentIndex + 1} of {kannadaLetters.length}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          {/* Word Display */}
          <div className="text-8xl font-bold text-foreground animate-scale-in leading-none">
            {currentWord.word}
          </div>

          {/* Meaning and Pronunciation */}
          <div className="flex flex-col items-center gap-4 bg-card/80 px-8 py-6 rounded-2xl">
            <div className="text-3xl font-bold text-foreground">
              {currentWord.pronunciation}
            </div>
            <div className="text-2xl text-foreground/80">
              Meaning: {currentWord.meaning}
            </div>
            <SpeakButton 
              text={`The Kannada word ${currentWord.pronunciation} means ${currentWord.meaning}`} 
              size="lg"
            />
          </div>

          {/* Progress */}
          <div className="text-xl font-bold text-foreground/80">
            Word {(currentIndex % kannadaWords.length) + 1} of {kannadaWords.length}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          onClick={handlePrevious}
          size="lg"
          variant="secondary"
          className="font-bold text-xl px-8"
        >
          ← Previous
        </Button>
        <Button
          onClick={handleNext}
          size="lg"
          className="font-bold text-xl px-8 bg-foreground text-background hover:bg-foreground/90"
        >
          Next →
        </Button>
      </div>

      <p className="text-foreground text-center mt-8 text-lg font-medium">
        Click the speaker button to hear the pronunciation! 🔊
      </p>
    </Card>
  );
};
