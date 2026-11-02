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
  .cierre{display:flex;flex-direction:column;gap:18px;margin-block:28px 28px}
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
  @media (prefers-reduced-motion:reduce){.fin-cta,.fin-op{transition:none}}
  .hub{display:flex;flex-direction:column;gap:20px;padding-block:8px 24px}
  .hub-lead{max-width:60ch;margin:0;color:var(--ink,#e7ebf0);font-size:1.05rem}
  .hub-grid{display:grid;grid-template-columns:1.25fr 1fr 1fr;grid-auto-rows:1fr;gap:12px}
  @media (max-width:720px){.hub-grid{grid-template-columns:1fr;grid-auto-rows:auto}}
  .hub-card{position:relative;display:flex;flex-direction:column;gap:8px;min-height:190px;padding:20px;border:1px solid var(--line,#2b3441);border-radius:10px;background:var(--panel,#1a2029);color:var(--ink,#e7ebf0);text-decoration:none;text-align:left;font:inherit;cursor:pointer;overflow:hidden;transition:border-color .15s ease,transform .15s ease}
  .hub-card:hover{border-color:var(--amber,#ffb81c);transform:translateY(-3px)}
  .hub-card:focus-visible{outline:3px solid var(--teal,#38cfc6);outline-offset:3px}
  .hub-card.main{background:var(--amber,#ffb81c);color:#1a1300;border-color:var(--amber,#ffb81c)}
  .hub-card .n{font-family:var(--f-mono,monospace);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--amber,#ffb81c)}
  .hub-card.main .n{color:#1a1300;opacity:.7}
  .hub-card .t{font-family:var(--f-display,sans-serif);font-weight:800;font-size:clamp(1.4rem,3.4vw,1.9rem);line-height:1;text-transform:uppercase}
  .hub-card .d{font-size:.9rem;line-height:1.45;opacity:.85;flex:1}
  .hub-card .go{font-family:var(--f-display,sans-serif);font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:1rem}
  .hub-card.photo{background-size:cover;background-position:center}
  .hub-card.photo::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(17,21,28,.35),rgba(17,21,28,.92))}
  .hub-card.photo > *{position:relative}
  /* tarjeta ancha al dashboard: ocupa las tres columnas y tiene el alto de las de arriba */
  .hub-card.wide{grid-column:1/-1;flex-direction:row;align-items:center;justify-content:space-between;gap:24px;padding:24px 28px;border-color:var(--teal,#38cfc6);background-size:cover;background-position:center 60%}
  .hub-card.wide::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(17,21,28,.96) 0%,rgba(17,21,28,.82) 55%,rgba(17,21,28,.45) 100%)}
  .hub-card.wide > *{position:relative}
  .hub-card.wide:hover{border-color:var(--teal,#38cfc6);box-shadow:0 0 0 1px var(--teal,#38cfc6),0 14px 40px rgba(56,207,198,.18)}
  .hub-card.wide .n{color:var(--teal,#38cfc6)}
  .hub-card.wide .txt{display:flex;flex-direction:column;gap:10px;max-width:60ch}
  .hub-card.wide .t{font-size:clamp(1.7rem,4.4vw,2.6rem)}
  .hub-card.wide .d{flex:none;font-size:1rem}
  .hub-card.wide .btn-dash{flex:none;display:flex;align-items:center;gap:12px;padding:16px 22px;border-radius:8px;background:var(--teal,#38cfc6);color:#06201e;font-family:var(--f-display,sans-serif);font-weight:800;font-size:1.15rem;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap}
  .hub-card.wide .btn-dash span{font-size:1.5em;line-height:1}
  @media (max-width:720px){.hub-card.wide{flex-direction:column;align-items:flex-start}.hub-card.wide .btn-dash{white-space:normal}}`;

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
    el.innerHTML = `<section class="cierre" aria-label="Qué hacer ahora">
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

  /* Pantalla de entrada: invita a explorar las tres partes de la historia. onPlay arranca el juego. */
  window.renderHub = function (el, onPlay) {
    css();
    el.innerHTML = `<section class="hub" aria-label="Elegí por dónde empezar">
      <div class="fin-eyebrow">Fórmula 1 Virtual · Liga Ravenrock</div>
      <h1 class="fin-titulo" style="font-size:clamp(2.4rem,8vw,4.2rem)">Tara contra Ravenrock</h1>
      <p class="hub-lead">Una historia de carreras, trampas y poder contada en tres partes. Empezá por donde quieras: cada una muestra algo que las otras no.</p>
      <div class="hub-grid">
        <button type="button" class="hub-card main" data-play>
          <span class="n">01 · Juego</span>
          <span class="t">Corré como Tara</span>
          <span class="d">Cinco carreras y una final contra Bern Ravenrock. Tu posición media decide cuál de los tres finales ves.</span>
          <span class="go">Jugar →</span>
        </button>
        <a class="hub-card photo" href="radioteatro.html" style="background-image:url(extras/fondo-1.webp)">
          <span class="n">02 · Radioteatro</span>
          <span class="t">Cómo nació la Fórmula 1 Virtual</span>
          <span class="d">Escuchalo con auriculares: 50 segundos.</span>
          <span class="go">Escuchar →</span>
        </a>
        <a class="hub-card photo" href="storyboard.html" style="background-image:url(extras/storyboard.jpg);background-position:center 20%">
          <span class="n">03 · Storyboard</span>
          <span class="t">Cómo se descubrió la conspiración</span>
          <span class="d">Nueve viñetas sobre quienes encontraron las pruebas contra Bern.</span>
          <span class="go">Leer →</span>
        </a>
        <a class="hub-card wide" href="${DASHBOARD}" target="_blank" rel="noopener" style="background-image:url(extras/fondo-4.webp)">
          <span class="txt">
            <span class="n">Fórmula 1 real · Dashboard</span>
            <span class="t">¿Quién fue mejor de verdad?</span>
            <span class="d">En la Fórmula 1 real los autos nunca son iguales. Nuestro dashboard separa el talento del auto y compara pilotos de todas las épocas.</span>
          </span>
          <span class="btn-dash">Ver el dashboard <span aria-hidden="true">→</span></span>
        </a>
      </div>
    </section>`;
    el.querySelector('[data-play]').addEventListener('click', onPlay);
  };
})();
