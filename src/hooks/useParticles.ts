import { useCallback } from 'react';
import gsap from 'gsap';

export const useParticles = () => {
    const triggerParticles = useCallback((x: number, y: number) => {
        const particleCount = 30;
        const colors = ['#ffb300', '#ffd700', '#ffaa00'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 5 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';

            document.body.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 60 + 20;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            gsap.to(particle, {
                x: tx,
                y: ty,
                opacity: 0,
                duration: Math.random() * 0.5 + 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    if (document.body.contains(particle)) {
                        document.body.removeChild(particle);
                    }
                }
            });
        }
    }, []);

    return { triggerParticles };
};
