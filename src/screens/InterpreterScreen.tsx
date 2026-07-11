import { SignLanguageFrame } from '../components/SignLanguageFrame';

interface InterpreterScreenProps {
  onNavigate: (screen: string) => void;
}

export function InterpreterScreen({ onNavigate }: InterpreterScreenProps) {
  return (
    <SignLanguageFrame
      src="https://app.dillo.ai/interprete"
      title="Intérprete de lengua de señas"
      onBack={() => onNavigate('services')}
    />
  );
}
