import { useAccessibility } from '@/hooks/useAccessibility';
import { Button } from '@/components/ui/button';
import { Eye, Type, Volume2, VolumeX } from 'lucide-react';

export const AccessibilityToolbar = () => {
  const { highContrast, toggleHighContrast, largeText, toggleLargeText, isSpeaking, stopSpeaking } = useAccessibility();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 p-3 bg-card rounded-2xl shadow-lg border-4 border-primary/20">
      <Button
        onClick={toggleHighContrast}
        size="lg"
        variant={highContrast ? "default" : "outline"}
        className="flex items-center gap-2 font-bold text-lg"
        aria-label="Toggle high contrast mode"
      >
        <Eye className="w-6 h-6" />
        <span className="sr-only md:not-sr-only">High Contrast</span>
      </Button>
      
      <Button
        onClick={toggleLargeText}
        size="lg"
        variant={largeText ? "default" : "outline"}
        className="flex items-center gap-2 font-bold text-lg"
        aria-label="Toggle large text"
      >
        <Type className="w-6 h-6" />
        <span className="sr-only md:not-sr-only">Large Text</span>
      </Button>
      
      {isSpeaking && (
        <Button
          onClick={stopSpeaking}
          size="lg"
          variant="destructive"
          className="flex items-center gap-2 font-bold text-lg animate-pulse"
          aria-label="Stop speaking"
        >
          <VolumeX className="w-6 h-6" />
          <span className="sr-only md:not-sr-only">Stop</span>
        </Button>
      )}
    </div>
  );
};
