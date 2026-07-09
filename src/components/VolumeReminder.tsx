import { Volume2 } from 'lucide-react';

interface VolumeReminderProps {
  open: boolean;
  onContinue: () => void;
}

export function VolumeReminder({ open, onContinue }: VolumeReminderProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-white flex flex-col items-center justify-center px-6 text-center animate-[fadeIn_0.2s_ease]"
      role="alertdialog"
      aria-label="Recordatorio de volumen"
    >
      <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mb-6">
        <Volume2 size={32} className="text-brand-500" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-md">
        Subí el volumen al máximo
      </h2>

      <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mt-4">
        Esta app habla en voz alta para que la persona que te atienda pueda escucharte. Asegurate de tener el volumen de tu dispositivo activado.
      </p>

      <button onClick={onContinue} className="btn-primary mt-12">
        Entendido, continuar
      </button>
    </div>
  );
}
