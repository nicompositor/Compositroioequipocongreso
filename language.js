(() => {
  const translations = {
    'nicolas-bedoya.html': `I am the creator of <strong>El Compositorio</strong>, a space where I compose soundtracks rooted in our folklore. I explore the history and value of each rhythm to merge the richness of Colombian identities with the language of cinema. I am passionate about scoring stories; if no one calls me to create them, I invent them myself. I firmly believe in the power of collaborative work and in leading experiences that bring brilliant minds together to achieve high-impact projects. Through El Compositorio, I champion and strengthen collective creation in Colombia.`,
    'giuseppe-ramirez-paez.html': `I do not believe music exists to explain a story, but to reveal what a creative vision cannot yet express. I compose in search of the point where the creator’s intention meets the audience’s experience—where an idea stops being a concept and becomes something lived. Orchestra, harmony, and melody are not ends in themselves, but the language that allows a vision to transcend imagination and become shareable. My work is to listen for what a story does not yet know how to say and give it a voice of its own.`,
    'helen-nicole-chaparro.html': `I am interested in reconnecting with play as a creative practice, moving beyond the boundaries of academic tradition to make room for curiosity, experimentation, and collaboration. Vocal exploration and hybrid electronic practices are central to my work because they open new possibilities for interaction and expression. My compositional language is also deeply influenced by traditional music: I perform music from the Colombian Caribbean and Brazilian samba-enredo, influences that coexist with my interest in transparent, fragmented textures.`,
    'juan-camilo-usaquen-pinilla.html': `I compose to tell stories. My purpose in making music is to immerse the audience in the audiovisual experience and connect them with what they see. I do not only seek to portray emotions or sensations; I want listeners to understand events through my music without depending on the image. I am passionate about the orchestral palette, through which I explore timbre, harmony, and texture.`,
    'chiara-valentina-castano-serrato.html': `I compose from sensations. I enjoy playing with different sonorities, including experimental music. I am not afraid to incorporate unconventional sounds; I believe beauty can be found in elements of everyday life. What matters is that they convey what lies beneath the surface and, in audiovisual composition, immerse viewers in the story so they can disconnect from the outside world for a moment.`,
    'maria-jose-rosas.html': `I am passionate about telling stories through sound. Regardless of the medium I am working in—film, theater, and beyond—my music seeks to invite people into the experience of listening. Sound connects us with emotional places different from those we usually inhabit, and I am deeply interested in guiding people there through their own life experiences.`,
    'valentina-torres.html': `<em>I firmly believe that the soul of a film lives at the point where its story and sound meet.</em> For me, everything begins at the piano—where I learned that every melody has a story to tell—and expands into orchestral or hybrid textures according to the narrative. I love the final mixing stage, ensuring that the soundtrack remains intact, pure, and moving from the first note through final delivery. I enjoy transforming emotion into landscapes that endure…`,
    'sara-lucia-morato.html': `Music is a form of artistic expression, and composing is one of the many ways I create art. Like a painting filled with textures, light, shadows, and even illusions, music can create deep, immersive landscapes that not only tell stories but also evoke emotions and memories in the listener. Composition is how I write the diary of my music and my life.`,
    'andres-feuillet.html': `My artistic search focuses on creating textures that give each story’s universe a unique identity, using a contemporary tonal language and a hybrid aesthetic in which timbre, space, and resonance are the main vehicles of the narrative. Melody emerges as a sequence of minimal motifs and gestures, appearing only when the story calls for them. With a career shaped by international collaborations, I find the essence of my process in creating alongside directors, musicians, and performers—especially during recording sessions, when the music comes alive. Rather than pursuing complexity, I seek emotional honesty: music that does not merely accompany a story, but builds the world it inhabits and allows the audience to experience it from within.`,
    'santiago-gallon-marin.html': `My innate indecision has led me to explore many different genres and compositional styles. When I encounter a story that excites and intrigues me, I work tirelessly until I am satisfied with the result. I always try to bring a personal touch to every project in which I participate.`,
    'omar-parada.html': `My greatest strength is creating melodies that stay in the audience’s mind—the kind that return on their own when a scene is remembered. I love video games and anime, and that world taught me that the most effective music is not always the most complex, but the music that adapts precisely to what the moment needs. To me, limitations are not an obstacle: they are the best creative fuel.`,
    'victor-santafe.html': `I enjoy integrating different styles into my orchestration and compositions. I often believe that “more is more,” and I use resourcefulness to make combinations work that normally would not. I see music as something similar to cooking: it requires some knowledge, but the most important ingredient is good taste.`
  };

  const page = location.pathname.split('/').pop() || 'index.html';
  const button = document.createElement('button');
  button.className = 'language-toggle';
  button.type = 'button';
  button.setAttribute('aria-label', 'Cambiar idioma');
  document.body.appendChild(button);

  const subtitle = document.querySelector('.header-brand p');
  const bio = document.querySelector('.bio');
  const eyebrow = document.querySelector('.eyebrow');
  const portfolio = document.querySelector('.button.primary');
  const back = document.querySelector('.button.secondary');
  const originals = {
    subtitle: subtitle?.innerHTML,
    bio: bio?.innerHTML,
    eyebrow: eyebrow?.innerHTML,
    portfolio: portfolio?.innerHTML,
    back: back?.innerHTML
  };

  function applyLanguage(language) {
    const english = language === 'en';
    document.documentElement.lang = english ? 'en' : 'es';
    button.textContent = english ? 'Español' : 'English';
    button.setAttribute('aria-label', english ? 'Cambiar a español' : 'Switch to English');
    if (subtitle) subtitle.textContent = english ? 'Conference Team' : originals.subtitle;
    if (bio && translations[page]) bio.innerHTML = english ? translations[page] : originals.bio;
    if (eyebrow) eyebrow.textContent = english ? (eyebrow.textContent === 'Compositora' || originals.eyebrow === 'Compositora' ? 'Composer' : 'Composer') : originals.eyebrow;
    if (portfolio) portfolio.textContent = english ? 'View portfolio' : originals.portfolio;
    if (back) back.textContent = english ? 'Back to home' : originals.back;
    try { localStorage.setItem('compositorio-language', language); } catch (_) {}
  }

  let saved = 'es';
  try { saved = localStorage.getItem('compositorio-language') || 'es'; } catch (_) {}
  applyLanguage(saved);
  button.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'es' ? 'en' : 'es'));
})();
