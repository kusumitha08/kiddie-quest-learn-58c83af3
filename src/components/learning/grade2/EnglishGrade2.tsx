import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, Check, X } from 'lucide-react';
import { toast } from 'sonner';

export const EnglishGrade2 = () => {
  const [activeActivity, setActiveActivity] = useState<string>('cvc');

  const activities = [
    { id: 'cvc', label: '🔤 Word Builder', icon: '🔤' },
    { id: 'sound', label: '🎵 Sound Match', icon: '🎵' },
    { id: 'sentence', label: '📝 Sentence Maker', icon: '📝' },
    { id: 'balloon', label: '🎈 Balloon Pop', icon: '🎈' },
    { id: 'rhyme', label: '🎶 Rhyming Match', icon: '🎶' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {activities.map(activity => (
          <Button
            key={activity.id}
            onClick={() => setActiveActivity(activity.id)}
            variant={activeActivity === activity.id ? "default" : "outline"}
            className="gap-2"
          >
            <span>{activity.icon}</span>
            {activity.label}
          </Button>
        ))}
      </div>

      {activeActivity === 'cvc' && <CVCWordBuilder />}
      {activeActivity === 'sound' && <SoundMatch />}
      {activeActivity === 'sentence' && <SentenceMaker />}
      {activeActivity === 'balloon' && <BalloonPop />}
      {activeActivity === 'rhyme' && <RhymingMatch />}
    </div>
  );
};

const CVCWordBuilder = () => {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const letters = ['c', 'a', 't', 'b', 'h', 'p', 'o', 'd', 'g', 'i', 'n', 'r', 'u', 's', 'e'];
  const words = ['cat', 'bat', 'hat', 'pat', 'dog', 'pig', 'sun', 'run', 'bed', 'red'];

  const checkWord = () => {
    const word = selectedLetters.join('');
    if (words.includes(word)) {
      toast.success(`🎉 Great job! "${word}" is correct!`);
      setSelectedLetters([]);
    } else {
      toast.error('Try again! Build a real word.');
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🔤 Build CVC Words</h3>
      
      <div className="flex justify-center gap-2 min-h-[60px] items-center">
        {selectedLetters.map((letter, idx) => (
          <div key={idx} className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-2xl font-bold">
            {letter}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-2">
        {letters.map((letter, idx) => (
          <Button
            key={idx}
            onClick={() => setSelectedLetters([...selectedLetters, letter])}
            variant="outline"
            className="h-12 text-xl font-bold"
          >
            {letter}
          </Button>
        ))}
      </div>

      <div className="flex gap-2 justify-center">
        <Button onClick={checkWord} className="gap-2">
          <Check className="w-4 h-4" />
          Check Word
        </Button>
        <Button onClick={() => setSelectedLetters([])} variant="outline" className="gap-2">
          <X className="w-4 h-4" />
          Clear
        </Button>
      </div>
    </Card>
  );
};

const SoundMatch = () => {
  const [selected, setSelected] = useState<{ picture?: string; sound?: string }>({});
  
  const matches = [
    { picture: '🐑', sound: 'sh', word: 'sheep' },
    { picture: '🧀', sound: 'ch', word: 'cheese' },
    { picture: '👍', sound: 'th', word: 'thumb' },
    { picture: '🐋', sound: 'wh', word: 'whale' }
  ];

  const checkMatch = () => {
    const match = matches.find(m => m.picture === selected.picture);
    if (match && match.sound === selected.sound) {
      toast.success(`🎉 Perfect! ${match.picture} = "${match.sound}" sound`);
      setSelected({});
    } else {
      toast.error('Try again!');
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🎵 Match Picture to Sound</h3>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <p className="font-semibold text-center">Pictures</p>
          <div className="grid grid-cols-2 gap-2">
            {matches.map((match) => (
              <Button
                key={match.picture}
                onClick={() => setSelected({ ...selected, picture: match.picture })}
                variant={selected.picture === match.picture ? "default" : "outline"}
                className="h-20 text-4xl"
              >
                {match.picture}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-center">Sounds</p>
          <div className="grid grid-cols-2 gap-2">
            {matches.map((match) => (
              <Button
                key={match.sound}
                onClick={() => setSelected({ ...selected, sound: match.sound })}
                variant={selected.sound === match.sound ? "default" : "outline"}
                className="h-20 text-2xl font-bold"
              >
                {match.sound}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {selected.picture && selected.sound && (
        <Button onClick={checkMatch} className="w-full">
          Check Match
        </Button>
      )}
    </Card>
  );
};

const SentenceMaker = () => {
  const [arranged, setArranged] = useState<string[]>([]);
  const words = ['The', 'cat', 'is', 'big'];
  const correctOrder = 'The cat is big';

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">📝 Make a Sentence</h3>
      
      <div className="min-h-[60px] p-4 border-2 border-dashed rounded-lg flex gap-2 flex-wrap">
        {arranged.map((word, idx) => (
          <div key={idx} className="px-4 py-2 bg-primary text-primary-foreground rounded font-semibold">
            {word}
          </div>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap justify-center">
        {words.filter(w => !arranged.includes(w)).map((word, idx) => (
          <Button
            key={idx}
            onClick={() => setArranged([...arranged, word])}
            variant="outline"
            className="text-lg"
          >
            {word}
          </Button>
        ))}
      </div>

      <div className="flex gap-2">
        <Button 
          onClick={() => {
            if (arranged.join(' ') === correctOrder) {
              toast.success('🎉 Perfect sentence!');
            } else {
              toast.error('Try again!');
            }
          }}
          className="flex-1"
        >
          Check
        </Button>
        <Button onClick={() => setArranged([])} variant="outline">
          Clear
        </Button>
      </div>
    </Card>
  );
};

const BalloonPop = () => {
  const [score, setScore] = useState(0);
  const sightWords = ['the', 'and', 'is', 'to', 'you', 'of', 'in', 'it', 'he', 'was'];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🎈 Pop the Sight Words!</h3>
      <p className="text-center text-2xl font-bold">Score: {score}</p>
      
      <div className="grid grid-cols-5 gap-3">
        {sightWords.map((word, idx) => (
          <Button
            key={idx}
            onClick={() => {
              setScore(score + 1);
              toast.success(`Pop! "${word}"`);
            }}
            className="h-16 text-lg font-bold relative"
            variant="outline"
          >
            🎈
            <span className="absolute bottom-1 text-xs">{word}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

const RhymingMatch = () => {
  const pairs = [
    { word1: 'cat', word2: 'hat', emoji: '🐱🎩' },
    { word1: 'dog', word2: 'log', emoji: '🐕🪵' },
    { word1: 'sun', word2: 'fun', emoji: '☀️🎉' },
    { word1: 'bee', word2: 'tree', emoji: '🐝🌳' }
  ];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🎶 Match Rhyming Words</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {pairs.map((pair, idx) => (
          <Card key={idx} className="p-4 text-center space-y-2 hover:bg-accent cursor-pointer transition-colors">
            <div className="text-3xl">{pair.emoji}</div>
            <div className="font-bold text-lg">{pair.word1} - {pair.word2}</div>
          </Card>
        ))}
      </div>
    </Card>
  );
};
