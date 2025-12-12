import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Subject } from '@/lib/data';

interface SubjectCardProps {
  subject: Subject;
  grade: number;
}

export const SubjectCard = ({ subject, grade }: SubjectCardProps) => {
  return (
    <Link to={`/grade/${grade}/${subject.id}`}>
      <Card 
        className={`cursor-pointer transition-all duration-300 hover:scale-105 p-6 bg-${subject.color} hover:shadow-xl border-4 border-white group relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full"></div>
        
        <div className="relative z-10">
          <div className="text-6xl mb-4 animate-bounce group-hover:animate-wiggle">
            {subject.icon}
          </div>
          
          <h3 className={`text-2xl font-bold text-${subject.color}-foreground mb-2`}>
            {subject.name}
          </h3>
          
          <p className={`text-${subject.color}-foreground/90 mb-4 text-sm`}>
            {subject.description}
          </p>
          
          <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
            <span>Start Learning</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Card>
    </Link>
  );
};
