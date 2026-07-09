import { Eye, EyeOff, Contrast, Type, Volume2, VolumeX } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

export function AccessibilityToolbar() {
  const { highContrast, largeText, privacyMode, ttsEnabled, toggleHighContrast, toggleLargeText, togglePrivacyMode, toggleTts } = useAccessibility();

  const tools = [
    { active: privacyMode, toggle: togglePrivacyMode, icon: privacyMode ? EyeOff : Eye, label: 'Modo privado', shortLabel: 'Privado' },
    { active: highContrast, toggle: toggleHighContrast, icon: Contrast, label: 'Alto contraste', shortLabel: 'Contraste' },
    { active: largeText, toggle: toggleLargeText, icon: Type, label: 'Texto grande', shortLabel: 'Texto' },
    { active: ttsEnabled, toggle: toggleTts, icon: ttsEnabled ? Volume2 : VolumeX, label: 'Lectura en voz alta', shortLabel: 'Voz alta' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 px-2 py-2 flex items-center gap-1">
      {tools.map(tool => (
        <button
          key={tool.label}
          onClick={tool.toggle}
          className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-200 min-w-[52px]
            ${tool.active
              ? 'bg-brand-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
            }`}
          aria-label={tool.label}
          aria-pressed={tool.active}
          title={tool.label}
        >
          <tool.icon size={18} />
          <span className="text-[9px] font-medium leading-none whitespace-nowrap">
            {tool.shortLabel}
          </span>
        </button>
      ))}
    </div>
  );
}
