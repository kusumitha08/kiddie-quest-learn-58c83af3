import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Calculator, CheckCircle, Grid, LayoutGrid, Target, BarChart3 } from 'lucide-react';

// Long Multiplication Visualizer
const LongMultiplicationVisualizer = () => {
  const [num1] = useState(23);
  const [num2] = useState(14);
  const [step, setStep] = useState(0);

  const steps = [
    { label: 'Step 1: Multiply by ones digit', calc: `${num1} × ${num2 % 10} = ${num1 * (num2 % 10)}`, partial: num1 * (num2 % 10) },
    { label: 'Step 2: Multiply by tens digit', calc: `${num1} × ${Math.floor(num2 / 10)} = ${num1 * Math.floor(num2 / 10)} (shift left)`, partial: num1 * Math.floor(num2 / 10) * 10 },
    { label: 'Step 3: Add partial products', calc: `${num1 * (num2 % 10)} + ${num1 * Math.floor(num2 / 10) * 10} = ${num1 * num2}`, partial: num1 * num2 }
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Long Multiplication</h3>
      </div>

      <div className="bg-white rounded-xl p-6 text-center">
        <div className="text-4xl font-bold mb-4">
          {num1} × {num2}
        </div>
        
        <div className="border-t-2 border-gray-300 pt-4 space-y-2">
          {steps.slice(0, step + 1).map((s, i) => (
            <div key={i} className={`p-2 rounded ${i === step ? 'bg-blue-100' : ''}`}>
              <p className="text-sm text-gray-600">{s.label}</p>
              <p className="font-bold text-lg">{s.calc}</p>
            </div>
          ))}
        </div>

        {step === 2 && (
          <div className="mt-4 p-4 bg-green-100 rounded-xl">
            <p className="text-2xl font-bold text-green-600">Answer: {num1 * num2} ✓</p>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <Button 
          onClick={() => setStep(Math.max(0, step - 1))} 
          className="flex-1 bg-white/20"
          disabled={step === 0}
        >
          ← Previous
        </Button>
        <Button 
          onClick={() => setStep(Math.min(2, step + 1))} 
          className="flex-1 bg-white text-blue-600"
          disabled={step === 2}
        >
          Next Step →
        </Button>
      </div>
    </Card>
  );
};

// Division with Remainders
const DivisionWithRemainders = () => {
  const [problem, setProblem] = useState({ dividend: 17, divisor: 5 });
  const [userAnswer, setUserAnswer] = useState({ quotient: '', remainder: '' });
  const [showResult, setShowResult] = useState(false);

  const correctQuotient = Math.floor(problem.dividend / problem.divisor);
  const correctRemainder = problem.dividend % problem.divisor;

  const checkAnswer = () => {
    setShowResult(true);
  };

  const newProblem = () => {
    const divisor = Math.floor(Math.random() * 6) + 2;
    const dividend = Math.floor(Math.random() * 30) + 10;
    setProblem({ dividend, divisor });
    setUserAnswer({ quotient: '', remainder: '' });
    setShowResult(false);
  };

  const groups = Array(correctQuotient).fill(null);
  const leftover = Array(correctRemainder).fill(null);

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="flex items-center gap-2 mb-4">
        <Grid className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Division with Remainders</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="text-3xl font-bold text-center mb-4">
          {problem.dividend} ÷ {problem.divisor} = ?
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {groups.map((_, i) => (
            <div key={i} className="bg-purple-100 rounded-lg p-2 flex gap-1">
              {Array(problem.divisor).fill(null).map((_, j) => (
                <span key={j} className="text-xl">🔵</span>
              ))}
            </div>
          ))}
          {leftover.length > 0 && (
            <div className="bg-orange-100 rounded-lg p-2 flex gap-1">
              {leftover.map((_, i) => (
                <span key={i} className="text-xl">🟠</span>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center mb-4">
          <div>
            <label className="text-sm font-bold">Quotient:</label>
            <input
              type="number"
              value={userAnswer.quotient}
              onChange={(e) => setUserAnswer({ ...userAnswer, quotient: e.target.value })}
              className="w-16 border-2 rounded p-2 text-center text-xl ml-2"
              disabled={showResult}
            />
          </div>
          <div>
            <label className="text-sm font-bold">Remainder:</label>
            <input
              type="number"
              value={userAnswer.remainder}
              onChange={(e) => setUserAnswer({ ...userAnswer, remainder: e.target.value })}
              className="w-16 border-2 rounded p-2 text-center text-xl ml-2"
              disabled={showResult}
            />
          </div>
        </div>

        {showResult && (
          <div className={`p-3 rounded-lg text-center ${
            parseInt(userAnswer.quotient) === correctQuotient && parseInt(userAnswer.remainder) === correctRemainder
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {parseInt(userAnswer.quotient) === correctQuotient && parseInt(userAnswer.remainder) === correctRemainder
              ? '🎉 Correct!'
              : `The answer is ${correctQuotient} R ${correctRemainder}`}
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4">
        <Button onClick={checkAnswer} className="flex-1 bg-white text-purple-600" disabled={showResult}>
          Check Answer
        </Button>
        <Button onClick={newProblem} className="flex-1 bg-white/20">
          New Problem
        </Button>
      </div>
    </Card>
  );
};

// Fraction Comparison Scales
const FractionScales = () => {
  const [fractions] = useState([
    { num: 3, den: 4, value: 0.75 },
    { num: 2, den: 3, value: 0.667 }
  ]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const correct = fractions[0].value > fractions[1].value ? 'greater' : fractions[0].value < fractions[1].value ? 'less' : 'equal';

  const handleSelect = (answer: string) => {
    setSelected(answer);
    setShowResult(true);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-green-500 to-teal-500">
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Fraction Comparison</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="flex justify-center items-center gap-8 mb-6">
          <div className="text-center">
            <div className="text-4xl font-bold">
              <span className="border-b-4 border-black">{fractions[0].num}</span>
              <br />
              <span>{fractions[0].den}</span>
            </div>
            <div className="mt-2 w-24 h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500" 
                style={{ width: `${fractions[0].value * 100}%` }}
              />
            </div>
          </div>

          <span className="text-4xl">?</span>

          <div className="text-center">
            <div className="text-4xl font-bold">
              <span className="border-b-4 border-black">{fractions[1].num}</span>
              <br />
              <span>{fractions[1].den}</span>
            </div>
            <div className="mt-2 w-24 h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500" 
                style={{ width: `${fractions[1].value * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          {['greater', 'less', 'equal'].map((opt) => (
            <Button
              key={opt}
              onClick={() => !showResult && handleSelect(opt)}
              className={`${
                showResult
                  ? opt === correct
                    ? 'bg-green-500'
                    : selected === opt
                    ? 'bg-red-500'
                    : 'bg-gray-200'
                  : 'bg-gray-100 hover:bg-gray-200'
              } text-black`}
            >
              {opt === 'greater' ? '>' : opt === 'less' ? '<' : '='}
            </Button>
          ))}
        </div>

        {showResult && (
          <p className={`text-center mt-4 font-bold ${selected === correct ? 'text-green-600' : 'text-red-600'}`}>
            {selected === correct ? '🎉 Correct!' : `The answer is ${correct === 'greater' ? '>' : correct === 'less' ? '<' : '='}`}
          </p>
        )}
      </div>
    </Card>
  );
};

// Perimeter & Area Tile Builder
const PerimeterAreaBuilder = () => {
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(3);

  const area = width * height;
  const perimeter = 2 * (width + height);

  return (
    <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500">
      <div className="flex items-center gap-2 mb-4">
        <LayoutGrid className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Perimeter & Area Builder</h3>
      </div>

      <div className="bg-white rounded-xl p-6">
        <div className="flex gap-4 mb-4">
          <div>
            <label className="text-sm font-bold">Width:</label>
            <input
              type="range"
              min="2"
              max="8"
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="font-bold">{width}</span>
          </div>
          <div>
            <label className="text-sm font-bold">Height:</label>
            <input
              type="range"
              min="2"
              max="6"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="font-bold">{height}</span>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div 
            className="grid gap-1 p-2 bg-orange-100 rounded-lg border-4 border-orange-500"
            style={{ gridTemplateColumns: `repeat(${width}, 1fr)` }}
          >
            {Array(area).fill(null).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-orange-400 rounded" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-blue-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Area (inside)</p>
            <p className="text-2xl font-bold text-blue-600">{area} squares</p>
            <p className="text-xs text-gray-500">{width} × {height} = {area}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Perimeter (outside)</p>
            <p className="text-2xl font-bold text-green-600">{perimeter} units</p>
            <p className="text-xs text-gray-500">2×({width}+{height}) = {perimeter}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Coordinate Grid Game
const CoordinateGrid = () => {
  const [points, setPoints] = useState<{x: number, y: number}[]>([]);
  const [target] = useState({ x: 4, y: 3 });
  const [found, setFound] = useState(false);

  const handleClick = (x: number, y: number) => {
    if (!found) {
      setPoints([...points, { x, y }]);
      if (x === target.x && y === target.y) {
        setFound(true);
      }
    }
  };

  const reset = () => {
    setPoints([]);
    setFound(false);
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-cyan-500 to-blue-500">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="w-6 h-6 text-white" />
        <h3 className="text-xl font-bold text-white">Coordinate Grid</h3>
      </div>

      <div className="bg-white rounded-xl p-4">
        <p className="text-center mb-2 font-bold">Find the treasure at ({target.x}, {target.y})!</p>
        
        <div className="relative overflow-x-auto">
          <div className="grid gap-0 border border-gray-300 inline-block">
            {Array(6).fill(null).map((_, rowIndex) => (
              <div key={rowIndex} className="flex">
                <div className="w-6 h-8 flex items-center justify-center text-xs font-bold bg-gray-100">
                  {5 - rowIndex}
                </div>
                {Array(6).fill(null).map((_, colIndex) => {
                  const isTarget = colIndex === target.x && (5 - rowIndex) === target.y;
                  const isClicked = points.some(p => p.x === colIndex && p.y === (5 - rowIndex));
                  return (
                    <button
                      key={colIndex}
                      onClick={() => handleClick(colIndex, 5 - rowIndex)}
                      className={`w-8 h-8 border border-gray-200 text-lg
                        ${isTarget && found ? 'bg-yellow-300' : isClicked ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
                    >
                      {isTarget && found ? '💎' : isClicked && !isTarget ? '❌' : ''}
                    </button>
                  );
                })}
              </div>
            ))}
            <div className="flex">
              <div className="w-6 h-6" />
              {Array(6).fill(null).map((_, i) => (
                <div key={i} className="w-8 h-6 flex items-center justify-center text-xs font-bold bg-gray-100">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {found && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-bold text-lg">🎉 You found the treasure!</p>
            <Button onClick={reset} className="mt-2">Play Again</Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export const MathGrade4Interactive = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LongMultiplicationVisualizer />
        <DivisionWithRemainders />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FractionScales />
        <PerimeterAreaBuilder />
      </div>
      <CoordinateGrid />
    </div>
  );
};
