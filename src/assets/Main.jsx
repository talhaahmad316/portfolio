export function initAnimations() {

  const cur = document.getElementById('cur');
  const ring = document.getElementById('ring');

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function tick() {
    if (cur && ring) {
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';

      rx += (mx - rx) * .12;
      ry += (my - ry) * .12;

      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
    }

    requestAnimationFrame(tick);
  }

  tick();

  // Nav scroll
  const handleScroll = () => {
    const nav = document.getElementById('nav');
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Reveal observer
  const obs = new IntersectionObserver(entries =>
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('up');
    }),
    { threshold: 0.1 }
  );

  document.querySelectorAll('.rv,.rl,.rr').forEach(el => obs.observe(el));

  // Skill observer
  const sobs = new IntersectionObserver(entries =>
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('anim');
    }),
    { threshold: 0.3 }
  );

  document.querySelectorAll('.sc').forEach(el => sobs.observe(el));
}