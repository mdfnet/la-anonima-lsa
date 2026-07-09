import { useState } from 'react';
import { Menu, X, Home, HelpCircle, Info, Settings } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

interface HeaderProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export function Header({ currentScreen, onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { speak } = useAccessibility();

  const navItems = [
    { id: 'welcome', label: 'Inicio', icon: Home },
    { id: 'services', label: 'Servicios', icon: Settings },
    { id: 'help', label: 'Ayuda', icon: HelpCircle },
    { id: 'about', label: 'Acerca de', icon: Info },
  ];

  function handleNav(screen: string, label: string) {
    onNavigate(screen);
    setMenuOpen(false);
    speak(label);
  }

  return (
    <header className="bg-brand-500 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => handleNav('welcome', 'Inicio')}
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1"
          aria-label="Ir al inicio"
        >
          <img
            src="https://static-api.laanonima.com.ar/imagenes/2025/svg/logo-anonima.svg"
            alt="La Anonima"
            className="h-9 brightness-0 invert"
          />
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id, item.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 text-sm font-medium
                ${currentScreen === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-brand-600 border-t border-white/10 px-4 py-3 space-y-1 animate-[slideDown_0.2s_ease]">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id, item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left
                ${currentScreen === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/80 hover:bg-white/10'
                }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
