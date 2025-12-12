import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2 } from 'lucide-react';
import { toast } from 'sonner';

const phonicsWords = [
  { word: 'CAT', sound: 'C-A-T', image: '🐱' },
  { word: 'DOG', sound: 'D-O-G', image: '🐕' },
  { word: 'SUN', sound: 'S-U-N', image: '☀️' },
  { word: 'BAT', sound: 'B-A-T', image: '🦇' },
  { word: 'HAT', sound: 'H-A-T', image: '🎩' },
];

export const EnglishAnimation = ({ grade }: { grade: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = phonicsWords[currentWordIndex];

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.7;
      utterance.pitch = 1.2;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleNextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % phonicsWords.length);
    toast.success('Great! Let\'s learn another word! 📚');
  };

  if (grade === 1) {
    return (
      <Card className="p-8 bg-gradient-to-br from-english to-english/80 border-4 border-white shadow-xl">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">Phonics Practice</h3>
        
        <div className="flex flex-col items-center gap-8">
          {/* Image */}
          <div className="text-9xl animate-bounce">
            {currentWord.image}
          </div>

          {/* Word */}
          <div className="flex items-center gap-4">
            <div className="text-7xl font-bold text-white animate-scale-in">
              {currentWord.word}
            </div>
            <Button
              onClick={() => speakWord(currentWord.word)}
              size="lg"
              variant="secondary"
              className="text-xl"
            >
              <Volume2 className="w-6 h-6" />
            </Button>
          </div>

          {/* Sound it out */}
          <div className="flex items-center gap-4 bg-white/20 px-8 py-4 rounded-2xl">
            <span className="text-3xl font-bold text-white">
              Sound: {currentWord.sound}
            </span>
            <Button
              onClick={() => speakWord(currentWord.sound.replace(/-/g, ' '))}
              size="sm"
              variant="secondary"
              className="text-lg"
            >
              <Volume2 className="w-5 h-5" />
            </Button>
          </div>

          <Button
            onClick={handleNextWord}
            size="lg"
            className="font-bold text-xl bg-white text-primary hover:bg-white/90"
          >
            Next Word
          </Button>
        </div>

        <p className="text-white text-center mt-8 text-lg">
          Sound out each letter to read the word! 📖
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-english to-english/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-6 text-center">Interactive English Learning</h3>
      <p className="text-white text-center text-xl">
        Practice reading and writing with fun activities!
      </p>
    </Card>
  );
};
