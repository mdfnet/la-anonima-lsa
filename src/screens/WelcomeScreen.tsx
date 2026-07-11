import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { VolumeReminder } from '../components/VolumeReminder';
import appLa from '../assets/app_la.jpg';
import tla from '../assets/tla.jpg';
import whastapp from '../assets/whastapp.jpg';
import educacionFinanciera from '../assets/educacion_finaciera.jpg';

interface WelcomeScreenProps {
  onNavigate: (screen: string) => void;
}

const promoImages = [
  { src: appLa, alt: 'La Anonima App', isLogo: false, link: '' },
  { src: tla, alt: 'Tarjeta La Anonima', isLogo: false, link: '' },
  { src: whastapp, alt: 'Canal de WhatsApp', isLogo: false, link: '' },
  { src: educacionFinanciera, alt: 'Educacion financiera', isLogo: false, link: '' },
  { src: 'https://cdn.laanonima.com/tripleimpacto/logo.png', alt: 'Triple Impacto', isLogo: true, link: 'https://www.laanonima.com.ar/empresa/triple-impacto/' },
];

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  const { speak, ttsEnabled } = useAccessibility();
  const [showVolumeReminder, setShowVolumeReminder] = useState(false);

  function handleStart() {
    if (ttsEnabled) {
      setShowVolumeReminder(true);
      return;
    }
    onNavigate('services');
  }

  function handleContinue() {
    setShowVolumeReminder(false);
    speak('Seleccione un servicio');
    onNavigate('services');
  }

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-12 text-center">
      <div className="animate-[fadeIn_0.6s_ease] space-y-8 max-w-lg">
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Te damos la bienvenida a <span className="text-brand-500">La Anonima</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Estamos aqui para atenderte. Usa nuestra plataforma de atencion inclusiva para comunicarte con nosotros en lengua de senas.
          </p>
        </div>

        <button
          onClick={handleStart}
          className="btn-primary mx-auto text-xl px-12 py-5"
          aria-label="Comenzar a usar la aplicación"
        >
          Comenzar
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Image strip */}
      <div className="w-full mt-12 overflow-hidden marquee-track">
        <div className="flex gap-4 animate-[scroll_25s_linear_infinite] w-max">
          {[...promoImages, ...promoImages].map((img, i) => (
            img.link ? (
              <a
                key={i}
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className="marquee-item flex-shrink-0 w-40 sm:w-52 h-56 sm:h-72 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white flex items-center justify-center cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className={`w-full h-full ${img.isLogo ? 'object-contain p-5' : 'object-cover'}`}
                />
              </a>
            ) : (
              <div
                key={i}
                className="marquee-item flex-shrink-0 w-40 sm:w-52 h-56 sm:h-72 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-white flex items-center justify-center"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  draggable={false}
                  className={`w-full h-full ${img.isLogo ? 'object-contain p-5' : 'object-cover'}`}
                />
              </div>
            )
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-8">
        Usa la barra de accesibilidad en la parte inferior para ajustar la pantalla a tus necesidades.
      </p>

      <VolumeReminder open={showVolumeReminder} onContinue={handleContinue} />
    </div>
  );
}
