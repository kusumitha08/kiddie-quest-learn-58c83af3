import { useParams, Link } from 'react-router-dom';
import { SubjectCard } from '@/components/SubjectCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy } from 'lucide-react';
import { subjects } from '@/lib/data';

const GradePage = () => {
  const { gradeNumber } = useParams();
  const grade = Number(gradeNumber);

  // Filter subjects based on grade
  const getSubjectsForGrade = (grade: number) => {
    if (grade === 1) {
      // Grade 1: Math, English, EVS, Story Telling (no Science, Social, Kannada)
      return subjects.filter(s => ['math', 'english', 'evs', 'storytelling'].includes(s.id));
    }
    // For other grades, exclude evs and storytelling, include science and social
    return subjects.filter(s => !['evs', 'storytelling'].includes(s.id));
  };

  const displaySubjects = getSubjectsForGrade(grade);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="secondary" size="lg" className="font-bold">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Home
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-accent fill-accent" />
            <span className="text-2xl font-bold text-primary-foreground">Grade {gradeNumber}</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Grade {gradeNumber} Adventures!
          </h1>
          <p className="text-2xl text-white/95 font-medium">
            Choose a subject to start learning! 📚
          </p>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displaySubjects.map((subject) => (
              <SubjectCard 
                key={subject.id} 
                subject={subject} 
                grade={Number(gradeNumber)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Banner */}
      <section className="py-12 px-4 bg-gradient-to-r from-success to-primary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            You're Doing Great! Keep Learning! 🌟
          </h3>
          <p className="text-xl text-white/90">
            Every lesson makes you smarter and stronger!
          </p>
        </div>
      </section>
    </div>
  );
};

export default GradePage;
