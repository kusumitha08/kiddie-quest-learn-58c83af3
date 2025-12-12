import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

export const MathTwoDigitSubtraction = () => {
  const generateProblem = () => {
    const larger = Math.floor(Math.random() * 90) + 10; // 10-99
    const smaller = Math.floor(Math.random() * larger); // 0 to larger
    return { larger, smaller };
  };

  const [problem, setProblem] = useState(generateProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = problem.larger - problem.smaller;

  const handleCheck = () => {
    const userNum = parseInt(userAnswer);
    const correct = userNum === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      toast.success("Amazing! You're a subtraction star! ⭐", {
        description: `${problem.larger} - ${problem.smaller} = ${correctAnswer}`,
      });
    } else {
      toast.error("Not quite! Keep trying! 💪", {
        description: `The answer is ${correctAnswer}`,
      });
    }
  };

  const handleNewProblem = () => {
    setProblem(generateProblem());
    setUserAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-math to-math/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Two-Digit Subtraction ➖</h3>
      
      <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm space-y-6">
        <div className="flex justify-center items-center gap-8 text-7xl font-black text-white">
          <span>{problem.larger}</span>
          <span className="text-5xl">−</span>
          <span>{problem.smaller}</span>
          <span className="text-5xl">=</span>
          <Input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-32 h-20 text-5xl font-bold text-center bg-white"
            placeholder="?"
            disabled={showResult}
          />
        </div>

        {showResult && (
          <div className={`flex items-center justify-center gap-4 text-2xl font-bold p-4 rounded-xl ${
            isCorrect ? 'bg-green-500/30 text-white' : 'bg-red-500/30 text-white'
          }`}>
            {isCorrect ? (
              <>
                <Check className="w-8 h-8" />
                <span>Excellent! 🌟</span>
              </>
            ) : (
              <>
                <X className="w-8 h-8" />
                <span>The answer is {correctAnswer}</span>
              </>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        {!showResult ? (
          <Button 
            onClick={handleCheck}
            size="lg"
            disabled={!userAnswer}
            className="text-2xl px-12 py-8 font-bold bg-white text-math hover:bg-white/90"
          >
            Check Answer ✓
          </Button>
        ) : (
          <Button 
            onClick={handleNewProblem}
            size="lg"
            className="text-2xl px-12 py-8 font-bold bg-white text-math hover:bg-white/90"
          >
            New Problem 🔄
          </Button>
        )}
      </div>
    </Card>
  );
};
