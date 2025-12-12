import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Minus, Check, X, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export const MathSubtraction = () => {
  const generateProblem = () => {
    const larger = Math.floor(Math.random() * 15) + 5;
    const smaller = Math.floor(Math.random() * larger);
    return { larger, smaller };
  };

  const [problem, setProblem] = useState(generateProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = problem.larger - problem.smaller;

  const handleCheck = () => {
    const answer = parseInt(userAnswer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      toast.success('Amazing! You got it right! 🌟');
    } else {
      toast.error('Not quite! Give it another try! 💪');
    }
  };

  const handleNewProblem = () => {
    setProblem(generateProblem());
    setUserAnswer('');
    setShowResult(false);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-math to-math/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-6 text-center">Subtraction Practice</h3>
      
      <div className="flex flex-col items-center gap-6">
        {/* Visual representation */}
        <div className="flex flex-col gap-4 items-center">
          {/* Starting amount */}
          <div className="flex flex-wrap gap-2 max-w-[400px] justify-center">
            {Array.from({ length: problem.larger }).map((_, i) => (
              <div
                key={`start-${i}`}
                className={`w-10 h-10 rounded-full shadow-lg border-4 transition-all duration-500 ${
                  showResult && i >= correctAnswer
                    ? 'bg-red-400 border-red-300 opacity-30 line-through'
                    : 'bg-blue-400 border-blue-300 animate-scale-in'
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>

          {/* Minus sign */}
          <div className="flex items-center gap-3 text-white text-2xl font-bold">
            <Minus className="w-8 h-8 animate-pulse" />
            <span>Take away {problem.smaller}</span>
          </div>
        </div>

        {/* Equation */}
        <div className="text-6xl font-bold text-white flex items-center gap-4">
          <span className="animate-bounce">{problem.larger}</span>
          <Minus className="w-12 h-12" />
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>{problem.smaller}</span>
          <span>=</span>
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-24 text-center bg-white text-primary rounded-xl border-4 border-white shadow-lg"
            placeholder="?"
            disabled={showResult}
          />
        </div>

        {/* Result feedback */}
        {showResult && (
          <div className={`flex items-center gap-3 text-2xl font-bold animate-scale-in ${
            isCorrect ? 'text-success' : 'text-destructive'
          }`}>
            {isCorrect ? (
              <>
                <Check className="w-8 h-8" />
                <span>Perfect! The answer is {correctAnswer}</span>
              </>
            ) : (
              <>
                <X className="w-8 h-8" />
                <span>Not quite! The answer is {correctAnswer}</span>
              </>
            )}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-4">
          {!showResult ? (
            <Button
              onClick={handleCheck}
              disabled={!userAnswer}
              size="lg"
              className="font-bold text-xl bg-white text-primary hover:bg-white/90"
            >
              <Check className="w-5 h-5 mr-2" />
              Check Answer
            </Button>
          ) : (
            <Button
              onClick={handleNewProblem}
              size="lg"
              className="font-bold text-xl bg-white text-primary hover:bg-white/90"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              New Problem
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
