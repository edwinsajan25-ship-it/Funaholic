const chaosButton = document.getElementById('chaosButton');
const playground = document.getElementById('playground');

chaosButton.addEventListener('click', () => {
  // Create a random shape
  const box = document.createElement('div');
  const size = Math.random() * 100 + 30;
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
  box.style.position = 'absolute';
  box.style.left = `${Math.random() * (window.innerWidth - size)}px`;
  box.style.top = `${Math.random() * (window.innerHeight - size)}px`;
  box.style.borderRadius = `${Math.random() * 50}%`;
  box.style.transition = 'all 1s ease';

  // Add random rotation & scale animation
  setTimeout(() => {
    box.style.transform = `rotate(${Math.random()*360}deg) scale(${Math.random()*2 + 0.5})`;
  }, 50);

  playground.appendChild(box);

  // Remove after 5 seconds to avoid clutter
  setTimeout(() => {
    if(playground.contains(box)) playground.removeChild(box);
  }, 5000);
});
