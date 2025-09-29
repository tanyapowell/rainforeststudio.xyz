(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const firefly = document.createElement('div');
  Object.assign(firefly.style, {
    position: 'fixed',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    pointerEvents: 'none',
    mixBlendMode: 'screen',
    zIndex: 9999,
    background: 'radial-gradient(circle, rgba(255,255,210,.95), rgba(255,255,210,.2) 60%, transparent 70%)',
    boxShadow: '0 0 24px rgba(255, 240, 180, .7)',
    opacity: 0,
    transform: 'translate(-999px, -999px)',
    transition: 'transform 130ms var(--rs-ease), opacity 400ms ease-out'
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(firefly);
  });

  let raf = null;
  window.addEventListener('pointermove', (event) => {
    if (!firefly.isConnected) return;
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      firefly.style.opacity = 1;
      firefly.style.transform = `translate(${event.clientX - 5}px, ${event.clientY - 5}px)`;
    });
  });

  window.addEventListener('pointerout', () => {
    firefly.style.opacity = 0;
  });
})();
