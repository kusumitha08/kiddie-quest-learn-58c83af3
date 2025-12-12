import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

interface GradeCardProps {
  grade: number;
  color: string;
}

export const GradeCard = ({ grade, color }: GradeCardProps) => {
  return (
    <Link to={`/grade/${grade}`}>
      <Card 
        className={`relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 p-8 bg-gradient-to-br ${color} shadow-lg hover:shadow-2xl border-4 border-white group`}
      >
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Sparkles className="w-6 h-6 text-white animate-pulse" />
        </div>
        
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {grade}
          </div>
          <h3 className="text-2xl font-semibold text-white">
            Grade {grade}
          </h3>
          <p className="text-white/90 mt-2 text-lg">
            Click to explore!
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/30"></div>
      </Card>
    </Link>
  );
};
