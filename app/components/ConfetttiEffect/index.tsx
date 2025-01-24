'use-client';

import { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  useEffect(() => {
    const duration = 10 * 1000; // 15 segundos
    const animationEnd = Date.now() + duration;

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval); // Finaliza a animação
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // Dispara confetes em duas direções
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });

      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // Limpeza quando o componente desmonta
    return () => clearInterval(interval);
  }, []);

  return null; // Nenhum elemento é renderizado, é apenas o efeito
};

export default ConfettiEffect;
