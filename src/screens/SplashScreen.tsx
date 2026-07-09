import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const splashImages = [
  { src: '/App_LA.jpg', alt: 'La Anonima App', isLogo: false, link: '' },
  { src: '/TLA.jpg', alt: 'Tarjeta La Anonima', isLogo: false, link: '' },
  { src: '/Whastapp.jpg', alt: 'Canal de WhatsApp', isLogo: false, link: '' },
  { src: '/Educacion_finaciera.jpg', alt: 'Educacion financiera', isLogo: false, link: '' },
  { src: 'https://cdn.laanonima.com/tripleimpacto/logo.png', alt: 'Triple Impacto', isLogo: true, link: 'https://www.laanonima.com.ar/empresa/triple-impacto/' },
];

export function SplashScreen({ onFinish }: SplashScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex(prev => {
          if (prev >= splashImages.length - 1) {
            clearInterval(timer);
            onFinish();
            return prev;
          }
          return prev + 1;
        });
        setFading(false);
      }, 400);
    }, 2500);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      <div className="relative w-full max-w-sm mx-auto px-6">
        <div className={`transition-opacity duration-400 ${fading ? 'opacity-0' : 'opacity-100'}`}>
          {splashImages[currentIndex].link ? (
            <a
              href={splashImages[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full aspect-[3/4] rounded-2xl shadow-xl overflow-hidden bg-white flex items-center justify-center cursor-pointer"
            >
              <img
                src={splashImages[currentIndex].src}
                alt={splashImages[currentIndex].alt}
                className={`w-full h-full ${splashImages[currentIndex].isLogo ? 'object-contain p-10' : 'object-cover'}`}
              />
            </a>
          ) : (
            <div className="w-full aspect-[3/4] rounded-2xl shadow-xl overflow-hidden bg-white flex items-center justify-center">
              <img
                src={splashImages[currentIndex].src}
                alt={splashImages[currentIndex].alt}
                className={`w-full h-full ${splashImages[currentIndex].isLogo ? 'object-contain p-10' : 'object-cover'}`}
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        {splashImages.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-brand-500 scale-125' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onFinish}
        className="mt-8 text-sm font-medium text-gray-500 hover:text-brand-500 transition-colors underline underline-offset-4"
      >
        Saltar
      </button>
    </div>
  );
}
