import { Hand, MessageCircle, Eye, Contrast, Type, Volume2 } from 'lucide-react';

const steps = [
  {
    icon: Hand,
    title: 'Me comunico con señas',
    description: 'Selecciona esta opcion si deseas comunicarte con nuestro equipo usando lengua de señas. El interprete virtual traducira tus señas en tiempo real.',
  },
  {
    icon: MessageCircle,
    title: 'Respondo con señas',
    description: 'Selecciona esta opcion para recibir las respuestas de nuestro equipo en lengua de señas mediante un avatar animado.',
  },
];

const accessibilityFeatures = [
  { icon: Eye, title: 'Modo privado', description: 'Oscurece la pantalla para proteger tu privacidad. Toca la pantalla para desactivarlo.' },
  { icon: Contrast, title: 'Alto contraste', description: 'Aumenta el contraste de la pantalla para mejorar la visibilidad de los elementos.' },
  { icon: Type, title: 'Texto grande', description: 'Aumenta el tamano del texto para facilitar la lectura.' },
  { icon: Volume2, title: 'Lectura en voz alta', description: 'Lee en voz alta los elementos de la pantalla al interactuar con ellos.' },
];

export function HelpScreen() {
  return (
    <div className="flex-1 px-4 py-8 sm:py-12 animate-[fadeIn_0.5s_ease]">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Como usar esta aplicacion</h2>
          <p className="text-gray-600">Guia paso a paso para comunicarte con nosotros</p>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Servicios disponibles</h3>
          <div className="space-y-4">
            {steps.map(step => (
              <div key={step.title} className="card flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <step.icon size={24} className="text-brand-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Herramientas de accesibilidad</h3>
          <p className="text-gray-600 text-sm">
            En la barra inferior encontraras estas herramientas para personalizar tu experiencia:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {accessibilityFeatures.map(feature => (
              <div key={feature.title} className="card flex items-start gap-3">
                <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon size={20} className="text-brand-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm">{feature.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
