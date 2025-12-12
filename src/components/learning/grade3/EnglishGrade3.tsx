import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export const EnglishGrade3 = () => {
  const [activeActivity, setActiveActivity] = useState<string>('speech');

  const activities = [
    { id: 'speech', label: '📝 Parts of Speech' },
    { id: 'reading', label: '📖 Reading Quest' },
    { id: 'prefix', label: '🔤 Prefix/Suffix' },
    { id: 'synonym', label: '🔄 Synonym Match' },
    { id: 'mistake', label: '🔍 Spot the Mistake' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {activities.map(activity => (
          <Button
            key={activity.id}
            onClick={() => setActiveActivity(activity.id)}
            variant={activeActivity === activity.id ? "default" : "outline"}
          >
            {activity.label}
          </Button>
        ))}
      </div>

      {activeActivity === 'speech' && <PartsOfSpeech />}
      {activeActivity === 'reading' && <ReadingQuest />}
      {activeActivity === 'prefix' && <PrefixSuffix />}
      {activeActivity === 'synonym' && <SynonymMatch />}
      {activeActivity === 'mistake' && <SpotMistake />}
    </div>
  );
};

const PartsOfSpeech = () => {
  const [sorted, setSorted] = useState<Record<string, string[]>>({ noun: [], verb: [], adjective: [] });
  
  const words = [
    { word: 'run', type: 'verb' },
    { word: 'happy', type: 'adjective' },
    { word: 'cat', type: 'noun' },
    { word: 'jump', type: 'verb' },
    { word: 'beautiful', type: 'adjective' },
    { word: 'book', type: 'noun' },
    { word: 'sing', type: 'verb' },
    { word: 'fast', type: 'adjective' }
  ];

  const addWord = (word: string, type: string) => {
    const wordObj = words.find(w => w.word === word);
    if (wordObj?.type === type) {
      setSorted({ ...sorted, [type]: [...sorted[type], word] });
      toast.success('✅ Correct!');
    } else {
      toast.error('❌ Try again!');
    }
  };

  const availableWords = words.filter(w => 
    !Object.values(sorted).flat().includes(w.word)
  );

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">📝 Sort Parts of Speech</h3>
      
      <div className="flex gap-2 flex-wrap justify-center">
        {availableWords.map((w, idx) => (
          <div key={idx} className="relative group">
            <div className="px-4 py-2 bg-secondary rounded-lg font-semibold">
              {w.word}
            </div>
            <div className="absolute top-full mt-1 hidden group-hover:flex gap-1 z-10">
              <Button size="sm" onClick={() => addWord(w.word, 'noun')}>Noun</Button>
              <Button size="sm" onClick={() => addWord(w.word, 'verb')}>Verb</Button>
              <Button size="sm" onClick={() => addWord(w.word, 'adjective')}>Adj</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 bg-blue-50 dark:bg-blue-950">
          <h4 className="font-bold text-center mb-2 text-blue-700 dark:text-blue-300">
            Nouns (Person/Place/Thing)
          </h4>
          <div className="space-y-1">
            {sorted.noun.map((word, idx) => (
              <div key={idx} className="px-3 py-1 bg-background rounded text-center">
                {word}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4 bg-green-50 dark:bg-green-950">
          <h4 className="font-bold text-center mb-2 text-green-700 dark:text-green-300">
            Verbs (Action)
          </h4>
          <div className="space-y-1">
            {sorted.verb.map((word, idx) => (
              <div key={idx} className="px-3 py-1 bg-background rounded text-center">
                {word}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4 bg-purple-50 dark:bg-purple-950">
          <h4 className="font-bold text-center mb-2 text-purple-700 dark:text-purple-300">
            Adjectives (Describing)
          </h4>
          <div className="space-y-1">
            {sorted.adjective.map((word, idx) => (
              <div key={idx} className="px-3 py-1 bg-background rounded text-center">
                {word}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Card>
  );
};

const ReadingQuest = () => {
  const [selected, setSelected] = useState<number | null>(null);
  
  const story = "The brave knight rode through the dark forest. He was searching for a magical crystal that could save his kingdom. Suddenly, he heard a strange noise behind the trees.";
  
  const questions = [
    { q: "Who is the main character?", options: ["A princess", "A knight", "A wizard"], answer: 1 },
    { q: "What is he searching for?", options: ["A sword", "A crystal", "A horse"], answer: 1 },
    { q: "Where is he riding?", options: ["In a forest", "On a mountain", "In a castle"], answer: 0 }
  ];

  const [currentQ, setCurrentQ] = useState(0);

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">📖 Reading Quest</h3>
      
      <Card className="p-4 bg-accent/20">
        <p className="text-sm leading-relaxed">{story}</p>
      </Card>

      <div className="space-y-3">
        <p className="font-semibold">{questions[currentQ].q}</p>
        <div className="space-y-2">
          {questions[currentQ].options.map((option, idx) => (
            <Button
              key={idx}
              onClick={() => {
                if (idx === questions[currentQ].answer) {
                  toast.success('🎉 Correct!');
                  if (currentQ < questions.length - 1) {
                    setTimeout(() => setCurrentQ(currentQ + 1), 1000);
                  }
                } else {
                  toast.error('Try again!');
                }
              }}
              variant="outline"
              className="w-full justify-start"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

const PrefixSuffix = () => {
  const [built, setBuilt] = useState({ prefix: '', root: '', suffix: '' });
  
  const prefixes = ['un-', 're-', 'pre-', 'dis-'];
  const roots = ['happy', 'do', 'view', 'like'];
  const suffixes = ['-ed', '-ing', '-ness', '-ful'];

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🔤 Build Words with Prefix/Suffix</h3>
      
      <div className="flex justify-center gap-2 items-center">
        <div className="w-20 h-16 border-2 border-dashed rounded flex items-center justify-center font-bold text-primary">
          {built.prefix || '?'}
        </div>
        <div className="text-2xl">+</div>
        <div className="w-24 h-16 border-2 border-primary rounded flex items-center justify-center font-bold">
          {built.root || 'root'}
        </div>
        <div className="text-2xl">+</div>
        <div className="w-20 h-16 border-2 border-dashed rounded flex items-center justify-center font-bold text-secondary">
          {built.suffix || '?'}
        </div>
      </div>

      {built.root && (built.prefix || built.suffix) && (
        <div className="text-center text-2xl font-bold text-primary">
          = {built.prefix}{built.root}{built.suffix}
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-semibold text-center mb-2">Prefixes</p>
          <div className="space-y-1">
            {prefixes.map((p, idx) => (
              <Button
                key={idx}
                onClick={() => setBuilt({ ...built, prefix: p })}
                variant={built.prefix === p ? 'default' : 'outline'}
                className="w-full"
              >
                {p}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-center mb-2">Root Words</p>
          <div className="space-y-1">
            {roots.map((r, idx) => (
              <Button
                key={idx}
                onClick={() => setBuilt({ ...built, root: r })}
                variant={built.root === r ? 'default' : 'outline'}
                className="w-full"
              >
                {r}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-center mb-2">Suffixes</p>
          <div className="space-y-1">
            {suffixes.map((s, idx) => (
              <Button
                key={idx}
                onClick={() => setBuilt({ ...built, suffix: s })}
                variant={built.suffix === s ? 'default' : 'outline'}
                className="w-full"
              >
                {s}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Button onClick={() => setBuilt({ prefix: '', root: '', suffix: '' })} variant="outline" className="w-full">
        Clear
      </Button>
    </Card>
  );
};

const SynonymMatch = () => {
  const pairs = [
    { word: 'happy', synonym: 'joyful', emoji: '😊' },
    { word: 'big', synonym: 'large', emoji: '🐘' },
    { word: 'fast', synonym: 'quick', emoji: '🏃' },
    { word: 'smart', synonym: 'clever', emoji: '🧠' }
  ];

  const [selected, setSelected] = useState<{ word?: string; synonym?: string }>({});

  const checkMatch = () => {
    const match = pairs.find(p => p.word === selected.word);
    if (match && match.synonym === selected.synonym) {
      toast.success(`🎉 Perfect! "${match.word}" and "${match.synonym}" mean the same!`);
      setSelected({});
    } else {
      toast.error('Not a match! Try again.');
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🔄 Match Synonyms</h3>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <p className="font-semibold text-center">Words</p>
          <div className="space-y-2">
            {pairs.map((pair, idx) => (
              <Button
                key={idx}
                onClick={() => setSelected({ ...selected, word: pair.word })}
                variant={selected.word === pair.word ? "default" : "outline"}
                className="w-full text-lg"
              >
                {pair.emoji} {pair.word}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-center">Synonyms</p>
          <div className="space-y-2">
            {pairs.map((pair, idx) => (
              <Button
                key={idx}
                onClick={() => setSelected({ ...selected, synonym: pair.synonym })}
                variant={selected.synonym === pair.synonym ? "default" : "outline"}
                className="w-full text-lg"
              >
                {pair.synonym}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {selected.word && selected.synonym && (
        <Button onClick={checkMatch} className="w-full">
          Check Match
        </Button>
      )}
    </Card>
  );
};

const SpotMistake = () => {
  const sentences = [
    { wrong: "She go to school.", correct: "She goes to school.", mistake: "go → goes" },
    { wrong: "They was happy.", correct: "They were happy.", mistake: "was → were" },
    { wrong: "I eated pizza.", correct: "I ate pizza.", mistake: "eated → ate" }
  ];

  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);

  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-center">🔍 Spot the Mistake!</h3>
      
      <Card className="p-4 bg-red-50 dark:bg-red-950">
        <p className="text-center font-semibold text-red-700 dark:text-red-300">
          ❌ {sentences[current].wrong}
        </p>
      </Card>

      <Button 
        onClick={() => setRevealed(!revealed)} 
        variant="outline"
        className="w-full"
      >
        {revealed ? '🙈 Hide' : '👁️ Show'} Correction
      </Button>

      {revealed && (
        <Card className="p-4 bg-green-50 dark:bg-green-950 space-y-2">
          <p className="text-center font-semibold text-green-700 dark:text-green-300">
            ✅ {sentences[current].correct}
          </p>
          <p className="text-center text-sm">
            Fix: {sentences[current].mistake}
          </p>
        </Card>
      )}

      <Button 
        onClick={() => {
          setCurrent((current + 1) % sentences.length);
          setRevealed(false);
        }}
        className="w-full"
      >
        Next Sentence ➡️
      </Button>
    </Card>
  );
};
