function changeDirection(direction) {
  const container = document.querySelector('.container');
  const blocks = document.querySelectorAll('.bloco');

  container.style.transition = 'flex-direction 0.5s ease';
  container.style.flexDirection = direction;

  // Adicione a classe de animação aos blocos
  blocks.forEach((block, index) => {
    setTimeout(() => {
      block.classList.add('animate');
      block.style.animationName = 'fadeIn';
    }, index * 100); // Delay para criar um efeito de entrada escalonado
  });

  // Remova a classe de animação e redefina a animação após 0.5 segundos
  setTimeout(() => {
    container.style.transition = '';
    blocks.forEach((block) => {
      block.classList.remove('animate');
      block.style.animationName = '';
    });
  }, 500);
}
