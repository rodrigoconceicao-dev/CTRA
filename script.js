const particlesContainer = document.getElementById('particles');
const particleCount = 60;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const sizes = ['small', 'medium', 'large'];
    particle.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);

    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
    particlesContainer.appendChild(particle);
}

setTimeout(() => {
    document.getElementById('loaderContainer').classList.add('fade-out');
    setTimeout(() => {
        window.location.href = 'pages/index.html';
    }, 800);
}, 3800);