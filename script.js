// ======== Scar & Ginger Chaos JS ========

// ---------- Scar Section ----------
const scarSection = document.getElementById('scar');
const scarButton = document.createElement('button');
scarButton.textContent = 'Scar Soul Blast 💥';
scarSection.appendChild(scarButton);

scarButton.addEventListener('click', () => {
    alert('Scar devours all nearby chaos souls! ⚡');
    // Flash effect
    document.body.style.backgroundColor = '#440000';
    setTimeout(() => {
        document.body.style.backgroundColor = '#111';
    }, 200);
});

// ---------- Ginger Section ----------
const gingerSection = document.getElementById('ginger');
const gingerButton = document.createElement('button');
gingerButton.textContent = 'Ginger Water Blast 💦';
gingerSection.appendChild(gingerButton);

gingerButton.addEventListener('click', () => {
    const colors = ['#00f', '#0ff', '#f0f', '#ff0', '#0f0'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Spawn water droplets
    for (let i = 0; i < 15; i++) {
        const drop = document.createElement('div');
        drop.style.position = 'absolute';
        drop.style.width = '15px';
        drop.style.height = '15px';
        drop.style.backgroundColor = '#00f';
        drop.style.borderRadius = '50%';
        drop.style.left = Math.random() * window.innerWidth + 'px';
        drop.style.top = Math.random() * window.innerHeight + 'px';
        drop.style.pointerEvents = 'none';
        document.body.appendChild(drop);

        // Drop animation
        let top = parseInt(drop.style.top);
        const interval = setInterval(() => {
            top += 5;
            drop.style.top = top + 'px';
            if (top > window.innerHeight) {
                clearInterval(interval);
                drop.remove();
            }
        }, 20);
    }
});

// ---------- Gallery Random Chaos ----------
const gallerySection = document.getElementById('gallery');
const chaosButton = document.createElement('button');
chaosButton.textContent = 'Trigger Random Chaos 🎉';
gallerySection.appendChild(chaosButton);

chaosButton.addEventListener('click', () => {
    const effects = ['🎵 Music Blast', '🌈 Rainbow Mode', '🔥 Firestorm', '💨 Speed Boost'];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    alert(`Random Chaos Activated: ${effect}!`);

    if (effect === '🌈 Rainbow Mode') {
        const rainbow = setInterval(() => {
            document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }, 200);
        setTimeout(() => clearInterval(rainbow), 5000);
    }
});

// ---------- Scroll Effects ----------
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    scarSection.style.transform = `rotate(${scrollY / 5}deg)`;
    gingerSection.style.transform = `translateX(${scrollY / 3}px)`;
});

// ---------- Key Press Chaos ----------
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'c') {
        alert('💀 CHAOS MODE ENGAGED 💀');
        document.body.style.backgroundColor = '#ff00ff';
    }
});
