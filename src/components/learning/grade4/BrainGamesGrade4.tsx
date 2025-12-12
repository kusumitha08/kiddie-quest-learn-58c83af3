import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Brain, Puzzle, Grid3X3, Image, BookOpen } from 'lucide-react';

// Multi-step Puzzle
const MultiStepPuzzle = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const puzzle = {
    steps: [
      { question: 'Start with 10. Add 5.', answer: 15, options: [12, 15, 18, 20] },
      { question: 'Now multiply by 2.', answer: 30, options: [25, 28, 30, 35] },
      { question: 'Subtract 6.', answer: 24, options: [20, 22, 24, 26] },
      { question: 'Divide by 4.', answer: 6, options: [4, 5, 6, 8] },
    ]
  };

  const currentStep = puzzle.steps[step];
  const isComplete = step >= puzzle.steps.length;
  const allCorrect = answers.every((a, i) => a === puzzle.steps[i].answer);

  const handleAnswer = (ans: number) => {
    setAnswers([...answers, ans]);
    setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Multi-Step Puzzle</h3>
        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm">
          Step {Math.min(step + 1, puzzle.steps.length)}/{puzzle.steps.length}
        </span>
      </div>

      <div className="bg-white rounded-xl p-6">
        {!isComplete ? (
          <>
            <p className="text-xl font-bold text-center mb-6">{currentStep.question}</p>
            <div className="grid grid-cols-2 gap-3">
              {currentStep.options.map((opt) => (
                <Button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="text-2xl py-8"
                  variant="outline"
                >
                  {opt}
                </Button>
              ))}
            </div>
          </>
        ) : (
          <div className={`text-center p-6 rounded-xl ${allCorrect ? 'bg-green-100' : 'bg-orange-100'}`}>
            <p className="text-4xl mb-4">{allCorrect ? '🎉' : '🤔'}</p>
            <p className="text-xl font-bold">
              {allCorrect ? 'Perfect! All steps correct!' : `You got ${answers.filter((a, i) => a === puzzle.steps[i].answer).length}/${puzzle.steps.length} correct`}
            </p>
            <Button onClick={reset} className="mt-4">Try Again</Button>
          </div>
        )}
      </div>
    </Card>
  );
};

// Sudoku (4x4 beginner)
const SudokuGame = () => {
  const [grid, setGrid] = useState([
    [1, 0, 3, 0],
    [0, 3, 0, 2],
    [3, 0, 2, 0],
    [0, 2, 0, 3],
  ]);
  
  const solution = [
    [1, 4, 3, 2],
    [2, 3, 4, 1],
    [3, 1, 2, 4],
    [4, 2, 1, 3],
  ];

  const [selected, setSelected] = useState<{row: number, col: number} | null>(null);

  const handleCellClick = (row: number, col: number) => {
    if (solution[row][col] !== grid[row][col]) {
      setSelected({ row, col });
    }
  };

  const handleNumberClick = (num: number) => {
    if (selected) {
      const newGrid = [...grid];
      newGrid[selected.row][selected.col] = num;
      setGrid(newGrid);
      setSelected(null);
    }
  };

  const isComplete = JSON.stringify(grid) === JSON.stringify(solution);

  return (
    <Card className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="flex items-center gap-2 mb-4">
        <Grid3X3 className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Sudoku 4×4</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 text-sm">Fill in so each row, column has 1, 2, 3, 4</p>

        <div className="grid grid-cols-4 gap-1 max-w-48 mx-auto mb-4">
          {grid.map((row, rowIndex) => (
            row.map((cell, colIndex) => {
              const isOriginal = solution[rowIndex][colIndex] === cell && cell !== 0;
              const isSelected = selected?.row === rowIndex && selected?.col === colIndex;
              const isCorrect = cell === solution[rowIndex][colIndex] && cell !== 0;
              
              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  className={`w-12 h-12 text-xl font-bold rounded
                    ${isSelected ? 'bg-blue-200 ring-2 ring-blue-500' : 'bg-gray-100'}
                    ${isOriginal ? 'text-gray-800' : isCorrect ? 'text-green-600' : 'text-blue-600'}
                    ${(rowIndex < 2 && colIndex < 2) || (rowIndex >= 2 && colIndex >= 2) ? 'bg-gray-200' : ''}
                  `}
                >
                  {cell || ''}
                </button>
              );
            })
          ))}
        </div>

        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4].map((num) => (
            <Button
              key={num}
              onClick={() => handleNumberClick(num)}
              disabled={!selected}
              className="w-12 h-12 text-xl"
              variant="outline"
            >
              {num}
            </Button>
          ))}
        </div>

        {isComplete && (
          <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center">
            🎉 Sudoku Complete!
          </div>
        )}
      </div>
    </Card>
  );
};

// Pattern Recognition
const PatternRecognition = () => {
  const [currentPattern, setCurrentPattern] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);

  const patterns = [
    { sequence: ['🔵', '🔴', '🔵', '🔴', '🔵', '?'], answer: '🔴', options: ['🔵', '🔴', '🟢', '🟡'] },
    { sequence: ['1', '2', '4', '8', '?'], answer: '16', options: ['10', '12', '14', '16'] },
    { sequence: ['🌙', '⭐', '🌙', '⭐', '⭐', '🌙', '⭐', '⭐', '⭐', '?'], answer: '🌙', options: ['🌙', '⭐', '☀️', '🌸'] },
    { sequence: ['A', 'C', 'E', 'G', '?'], answer: 'I', options: ['H', 'I', 'J', 'K'] },
  ];

  const pattern = patterns[currentPattern];

  const handleSelect = (opt: string) => {
    setSelected(opt);
  };

  const nextPattern = () => {
    setCurrentPattern((currentPattern + 1) % patterns.length);
    setSelected(null);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-pink-500 to-rose-600">
      <div className="flex items-center gap-2 mb-4">
        <Puzzle className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Pattern Recognition</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <p className="text-center mb-4 font-bold">What comes next?</p>

        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {pattern.sequence.map((item, i) => (
            <span 
              key={i} 
              className={`text-3xl p-2 ${item === '?' ? 'bg-gray-200 rounded-lg w-12 h-12 flex items-center justify-center' : ''}`}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2">
          {pattern.options.map((opt) => (
            <Button
              key={opt}
              onClick={() => handleSelect(opt)}
              disabled={selected !== null}
              className={`text-2xl py-6 ${
                selected !== null
                  ? opt === pattern.answer
                    ? 'bg-green-500'
                    : selected === opt
                    ? 'bg-red-500'
                    : ''
                  : ''
              }`}
              variant="outline"
            >
              {opt}
            </Button>
          ))}
        </div>

        {selected && (
          <div className="mt-4">
            <p className={`text-center font-bold ${selected === pattern.answer ? 'text-green-600' : 'text-red-600'}`}>
              {selected === pattern.answer ? '🎉 Correct!' : `The answer is ${pattern.answer}`}
            </p>
            <Button onClick={nextPattern} className="w-full mt-2">
              Next Pattern →
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

// Memory Match (3-level)
const MemoryMatch = () => {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const levels = {
    1: ['🍎', '🍎', '🍊', '🍊', '🍋', '🍋', '🍇', '🍇'],
    2: ['🐶', '🐶', '🐱', '🐱', '🐰', '🐰', '🐻', '🐻', '🦊', '🦊', '🐼', '🐼'],
    3: ['🚗', '🚗', '🚌', '🚌', '🚁', '🚁', '🚀', '🚀', '🛸', '🛸', '🚂', '🚂', '🚢', '🚢', '✈️', '✈️'],
  };

  useEffect(() => {
    const levelCards = [...levels[level as keyof typeof levels]];
    for (let i = levelCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [levelCards[i], levelCards[j]] = [levelCards[j], levelCards[i]];
    }
    setCards(levelCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }, [level]);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched([...matched, ...newFlipped]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  const isWon = matched.length === cards.length;

  return (
    <Card className="p-6 bg-gradient-to-br from-amber-500 to-orange-600">
      <div className="flex items-center gap-2 mb-4">
        <Image className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Memory Match</h3>
        <span className="ml-auto bg-white/20 px-3 py-1 rounded-full text-white text-sm">
          Level {level} | Moves: {moves}
        </span>
      </div>

      <div className="bg-white rounded-xl p-4">
        <div 
          className={`grid gap-2 mx-auto ${
            level === 1 ? 'grid-cols-4 max-w-64' : 
            level === 2 ? 'grid-cols-4 max-w-72' : 
            'grid-cols-4 max-w-80'
          }`}
        >
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`aspect-square rounded-lg text-2xl flex items-center justify-center transition-all
                ${flipped.includes(index) || matched.includes(index) 
                  ? 'bg-white border-2 border-amber-400' 
                  : 'bg-amber-400 hover:bg-amber-300'
                }`}
            >
              {(flipped.includes(index) || matched.includes(index)) ? card : '?'}
            </button>
          ))}
        </div>

        {isWon && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            <p className="font-bold">🎉 Level {level} Complete in {moves} moves!</p>
            {level < 3 && (
              <Button onClick={() => setLevel(level + 1)} className="mt-2">
                Next Level →
              </Button>
            )}
          </div>
        )}

        <div className="flex gap-2 justify-center mt-4">
          {[1, 2, 3].map((l) => (
            <Button
              key={l}
              onClick={() => setLevel(l)}
              variant={level === l ? 'default' : 'outline'}
              size="sm"
            >
              Level {l}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

// Crossword Vocabulary
const CrosswordVocabulary = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const words = [
    { word: 'SUN', clue: '1. Across: Gives us light and heat', direction: 'across', row: 0, col: 0 },
    { word: 'CAT', clue: '2. Down: A pet that meows', direction: 'down', row: 0, col: 0 },
    { word: 'RAIN', clue: '3. Across: Water from clouds', direction: 'across', row: 2, col: 0 },
  ];

  const handleInput = (word: string, index: number, value: string) => {
    const key = `${word}-${index}`;
    setAnswers({ ...answers, [key]: value.toUpperCase() });
  };

  const checkWord = (word: typeof words[0]) => {
    return word.word.split('').every((letter, i) => 
      answers[`${word.word}-${i}`] === letter
    );
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-600">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Vocabulary Crossword</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="space-y-4">
          {words.map((word) => (
            <div key={word.word}>
              <p className="text-sm font-bold mb-2">{word.clue}</p>
              <div className="flex gap-1">
                {word.word.split('').map((letter, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={answers[`${word.word}-${i}`] || ''}
                    onChange={(e) => handleInput(word.word, i, e.target.value)}
                    className={`w-10 h-10 text-center text-xl font-bold border-2 rounded uppercase
                      ${checkWord(word) ? 'border-green-500 bg-green-100' : 'border-gray-300'}
                    `}
                  />
                ))}
                {checkWord(word) && <span className="ml-2 text-green-500 text-2xl">✓</span>}
              </div>
            </div>
          ))}
        </div>

        {words.every(w => checkWord(w)) && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            🎉 All words correct!
          </div>
        )}
      </div>
    </Card>
  );
};

export const BrainGamesGrade4 = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MultiStepPuzzle />
        <SudokuGame />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PatternRecognition />
        <MemoryMatch />
      </div>
      <CrosswordVocabulary />
    </div>
  );
};
