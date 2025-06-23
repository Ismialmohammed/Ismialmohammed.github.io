// --- Typewriter Effect ---
const phrases = [
  "Data-driven. Detail-obsessed. Dangerously curious.",
  "Making football stats speak.",
  "Strategic insights, beautifully explained.",
  "Just another analyst bending reality with Python."
];

let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loop() {
  const element = document.getElementById('typewriter');
  element.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speed = isEnd ? 1500 : isDeleting ? 50 : 100;
  setTimeout(loop, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  loop();
});

// --- Particle Background ---
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('particles.js loaded');
});
