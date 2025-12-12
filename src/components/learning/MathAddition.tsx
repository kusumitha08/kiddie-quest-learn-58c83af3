import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Check, X, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export const MathAddition = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = num1 + num2;

  const handleCheck = () => {
    const answer = parseInt(userAnswer);
    const correct = answer === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      toast.success('Excellent! You got it right! 🎉');
    } else {
      toast.error('Not quite! Try again! 💪');
    }
  };

  const handleNewProblem = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setShowResult(false);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-math to-math/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-6 text-center">Addition Practice</h3>
      
      <div className="flex flex-col items-center gap-6">
        {/* Visual representation with animated circles */}
        <div className="flex gap-8 items-center">
          {/* First number */}
          <div className="flex flex-wrap gap-2 max-w-[200px]">
            {Array.from({ length: num1 }).map((_, i) => (
              <div
                key={`num1-${i}`}
                className="w-10 h-10 bg-yellow-400 rounded-full shadow-lg animate-scale-in border-4 border-yellow-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          {/* Plus sign */}
          <Plus className="w-12 h-12 text-white animate-pulse" />

          {/* Second number */}
          <div className="flex flex-wrap gap-2 max-w-[200px]">
            {Array.from({ length: num2 }).map((_, i) => (
              <div
                key={`num2-${i}`}
                className="w-10 h-10 bg-green-400 rounded-full shadow-lg animate-scale-in border-4 border-green-300"
                style={{ animationDelay: `${(num1 + i) * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Equation */}
        <div className="text-6xl font-bold text-white flex items-center gap-4">
          <span className="animate-bounce">{num1}</span>
          <Plus className="w-12 h-12" />
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>{num2}</span>
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
                <span>Correct! The answer is {correctAnswer}</span>
              </>
            ) : (
              <>
                <X className="w-8 h-8" />
                <span>Try again! The answer is {correctAnswer}</span>
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
