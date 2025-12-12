import { Card } from '@/components/ui/card';
import { Sprout, Sun, Droplets, Bird, TreePine } from 'lucide-react';

export const EVSAnimation = ({ grade }: { grade: number }) => {
  if (grade === 1) {
    return (
      <Card className="p-8 bg-gradient-to-br from-science to-science/80 border-4 border-white shadow-xl">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">Our Environment 🌍</h3>
        
        <div className="space-y-8">
          {/* Living Things */}
          <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4 text-center">Living Things 🌱</h4>
            <div className="flex justify-around items-center">
              <div className="text-center">
                <Sprout className="w-16 h-16 text-green-300 animate-wiggle mx-auto mb-2" />
                <p className="text-white font-bold">Plants</p>
              </div>
              <div className="text-center">
                <Bird className="w-16 h-16 text-blue-300 animate-bounce mx-auto mb-2" />
                <p className="text-white font-bold">Animals</p>
              </div>
              <div className="text-center">
                <span className="text-6xl animate-pulse">👨‍👩‍👧‍👦</span>
                <p className="text-white font-bold">People</p>
              </div>
            </div>
          </div>

          {/* Non-Living Things */}
          <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4 text-center">Non-Living Things 🪨</h4>
            <div className="flex justify-around items-center">
              <div className="text-center">
                <Sun className="w-16 h-16 text-yellow-300 animate-pulse mx-auto mb-2" />
                <p className="text-white font-bold">Sun</p>
              </div>
              <div className="text-center">
                <Droplets className="w-16 h-16 text-blue-400 animate-bounce mx-auto mb-2" />
                <p className="text-white font-bold">Water</p>
              </div>
              <div className="text-center">
                <span className="text-6xl">🪨</span>
                <p className="text-white font-bold">Rocks</p>
              </div>
            </div>
          </div>

          {/* What Plants Need */}
          <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-4 text-center">What Plants Need 🌻</h4>
            <div className="flex justify-around items-center">
              <Sun className="w-12 h-12 text-yellow-300 animate-pulse" />
              <span className="text-4xl">+</span>
              <Droplets className="w-12 h-12 text-blue-400 animate-bounce" />
              <span className="text-4xl">+</span>
              <span className="text-5xl">🌱</span>
              <span className="text-4xl">=</span>
              <TreePine className="w-16 h-16 text-green-400 animate-wiggle" />
            </div>
          </div>
        </div>

        <p className="text-white text-center mt-8 text-lg">
          Living things grow and need food, water, and air! 🌱💧☀️
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-science to-science/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-6 text-center">Environmental Studies</h3>
      <p className="text-white text-center text-xl">
        Explore the world around you!
      </p>
    </Card>
  );
};
