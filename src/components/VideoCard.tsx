import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Play, Clock, X } from 'lucide-react';
import { Video } from '@/lib/data';
import { Button } from '@/components/ui/button';

interface VideoCardProps {
  video: Video;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-primary/20 group"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400`;
            }}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full flex items-center gap-1 text-sm">
            <Clock className="w-3 h-3" />
            {video.duration}
          </div>
        </div>
        
        <div className="p-4 bg-card">
          <h4 className="font-semibold text-lg text-card-foreground line-clamp-2">
            {video.title}
          </h4>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black border-none" aria-describedby={undefined}>
          <DialogTitle className="sr-only">{video.title}</DialogTitle>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-50"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="aspect-video w-full">
              {isOpen && (
                <iframe
                  src={`${video.videoUrl}?autoplay=0&rel=0&modestbranding=1&showinfo=0`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              )}
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold text-card-foreground">{video.title}</h3>
              <p className="text-muted-foreground mt-1">Duration: {video.duration}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
