import { ArrowLeft } from 'lucide-react';
import { SignLanguageFrame } from '../components/SignLanguageFrame';

interface AvatarScreenProps {
  onNavigate: (screen: string) => void;
}

export function AvatarScreen({ onNavigate }: AvatarScreenProps) {
  return (
    <div className="flex-1 flex flex-col px-4 py-6 animate-[fadeIn_0.4s_ease]">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('services')}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Volver a servicios"
          >
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Respuestas en Señas</h2>
        </div>

        <SignLanguageFrame
          src="https://avatar.dillo.ai/"
          title="Avatar de lengua de señas"
          heightClass="h-[500px] sm:h-[600px]"
        />

        <p className="text-center text-gray-500 text-sm">
          El avatar te mostrara las respuestas de nuestro equipo traducidas a lengua de señas.
        </p>
      </div>
    </div>
  );
}
