anime({
    targets: 'header h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
  });
  
  // Animación para los párrafos
  anime({
    targets: 'p',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
    delay: anime.stagger(200),
  });
  
  // Animación para la imagen
  anime({
    targets: 'img',
    translateY: [50, 0],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 1000,
  });
  