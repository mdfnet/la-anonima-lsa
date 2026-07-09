import { Hand, MessageCircle, Eye, Contrast, Type, Volume2, Volume1 } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const steps = [
  {
    icon: Hand,
    title: 'Me comunico con señas',
    description: 'Tocá acá para hablar con nosotros en lengua de señas. Te vemos por cámara y te entendemos al instante.',
  },
  {
    icon: MessageCircle,
    title: 'Respondo con señas',
    description: 'Tocá acá para ver las respuestas de nuestro equipo. Un avatar te las muestra en lengua de señas.',
  },
];

const accessibilityFeatures = [
  { icon: Eye, title: 'Modo privado', description: 'Oscurece la pantalla para cuidar tu privacidad. Tocá la pantalla para volver.' },
  { icon: Contrast, title: 'Alto contraste', description: 'Hace los colores más fuertes para ver mejor.' },
  { icon: Type, title: 'Texto grande', description: 'Hace las letras más grandes para leer mejor.' },
  { icon: Volume2, title: 'Lectura en voz alta', description: 'Dice los mensajes en voz alta, para que la persona que te atiende te escuche.' },
];

export function HelpScreen() {
  const { speak } = useAccessibility();

  return (
    <div className="flex-1 px-4 py-8 sm:py-12 animate-[fadeIn_0.5s_ease]">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Cómo usar esta aplicación</h2>
          <p className="text-gray-600">Guía paso a paso para comunicarte con nosotros</p>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Servicios disponibles</h3>
          <div className="space-y-4">
            {steps.map(step => (
              <div key={step.title} className="card flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <step.icon size={24} className="text-brand-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{step.description}</p>
                </div>
                <button
                  onClick={() => speak(`${step.title}. ${step.description}`)}
                  className="p-2 rounded-lg text-brand-500 hover:bg-brand-50 transition-colors flex-shrink-0"
                  aria-label={`Escuchar: ${step.title}`}
                >
                  <Volume1 size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Herramientas de accesibilidad</h3>
          <p className="text-gray-600 text-sm">
            En la barra inferior encontrarás estas herramientas para personalizar tu experiencia:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {accessibilityFeatures.map(feature => (
              <div key={feature.title} className="card flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon size={20} className="text-brand-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{feature.description}</p>
                </div>
                <button
                  onClick={() => speak(`${feature.title}. ${feature.description}`)}
                  className="p-1.5 rounded-lg text-brand-500 hover:bg-brand-50 transition-colors flex-shrink-0"
                  aria-label={`Escuchar: ${feature.title}`}
                >
                  <Volume1 size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
