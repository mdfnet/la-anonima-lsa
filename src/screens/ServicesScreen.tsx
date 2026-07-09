import { Hand, MessageCircle, ArrowRight, ShoppingCart, CreditCard, QrCode, Wallet, ScanLine, AlertTriangle, Store, Volume2, Flower2, Beef, LeafyGreen, Croissant, Milk, Wine, SprayCan } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

interface ServicesScreenProps {
  onNavigate: (screen: string) => void;
}

interface QuickActionGroup {
  title: string;
  actions: { icon: typeof ShoppingCart; label: string; message: string }[];
}

const quickActionGroups: QuickActionGroup[] = [
  {
    title: 'Compras y cajas',
    actions: [
      { icon: ShoppingCart, label: 'Necesito ayuda con mi compra', message: 'Ayuda en caja' },
      { icon: CreditCard, label: 'Tarjetas', message: 'Consulta tarjetas' },
      { icon: QrCode, label: 'Pago con QR', message: 'Ayuda con QR' },
      { icon: Wallet, label: 'Medios de pago', message: 'Medios de pago' },
      { icon: ScanLine, label: 'Quiero pagar mis productos', message: 'Ayuda en cajas' },
    ],
  },
  {
    title: 'Reclamos',
    actions: [
      { icon: AlertTriangle, label: 'Hacer un reclamo', message: 'Reclamo' },
    ],
  },
  {
    title: 'Ubicación de productos',
    actions: [
      { icon: Store, label: 'Almacén', message: 'Almacén' },
      { icon: Flower2, label: 'Perfumería', message: 'Perfumería' },
      { icon: Beef, label: 'Carnicería', message: 'Carnicería' },
      { icon: LeafyGreen, label: 'Verdulería', message: 'Verdulería' },
      { icon: Croissant, label: 'Panadería', message: 'Panadería' },
      { icon: Milk, label: 'Lácteos y fiambres', message: 'Lácteos y fiambres' },
      { icon: Wine, label: 'Bebidas', message: 'Bebidas' },
      { icon: SprayCan, label: 'Limpieza', message: 'Limpieza' },
    ],
  },
];

export function ServicesScreen({ onNavigate }: ServicesScreenProps) {
  const { speak, ttsEnabled } = useAccessibility();

  function handleService(screen: string, label: string) {
    speak(label);
    onNavigate(screen);
  }

  function handleQuickAction(message: string) {
    speak(message);
  }

  return (
    <div className="flex-1 flex flex-col items-center px-4 py-8 sm:py-12">
      <div className="animate-[fadeIn_0.5s_ease] w-full max-w-3xl space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="text-gray-600">
            Seleccioná cómo deseas comunicarte o tocá un acceso rápido
          </p>
        </div>

        {/* Communication options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Comunicación con señas</h3>
          <div className="grid gap-4">
            <button
              onClick={() => handleService('interpreter', 'Me comunico con señas')}
              className="card text-left group cursor-pointer border-2 border-transparent hover:border-brand-500/30 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Hand size={28} className="text-brand-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    Me comunico con señas
                    <ArrowRight size={16} className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Usa el intérprete de lengua de señas para comunicarte con nuestro equipo en tiempo real.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => handleService('avatar', 'Respondo con señas')}
              className="card text-left group cursor-pointer border-2 border-transparent hover:border-brand-500/30 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                  <MessageCircle size={28} className="text-brand-500" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    Respondo con señas
                    <ArrowRight size={16} className="text-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Recibí las respuestas de nuestro equipo en lengua de señas mediante un avatar animado.
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            Accesos rápidos
            {ttsEnabled && <Volume2 size={16} className="text-brand-500" />}
          </h3>

          {quickActionGroups.map(group => (
            <div key={group.title} className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{group.title}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {group.actions.map(action => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.message)}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 shadow-sm hover:shadow-md group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                      <action.icon size={22} className="text-brand-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
