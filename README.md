# La Anónima - Atención Inclusiva

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-k9thu3pe)

Plataforma web de atención inclusiva para clientes sordos e hipoacúsicos de La Anónima. Permite comunicarse con el personal del local en lengua de señas argentina (LSA) mediante un intérprete y un avatar en tiempo real, además de accesos rápidos con mensajes predefinidos y herramientas de accesibilidad.

## Funcionalidades

- **Intérprete de señas**: videollamada en tiempo real para comunicarse con el equipo (tecnología [Dillo AI](https://dillo.ai)).
- **Respuestas en señas**: avatar animado que traduce las respuestas del equipo a LSA.
- **Accesos rápidos**: botones con frases predefinidas (ayuda en caja, medios de pago, reclamos, ubicación de productos, etc.) que se muestran en pantalla en texto grande y se leen en voz alta, para que la persona que atiende pueda entender sin necesidad de escribir o hacer señas.
- **Barra de accesibilidad**: modo privado, alto contraste, texto grande y lectura en voz alta (TTS), disponible en toda la app.
- **Manejo de conexión**: los módulos de intérprete/avatar detectan si el servicio no carga (sin internet o caído) y muestran un mensaje claro con opción de reintentar.

## Stack técnico

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) como bundler y dev server
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [lucide-react](https://lucide.dev/) para íconos
- Web Speech API (`speechSynthesis`) del navegador para texto a voz

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Levanta el servidor en `http://localhost:5173` (o el siguiente puerto libre). El servidor está configurado con `host: true`, por lo que también queda accesible desde otros dispositivos de la misma red Wi-Fi (por ejemplo, un celular) usando la IP local que Vite muestra en la terminal (ej. `http://192.168.0.50:5173`) — útil para probar el diseño responsive y los permisos de cámara/micrófono en un dispositivo real.

## Otros scripts

| Comando | Descripción |
|---|---|
| `npm run build` | Genera el build de producción en `dist/` |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Corre ESLint sobre el proyecto |
| `npm run typecheck` | Verifica tipos de TypeScript sin emitir archivos |

## Estructura del proyecto

```
src/
  components/   Componentes compartidos (Header, Footer, barra de accesibilidad, etc.)
  context/      Contexto de accesibilidad (alto contraste, texto grande, TTS, modo privado)
  screens/      Pantallas de la app (bienvenida, servicios, intérprete, avatar, ayuda, acerca de)
```

## Notas sobre accesibilidad y dispositivos

- La lectura en voz alta usa la voz en español disponible en el sistema operativo/navegador; su calidad depende del dispositivo (en Windows se puede mejorar instalando una voz "Natural" en Configuración → Hora e idioma → Voz).
- El reconocimiento de voz (usado dentro del avatar de Dillo AI) depende de que el navegador soporte la Web Speech API `SpeechRecognition`, con soporte limitado o nulo en algunos navegadores/dispositivos.
