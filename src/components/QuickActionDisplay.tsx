import { X, Volume2 } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

interface QuickActionDisplayProps {
  message: string | null;
  onClose: () => void;
}

export function QuickActionDisplay({ message, onClose }: QuickActionDisplayProps) {
  const { speaking, speak, ttsEnabled } = useAccessibility();

  if (!message) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center px-6 text-center animate-[fadeIn_0.2s_ease]"
      role="alertdialog"
      aria-label="Mensaje para mostrar a la persona que te atiende"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-200"
        aria-label="Cerrar mensaje"
      >
        <X size={28} className="text-gray-700" />
      </button>

      <div className="relative flex items-center justify-center w-16 h-16 mb-6">
        {speaking && (
          <>
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-60 animate-ping" />
            <span
              className="absolute inline-flex h-10 w-10 rounded-full bg-brand-400 opacity-50 animate-ping"
              style={{ animationDelay: '0.3s' }}
            />
          </>
        )}
        <Volume2 size={36} className="relative text-brand-500" />
      </div>

      <p className="text-base sm:text-lg text-gray-500 font-medium mb-4">
        Mostrale esta pantalla a la persona que te atiende
      </p>

      <p className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
        {message}
      </p>

      {ttsEnabled && (
        <button
          onClick={() => speak(message)}
          className="btn-secondary mt-8 flex items-center gap-2"
          aria-label="Volver a escuchar el mensaje"
        >
          <Volume2 size={20} />
          Escuchar de nuevo
        </button>
      )}

      <button onClick={onClose} className="btn-primary mt-12">
        Listo
      </button>
    </div>
  );
}
