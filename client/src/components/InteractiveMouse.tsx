import { useEffect, useRef } from 'react';

export default function InteractiveMouse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let animationId: number;
    const circles: {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      radius: number;
      opacity: number;
    }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      circles.push({
        x: mouseX,
        y: mouseY,
        targetX: mouseX,
        targetY: mouseY,
        radius: 30,
        opacity: 1,
      });

      if (circles.length > 20) circles.shift();
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle) => {
        circle.radius += 2;
        circle.opacity -= 0.04;

        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          circle.radius
        );
        gradient.addColorStop(0, `hsla(130, 50%, 28%, ${circle.opacity * 0.8})`);
        gradient.addColorStop(0.5, `hsla(20, 85%, 55%, ${circle.opacity * 0.4})`);
        gradient.addColorStop(1, `hsla(130, 50%, 28%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `hsla(130, 50%, 28%, ${circle.opacity * 0.5})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />;
}
