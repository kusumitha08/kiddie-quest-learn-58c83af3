import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { QuizQuestion } from '@/components/QuizQuestion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Trophy, RotateCcw } from 'lucide-react';
import { subjects, sampleQuizzes } from '@/lib/data';
import { Card } from '@/components/ui/card';

const QuizPage = () => {
  const { gradeNumber, subject } = useParams();
  const navigate = useNavigate();
  const currentSubject = subjects.find(s => s.id === subject);
  
  const quizzes = sampleQuizzes.filter(q => q.subject === subject);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  const getEncouragingMessage = () => {
    const percentage = (score / quizzes.length) * 100;
    if (percentage === 100) return "Perfect! You're a superstar! 🌟";
    if (percentage >= 75) return "Great job! Keep it up! 🎉";
    if (percentage >= 50) return "Good work! Practice makes perfect! 👍";
    return "Nice try! Let's learn and try again! 💪";
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-12 text-center bg-gradient-to-br from-primary to-secondary border-4 border-white shadow-2xl">
          <div className="mb-8">
            <Trophy className="w-24 h-24 text-accent fill-accent mx-auto animate-bounce" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Quiz Complete! 🎊
          </h1>
          
          <div className="bg-white/20 backdrop-blur rounded-3xl p-8 mb-8">
            <p className="text-3xl font-bold text-white mb-4">
              Your Score: {score} / {quizzes.length}
            </p>
            <div className="flex justify-center gap-2 mb-4">
              {Array.from({ length: quizzes.length }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-8 h-8 ${i < score ? 'text-accent fill-accent' : 'text-white/40'}`}
                />
              ))}
            </div>
            <p className="text-2xl text-white font-medium">
              {getEncouragingMessage()}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={resetQuiz}
              className="font-bold text-xl px-8 py-6"
            >
              <RotateCcw className="w-6 h-6 mr-2" />
              Try Again
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate(`/grade/${gradeNumber}/${subject}`)}
              className="font-bold text-xl px-8 py-6"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Back to {currentSubject?.name}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`bg-${currentSubject?.color} shadow-lg sticky top-0 z-50`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={`/grade/${gradeNumber}/${subject}`}>
            <Button variant="secondary" size="lg" className="font-bold">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{currentSubject?.icon}</span>
            <span className={`text-2xl font-bold text-${currentSubject?.color}-foreground`}>
              Quiz Time!
            </span>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-muted/50 py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-foreground">
              Question {currentQuestionIndex + 1} of {quizzes.length}
            </span>
            <span className="font-semibold text-foreground">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-500 rounded-full"
              style={{ width: `${((currentQuestionIndex + 1) / quizzes.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quiz Question */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {quizzes.length > 0 ? (
            <QuizQuestion 
              quiz={quizzes[currentQuestionIndex]} 
              onAnswer={handleAnswer}
            />
          ) : (
            <Card className="p-12 text-center bg-white">
              <p className="text-2xl text-muted-foreground mb-6">
                Quiz questions coming soon! 📝
              </p>
              <Link to={`/grade/${gradeNumber}/${subject}`}>
                <Button size="lg" className="font-bold">
                  Back to Learning
                </Button>
              </Link>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
