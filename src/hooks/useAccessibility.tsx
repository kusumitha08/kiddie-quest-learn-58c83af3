import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  largeText: boolean;
  toggleLargeText: () => void;
  speak: (text: string, rate?: number) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const toggleHighContrast = useCallback(() => {
    setHighContrast(prev => !prev);
  }, []);

  const toggleLargeText = useCallback(() => {
    setLargeText(prev => !prev);
  }, []);

  const speak = useCallback((text: string, rate: number = 0.8) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  const stopSpeaking = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  return (
    <AccessibilityContext.Provider value={{
      highContrast,
      toggleHighContrast,
      largeText,
      toggleLargeText,
      speak,
      stopSpeaking,
      isSpeaking,
    }}>
      <div className={`${highContrast ? 'high-contrast' : ''} ${largeText ? 'large-text' : ''}`}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
