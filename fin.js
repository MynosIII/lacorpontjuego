/* Bloque de cierre compartido: texto, botón grande al dashboard y las tres opciones.
   Lo usan el juego (al terminar un final), el radioteatro y el storyboard. */
(function () {
  const DASHBOARD = 'https://f1dashboardtransmedia.vercel.app/';

  const VARIANTES = {
    juego: {
      eyebrow: 'Más allá del juego',
      titulo: 'Con autos iguales, gana el mejor. En la Fórmula 1 casi nunca son iguales.',
      texto: 'En la final, Tara y Bern corrieron con el mismo reglaje, así que ganó quien manejó mejor. En la Fórmula 1 real eso no pasa: cada equipo tiene su auto, su presupuesto y el reglamento de su época. Por eso armamos una página que intenta responder la pregunta de siempre: quién fue realmente mejor que quién.',
      cta: 'Descubrí quién fue mejor de verdad'
    },
    juegoSinFinal: {
      eyebrow: 'Más allá del juego',
      titulo: 'Con autos iguales, gana el mejor. En la Fórmula 1 casi nunca son iguales.',
      texto: 'Si Tara llegaba a la final, iba a correr contra Bern con el mismo reglaje: ganaba quien manejara mejor. En la Fórmula 1 real eso no pasa: cada equipo tiene su auto, su presupuesto y el reglamento de su época. Por eso armamos una página que intenta responder la pregunta de siempre: quién fue realmente mejor que quién.',
      cta: 'Descubrí quién fue mejor de verdad'
    },
    radio: {
      eyebrow: 'Después del radioteatro',
      titulo: 'Las reglas también corren.',
      texto: 'La Fórmula 1 cambia de reglamento casi todas las temporadas, y el mejor piloto no siempre es el que sale beneficiado. Por eso construimos un modelo estadístico que separa el talento del auto y predice quién debería estar adelante.',
      cta: 'Explorá el modelo y el predictor'
    },
    story: {
      eyebrow: 'Después del storyboard',
      titulo: 'No todo se decide en la pista.',
      texto: 'En la Fórmula 1 también hay dinero, poder y decisiones que no salen en la transmisión. Para seguir el desarrollo de los equipos y ver quién termina por encima, o por debajo, de donde su auto debería dejarlo, entrá a nuestra página.',
      cta: 'Ver el desarrollo de los equipos'
    }
  };

  const OPCIONES = [
    { id: 'juego', href: './', tag: 'Volver a jugar', titulo: 'Otra temporada contra Ravenrock', meta: '5 carreras y una final' },
    { id: 'radio', href: 'radioteatro.html', tag: 'Radioteatro', titulo: 'Cómo nació la Fórmula 1 Virtual', meta: 'Escuchar · 50 s' },
    { id: 'story', href: 'storyboard.html', tag: 'Storyboard', titulo: 'Cómo se descubrió la conspiración de Bern', meta: 'Leer · 9 viñetas' }
  ];

  const CSS = `
  .fin{display:flex;flex-direction:column;gap:18px;margin-block:28px 28px}
  .fin-eyebrow{font-family:var(--f-mono,monospace);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--teal,#38cfc6)}
  .fin-titulo{font-family:var(--f-display,sans-serif);font-weight:800;font-size:clamp(1.6rem,4.6vw,2.4rem);line-height:1.05;text-transform:uppercase;margin:0;text-wrap:balance;color:var(--ink,#e7ebf0)}
  .fin-texto{max-width:62ch;margin:0;color:var(--ink,#e7ebf0);line-height:1.6}
  .fin-cta{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 22px;border-radius:8px;background:var(--amber,#ffb81c);color:#1a1300;text-decoration:none;font-family:var(--f-display,sans-serif);font-weight:800;font-size:clamp(1.15rem,3.2vw,1.5rem);letter-spacing:.06em;text-transform:uppercase;box-shadow:0 10px 30px rgba(255,184,28,.18);transition:transform .15s ease,filter .15s ease}
  .fin-cta:hover{filter:brightness(1.06);transform:translateY(-2px)}
  .fin-cta:focus-visible{outline:3px solid var(--teal,#38cfc6);outline-offset:3px}
  .fin-cta small{display:block;font-family:var(--f-mono,monospace);font-weight:500;font-size:.68rem;letter-spacing:.08em;text-transform:none;opacity:.75;margin-top:4px}
  .fin-cta .flecha{font-size:1.6em;line-height:1}
  .fin-sub{font-family:var(--f-mono,monospace);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted,#8b97a7);margin-top:6px}
  .fin-opciones{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}
  .fin-op{display:flex;flex-direction:column;gap:6px;padding:16px;border:1px solid var(--line,#2b3441);border-radius:8px;background:var(--panel,#1a2029);color:var(--ink,#e7ebf0);text-decoration:none;text-align:left;font:inherit;cursor:pointer;transition:border-color .15s ease,transform .15s ease}
  .fin-op:hover{border-color:var(--amber,#ffb81c);transform:translateY(-2px)}
  .fin-op:focus-visible{outline:2px solid var(--teal,#38cfc6);outline-offset:3px}
  .fin-op .tag{font-family:var(--f-mono,monospace);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--amber,#ffb81c)}
  .fin-op .t{font-family:var(--f-display,sans-serif);font-weight:600;font-size:1.15rem;line-height:1.15;text-transform:uppercase;letter-spacing:.02em}
  .fin-op .m{font-size:.8rem;color:var(--muted,#8b97a7)}
  @media (prefers-reduced-motion:reduce){.fin-cta,.fin-op{transition:none}}`;

  function css() {
    if (document.getElementById('fin-css')) return;
    const s = document.createElement('style'); s.id = 'fin-css'; s.textContent = CSS; document.head.appendChild(s);
  }

  /* variante: 'juego' | 'radio' | 'story'. actual: opción que no se ofrece (la que se acaba de terminar).
     onReplay: si se pasa, "Volver a jugar" reinicia sin recargar la página. */
  window.renderFin = function (el, variante, { actual = null, onReplay = null } = {}) {
    css();
    const v = VARIANTES[variante];
    const ops = OPCIONES.filter(o => o.id !== actual || o.id === 'juego');
    el.innerHTML = `<section class="fin" aria-label="Qué hacer ahora">
      <div class="fin-eyebrow">${v.eyebrow}</div>
      <h2 class="fin-titulo">${v.titulo}</h2>
      <p class="fin-texto">${v.texto}</p>
      <a class="fin-cta" href="${DASHBOARD}" target="_blank" rel="noopener"><span>${v.cta}<small>f1dashboardtransmedia.vercel.app</small></span><span class="flecha" aria-hidden="true">→</span></a>
      <div class="fin-sub">O seguí con la historia</div>
      <div class="fin-opciones">${ops.map(o => o.id === 'juego' && onReplay
        ? `<button type="button" class="fin-op" data-replay><span class="tag">${o.tag}</span><span class="t">${o.titulo}</span><span class="m">${o.meta}</span></button>`
        : `<a class="fin-op" href="${o.href}"><span class="tag">${o.tag}</span><span class="t">${o.titulo}</span><span class="m">${o.meta}</span></a>`).join('')}</div>
    </section>`;
    const r = el.querySelector('[data-replay]'); if (r) r.addEventListener('click', onReplay);
  };
})();
