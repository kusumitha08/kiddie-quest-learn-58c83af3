import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import { Quiz } from '@/lib/data';

interface QuizQuestionProps {
  quiz: Quiz;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizQuestion = ({ quiz, onAnswer }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === quiz.correctAnswer;
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 2000);
  };

  return (
    <Card className="p-8 bg-white border-4 border-primary/20 shadow-xl">
      <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
        {quiz.question}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quiz.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === quiz.correctAnswer;
          const showCorrect = showResult && isCorrect;
          const showWrong = showResult && isSelected && !isCorrect;
          
          return (
            <Button
              key={index}
              onClick={() => !showResult && handleAnswer(index)}
              disabled={showResult}
              variant="outline"
              className={`
                h-auto py-6 text-lg font-semibold transition-all duration-300
                ${showCorrect ? 'bg-success text-success-foreground border-success' : ''}
                ${showWrong ? 'bg-destructive text-destructive-foreground border-destructive' : ''}
                ${!showResult ? 'hover:scale-105 hover:border-primary' : ''}
              `}
            >
              <div className="flex items-center gap-3 w-full">
                <span className="flex-1">{option}</span>
                {showCorrect && <CheckCircle className="w-6 h-6" />}
                {showWrong && <XCircle className="w-6 h-6" />}
              </div>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};
