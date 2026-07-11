import { useState, useCallback } from 'react';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { PrivacyOverlay } from './components/PrivacyOverlay';
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { InterpreterScreen } from './screens/InterpreterScreen';
import { AvatarScreen } from './screens/AvatarScreen';
import { HelpScreen } from './screens/HelpScreen';
import { AboutScreen } from './screens/AboutScreen';
import diversidad from './assets/diversidad.jpg';

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const [screen, setScreen] = useState('welcome');

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  function renderScreen() {
    switch (screen) {
      case 'welcome':
        return <WelcomeScreen onNavigate={setScreen} />;
      case 'services':
        return <ServicesScreen onNavigate={setScreen} />;
      case 'interpreter':
        return <InterpreterScreen onNavigate={setScreen} />;
      case 'avatar':
        return <AvatarScreen onNavigate={setScreen} />;
      case 'help':
        return <HelpScreen />;
      case 'about':
        return <AboutScreen />;
      default:
        return <WelcomeScreen onNavigate={setScreen} />;
    }
  }

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <img
        src={diversidad}
        alt="Diversidad e Inclusión"
        className="fixed top-20 right-4 w-14 h-14 sm:w-16 sm:h-16 opacity-75 pointer-events-none select-none z-40"
      />
      <Header currentScreen={screen} onNavigate={setScreen} />
      <main className="flex-1 flex flex-col pb-20">
        {renderScreen()}
      </main>
      <Footer />
      <AccessibilityToolbar />
      <PrivacyOverlay />
    </div>
  );
}

function App() {
  return (
    <AccessibilityProvider>
      <AppContent />
    </AccessibilityProvider>
  );
}

export default App;
