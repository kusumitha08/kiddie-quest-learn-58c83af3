import { Card } from '@/components/ui/card';
import { MapPin, Compass } from 'lucide-react';

export const SocialAnimation = ({ grade }: { grade: number }) => {
  if (grade === 1) {
    return (
      <Card className="p-8 bg-gradient-to-br from-social to-social/80 border-4 border-white shadow-xl">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">Cardinal Directions</h3>
        
        <div className="relative w-64 h-64 mx-auto">
          {/* Compass rose */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Compass className="w-48 h-48 text-white/30" />
          </div>

          {/* North */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="bg-white text-primary px-6 py-3 rounded-full font-bold text-2xl shadow-lg">
              N
            </div>
            <div className="text-white text-center font-bold mt-2">North</div>
          </div>

          {/* East */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white text-primary px-6 py-3 rounded-full font-bold text-2xl shadow-lg">
              E
            </div>
            <div className="text-white text-center font-bold mt-2">East</div>
          </div>

          {/* South */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="bg-white text-primary px-6 py-3 rounded-full font-bold text-2xl shadow-lg">
              S
            </div>
            <div className="text-white text-center font-bold mt-2">South</div>
          </div>

          {/* West */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <div className="bg-white text-primary px-6 py-3 rounded-full font-bold text-2xl shadow-lg">
              W
            </div>
            <div className="text-white text-center font-bold mt-2">West</div>
          </div>

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <MapPin className="w-12 h-12 text-red-400 animate-pulse" />
          </div>
        </div>

        <p className="text-white text-center mt-8 text-lg">
          Use directions to find your way on a map! 🗺️
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-social to-social/80 border-4 border-white shadow-xl">
      <h3 className="text-3xl font-bold text-white mb-6 text-center">Interactive Social Studies</h3>
      <p className="text-white text-center text-xl">
        Learn about communities, maps, and history!
      </p>
    </Card>
  );
};
