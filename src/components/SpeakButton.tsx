import { useAccessibility } from '@/hooks/useAccessibility';
import { Button } from '@/components/ui/button';
import { Volume2 } from 'lucide-react';

interface SpeakButtonProps {
  text: string;
  rate?: number;
  size?: 'sm' | 'default' | 'lg' | 'icon';
  className?: string;
}

export const SpeakButton = ({ text, rate = 0.8, size = 'default', className = '' }: SpeakButtonProps) => {
  const { speak, isSpeaking } = useAccessibility();

  return (
    <Button
      onClick={() => speak(text, rate)}
      size={size}
      variant="secondary"
      className={`flex items-center gap-2 ${isSpeaking ? 'animate-pulse bg-success' : ''} ${className}`}
      aria-label={`Listen to: ${text}`}
    >
      <Volume2 className={size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
      {size !== 'icon' && <span className="sr-only md:not-sr-only">Listen</span>}
    </Button>
  );
};
