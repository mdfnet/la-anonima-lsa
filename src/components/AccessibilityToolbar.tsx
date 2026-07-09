import { Eye, EyeOff, Contrast, Type, Volume2, VolumeX } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

export function AccessibilityToolbar() {
  const { highContrast, largeText, privacyMode, ttsEnabled, toggleHighContrast, toggleLargeText, togglePrivacyMode, toggleTts } = useAccessibility();

  const tools = [
    { active: privacyMode, toggle: togglePrivacyMode, icon: privacyMode ? EyeOff : Eye, label: 'Modo privado' },
    { active: highContrast, toggle: toggleHighContrast, icon: Contrast, label: 'Alto contraste' },
    { active: largeText, toggle: toggleLargeText, icon: Type, label: 'Texto grande' },
    { active: ttsEnabled, toggle: toggleTts, icon: ttsEnabled ? Volume2 : VolumeX, label: 'Lectura en voz alta' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 px-3 py-2 flex items-center gap-1">
      {tools.map(tool => (
        <button
          key={tool.label}
          onClick={tool.toggle}
          className={`p-3 rounded-xl transition-all duration-200 group relative
            ${tool.active
              ? 'bg-brand-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-gray-100'
            }`}
          aria-label={tool.label}
          aria-pressed={tool.active}
          title={tool.label}
        >
          <tool.icon size={20} />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {tool.label}
          </span>
        </button>
      ))}
    </div>
  );
}
