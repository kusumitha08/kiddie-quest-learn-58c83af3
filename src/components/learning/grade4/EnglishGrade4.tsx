import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, Star, Lightbulb, PenTool } from 'lucide-react';

// Paragraph Comprehension Quest
const ComprehensionQuest = () => {
  const [currentPassage, setCurrentPassage] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const passages = [
    {
      text: "The ancient Egyptians built massive pyramids as tombs for their pharaohs. These structures took thousands of workers many years to complete. The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World. Scientists still wonder how the Egyptians moved such heavy stones without modern machinery.",
      question: "What was the main purpose of the pyramids?",
      options: ["Homes for families", "Tombs for pharaohs", "Schools for children", "Markets for trading"],
      correct: 1,
      highlights: ["tombs for their pharaohs"]
    },
    {
      text: "Renewable energy comes from sources that never run out, like sunlight, wind, and water. Solar panels convert sunlight into electricity. Wind turbines spin to generate power. These clean energy sources help protect our environment by reducing pollution.",
      question: "Why are renewable energy sources important?",
      options: ["They are expensive", "They reduce pollution", "They run out quickly", "They make more noise"],
      correct: 1,
      highlights: ["reduce pollution"]
    }
  ];

  const passage = passages[currentPassage];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === passage.correct) {
      setScore(score + 1);
    }
  };

  const nextPassage = () => {
    setCurrentPassage((currentPassage + 1) % passages.length);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const highlightText = (text: string, highlights: string[]) => {
    let result = text;
    highlights.forEach(h => {
      result = result.replace(h, `<span class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">${h}</span>`);
    });
    return result;
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Reading Comprehension Quest</h3>
        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm">Score: {score}</span>
      </div>
      
      <div className="bg-white rounded-xl p-4 mb-4">
        <p 
          className="text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: showResult ? highlightText(passage.text, passage.highlights) : passage.text }}
        />
      </div>

      <div className="bg-white/10 rounded-xl p-4">
        <p className="text-white font-bold mb-3">{passage.question}</p>
        <div className="grid grid-cols-1 gap-2">
          {passage.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => !showResult && handleAnswer(index)}
              className={`justify-start text-left ${
                showResult
                  ? index === passage.correct
                    ? 'bg-green-500 hover:bg-green-500'
                    : selectedAnswer === index
                    ? 'bg-red-500 hover:bg-red-500'
                    : 'bg-white/20'
                  : 'bg-white/20 hover:bg-white/30'
              }`}
              disabled={showResult}
            >
              {option}
              {showResult && index === passage.correct && <CheckCircle className="w-4 h-4 ml-auto" />}
              {showResult && selectedAnswer === index && index !== passage.correct && <XCircle className="w-4 h-4 ml-auto" />}
            </Button>
          ))}
        </div>
        {showResult && (
          <Button onClick={nextPassage} className="w-full mt-4 bg-white text-blue-600 hover:bg-white/90">
            Next Passage →
          </Button>
        )}
      </div>
    </Card>
  );
};

// Story Builder
const StoryBuilder = () => {
  const [story, setStory] = useState({ character: '', setting: '', plot: '' });
  const [builtStory, setBuiltStory] = useState('');

  const characters = ['🦸 A brave hero', '🧙 A wise wizard', '🐉 A friendly dragon', '👸 A clever princess'];
  const settings = ['🏰 In a magical castle', '🌲 Deep in an enchanted forest', '🚀 On a distant planet', '🏝️ On a mysterious island'];
  const plots = ['finds a hidden treasure', 'saves a village from danger', 'discovers a secret power', 'makes an unlikely friend'];

  const buildStory = () => {
    if (story.character && story.setting && story.plot) {
      setBuiltStory(`${story.character} lived ${story.setting.toLowerCase()}. One day, they ${story.plot}. And that's how the greatest adventure began!`);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="flex items-center gap-2 mb-4">
        <PenTool className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Story Builder</h3>
      </div>

      <div className="space-y-4">
        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-white font-bold mb-2">Choose a Character:</p>
          <div className="flex flex-wrap gap-2">
            {characters.map((char) => (
              <Button
                key={char}
                onClick={() => setStory({ ...story, character: char })}
                className={`${story.character === char ? 'bg-white text-purple-600' : 'bg-white/20 text-white'}`}
              >
                {char}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-white font-bold mb-2">Choose a Setting:</p>
          <div className="flex flex-wrap gap-2">
            {settings.map((set) => (
              <Button
                key={set}
                onClick={() => setStory({ ...story, setting: set })}
                className={`${story.setting === set ? 'bg-white text-purple-600' : 'bg-white/20 text-white'}`}
              >
                {set}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-white font-bold mb-2">Choose a Plot:</p>
          <div className="flex flex-wrap gap-2">
            {plots.map((p) => (
              <Button
                key={p}
                onClick={() => setStory({ ...story, plot: p })}
                className={`${story.plot === p ? 'bg-white text-purple-600' : 'bg-white/20 text-white'}`}
              >
                {p}
              </Button>
            ))}
          </div>
        </div>

        <Button onClick={buildStory} className="w-full bg-white text-purple-600 hover:bg-white/90 font-bold">
          ✨ Build My Story!
        </Button>

        {builtStory && (
          <div className="bg-white rounded-xl p-4 mt-4">
            <p className="text-lg font-medium">{builtStory}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

// Vocabulary Challenge
const VocabularyChallenge = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const questions = [
    { sentence: "The _____ knight defended the kingdom bravely.", options: ['courageous', 'scared', 'tiny', 'sleepy'], correct: 0 },
    { sentence: "The scientist made an important _____.", options: ['mistake', 'discovery', 'mess', 'noise'], correct: 1 },
    { sentence: "The weather was _____, with dark clouds and rain.", options: ['sunny', 'bright', 'gloomy', 'warm'], correct: 2 },
    { sentence: "We need to _____ water to help the environment.", options: ['waste', 'ignore', 'conserve', 'forget'], correct: 2 },
  ];

  const q = questions[currentQ];

  const handleSelect = (index: number) => {
    setSelected(index);
    if (index === q.correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setCurrentQ((currentQ + 1) % questions.length);
      setSelected(null);
    }, 1500);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-green-500 to-teal-500">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Vocabulary Challenge</h3>
        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm">
          <Star className="w-4 h-4 inline mr-1" />{score}
        </span>
      </div>

      <div className="bg-white rounded-xl p-6 mb-4">
        <p className="text-xl text-center font-medium">{q.sentence}</p>
      </div>

      <p className="text-white text-center mb-3">Choose the best word:</p>
      <div className="grid grid-cols-2 gap-3">
        {q.options.map((opt, index) => (
          <Button
            key={index}
            onClick={() => selected === null && handleSelect(index)}
            className={`text-lg py-6 ${
              selected !== null
                ? index === q.correct
                  ? 'bg-green-400'
                  : selected === index
                  ? 'bg-red-400'
                  : 'bg-white/20'
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            {opt}
          </Button>
        ))}
      </div>
    </Card>
  );
};

// Complex Sentence Builder
const SentenceBuilder = () => {
  const [parts, setParts] = useState({ independent: '', dependent: '' });
  const [sentence, setSentence] = useState('');

  const independentClauses = [
    'The dog barked loudly',
    'She finished her homework',
    'The sun set behind the mountains',
    'We celebrated with cake'
  ];

  const dependentClauses = [
    'because he heard a noise',
    'before dinner time',
    'while we watched in awe',
    'since it was her birthday'
  ];

  const buildSentence = () => {
    if (parts.independent && parts.dependent) {
      setSentence(`${parts.independent} ${parts.dependent}.`);
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500">
      <div className="flex items-center gap-2 mb-4">
        <PenTool className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Complex Sentence Builder</h3>
      </div>

      <div className="space-y-4">
        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-white font-bold mb-2">Independent Clause (main idea):</p>
          <div className="flex flex-wrap gap-2">
            {independentClauses.map((clause) => (
              <Button
                key={clause}
                onClick={() => setParts({ ...parts, independent: clause })}
                size="sm"
                className={`${parts.independent === clause ? 'bg-white text-orange-600' : 'bg-white/20 text-white'}`}
              >
                {clause}
              </Button>
            ))}
          </div>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <p className="text-white font-bold mb-2">Dependent Clause (adds detail):</p>
          <div className="flex flex-wrap gap-2">
            {dependentClauses.map((clause) => (
              <Button
                key={clause}
                onClick={() => setParts({ ...parts, dependent: clause })}
                size="sm"
                className={`${parts.dependent === clause ? 'bg-white text-orange-600' : 'bg-white/20 text-white'}`}
              >
                {clause}
              </Button>
            ))}
          </div>
        </div>

        <Button onClick={buildSentence} className="w-full bg-white text-orange-600 hover:bg-white/90 font-bold">
          Build Sentence!
        </Button>

        {sentence && (
          <div className="bg-white rounded-xl p-4">
            <p className="text-lg font-medium text-center">✨ {sentence}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export const EnglishGrade4 = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComprehensionQuest />
        <VocabularyChallenge />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StoryBuilder />
        <SentenceBuilder />
      </div>
    </div>
  );
};
