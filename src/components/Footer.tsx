import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-800 text-white/70 py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-2">
        <p className="text-sm flex items-center justify-center gap-1">
          Hecho con <Heart size={14} className="text-red-400" /> por La Anonima
        </p>
        <p className="text-xs text-white/50">
          Comprometidos con la inclusión y la accesibilidad para todos nuestros clientes.
        </p>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} La Anonima. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
