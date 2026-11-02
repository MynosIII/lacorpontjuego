# Tara contra Ravenrock

Juego web de carreras virtuales. Sos Tara: corrés cinco carreras, cada una con un minijuego distinto, y tu posición media decide si llegás a enfrentar a Bern Ravenrock.

- 3 finales: Tara gana, Bern gana, Tara no corre.
- Un solo archivo: `index.html`. Abrilo en el navegador para jugar.
- Las pantallas de lore son páginas de cómic (el prólogo se lee primero en texto y después en cómic) en `comics/` (WebP, 1448 × 1086, formato 4:3), generadas con ChatGPT a partir de una hoja de personajes común.
- Al entrar, una pantalla de inicio invita a elegir entre el juego, el radioteatro y el storyboard. Al terminar el juego aparece un cierre (`fin.js`) con un botón al [dashboard de F1](https://f1dashboardtransmedia.vercel.app/) y tres opciones: volver a jugar, el radioteatro (`radioteatro.html`) y el storyboard (`storyboard.html`). Cada opción termina con su propio texto de recomendación.
