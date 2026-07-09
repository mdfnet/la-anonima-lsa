import { Heart, Users, Shield, Accessibility, Volume1 } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const values = [
  {
    icon: Accessibility,
    title: 'Accesibilidad',
    description: 'Todos nuestros clientes merecen una buena atención.',
  },
  {
    icon: Users,
    title: 'Inclusión',
    description: 'Trabajamos para que todos puedan usar nuestros servicios.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Mejoramos todo el tiempo nuestras herramientas de atención inclusiva.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Cuidamos tu privacidad y seguridad en cada interacción.',
  },
];

const introText = 'En La Anónima, la atención al cliente es para todos. Esta app es parte de nuestro compromiso con la inclusión.';
const techText = 'Usamos la tecnología de Dillo AI para traducir lengua de señas en tiempo real.';

export function AboutScreen() {
  const { speak } = useAccessibility();

  return (
    <div className="flex-1 px-4 py-8 sm:py-12 animate-[fadeIn_0.5s_ease]">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <div className="w-40 h-16 mx-auto flex items-center justify-center">
            <img
              src="https://static-api.laanonima.com.ar/imagenes/2025/svg/logo-anonima.svg"
              alt="La Anonima"
              className="h-full w-auto"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Acerca de La Anónima</h2>
          <div className="flex items-start justify-center gap-2 max-w-xl mx-auto">
            <p className="text-gray-600 leading-relaxed">{introText}</p>
            <button
              onClick={() => speak(introText)}
              className="p-1.5 rounded-lg text-brand-500 hover:bg-brand-50 transition-colors flex-shrink-0 mt-1"
              aria-label="Escuchar introducción"
            >
              <Volume1 size={16} />
            </button>
          </div>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Nuestros valores</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map(value => (
              <div key={value.title} className="card text-center space-y-3 relative">
                <button
                  onClick={() => speak(`${value.title}. ${value.description}`)}
                  className="absolute top-3 right-3 p-1.5 rounded-lg text-brand-500 hover:bg-brand-50 transition-colors"
                  aria-label={`Escuchar: ${value.title}`}
                >
                  <Volume1 size={16} />
                </button>
                <div className="w-14 h-14 bg-brand-50 rounded-2xl mx-auto flex items-center justify-center">
                  <value.icon size={28} className="text-brand-500" />
                </div>
                <h4 className="font-semibold text-gray-900">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card bg-brand-50 border-brand-100 text-center space-y-3">
          <h3 className="text-lg font-semibold text-brand-800">Tecnología de interpretación</h3>
          <div className="flex items-start justify-center gap-2">
            <p className="text-brand-700 text-sm leading-relaxed">{techText}</p>
            <button
              onClick={() => speak(techText)}
              className="p-1.5 rounded-lg text-brand-600 hover:bg-brand-100 transition-colors flex-shrink-0"
              aria-label="Escuchar tecnología de interpretación"
            >
              <Volume1 size={16} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
