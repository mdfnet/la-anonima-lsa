import { EyeOff } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

export function PrivacyOverlay() {
  const { privacyMode, togglePrivacyMode } = useAccessibility();

  if (!privacyMode) return null;

  return (
    <div className="privacy-overlay" onClick={togglePrivacyMode} role="button" aria-label="Desactivar modo privado">
      <div className="text-center text-white space-y-4">
        <EyeOff size={48} className="mx-auto opacity-50" />
        <p className="text-lg font-medium opacity-70">Modo privado activado</p>
        <p className="text-sm opacity-50">Toca la pantalla para desactivar</p>
      </div>
    </div>
  );
}
