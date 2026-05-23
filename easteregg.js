document.getElementById('easter-egg-trigger').addEventListener('click', function() {
  // Se l'easter egg è già sbloccato
  if (this.classList.contains('unlocked')) return;

  // Gestione contatore click
  if (!this.dataset.clicks) this.dataset.clicks = 0;
  this.dataset.clicks = parseInt(this.dataset.clicks) + 1;
  const clickCount = parseInt(this.dataset.clicks);

  // Avvia l'animazione di rotazione resettando la classe
  this.classList.remove('is-spinning');
  void this.offsetWidth; // Trucco CSS per forzare il reset dell'animazione nel DOM
  this.classList.add('is-spinning');

  // Al quinto click attiva l'easter egg e blocca i click futuri
  if (clickCount === 5) {
    this.classList.add('unlocked'); // Diventa dorata fissa e blocca i click successivi
    attivaEasterEgg();
  }
});

function attivaEasterEgg() {
  // 1. Mostra tutti i soprannomi
  const nicknames = document.querySelectorAll('.nickname');
  nicknames.forEach(el => el.style.display = 'inline');

  // 2. Mostra i membri extra e applica le loro classi speciali
  const secretMembers = document.querySelectorAll('.secret-member');
  secretMembers.forEach(el => {
    el.style.display = 'list-item';
    const classeSpeciale = el.getAttribute('data-class');
    if (classeSpeciale) el.classList.add(classeSpeciale);
  });

  // 3. Applica gli effetti speciali e il grassetto a me e Marco
  const leandro = document.getElementById('member-leandro');
  leandro.classList.add('golden-boss', 'ee-bold');

  const marco = document.getElementById('member-marco');
  marco.classList.add('nostalgic', 'ee-bold');

  // 4. Lancio di coriandoli
  avviaCoriandoli();
}

function avviaCoriandoli() {
  const colori = ['#2d6a4f', '#b8860b', '#d1d5db', '#ff0000', '#ffffff'];
  
  // media query per telefoni
  const isMobile = window.innerWidth < 768;
  
  for (let i = 0; i < 300; i++) {
    const coriandolo = document.createElement('div');
    
    coriandolo.style.position = 'fixed';
    coriandolo.style.width = Math.random() * 8 + 5 + 'px';
    coriandolo.style.height = Math.random() * 8 + 5 + 'px';
    coriandolo.style.backgroundColor = colori[Math.floor(Math.random() * colori.length)];
    coriandolo.style.zIndex = '9999';
    coriandolo.style.top = '-20px';
    coriandolo.style.borderRadius = Math.random() > 0.5 ? '50%' : '0px';
    
    let targetTranslateX;
    
    if (isMobile) {
      // MOBILE
      coriandolo.style.left = '50vw';
      targetTranslateX = (Math.random() * 90 - 45) + 'vw';
    } else {
      // DESKTOP
      if (Math.random() > 0.5) {
        coriandolo.style.left = Math.random() * 15 + 'vw';
      } else {
        coriandolo.style.left = (Math.random() * 15 + 85) + 'vw';
      }
      targetTranslateX = (Math.random() * 40 - 20) + 'px';
    }

    document.body.appendChild(coriandolo);

    const durata = Math.random() * 3000 + 2000;
    
    coriandolo.animate([
      { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
      { transform: `translateY(105vh) translateX(${targetTranslateX}) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: durata,
      easing: isMobile ? 'cubic-bezier(.1, .8, .25, 1)' : 'cubic-bezier(.25,.46,.45,.94)',
      iterations: 1
    });

    setTimeout(() => {
      coriandolo.remove();
    }, durata);
  }
}