import { SignLanguageFrame } from '../components/SignLanguageFrame';

interface AvatarScreenProps {
  onNavigate: (screen: string) => void;
}

export function AvatarScreen({ onNavigate }: AvatarScreenProps) {
  return (
    <SignLanguageFrame
      src="https://avatar.dillo.ai/"
      title="Avatar de lengua de señas"
      onBack={() => onNavigate('services')}
    />
  );
}
