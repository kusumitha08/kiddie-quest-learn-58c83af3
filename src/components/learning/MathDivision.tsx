import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { toast } from 'sonner';

export const MathDivision = () => {
  const generateProblem = () => {
    const divisor = Math.floor(Math.random() * 9) + 2; // 2-10
    const quotient = Math.floor(Math.random() * 10) + 1; // 1-10
    const dividend = divisor * quotient; // Ensure whole number result
    return { dividend, divisor, quotient };
  };

  const [problem, setProblem] = useState(generateProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const correctAnswer = problem.quotient;

  const handleCheck = () => {
    const userNum = parseInt(userAnswer);
    const correct = userNum === correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      toast.success("Amazing! Division master! 🌟", {
        description: `${problem.dividend} ÷ ${problem.divisor} = ${correctAnswer}`,
      });
    } else {
      toast.error("Try again! You can do it! 💪", {
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

  // Visual representation showing grouping
  const renderDivisionVisual = () => {
    const items = [];
    for (let i = 0; i < problem.divisor; i++) {
      items.push(
        <div key={i} className="bg-white/30 rounded-lg p-2 flex items-center justify-center">
          <span className="text-2xl">{'⭐'.repeat(problem.quotient)}</span>
        </div>
      );
    }
    return items;
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-math to-math/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Division Practice ➗</h3>
      
      <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm space-y-6">
        {/* Visual groups */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {renderDivisionVisual()}
        </div>
        <p className="text-white font-bold text-xl text-center">
          {problem.dividend} stars divided into {problem.divisor} groups
        </p>

        <div className="flex justify-center items-center gap-8 text-7xl font-black text-white">
          <span>{problem.dividend}</span>
          <span className="text-5xl">÷</span>
          <span>{problem.divisor}</span>
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
