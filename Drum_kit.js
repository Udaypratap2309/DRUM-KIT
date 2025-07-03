document.querySelectorAll('.drum').forEach(drum => {
  drum.addEventListener('click', () => {
    const sound = drum.getAttribute('data-sound');
    const audio = new Audio(`${sound}.mp3`);
    audio.play();
  });
});
