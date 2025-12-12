import { Card } from '@/components/ui/card';
import { Sprout, Sun, Droplets } from 'lucide-react';

export const ScienceAnimation = ({ grade }: { grade: number }) => {
  if (grade === 1) {
    return (
      <Card className="p-8 bg-gradient-to-br from-science to-science/80 border-4 border-white shadow-xl">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">What Plants Need to Grow</h3>
        
        <div className="flex justify-around items-end h-64">
          {/* Sunlight */}
          <div className="flex flex-col items-center gap-4 animate-float">
            <Sun className="w-20 h-20 text-yellow-300 animate-pulse" />
            <div className="text-white font-bold text-xl">Sunlight</div>
          </div>

          {/* Plant */}
          <div className="flex flex-col items-center">
            <Sprout className="w-32 h-32 text-green-300 animate-wiggle" />
            <div className="w-4 h-16 bg-amber-700 rounded-sm"></div>
            <div className="w-20 h-4 bg-amber-900 rounded-full"></div>
          </div>

          {/* Water */}
          <div className="flex flex-col items-center gap-4 animate-float" style={{ animationDelay: '0.5s' }}>
            <Droplets className="w-20 h-20 text-blue-300 animate-bounce" />
            <div className="text-white font-bold text-xl">Water</div>
          </div>
        </div>

        <p className="text-white text-center mt-8 text-lg">
          Plants need sunlight ☀️, water 💧, and soil 🌱 to grow big and strong!
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-science to-science/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-6 text-center">Interactive Science Learning</h3>
      <p className="text-white text-center text-xl">
        Explore science concepts with fun animations!
      </p>
    </Card>
  );
};
