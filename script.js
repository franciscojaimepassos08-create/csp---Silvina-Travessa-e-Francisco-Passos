const WEDDING = {
  date: '2026-12-24T09:00:00',
  whatsapp: '258842820764', // confirmar/alterar para o número que receberá as confirmações
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sala+Magna+Universidade+Lurio+Nampula+Mocambique',
  musicUrl: 'audio/musica.mp3'
};
const $ = id => document.getElementById(id);
const dateObj = new Date(WEDDING.date);
const dateText = date => new Intl.DateTimeFormat('pt-PT',{day:'numeric',month:'long',year:'numeric'}).format(date);
$('hero-date').textContent = dateText(dateObj);
$('month').textContent = new Intl.DateTimeFormat('pt-PT',{month:'long'}).format(dateObj).toUpperCase();
$('day').textContent = String(dateObj.getDate()).padStart(2,'0');
$('weekday').textContent = new Intl.DateTimeFormat('pt-PT',{weekday:'long'}).format(dateObj).toUpperCase();
$('year').textContent = dateObj.getFullYear();
$('map-link').href = WEDDING.mapUrl;
function countdown(){
  const diff = dateObj.getTime() - Date.now();
  if(diff <= 0){ ['days','hours','minutes','seconds'].forEach(id => $(id).textContent='0'); return; }
  $('days').textContent = Math.floor(diff/86400000);
  $('hours').textContent = String(Math.floor(diff/3600000)%24).padStart(2,'0');
  $('minutes').textContent = String(Math.floor(diff/60000)%60).padStart(2,'0');
  $('seconds').textContent = String(Math.floor(diff/1000)%60).padStart(2,'0');
}
countdown(); setInterval(countdown,1000);
const audio = $('background-music'), musicButton = $('music-button');
audio.src = WEDDING.musicUrl;
audio.loop = true;
audio.preload = 'none';
audio.volume = 0.72;

function setMusicButton(playing) {
  musicButton.textContent = playing ? 'Ⅱ' : '♫';
  musicButton.classList.toggle('playing', playing);
  musicButton.classList.add('is-visible');
  musicButton.setAttribute('aria-pressed', String(playing));
  musicButton.setAttribute('aria-label', playing ? 'Pausar música' : 'Reproduzir música');
}
async function startMusic() {
  musicButton.classList.add('is-visible');
  try {
    await audio.play();
    setMusicButton(true);
  } catch (error) {
    setMusicButton(false);
    musicButton.title = 'Toca aqui para iniciar a música';
  }
}
$('open-invite').addEventListener('click', () => {
  musicButton.classList.add('is-visible');
  $('convite').scrollIntoView({behavior:'smooth', block:'start'});
  startMusic();
});

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      sectionObserver.unobserve(entry.target);
    }
  }), {threshold: .12, rootMargin: '0px 0px -6% 0px'});
  document.querySelectorAll('.reveal').forEach(el => sectionObserver.observe(el));

  const timelineObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('timeline-visible');
      timelineObserver.unobserve(entry.target);
    }
  }), {threshold: .18});
  document.querySelectorAll('.timeline-item').forEach(el => timelineObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  document.querySelectorAll('.timeline-item').forEach(el => el.classList.add('timeline-visible'));
}

musicButton.addEventListener('click', async () => {
  if (audio.paused) await startMusic();
  else {
    audio.pause();
    setMusicButton(false);
  }
});
audio.addEventListener('play', () => setMusicButton(true));
audio.addEventListener('pause', () => {
  if (!audio.ended) setMusicButton(false);
});

$('rsvp-form').addEventListener('submit',event=>{
 event.preventDefault();
 const name = $('guest-name').value.trim(), phone = $('guest-phone').value.trim(), attendance = $('attendance').value;
 const message = `Olá! Aqui é ${name}. O meu contacto de WhatsApp é ${phone}. ${attendance}. Estou a responder ao convite de casamento de Silvina Saide Travessa e Francisco Jaime Francisco Passos, marcado para 24 de dezembro de 2026.`;
 window.open(`https://wa.me/${WEDDING.whatsapp}?text=${encodeURIComponent(message)}`,'_blank','noopener');
});

