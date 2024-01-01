function scrollToNextBlock(button) {
  const currentBlock = button.closest('.block1, .block2, .block3');
  const nextBlock = currentBlock.nextElementSibling;

  if (nextBlock) {
      currentBlock.classList.add('fadeOutAnimation');

      setTimeout(() => {
          currentBlock.classList.remove('fadeOutAnimation');
          nextBlock.style.backgroundColor = 'lightblue';
          nextBlock.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
  }
}
