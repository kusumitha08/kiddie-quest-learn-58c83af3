import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

export const MathSingleDigitMultiplication = () => {
  const generateProblem = () => {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1-9
    const num2 = Math.floor(Math.random() * 9) + 1; // 1-9
    return { num1, num2 };
  };

  const [problem, setProblem] = useState(generateProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = problem.num1 * problem.num2;

  const handleCheck = () => {
    const userNum = parseInt(userAnswer);
    const correct = userNum === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      toast.success("Wonderful! Multiplication master! 🎯", {
        description: `${problem.num1} × ${problem.num2} = ${correctAnswer}`,
      });
    } else {
      toast.error("Keep practicing! You'll get it! 💪", {
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

  // Visual representation of multiplication groups
  const renderGroups = () => {
    const groups = [];
    for (let i = 0; i < problem.num1; i++) {
      const items = [];
      for (let j = 0; j < problem.num2; j++) {
        items.push('⭐');
      }
      groups.push(
        <div key={i} className="flex gap-1">
          {items}
        </div>
      );
    }
    return groups;
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-math to-math/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Multiplication Practice ✖️</h3>
      
      <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm space-y-6">
        {/* Visual groups */}
        <div className="flex flex-col items-center gap-2 text-3xl mb-6">
          {renderGroups()}
          <p className="text-white font-bold text-xl mt-2">
            {problem.num1} groups of {problem.num2} stars
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 text-7xl font-black text-white">
          <span>{problem.num1}</span>
          <span className="text-5xl">×</span>
          <span>{problem.num2}</span>
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
                <span>Perfect! 🎉</span>
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
