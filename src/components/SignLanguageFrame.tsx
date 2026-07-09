import { useEffect, useRef, useState } from 'react';
import { WifiOff, AlertTriangle, RefreshCw } from 'lucide-react';

interface SignLanguageFrameProps {
  src: string;
  title: string;
  heightClass: string;
}

const LOAD_TIMEOUT_MS = 12000;

export function SignLanguageFrame({ src, title, heightClass }: SignLanguageFrameProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'offline' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!navigator.onLine) {
      setStatus('offline');
      return;
    }

    setStatus('loading');
    timeoutRef.current = setTimeout(() => setStatus('error'), LOAD_TIMEOUT_MS);

    return () => clearTimeout(timeoutRef.current);
  }, [attempt, src]);

  function handleLoad() {
    clearTimeout(timeoutRef.current);
    setStatus('ready');
  }

  function handleError() {
    clearTimeout(timeoutRef.current);
    setStatus('error');
  }

  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white relative ${heightClass}`}>
      {status !== 'ready' && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-white px-6 text-center">
          {status === 'loading' ? (
            <>
              <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin" />
              <p className="text-gray-500 text-sm">Conectando...</p>
            </>
          ) : status === 'offline' ? (
            <>
              <WifiOff size={40} className="text-gray-400" />
              <p className="text-gray-900 font-semibold">Sin conexión a internet</p>
              <p className="text-gray-500 text-sm max-w-xs">
                Conectate a internet e intentá nuevamente.
              </p>
              <button
                onClick={() => setAttempt(a => a + 1)}
                className="btn-secondary mt-2 text-sm px-6 py-3"
              >
                <RefreshCw size={16} />
                Reintentar
              </button>
            </>
          ) : (
            <>
              <AlertTriangle size={40} className="text-amber-500" />
              <p className="text-gray-900 font-semibold">El servicio no está disponible en este momento</p>
              <p className="text-gray-500 text-sm max-w-xs">
                Puede ser un problema temporal. Probá reintentar, o pedile ayuda a la persona que te atiende.
              </p>
              <button
                onClick={() => setAttempt(a => a + 1)}
                className="btn-secondary mt-2 text-sm px-6 py-3"
              >
                <RefreshCw size={16} />
                Reintentar
              </button>
            </>
          )}
        </div>
      )}
      <iframe
        key={attempt}
        src={src}
        title={title}
        className={`w-full ${heightClass}`}
        allow="camera; microphone"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
