import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AccessibilityState {
  highContrast: boolean;
  largeText: boolean;
  privacyMode: boolean;
  ttsEnabled: boolean;
}

interface AccessibilityContextType extends AccessibilityState {
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  togglePrivacyMode: () => void;
  toggleTts: () => void;
  speak: (text: string) => void;
  speaking: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AccessibilityState>({
    highContrast: false,
    largeText: false,
    privacyMode: false,
    ttsEnabled: true,
  });
  const [speaking, setSpeaking] = useState(false);

  const toggleHighContrast = useCallback(() => {
    setState(s => {
      const next = !s.highContrast;
      document.documentElement.classList.toggle('high-contrast', next);
      return { ...s, highContrast: next };
    });
  }, []);

  const toggleLargeText = useCallback(() => {
    setState(s => {
      const next = !s.largeText;
      document.documentElement.classList.toggle('large-text', next);
      return { ...s, largeText: next };
    });
  }, []);

  const togglePrivacyMode = useCallback(() => {
    setState(s => ({ ...s, privacyMode: !s.privacyMode }));
  }, []);

  const toggleTts = useCallback(() => {
    setState(s => ({ ...s, ttsEnabled: !s.ttsEnabled }));
  }, []);

  const speak = useCallback((text: string) => {
    if (!state.ttsEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-AR';
    utterance.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const argentineVoice = voices.find(v => v.lang === 'es-AR') ||
      voices.find(v => v.lang === 'es-419') ||
      voices.find(v => v.lang.startsWith('es') && !v.lang.includes('ES'));
    if (argentineVoice) utterance.voice = argentineVoice;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [state.ttsEnabled]);

  return (
    <AccessibilityContext.Provider
      value={{ ...state, toggleHighContrast, toggleLargeText, togglePrivacyMode, toggleTts, speak, speaking }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return ctx;
}
