import { Heart, Users, Shield, Accessibility } from 'lucide-react';

const values = [
  {
    icon: Accessibility,
    title: 'Accesibilidad',
    description: 'Creemos que todos nuestros clientes merecen una atencion de calidad, sin importar sus capacidades.',
  },
  {
    icon: Users,
    title: 'Inclusion',
    description: 'Trabajamos constantemente para eliminar barreras y hacer que nuestros servicios sean accesibles para todos.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Nos comprometemos a mejorar continuamente nuestras herramientas de atencion inclusiva.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Garantizamos la privacidad y seguridad de nuestros clientes en cada interaccion.',
  },
];

export function AboutScreen() {
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Acerca de La Anonima</h2>
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            En La Anonima creemos que la atencion al cliente debe ser accesible para todos.
            Esta plataforma es parte de nuestro compromiso con la inclusion y la diversidad.
          </p>
        </div>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 text-center">Nuestros valores</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map(value => (
              <div key={value.title} className="card text-center space-y-3">
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
          <h3 className="text-lg font-semibold text-brand-800">Tecnologia de interpretacion</h3>
          <p className="text-brand-700 text-sm leading-relaxed">
            Utilizamos la tecnologia de Dillo AI para ofrecer interpretacion en lengua de señas en tiempo real,
            permitiendo una comunicacion fluida y natural entre nuestros clientes y nuestro equipo.
          </p>
        </section>
      </div>
    </div>
  );
}
