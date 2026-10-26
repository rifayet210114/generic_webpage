/* ============================================================================
   lets-scroll (single-video edition)
   ----------------------------------------------------------------------------
   Framework-agnostic. Vanilla JS, zero dependencies.
   ========================================================================== */

function mountLetsScroll(container, config) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const smallMQ = window.matchMedia('(max-width: 860px)');
  const isMobile = () => coarse || smallMQ.matches;

  const SECTIONS = config.sections || [];
  const N = SECTIONS.length;
  if (!N) return;

  const SCROLL_FACTOR = config.scrollFactor || 1.2; // vh per second of video
  const CROSSFADE = (config.crossfade != null) ? config.crossfade : 0.8; // transition width in seconds

  injectCSS();
  container.classList.add('sw-root');

  // ---- DOM ----
  const sky = el('div', 'sw-sky');
  if (config.atmosphere !== false) {
    sky.appendChild(el('div', 'sw-sky__grad'));
    sky.appendChild(el('div', 'sw-sky__glow'));
  }
  const particles = el('div', 'sw-particles'); 
  sky.appendChild(particles);

  const scrollbar = el('div', 'sw-scrollbar');
  const scrollbarFill = el('span'); 
  scrollbar.appendChild(scrollbarFill);

  const topbar = el('div', 'sw-topbar');
  if (config.brand) {
    const brand = el('a', 'sw-brand'); 
    brand.href = (config.brand.href || '#');
    brand.appendChild(el('span', 'sw-brand__mark'));
    const nm = el('span', 'sw-brand__name'); 
    nm.textContent = config.brand.name || ''; 
    brand.appendChild(nm);
    topbar.appendChild(brand);
  }
  const nav = el('nav', 'sw-nav'); 
  if (config.nav !== false) topbar.appendChild(nav);

  const stage = el('div', 'sw-stage');
  const copylayer = el('div', 'sw-copylayer');
  const route = el('div', 'sw-route');
  const hint = el('div', 'sw-hint');
  const hintText = el('span'); 
  hintText.textContent = config.hint || 'scroll'; 
  hint.appendChild(hintText);
  hint.appendChild(el('i'));
  const track = el('div', 'sw-track');

  [sky, scrollbar, topbar, stage, copylayer, route, hint, track].forEach(n => container.appendChild(n));

  const modal = el('div', 'sw-modal');
  modal.innerHTML = `
    <div class="sw-modal__container">
      <button class="sw-modal__close" aria-label="Close">&times;</button>
      <div class="sw-modal__header">
        <span class="sw-modal__eyebrow">✦ Arcane Alchemy Archives ✦</span>
        <h3 class="sw-modal__title">Secret Formulas</h3>
        <p class="sw-modal__subtitle">Select an enchanted brew below to inspect its mystical composition</p>
      </div>
      <div class="sw-modal__cards">
        <div class="sw-card sw-card--coca" role="button" tabindex="0" data-card="coca">
          <div class="sw-card__aura"></div>
          <div class="sw-card__border-glow"></div>
          <div class="sw-card__img-wrapper">
            <span class="sw-card__badge"><span class="sw-card__badge-dot"></span>Formula No. 1886</span>
            <img class="sw-card__img" src="public/assets/cocacola/coca.jpeg" alt="Coca-Cola Classic">
            <div class="sw-card__shimmer"></div>
          </div>
          <div class="sw-card__content">
            <div class="sw-card__meta">
              <span class="sw-card__tier">Grand Master · Crimson</span>
              <span class="sw-card__potency">⚡ 99.8% Pure</span>
            </div>
            <h4 class="sw-card__title">The Classic Brew</h4>
            <p class="sw-card__desc">A legendary elixir crafted from secret botanicals and crystalline springs, invigorating wanderers across all dimensions.</p>
            <div class="sw-card__tags">
              <span class="sw-tag">Arcane Herb</span>
              <span class="sw-tag">Crystalline Fizz</span>
              <span class="sw-tag">Vitality Surge</span>
            </div>
            <div class="sw-card__footer">
              <span class="sw-card__action-text">Inspect Elixir</span>
              <div class="sw-card__arrow-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="sw-card sw-card--zestify" role="button" tabindex="0" data-card="zestify">
          <div class="sw-card__aura"></div>
          <div class="sw-card__border-glow"></div>
          <div class="sw-card__img-wrapper">
            <span class="sw-card__badge"><span class="sw-card__badge-dot"></span>Solar Infusion No. 07</span>
            <img class="sw-card__img" src="public/assets/zestify/zestify.jpeg" alt="Zestify Elixir">
            <div class="sw-card__shimmer"></div>
          </div>
          <div class="sw-card__content">
            <div class="sw-card__meta">
              <span class="sw-card__tier">Astral Tier · Solar Glow</span>
              <span class="sw-card__potency">⚡ 100% Pure</span>
            </div>
            <h4 class="sw-card__title">Citrus Zest Magic</h4>
            <p class="sw-card__desc">A sparkling infusion bursting with bright solar energies to instantly revitalize your spirit and awaken ancient mana.</p>
            <div class="sw-card__tags">
              <span class="sw-tag">Solar Citrus</span>
              <span class="sw-tag">Astral Spark</span>
              <span class="sw-tag">Mana Recharge</span>
            </div>
            <div class="sw-card__footer">
              <span class="sw-card__action-text">Inspect Elixir</span>
              <div class="sw-card__arrow-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  container.appendChild(modal);

  // Dual Product Showcase Stage (Post-Alchemist-Lab Blank Screen & Side Slide-In)
  const showcaseStage = el('div', 'sw-showcase-stage');
  showcaseStage.innerHTML = `
    <div class="sw-showcase__backdrop"></div>
    <div class="sw-showcase__ambient"></div>
    <div class="sw-showcase__content">
      <div class="sw-showcase__products">
        <div class="sw-showcase__item sw-showcase__item--left" data-product="coca" role="button" tabindex="0" title="Click to explore Coca-Cola Story">
          <div class="sw-showcase__aura sw-showcase__aura--coca"></div>
          <div class="sw-showcase__img-box">
            <img class="sw-showcase__img" src="public/assets/cocacola/output.webp" alt="Coca-Cola Classic">
          </div>
        </div>
        <div class="sw-showcase__item sw-showcase__item--right" data-product="zestify" role="button" tabindex="0" title="Click to explore Zestify Story">
          <div class="sw-showcase__aura sw-showcase__aura--zestify"></div>
          <div class="sw-showcase__img-box">
            <img class="sw-showcase__img" src="public/assets/zestify/zout.webp" alt="Zestify Elixir">
          </div>
        </div>
      </div>
    </div>
  `;
  container.appendChild(showcaseStage);

  const showcaseLeftItem = showcaseStage.querySelector('.sw-showcase__item--left');
  const showcaseRightItem = showcaseStage.querySelector('.sw-showcase__item--right');
  const showcaseBackdrop = showcaseStage.querySelector('.sw-showcase__backdrop');

  showcaseLeftItem.addEventListener('click', () => {
    openProductStory('coca');
  });
  showcaseRightItem.addEventListener('click', () => {
    openProductStory('zestify');
  });

  modal.querySelector('.sw-modal__close').addEventListener('click', () => {
    modal.classList.remove('is-active');
  });
  modal.addEventListener('click', (e) => { 
    if (e.target === modal) modal.classList.remove('is-active'); 
  });

  // Product Stories Configuration for Scroll Scrubbing
  const PRODUCT_STORIES = {
    coca: {
      name: 'The Classic Brew',
      badge: 'Formula No. 1886',
      video: 'public/assets/cocacola/cocacola_scroll.mp4',
      accent: '#f43f5e',
      accentGlow: 'rgba(244, 63, 94, 0.5)',
      chapters: [
        {
          start: 0,
          end: 0.25,
          num: '01 / 04',
          eyebrow: 'CHAPTER I — THE SECRET VAULT',
          title: 'The Awakening of the Formula',
          body: 'Locked in crystalline glass and forged in deep botanical chambers, the legendary crimson brew begins its transmutational ascent.',
          tags: ['Original Recipe 1886', 'Secret Botanicals', 'Pressure Sealed']
        },
        {
          start: 0.25,
          end: 0.50,
          num: '02 / 04',
          eyebrow: 'CHAPTER II — THE SPARKLING ESSENCE',
          title: 'Effervescent Micro-Bubbles',
          body: 'Crystalline carbonation ignites across the surface. A vibrant balance of vanilla notes, citrus oils, and sparkling mana awakens the senses.',
          tags: ['100% Refreshment', 'Crystalline Fizz', 'Vitality Surge']
        },
        {
          start: 0.50,
          end: 0.75,
          num: '03 / 04',
          eyebrow: 'CHAPTER III — FROSTED CONDENSATION',
          title: 'Crisp Sub-Zero Chill',
          body: 'Sub-zero mist condenses on the iconic vessel. Pure icy refreshment locks in the timeless taste celebrated across every realm.',
          tags: ['Icy Condensation', 'Sub-Zero Chill', 'Iconic Contour']
        },
        {
          start: 0.75,
          end: 1.0,
          num: '04 / 04',
          eyebrow: 'CHAPTER IV — THE MASTERWORK',
          title: 'The Legendary Elixir Revealed',
          body: 'The grand transmutation reaches its pinnacle. A timeless masterpiece standing victorious and ready to energize your journey.',
          tags: ['Transmutation Complete', 'Legendary Status', 'Masterpiece']
        }
      ]
    },
    zestify: {
      name: 'Citrus Zest Magic',
      badge: 'Solar Infusion No. 07',
      video: 'public/assets/zestify/zestify_scroll.mp4',
      accent: '#eab308',
      accentGlow: 'rgba(234, 179, 8, 0.5)',
      chapters: [
        {
          start: 0,
          end: 0.25,
          num: '01 / 04',
          eyebrow: 'CHAPTER I — SOLAR HARVEST',
          title: 'Essence of Astral Sunbeams',
          body: 'Harvested at high noon from enchanted citrus groves, solar light particles are distilled into a pulsating electric elixir.',
          tags: ['Solar Harvest', 'Astral Citrus', 'Pure Ether']
        },
        {
          start: 0.25,
          end: 0.50,
          num: '02 / 04',
          eyebrow: 'CHAPTER II — THE CITRUS SPARK',
          title: 'Zesty Tang & Luminescence',
          body: 'Crisp lime zest and vibrant golden botanicals collide in a burst of sparkling energy that illuminates the entire vessel.',
          tags: ['High Voltage Flavor', 'Natural Spark', 'Mana Recharge']
        },
        {
          start: 0.50,
          end: 0.75,
          num: '03 / 04',
          eyebrow: 'CHAPTER III — GLACIAL INFUSION',
          title: 'Frost-Forged Vitality',
          body: 'Chilled with celestial mountain ice crystals, locking in vibrant electrolytes and restorative magical potency.',
          tags: ['Glacial Mist', 'Electrolyte Infused', 'Pure Vitality']
        },
        {
          start: 0.75,
          end: 1.0,
          num: '04 / 04',
          eyebrow: 'CHAPTER IV — SOLAR CONFLUENCE',
          title: 'Awakened Astral Power',
          body: 'The alchemy is complete. Radiating pure golden brilliance, Citrus Zest Magic is unleashed in all its glory.',
          tags: ['Solar Ascendance', 'Instant Awakening', 'Mythic Elixir']
        }
      ]
    }
  };

  // 1. Coca-Cola Hero Image Stage (Image slides from right into center/full screen)
  const heroStage = el('div', 'sw-coca-hero-stage');
  heroStage.innerHTML = `
    <div class="sw-coca-hero__backdrop"></div>
    <div class="sw-coca-hero__ambient"></div>
    <div class="sw-coca-hero__content">
      <div class="sw-coca-hero__img-box">
        <div class="sw-coca-hero__aura"></div>
        <img class="sw-coca-hero__img" src="public/assets/cocacola/output.webp" alt="Coca-Cola Classic Lime Masterwork">
      </div>
      <div class="sw-coca-hero__card">
        <span class="sw-coca-hero__badge">✦ Formula No. 1886 ✦</span>
        <h2 class="sw-coca-hero__title">The Classic Brew</h2>
        <p class="sw-coca-hero__desc">Crafted from secret botanicals and crystalline springs. Scroll to reveal its full transmutational journey.</p>
      </div>
    </div>
  `;
  container.appendChild(heroStage);

  // 2. Coca-Cola Scrolltelling Video Stage (60fps scrub video & storytelling cards)
  const cocaStage = el('div', 'sw-coca-stage');
  cocaStage.innerHTML = `
    <div class="sw-coca-stage__video-wrap">
      <video class="sw-coca-video" muted playsinline preload="auto" src="public/assets/cocacola/cocacola_scroll.mp4"></video>
      <div class="sw-coca-stage__vignette"></div>
      <div class="sw-coca-stage__ambient"></div>
    </div>
    <div class="sw-coca-stage__copylayer"></div>
    <div class="sw-coca-stage__hud">
      <div class="sw-coca-stage__progress-bar"><span class="sw-coca-stage__progress-fill"></span></div>
      <div class="sw-coca-stage__badge">✦ APOTHECARY · THE CLASSIC BREW ✦</div>
      <div class="sw-coca-stage__counter"><span class="sw-coca-stage__num">01 / 04</span></div>
    </div>
  `;
  container.appendChild(cocaStage);

  const cocaVideo = cocaStage.querySelector('.sw-coca-video');
  const cocaCopyLayer = cocaStage.querySelector('.sw-coca-stage__copylayer');

  // Build Coca-Cola chapter cards
  PRODUCT_STORIES.coca.chapters.forEach((ch) => {
    const cardEl = el('article', 'sw-coca-chapter');
    cardEl.innerHTML = `
      <span class="sw-coca-chapter__num">${ch.num}</span>
      <span class="sw-coca-chapter__eyebrow">${esc(ch.eyebrow)}</span>
      <h2 class="sw-coca-chapter__title">${esc(ch.title)}</h2>
      <p class="sw-coca-chapter__body">${esc(ch.body)}</p>
      <div class="sw-coca-chapter__tags">
        ${ch.tags.map(t => `<span class="sw-coca-tag">${esc(t)}</span>`).join('')}
      </div>
    `;
    cocaCopyLayer.appendChild(cardEl);
  });

  let cocaVideoDuration = 10.0;
  let cocaVideoLoaded = false;
  let cocaCurTime = 0;
  let cocaTargetTime = 0;

  cocaVideo.addEventListener('loadedmetadata', () => {
    cocaVideoDuration = cocaVideo.duration || 10.0;
    layout();
  });
  cocaVideo.addEventListener('canplaythrough', () => {
    cocaVideoLoaded = true;
    cocaVideo.classList.add('is-ready');
  });
  cocaVideo.load();

  // 3. Zestify Hero Image Stage (Image slides from left into center/full screen)
  const zestifyHeroStage = el('div', 'sw-zestify-hero-stage');
  zestifyHeroStage.innerHTML = `
    <div class="sw-zestify-hero__backdrop"></div>
    <div class="sw-zestify-hero__ambient"></div>
    <div class="sw-zestify-hero__content">
      <div class="sw-zestify-hero__img-box">
        <div class="sw-zestify-hero__aura"></div>
        <img class="sw-zestify-hero__img" src="public/assets/zestify/zout.webp" alt="Zestify Elixir Masterwork">
      </div>
      <div class="sw-zestify-hero__card">
        <span class="sw-zestify-hero__badge">✦ Solar Infusion No. 07 ✦</span>
        <h2 class="sw-zestify-hero__title">Citrus Zest Magic</h2>
        <p class="sw-zestify-hero__desc">Sparkling solar infusion bursting with bright astral energies. Scroll to explore its celestial transmutation.</p>
      </div>
    </div>
  `;
  container.appendChild(zestifyHeroStage);

  // 4. Zestify Scrolltelling Video Stage (60fps scrub video & storytelling cards)
  const zestifyStage = el('div', 'sw-zestify-stage');
  zestifyStage.innerHTML = `
    <div class="sw-zestify-stage__video-wrap">
      <video class="sw-zestify-video" muted playsinline preload="auto" src="public/assets/zestify/zestify_scroll.mp4"></video>
      <div class="sw-zestify-stage__vignette"></div>
      <div class="sw-zestify-stage__ambient"></div>
    </div>
    <div class="sw-zestify-stage__copylayer"></div>
    <div class="sw-zestify-stage__hud">
      <div class="sw-zestify-stage__progress-bar"><span class="sw-zestify-stage__progress-fill"></span></div>
      <div class="sw-zestify-stage__badge">✦ APOTHECARY · CITRUS ZEST MAGIC ✦</div>
      <div class="sw-zestify-stage__counter"><span class="sw-zestify-stage__num">01 / 04</span></div>
    </div>
  `;
  container.appendChild(zestifyStage);

  const zestifyVideo = zestifyStage.querySelector('.sw-zestify-video');
  const zestifyCopyLayer = zestifyStage.querySelector('.sw-zestify-stage__copylayer');

  // Build Zestify chapter cards
  PRODUCT_STORIES.zestify.chapters.forEach((ch) => {
    const cardEl = el('article', 'sw-zestify-chapter');
    cardEl.innerHTML = `
      <span class="sw-zestify-chapter__num">${ch.num}</span>
      <span class="sw-zestify-chapter__eyebrow">${esc(ch.eyebrow)}</span>
      <h2 class="sw-zestify-chapter__title">${esc(ch.title)}</h2>
      <p class="sw-zestify-chapter__body">${esc(ch.body)}</p>
      <div class="sw-zestify-chapter__tags">
        ${ch.tags.map(t => `<span class="sw-zestify-tag">${esc(t)}</span>`).join('')}
      </div>
    `;
    zestifyCopyLayer.appendChild(cardEl);
  });

  let zestifyVideoDuration = 10.0;
  let zestifyVideoLoaded = false;
  let zestifyCurTime = 0;
  let zestifyTargetTime = 0;

  zestifyVideo.addEventListener('loadedmetadata', () => {
    zestifyVideoDuration = zestifyVideo.duration || 10.0;
    layout();
  });
  zestifyVideo.addEventListener('canplaythrough', () => {
    zestifyVideoLoaded = true;
    zestifyVideo.classList.add('is-ready');
  });
  zestifyVideo.load();

  // 5. Grand Finale Outro Stage (Dual Cans from Left & Right + Transparent Webpage Footer)
  const outroStage = el('div', 'sw-outro-stage');
  outroStage.innerHTML = `
    <div class="sw-outro__backdrop"></div>
    <div class="sw-outro__ambient"></div>
    <div class="sw-outro__content">
      <div class="sw-outro__header">
        <span class="sw-outro__eyebrow">✦ GRAND ALCHEMICAL FINALE ✦</span>
        <h2 class="sw-outro__title">Dual Masterwork Elixirs</h2>
      </div>
      <div class="sw-outro__products">
        <div class="sw-outro__item sw-outro__item--left" data-product="coca" role="button" tabindex="0" title="Click to inspect Coca-Cola Classic">
          <div class="sw-outro__aura sw-outro__aura--coca"></div>
          <div class="sw-outro__img-box">
            <img class="sw-outro__img" src="public/assets/cocacola/output.webp" alt="Coca-Cola Classic">
          </div>
          <span class="sw-outro__product-label">The Classic Brew</span>
        </div>
        <div class="sw-outro__item sw-outro__item--right" data-product="zestify" role="button" tabindex="0" title="Click to inspect Zestify Elixir">
          <div class="sw-outro__aura sw-outro__aura--zestify"></div>
          <div class="sw-outro__img-box">
            <img class="sw-outro__img" src="public/assets/zestify/zout.webp" alt="Zestify Elixir">
          </div>
          <span class="sw-outro__product-label">Citrus Zest Magic</span>
        </div>
      </div>
      
      <!-- Transparent Webpage Footer -->
      <footer class="sw-outro__footer">
        <div class="sw-footer__inner">
          <div class="sw-footer__top">
            <div class="sw-footer__brand-col">
              <div class="sw-footer__brand">
                <span class="sw-footer__brand-mark"></span>
                <span class="sw-footer__brand-name">APOTHECARY</span>
              </div>
              <p class="sw-footer__tagline">The sanctuary of arcane transmutations and legendary botanical elixirs. Crafted for seekers of ancient refreshment across realms.</p>
            </div>
            <div class="sw-footer__nav-col">
              <h4 class="sw-footer__nav-title">Elixirs &amp; Vaults</h4>
              <ul class="sw-footer__links">
                <li><a href="#" class="sw-footer__link" data-scrollto="forest">The Whispering Woods</a></li>
                <li><a href="#" class="sw-footer__link" data-scrollto="gate">The Portal of Runes</a></li>
                <li><a href="#" class="sw-footer__link" data-scrollto="coca">Coca-Cola Classic Brew</a></li>
                <li><a href="#" class="sw-footer__link" data-scrollto="zestify">Zestify Solar Magic</a></li>
              </ul>
            </div>
            <div class="sw-footer__cta-col">
              <h4 class="sw-footer__nav-title">Join The Codex</h4>
              <p class="sw-footer__cta-desc">Receive mystical brew dispatches and seasonal elixir reveals.</p>
              <div class="sw-footer__newsletter">
                <input type="email" placeholder="Enter your arcane email..." class="sw-footer__input" />
                <button class="sw-footer__btn" type="button">Subscribe</button>
              </div>
            </div>
          </div>
          <div class="sw-footer__bottom">
            <span class="sw-footer__copy">© 2026 Apothecary Labs. All Alchemical Rights Reserved.</span>
            <button class="sw-footer__top-btn" type="button">
              <span>Ascend to Top</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  `;
  container.appendChild(outroStage);

  const outroLeftItem = outroStage.querySelector('.sw-outro__item--left');
  const outroRightItem = outroStage.querySelector('.sw-outro__item--right');
  const outroHeader = outroStage.querySelector('.sw-outro__header');
  const outroFooter = outroStage.querySelector('.sw-outro__footer');
  const outroBackdrop = outroStage.querySelector('.sw-outro__backdrop');
  const outroAmbient = outroStage.querySelector('.sw-outro__ambient');
  const outroTopBtn = outroStage.querySelector('.sw-footer__top-btn');

  outroLeftItem.addEventListener('click', () => openProductStory('coca'));
  outroRightItem.addEventListener('click', () => openProductStory('zestify'));
  if (outroTopBtn) {
    outroTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
  }

  outroStage.querySelectorAll('.sw-footer__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-scrollto');
      if (target === 'forest') jumpTo(0);
      else if (target === 'gate') jumpTo(1);
      else if (target === 'coca') window.scrollTo({ top: totalVideoScroll + totalShowcaseScroll + 10, behavior: reduce ? 'auto' : 'smooth' });
      else if (target === 'zestify') window.scrollTo({ top: totalVideoScroll + totalShowcaseScroll + totalHeroScroll + totalCocaVideoScroll + 10, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  // Build Scroll Storytelling Viewer DOM
  const storyViewer = el('div', 'sw-story-viewer');
  storyViewer.innerHTML = `
    <div class="sw-story-viewer__progress-bar"><span class="sw-story-viewer__progress-fill"></span></div>
    
    <div class="sw-story-viewer__topbar">
      <div class="sw-story-viewer__brand">
        <span class="sw-story-viewer__brand-dot"></span>
        <span class="sw-story-viewer__brand-name">THE CLASSIC BREW</span>
        <span class="sw-story-viewer__brand-badge">FORMULA 1886</span>
      </div>
      <div class="sw-story-viewer__progress-counter">Frame: <strong class="sw-story-viewer__percent">0%</strong></div>
      <button class="sw-story-viewer__close" title="Return to Archives">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        <span>Return to Vault</span>
      </button>
    </div>

    <div class="sw-story-viewer__stage">
      <video class="sw-story-viewer__video" muted playsinline preload="auto"></video>
      <div class="sw-story-viewer__vignette"></div>
      <div class="sw-story-viewer__ambient-glow"></div>
    </div>

    <div class="sw-story-viewer__copylayer"></div>

    <div class="sw-story-viewer__hud">
      <div class="sw-story-viewer__dots"></div>
      <div class="sw-story-viewer__hint">
        <span>Scroll to scrub frames</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
      </div>
    </div>

    <div class="sw-story-viewer__complete-card">
      <div class="sw-complete-card__icon">✦</div>
      <h3 class="sw-complete-card__title">Frame Journey Completed!</h3>
      <p class="sw-complete-card__desc">You have successfully explored all transmutational frames of this arcane elixir.</p>
      <div class="sw-complete-card__actions">
        <button class="sw-complete-card__btn sw-complete-card__btn--return">Return to Vault</button>
        <button class="sw-complete-card__btn sw-complete-card__btn--replay">Replay Journey</button>
      </div>
    </div>
  `;
  document.body.appendChild(storyViewer);

  // Story Viewer Elements
  const storyVideo = storyViewer.querySelector('.sw-story-viewer__video');
  const storyFill = storyViewer.querySelector('.sw-story-viewer__progress-fill');
  const storyPercent = storyViewer.querySelector('.sw-story-viewer__percent');
  const storyBrandName = storyViewer.querySelector('.sw-story-viewer__brand-name');
  const storyBrandBadge = storyViewer.querySelector('.sw-story-viewer__brand-badge');
  const storyCopyLayer = storyViewer.querySelector('.sw-story-viewer__copylayer');
  const storyDotsContainer = storyViewer.querySelector('.sw-story-viewer__dots');
  const storyCloseBtn = storyViewer.querySelector('.sw-story-viewer__close');
  const storyAmbientGlow = storyViewer.querySelector('.sw-story-viewer__ambient-glow');
  const storyCompleteCard = storyViewer.querySelector('.sw-story-viewer__complete-card');
  const completeReturnBtn = storyViewer.querySelector('.sw-complete-card__btn--return');
  const completeReplayBtn = storyViewer.querySelector('.sw-complete-card__btn--replay');

  let currentStory = null;
  let storyScrollY = 0;
  let targetStoryProgress = 0;
  let curStoryProgress = 0;
  let storyDuration = 10.0;
  let isStoryActive = false;
  let storyRafId = null;
  let autoReturnTimer = null;
  const STORY_SCROLL_SENSITIVITY = 0.00065; // Scroll speed factor

  function openProductStory(storyKey) {
    const storyData = PRODUCT_STORIES[storyKey];
    if (!storyData) return;

    currentStory = storyData;
    isStoryActive = true;
    storyScrollY = 0;
    targetStoryProgress = 0;
    curStoryProgress = 0;
    clearTimeout(autoReturnTimer);
    storyCompleteCard.classList.remove('is-visible');

    // Update Brand / Header
    storyBrandName.textContent = storyData.name;
    storyBrandBadge.textContent = storyData.badge;
    storyViewer.style.setProperty('--story-accent', storyData.accent);
    storyViewer.style.setProperty('--story-accent-glow', storyData.accentGlow);

    // Build Chapters
    storyCopyLayer.innerHTML = '';
    storyDotsContainer.innerHTML = '';
    storyData.chapters.forEach((ch, idx) => {
      const copyEl = el('article', 'sw-story-copy');
      copyEl.innerHTML = `
        <span class="sw-story-copy__num">${ch.num}</span>
        <span class="sw-story-copy__eyebrow">${esc(ch.eyebrow)}</span>
        <h2 class="sw-story-copy__title">${esc(ch.title)}</h2>
        <p class="sw-story-copy__body">${esc(ch.body)}</p>
        <div class="sw-story-copy__tags">
          ${ch.tags.map(t => `<span class="sw-story-tag">${esc(t)}</span>`).join('')}
        </div>
      `;
      storyCopyLayer.appendChild(copyEl);

      const dot = el('button', 'sw-story-dot');
      dot.setAttribute('title', ch.title);
      dot.innerHTML = `<span>${ch.num.split('/')[0].trim()}</span>`;
      dot.addEventListener('click', () => {
        targetStoryProgress = (ch.start + ch.end) / 2;
        updateStoryUI();
      });
      storyDotsContainer.appendChild(dot);
    });

    // Load Video
    storyVideo.src = storyData.video;
    storyVideo.load();
    storyVideo.onloadedmetadata = () => {
      storyDuration = storyVideo.duration || 10.0;
      updateStoryUI();
    };

    storyViewer.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    // Start RAF loop for silky smooth scrubbing
    if (!storyRafId) {
      storyRafLoop();
    }
  }

  function closeProductStory() {
    isStoryActive = false;
    clearTimeout(autoReturnTimer);
    storyViewer.classList.remove('is-active');
    storyCompleteCard.classList.remove('is-visible');
    document.body.style.overflow = '';
    try { storyVideo.pause(); } catch(e){}

    // Re-activate the modal smoothly
    modal.classList.add('is-active');
  }

  storyCloseBtn.addEventListener('click', closeProductStory);
  completeReturnBtn.addEventListener('click', closeProductStory);
  completeReplayBtn.addEventListener('click', () => {
    targetStoryProgress = 0;
    curStoryProgress = 0;
    storyCompleteCard.classList.remove('is-visible');
    clearTimeout(autoReturnTimer);
    updateStoryUI();
  });

  // Wheel scrubbing listener
  storyViewer.addEventListener('wheel', (e) => {
    if (!isStoryActive) return;
    e.preventDefault();
    const delta = e.deltaY;
    targetStoryProgress = clamp(targetStoryProgress + delta * STORY_SCROLL_SENSITIVITY, 0, 1);
  }, { passive: false });

  // Touch scrubbing listener for mobile
  let touchStartY = 0;
  storyViewer.addEventListener('touchstart', (e) => {
    if (!isStoryActive) return;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  storyViewer.addEventListener('touchmove', (e) => {
    if (!isStoryActive) return;
    const touchCurrentY = e.touches[0].clientY;
    const deltaY = touchStartY - touchCurrentY;
    touchStartY = touchCurrentY;
    targetStoryProgress = clamp(targetStoryProgress + deltaY * (STORY_SCROLL_SENSITIVITY * 1.8), 0, 1);
  }, { passive: true });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!isStoryActive) return;
    if (e.key === 'Escape') {
      closeProductStory();
    } else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      targetStoryProgress = clamp(targetStoryProgress + 0.08, 0, 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      targetStoryProgress = clamp(targetStoryProgress - 0.08, 0, 1);
    }
  });

  function updateStoryUI() {
    if (!currentStory) return;
    const p = curStoryProgress;
    storyFill.style.transform = `scaleX(${p})`;
    storyPercent.textContent = `${Math.round(p * 100)}%`;

    // Update active chapter copy and dots
    const copyEls = storyCopyLayer.querySelectorAll('.sw-story-copy');
    const dotEls = storyDotsContainer.querySelectorAll('.sw-story-dot');
    const chapters = currentStory.chapters;

    chapters.forEach((ch, idx) => {
      const copyEl = copyEls[idx];
      const dotEl = dotEls[idx];
      if (!copyEl || !dotEl) return;

      const isInside = p >= ch.start && (idx === chapters.length - 1 ? p <= ch.end : p < ch.end);
      copyEl.classList.toggle('is-active', isInside);
      dotEl.classList.toggle('is-active', isInside);
    });

    // Detect 100% completion
    if (p >= 0.985 && !storyCompleteCard.classList.contains('is-visible')) {
      storyCompleteCard.classList.add('is-visible');
      clearTimeout(autoReturnTimer);
      autoReturnTimer = setTimeout(() => {
        if (isStoryActive && curStoryProgress >= 0.98) {
          closeProductStory();
        }
      }, 3500);
    } else if (p < 0.96 && storyCompleteCard.classList.contains('is-visible')) {
      storyCompleteCard.classList.remove('is-visible');
      clearTimeout(autoReturnTimer);
    }
  }

  function storyRafLoop() {
    if (isStoryActive && storyVideo) {
      curStoryProgress += (targetStoryProgress - curStoryProgress) * 0.18;
      
      const targetTime = curStoryProgress * (storyDuration || 10.0);
      if (Math.abs(storyVideo.currentTime - targetTime) > 0.015) {
        try {
          storyVideo.currentTime = clamp(targetTime, 0, (storyDuration || 10.0) - 0.02);
        } catch(e) {}
      }

      updateStoryUI();
    }
    storyRafId = requestAnimationFrame(storyRafLoop);
  }

  // Card interactive 3D tilt and click effects
  const modalCards = modal.querySelectorAll('.sw-card');
  modalCards.forEach(card => {
    // 3D Tilt interaction on mouse move
    card.addEventListener('mousemove', (e) => {
      if (isMobile()) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });

    // Click handler for selection, ripple & opening scroll story
    function handleCardSelect(e) {
      // Highlight card
      modalCards.forEach(c => c.classList.toggle('is-selected', c === card));

      // Create magic ripple
      const ripple = el('span', 'sw-card__ripple');
      const rect = card.getBoundingClientRect();
      const clientX = e.clientX || (rect.left + rect.width / 2);
      const clientY = e.clientY || (rect.top + rect.height / 2);
      const rippleSize = Math.max(rect.width, rect.height) * 2;
      ripple.style.width = ripple.style.height = `${rippleSize}px`;
      ripple.style.left = `${clientX - rect.left - rippleSize / 2}px`;
      ripple.style.top = `${clientY - rect.top - rippleSize / 2}px`;
      card.appendChild(ripple);

      setTimeout(() => ripple.remove(), 750);

      // Launch product scroll story
      const cardType = card.getAttribute('data-card');
      setTimeout(() => {
        openProductStory(cardType || 'coca');
      }, 260);
    }

    card.addEventListener('click', handleCardSelect);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCardSelect(e);
      }
    });
  });

  // Single Video element
  const video = el('video', 'sw-scene__video');
  video.muted = true; 
  video.playsInline = true; 
  video.preload = 'auto';
  video.setAttribute('muted', ''); 
  video.setAttribute('playsinline', '');
  stage.appendChild(video);

  // Stills acting as fallback / transition posters
  const stillContainer = el('div', 'sw-scene__still-container');
  stage.appendChild(stillContainer);

  SECTIONS.forEach((s, i) => {
    const img = el('img', 'sw-scene__still');
    img.alt = s.label || '';
    img.decoding = 'async';
    img.loading = 'lazy';
    const poster = (isMobile() && s.stillMobile) ? s.stillMobile : s.still;
    if (poster) img.src = poster;
    stillContainer.appendChild(img);
    s.img = img;
  });

  // per-section copy / route / nav
  const copies = [], dots = [];
  SECTIONS.forEach((s, i) => {
    const c = el('article', 'sw-copy'); 
    c.style.setProperty('--sw-accent', s.accent || '');
    c.innerHTML =
      `<span class="sw-copy__num">${pad(i + 1)} / ${pad(N)}</span>` +
      (s.eyebrow ? `<span class="sw-copy__eyebrow">${esc(s.eyebrow)}</span>` : '') +
      (s.title ? `<h2 class="sw-copy__title">${esc(s.title)}</h2>` : '') +
      (s.body ? `<p class="sw-copy__body">${esc(s.body)}</p>` : '') +
      (s.tags && s.tags.length ? `<ul class="sw-copy__tags">${s.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>` : '') +
      (s.cta ? `<div class="sw-copy__cta">${ctaBtns(s.cta)}</div>` : '');
    copylayer.appendChild(c); 
    copies.push(c);

    const dot = el('button', 'sw-route__dot'); 
    dot.style.setProperty('--sw-accent', s.accent || '');
    dot.innerHTML = `<span class="sw-route__label">${esc(s.label || '')}</span><i></i>`;
    dot.addEventListener('click', () => jumpTo(i)); 
    route.appendChild(dot); 
    dots.push(dot);

    if (config.nav !== false) {
      const b = el('button', 'sw-nav__item'); 
      b.textContent = s.label || '';
      b.addEventListener('click', () => jumpTo(i)); 
      nav.appendChild(b);
    }
  });

  // ---- Math & Layout ----
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const smooth = x => { x = clamp(x); return x * x * (3 - 2 * x); };

  let vh = window.innerHeight;
  let totalW = 0; // total scrollable vh
  let activeIndex = -1;
  let ticking = false;
  let laidOutW = window.innerWidth;
  let videoDuration = 10.0; // Fallback, will be read dynamically
  let videoLoaded = false;
  let curTime = 0;
  let targetTime = 0;
  let videoSrcLoaded = '';

  // Setup video src based on device
  function updateVideoSrc() {
    const src = (isMobile() && config.videoMobile) ? config.videoMobile : config.video;
    if (src && videoSrcLoaded !== src) {
      videoSrcLoaded = src;
      videoLoaded = false;
      video.classList.remove('is-ready');
      
      // Load video via Blob/Fetch for smooth seek support or standard URL
      fetch(src)
        .then(r => {
          if (!r.ok) throw new Error();
          return r.blob();
        })
        .then(blob => {
          video.src = URL.createObjectURL(blob);
          video.load();
        })
        .catch(() => {
          // Fallback to standard URL load if fetch fails
          video.src = src;
        });
    }
  }

  video.addEventListener('loadedmetadata', () => {
    videoDuration = video.duration || 10.0;
    layout();
  });

  video.addEventListener('canplaythrough', () => {
    videoLoaded = true;
    video.classList.add('is-ready');
    read();
  });

  // Prime video on touch gestures for iOS
  let userReady = false;
  function primeVideo() {
    if (userReady) return;
    userReady = true;
    [video, cocaVideo, zestifyVideo, storyVideo].forEach(v => {
      if (!v) return;
      try {
        const p = v.play();
        if (p && p.then) {
          p.then(() => {
            try { v.pause(); } catch(e){}
          }).catch(() => {});
        }
      } catch(e) {}
    });
  }
  window.addEventListener('pointerdown', primeVideo, { once: true, passive: true });
  window.addEventListener('touchstart', primeVideo, { once: true, passive: true });

  const SHOWCASE_SCROLL_FACTOR = 1.4; // vh for dual product showcase
  const HERO_SCROLL_FACTOR = 1.6;     // vh for hero image entrance
  const COCA_SCROLL_FACTOR = 1.5;     // vh per second of coca video
  const ZESTIFY_SCROLL_FACTOR = 1.5;  // vh per second of zestify video
  const OUTRO_SCROLL_FACTOR = 2.2;    // vh for dual cans finale + transparent footer emergence
  let totalVideoScroll = 0;
  let totalShowcaseScroll = 0;
  let totalHeroScroll = 0;
  let totalCocaVideoScroll = 0;
  let totalZestifyHeroScroll = 0;
  let totalZestifyVideoScroll = 0;
  let totalOutroScroll = 0;
  let totalScrollable = 0;

  function layout() {
    vh = window.innerHeight;
    laidOutW = window.innerWidth;
    totalVideoScroll = videoDuration * SCROLL_FACTOR * vh;
    totalShowcaseScroll = SHOWCASE_SCROLL_FACTOR * vh;
    totalHeroScroll = HERO_SCROLL_FACTOR * vh;
    totalCocaVideoScroll = (cocaVideoDuration || 10.0) * COCA_SCROLL_FACTOR * vh;
    totalZestifyHeroScroll = HERO_SCROLL_FACTOR * vh;
    totalZestifyVideoScroll = (zestifyVideoDuration || 10.0) * ZESTIFY_SCROLL_FACTOR * vh;
    totalOutroScroll = OUTRO_SCROLL_FACTOR * vh;
    totalScrollable = totalVideoScroll + totalShowcaseScroll + totalHeroScroll + totalCocaVideoScroll + totalZestifyHeroScroll + totalZestifyVideoScroll + totalOutroScroll;
    track.style.height = (totalScrollable + vh) + 'px';
    read();
  }

  function jumpTo(i) {
    const secTime = SECTIONS[i].time;
    const targetScroll = (secTime / videoDuration) * totalVideoScroll;
    window.scrollTo({ top: targetScroll, behavior: reduce ? 'auto' : 'smooth' });
  }

  // Precompute copy ranges based on midpoints between section trigger times
  const ranges = [];
  for (let i = 0; i < N; i++) {
    const t_curr = SECTIONS[i].time;
    let L, R;
    if (i === 0) {
      L = 0;
    } else {
      L = (SECTIONS[i - 1].time + t_curr) / 2;
    }
    if (i === N - 1) {
      R = videoDuration;
    } else {
      R = (t_curr + SECTIONS[i + 1].time) / 2;
    }
    ranges.push({ L, peak: t_curr, R });
  }

  function read() {
    const y = window.scrollY || window.pageYOffset;
    const progress = clamp(y / (totalScrollable || 1));
    
    // 1. Main journey video scrubbing progress: 0 to 1 over totalVideoScroll
    const videoProgress = clamp(y / (totalVideoScroll || 1));
    targetTime = videoProgress * videoDuration;

    // 2. Dual Showcase phase progress: 0 to 1
    const showcaseStart = totalVideoScroll * 0.95;
    const showcaseEnd = totalVideoScroll + totalShowcaseScroll;
    const showcaseProgress = clamp((y - showcaseStart) / (showcaseEnd - showcaseStart));

    // 3. Coca Hero Image phase progress: 0 to 1
    const heroStart = showcaseEnd;
    const heroEnd = heroStart + totalHeroScroll;
    const heroProgress = clamp((y - heroStart) / (totalHeroScroll || 1));

    // 4. Coca Video Scrolltelling progress: 0 to 1
    const cocaStart = heroEnd;
    const cocaEnd = cocaStart + totalCocaVideoScroll;
    const cocaProgress = clamp((y - cocaStart) / (totalCocaVideoScroll || 1));
    cocaTargetTime = cocaProgress * (cocaVideoDuration || 10.0);

    // 5. Zestify Hero Image phase progress: 0 to 1
    const zestifyHeroStart = cocaEnd;
    const zestifyHeroEnd = zestifyHeroStart + totalZestifyHeroScroll;
    const zestifyHeroProgress = clamp((y - zestifyHeroStart) / (totalZestifyHeroScroll || 1));

    // 6. Zestify Video Scrolltelling progress: 0 to 1
    const zestifyVideoStart = zestifyHeroEnd;
    const zestifyVideoEnd = zestifyVideoStart + totalZestifyVideoScroll;
    const zestifyVideoProgress = clamp((y - zestifyVideoStart) / (totalZestifyVideoScroll || 1));
    zestifyTargetTime = zestifyVideoProgress * (zestifyVideoDuration || 10.0);

    // 7. Grand Finale Outro (Dual Cans from Left & Right + Transparent Footer): zestifyVideoEnd -> totalScrollable
    const outroStart = zestifyVideoEnd;
    const outroProgress = clamp((y - outroStart) / (totalOutroScroll || 1));

    // Calculate copy opacities and still opacities
    for (let i = 0; i < N; i++) {
      const r = ranges[i];
      let op = 0;
      if (targetTime <= r.peak) {
        if (i === 0) {
          op = 1.0;
        } else {
          op = (targetTime - r.L) / (r.peak - r.L);
        }
      } else {
        if (i === N - 1) {
          op = 1.0;
        } else {
          op = (r.R - targetTime) / (r.R - r.peak);
        }
      }
      op = smooth(op);

      // Fade out Chapter III text when moving into the showcase phase
      if (i === N - 1 && showcaseProgress > 0) {
        op = op * (1 - smooth(clamp(showcaseProgress * 3.2, 0, 1)));
      }

      const c = copies[i];
      c.style.opacity = op;
      c.style.transform = reduce ? 'none' : `translateY(${(0.5 - op) * 4}vh)`;
      c.style.pointerEvents = op > 0.5 ? 'auto' : 'none';

      // Still opacity (only visible if video isn't ready or during prefers-reduced-motion)
      const still = SECTIONS[i].img;
      if (still) {
        still.style.opacity = videoLoaded && !reduce ? 0 : op;
      }
    }

    // Update active index based on current scroll position
    let near = 0;
    let minDist = floatMax();
    for (let i = 0; i < N; i++) {
      const dist = Math.abs(targetTime - SECTIONS[i].time);
      if (dist < minDist) {
        minDist = dist;
        near = i;
      }
    }

    function floatMax() { return 1e9; }

    if (near !== activeIndex && heroProgress <= 0 && cocaProgress <= 0 && zestifyHeroProgress <= 0 && zestifyVideoProgress <= 0 && outroProgress <= 0) {
      activeIndex = near;
      dots.forEach((d, k) => d.classList.toggle('is-active', k === near));
      nav.querySelectorAll('.sw-nav__item').forEach((n, k) => n.classList.toggle('is-active', k === near));
      container.style.setProperty('--sw-accent', SECTIONS[near].accent || '');
    }

    if (heroProgress > 0 || (cocaProgress > 0 && zestifyHeroProgress <= 0)) {
      container.style.setProperty('--sw-accent', '#84cc16');
    } else if ((zestifyHeroProgress > 0 || zestifyVideoProgress > 0) && outroProgress <= 0) {
      container.style.setProperty('--sw-accent', '#c084fc');
    } else if (outroProgress > 0) {
      container.style.setProperty('--sw-accent', '#60a5fa');
    }

    scrollbarFill.style.transform = `scaleX(${progress})`;
    hint.style.opacity = clamp(1 - y / (0.5 * vh));
    if (particles) particles.style.transform = `translate3d(0, ${-y * 0.05}px, 0)`;

    // Update all stages
    updateShowcaseStage(showcaseProgress, heroProgress);
    updateHeroStage(heroProgress, cocaProgress);
    updateCocaVideoStage(cocaProgress, zestifyHeroProgress);
    updateZestifyHeroStage(zestifyHeroProgress, zestifyVideoProgress);
    updateZestifyVideoStage(zestifyVideoProgress, outroProgress);
    updateOutroStage(outroProgress);

    ticking = false;
  }

  function updateShowcaseStage(sp, hp) {
    if (sp <= 0 || hp >= 0.5) {
      showcaseStage.style.opacity = '0';
      showcaseStage.style.pointerEvents = 'none';
      return;
    }

    showcaseStage.style.opacity = '1';
    showcaseStage.style.pointerEvents = (sp > 0.35 && hp < 0.2) ? 'auto' : 'none';

    // Blank dark screen backdrop fades in
    showcaseBackdrop.style.opacity = clamp(sp * 2.2, 0, 1) * (1 - clamp(hp * 2.0, 0, 1));

    if (hp > 0) {
      // Transition out when hero image enters
      const exitP = smooth(hp);
      showcaseLeftItem.style.transform = `translate3d(${-exitP * 80}vw, 0, 0) scale(${1 - exitP * 0.3})`;
      showcaseLeftItem.style.opacity = clamp(1 - exitP * 2.5, 0, 1);

      showcaseRightItem.style.transform = `translate3d(${exitP * 80}vw, 0, 0) scale(${1 - exitP * 0.3})`;
      showcaseRightItem.style.opacity = clamp(1 - exitP * 2.5, 0, 1);
    } else {
      // Left image (CocaCola output.webp) slides in from left to center
      const easeP = smooth(sp);
      const leftOffset = (1 - easeP) * -95; // in vw
      showcaseLeftItem.style.transform = `translate3d(${leftOffset}vw, 0, 0) rotateY(${(1 - easeP) * 25}deg)`;
      showcaseLeftItem.style.opacity = clamp(sp * 2.0, 0, 1);

      // Right image (Zestify zout.webp) slides in from right to center
      const rightOffset = (1 - easeP) * 95; // in vw
      showcaseRightItem.style.transform = `translate3d(${rightOffset}vw, 0, 0) rotateY(${(1 - easeP) * -25}deg)`;
      showcaseRightItem.style.opacity = clamp(sp * 2.0, 0, 1);
    }
  }

  function updateHeroStage(hp, cp) {
    if (hp <= 0 || cp >= 0.35) {
      heroStage.style.opacity = '0';
      heroStage.style.pointerEvents = 'none';
      return;
    }

    heroStage.style.opacity = '1';
    heroStage.style.pointerEvents = (hp > 0.3 && cp <= 0) ? 'auto' : 'none';

    const heroImgBox = heroStage.querySelector('.sw-coca-hero__img-box');
    const heroCard = heroStage.querySelector('.sw-coca-hero__card');
    const heroBackdrop = heroStage.querySelector('.sw-coca-hero__backdrop');
    const heroAmbient = heroStage.querySelector('.sw-coca-hero__ambient');

    heroBackdrop.style.opacity = clamp(hp * 2.0, 0, 1);
    heroAmbient.style.opacity = clamp(hp * 2.0, 0, 1);

    if (cp > 0) {
      // Transition into Coca-Cola Video
      const transP = smooth(cp / 0.35);
      heroImgBox.style.transform = `scale(${1 + transP * 0.12})`;
      heroImgBox.style.opacity = clamp(1 - transP * 1.5, 0, 1);
      if (heroCard) {
        heroCard.style.opacity = clamp(1 - transP * 2.5, 0, 1);
        heroCard.style.transform = `translateY(${transP * 25}px)`;
      }
    } else {
      // Slides in dynamically from the RIGHT to full screen!
      const easeH = smooth(hp);
      const rightOffset = (1 - easeH) * 110; // in vw: from +110vw to center
      const scaleVal = 0.85 + easeH * 0.25;
      const rotateVal = (1 - easeH) * 15; // in deg

      heroImgBox.style.transform = `translate3d(${rightOffset}vw, 0, 0) scale(${scaleVal}) rotate(${rotateVal}deg)`;
      heroImgBox.style.opacity = clamp(hp * 2.2, 0, 1);

      if (heroCard) {
        const cardOp = clamp((hp - 0.3) / 0.5, 0, 1);
        heroCard.style.opacity = smooth(cardOp);
        heroCard.style.transform = `translateY(${(1 - smooth(cardOp)) * 30}px)`;
      }
    }
  }

  function updateCocaVideoStage(cp, zhp) {
    if (cp <= 0 || zhp >= 0.4) {
      cocaStage.style.opacity = '0';
      cocaStage.style.pointerEvents = 'none';
      return;
    }

    cocaStage.style.opacity = zhp > 0 ? clamp(1 - zhp * 2.5, 0, 1) : '1';
    cocaStage.style.pointerEvents = (cp > 0.05 && zhp <= 0) ? 'auto' : 'none';

    // Video fade in smoothly
    const vidOpacity = clamp(cp * 3.5, 0, 1);
    cocaVideo.style.opacity = vidOpacity;

    // Update progress bar fill & counter
    const progressFill = cocaStage.querySelector('.sw-coca-stage__progress-fill');
    const numDisplay = cocaStage.querySelector('.sw-coca-stage__num');
    if (progressFill) progressFill.style.transform = `scaleX(${cp})`;

    // Update Story Chapters
    const chapters = PRODUCT_STORIES.coca.chapters;
    const chapterEls = cocaStage.querySelectorAll('.sw-coca-chapter');
    
    let currentChapterIdx = 0;
    chapters.forEach((ch, idx) => {
      const el = chapterEls[idx];
      if (!el) return;

      const isInside = cp >= ch.start && (idx === chapters.length - 1 ? cp <= ch.end : cp < ch.end);
      if (isInside) currentChapterIdx = idx;

      const chMid = (ch.start + ch.end) / 2;
      const chHalfSpan = (ch.end - ch.start) / 2;
      const dist = Math.abs(cp - chMid);
      let chOp = clamp(1 - (dist / chHalfSpan) * 1.3, 0, 1);
      chOp = smooth(chOp);

      el.style.opacity = chOp;
      el.style.transform = `translate3d(0, ${(1 - chOp) * 28}px, 0)`;
      el.style.pointerEvents = chOp > 0.5 ? 'auto' : 'none';
    });

    if (numDisplay && chapters[currentChapterIdx]) {
      numDisplay.textContent = chapters[currentChapterIdx].num;
    }
  }

  function updateZestifyHeroStage(zhp, zcp) {
    if (zhp <= 0 || zcp >= 0.35) {
      zestifyHeroStage.style.opacity = '0';
      zestifyHeroStage.style.pointerEvents = 'none';
      return;
    }

    zestifyHeroStage.style.opacity = '1';
    zestifyHeroStage.style.pointerEvents = (zhp > 0.3 && zcp <= 0) ? 'auto' : 'none';

    const imgBox = zestifyHeroStage.querySelector('.sw-zestify-hero__img-box');
    const heroCard = zestifyHeroStage.querySelector('.sw-zestify-hero__card');
    const backdrop = zestifyHeroStage.querySelector('.sw-zestify-hero__backdrop');
    const ambient = zestifyHeroStage.querySelector('.sw-zestify-hero__ambient');

    backdrop.style.opacity = clamp(zhp * 2.0, 0, 1);
    ambient.style.opacity = clamp(zhp * 2.0, 0, 1);

    if (zcp > 0) {
      // Transition into Zestify Video
      const transP = smooth(zcp / 0.35);
      imgBox.style.transform = `scale(${1 + transP * 0.12})`;
      imgBox.style.opacity = clamp(1 - transP * 1.5, 0, 1);
      if (heroCard) {
        heroCard.style.opacity = clamp(1 - transP * 2.5, 0, 1);
        heroCard.style.transform = `translateY(${transP * 25}px)`;
      }
    } else {
      // Slides in dynamically from the LEFT to full screen!
      const easeZH = smooth(zhp);
      const leftOffset = (1 - easeZH) * -110; // in vw: from -110vw on left to 0vw center
      const scaleVal = 0.85 + easeZH * 0.25;
      const rotateVal = (1 - easeZH) * -15; // in deg

      imgBox.style.transform = `translate3d(${leftOffset}vw, 0, 0) scale(${scaleVal}) rotate(${rotateVal}deg)`;
      imgBox.style.opacity = clamp(zhp * 2.2, 0, 1);

      if (heroCard) {
        const cardOp = clamp((zhp - 0.3) / 0.5, 0, 1);
        heroCard.style.opacity = smooth(cardOp);
        heroCard.style.transform = `translateY(${(1 - smooth(cardOp)) * 30}px)`;
      }
    }
  }

  function updateZestifyVideoStage(zcp, op) {
    if (zcp <= 0 || (op && op >= 0.4)) {
      zestifyStage.style.opacity = '0';
      zestifyStage.style.pointerEvents = 'none';
      return;
    }

    zestifyStage.style.opacity = op > 0 ? clamp(1 - op * 2.5, 0, 1) : '1';
    zestifyStage.style.pointerEvents = (zcp > 0.05 && op <= 0) ? 'auto' : 'none';

    // Video fade in smoothly
    const vidOpacity = clamp(zcp * 3.5, 0, 1);
    zestifyVideo.style.opacity = vidOpacity;

    // Update progress bar fill & counter
    const progressFill = zestifyStage.querySelector('.sw-zestify-stage__progress-fill');
    const numDisplay = zestifyStage.querySelector('.sw-zestify-stage__num');
    if (progressFill) progressFill.style.transform = `scaleX(${zcp})`;

    // Update Story Chapters
    const chapters = PRODUCT_STORIES.zestify.chapters;
    const chapterEls = zestifyStage.querySelectorAll('.sw-zestify-chapter');
    
    let currentChapterIdx = 0;
    chapters.forEach((ch, idx) => {
      const el = chapterEls[idx];
      if (!el) return;

      const isInside = zcp >= ch.start && (idx === chapters.length - 1 ? zcp <= ch.end : zcp < ch.end);
      if (isInside) currentChapterIdx = idx;

      const chMid = (ch.start + ch.end) / 2;
      const chHalfSpan = (ch.end - ch.start) / 2;
      const dist = Math.abs(zcp - chMid);
      let chOp = clamp(1 - (dist / chHalfSpan) * 1.3, 0, 1);
      chOp = smooth(chOp);

      el.style.opacity = chOp;
      el.style.transform = `translate3d(0, ${(1 - chOp) * 28}px, 0)`;
      el.style.pointerEvents = chOp > 0.5 ? 'auto' : 'none';
    });

    if (numDisplay && chapters[currentChapterIdx]) {
      numDisplay.textContent = chapters[currentChapterIdx].num;
    }
  }

  function updateOutroStage(op) {
    if (op <= 0) {
      outroStage.style.opacity = '0';
      outroStage.style.pointerEvents = 'none';
      outroLeftItem.style.transform = 'translate3d(-105vw, 0, 0) rotateY(25deg)';
      outroRightItem.style.transform = 'translate3d(105vw, 0, 0) rotateY(-25deg)';
      if (outroFooter) {
        outroFooter.style.transform = 'translate3d(0, 80px, 0)';
        outroFooter.style.opacity = '0';
      }
      return;
    }

    outroStage.style.opacity = '1';
    outroStage.style.pointerEvents = op > 0.15 ? 'auto' : 'none';

    outroBackdrop.style.opacity = clamp(op * 2.2, 0, 1);
    outroAmbient.style.opacity = clamp(op * 2.0, 0, 1);

    // 1. Dual Cans Entrance (Coca from LEFT, Zestify from RIGHT)
    const canProgress = clamp(op / 0.65, 0, 1);
    const easeCan = smooth(canProgress);

    // Left image (CocaCola output.webp) slides in from LEFT to center-left
    const leftOffset = (1 - easeCan) * -105; // in vw
    outroLeftItem.style.transform = `translate3d(${leftOffset}vw, ${-easeCan * 12}px, 0) rotateY(${(1 - easeCan) * 20}deg) scale(${0.88 + easeCan * 0.12})`;
    outroLeftItem.style.opacity = clamp(canProgress * 2.2, 0, 1);

    // Right image (Zestify zout.webp) slides in from RIGHT to center-right
    const rightOffset = (1 - easeCan) * 105; // in vw
    outroRightItem.style.transform = `translate3d(${rightOffset}vw, ${-easeCan * 12}px, 0) rotateY(${(1 - easeCan) * -20}deg) scale(${0.88 + easeCan * 0.12})`;
    outroRightItem.style.opacity = clamp(canProgress * 2.2, 0, 1);

    // 2. Transparent Footer & Header Rise
    const footerProgress = clamp((op - 0.35) / 0.65, 0, 1);
    const easeFooter = smooth(footerProgress);

    if (outroHeader) {
      outroHeader.style.opacity = easeFooter;
      outroHeader.style.transform = `translate3d(0, ${(1 - easeFooter) * -25}px, 0)`;
    }

    if (outroFooter) {
      outroFooter.style.opacity = easeFooter;
      outroFooter.style.transform = `translate3d(0, ${(1 - easeFooter) * 60}px, 0)`;
    }
  }

  function raf() {
    const eps = isMobile() ? 0.03 : 0.01;
    // Main journey video
    if (video && videoLoaded && !reduce) {
      if (!video.seeking) {
        curTime += (targetTime - curTime) * 0.18;
        if (Math.abs(video.currentTime - curTime) > eps) {
          try {
            video.currentTime = clamp(curTime, 0, videoDuration - 0.05);
          } catch(e){}
        }
      }
    }

    // Coca-Cola scrolltelling video
    if (cocaVideo && cocaVideoLoaded && !reduce) {
      if (!cocaVideo.seeking) {
        cocaCurTime += (cocaTargetTime - cocaCurTime) * 0.18;
        if (Math.abs(cocaVideo.currentTime - cocaCurTime) > eps) {
          try {
            cocaVideo.currentTime = clamp(cocaCurTime, 0, (cocaVideoDuration || 10.0) - 0.05);
          } catch(e){}
        }
      }
    }

    // Zestify scrolltelling video
    if (zestifyVideo && zestifyVideoLoaded && !reduce) {
      if (!zestifyVideo.seeking) {
        zestifyCurTime += (zestifyTargetTime - zestifyCurTime) * 0.18;
        if (Math.abs(zestifyVideo.currentTime - zestifyCurTime) > eps) {
          try {
            zestifyVideo.currentTime = clamp(zestifyCurTime, 0, (zestifyVideoDuration || 10.0) - 0.05);
          } catch(e){}
        }
      }
    }

    requestAnimationFrame(raf);
  }

  seedParticles(particles, reduce || coarse);
  window.addEventListener('scroll', () => { 
    if (!ticking) { 
      ticking = true; 
      requestAnimationFrame(read); 
    } 
  }, { passive: true });

  function onResize() {
    if (coarse && window.innerWidth === laidOutW) return;
    layout();
  }
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', layout);
  window.addEventListener('load', layout);

  updateVideoSrc();
  layout();
  requestAnimationFrame(raf);

  // ---- helpers ----
  function el(tag, cls) { 
    const n = document.createElement(tag); 
    if (cls) n.className = cls; 
    return n; 
  }
  function pad(n) { 
    return String(n).padStart(2, '0'); 
  }
  function esc(s) { 
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); 
  }
  function ctaBtns(cta) {
    let h = '';
    if (cta.primary) h += `<a class="sw-btn sw-btn--primary" href="${esc(cta.primary.href || '#')}">${esc(cta.primary.label)}</a>`;
    if (cta.secondary) h += `<a class="sw-btn sw-btn--ghost" href="${esc(cta.secondary.href || '#')}">${esc(cta.secondary.label)}</a>`;
    return h;
  }
}

function seedParticles(host, reduce) {
  if (!host || reduce) return;
  const kinds = ['dot', 'dot', 'ring'];
  const seeds = [7, 23, 41, 58, 71, 88, 12, 34, 52, 66, 83, 95, 18, 29, 47, 63, 77, 91, 5, 38, 55, 69, 82, 97];
  for (let k = 0; k < 20; k++) {
    const s = document.createElement('span');
    s.className = 'sw-pt sw-pt--' + kinds[k % kinds.length];
    s.style.left = seeds[k % seeds.length] + 'vw';
    s.style.top = ((seeds[(k * 3) % seeds.length] * 1.3) % 100) + 'vh';
    s.style.setProperty('--sw-sc', (0.5 + ((seeds[(k * 5) % seeds.length] % 60) / 60) * 1.1).toFixed(2));
    const dur = 14 + (seeds[(k * 7) % seeds.length] % 22);
    s.style.animationDuration = dur + 's';
    s.style.animationDelay = (-(seeds[(k * 2) % seeds.length] % dur)) + 's';
    host.appendChild(s);
  }
}

function injectCSS() {
  if (document.getElementById('sw-css')) return;
  const css = `
  .sw-root{--sw-bg:#080b11;--sw-ink:#f1f3f9;--sw-ink-soft:#a3aabf;--sw-accent:#5c7cf2;
    --sw-font-display:ui-rounded,"SF Pro Rounded","Segoe UI",system-ui,sans-serif;
    --sw-font-body:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,system-ui,sans-serif;
    color:var(--sw-ink);font-family:var(--sw-font-body);}
  html,body{margin:0;background:var(--sw-bg);overflow-x:hidden;}
  .sw-sky{position:fixed;inset:0;z-index:0;overflow:hidden;pointer-events:none;background:var(--sw-bg);}
  .sw-sky__grad{position:absolute;inset:-10%;background:linear-gradient(178deg,color-mix(in srgb,var(--sw-accent) 8%,var(--sw-bg)) 0%,var(--sw-bg) 60%,color-mix(in srgb,var(--sw-accent) 4%,var(--sw-bg)) 100%);}
  .sw-sky__glow{position:absolute;inset:0;background:radial-gradient(60% 42% at 74% 16%,color-mix(in srgb,var(--sw-accent) 15%,transparent),transparent 70%),radial-gradient(46% 34% at 50% 50%,color-mix(in srgb,#fff 10%,transparent),transparent 70%);}
  .sw-particles{position:absolute;inset:-6% -2%;will-change:transform;}
  .sw-pt{position:absolute;width:13px;height:13px;transform:scale(var(--sw-sc,1));opacity:0;animation:sw-drift linear infinite;}
  .sw-pt::before{content:"";position:absolute;inset:0;border-radius:50%;}
  .sw-pt--dot::before{background:radial-gradient(circle at 34% 30%,color-mix(in srgb,var(--sw-accent) 40%,#fff),transparent 82%);}
  .sw-pt--ring::before{background:transparent;border:2.0px solid color-mix(in srgb,var(--sw-accent) 30%,transparent);}
  @keyframes sw-drift{0%{opacity:0;transform:scale(var(--sw-sc)) translate(0,12vh) rotate(0)}12%{opacity:.3}88%{opacity:.25}100%{opacity:0;transform:scale(var(--sw-sc)) translate(4vw,-22vh) rotate(210deg)}}
  .sw-scrollbar{position:fixed;top:0;left:0;right:0;height:4px;z-index:60;background:color-mix(in srgb,var(--sw-accent) 10%,transparent);}
  .sw-scrollbar span{display:block;height:100%;width:100%;transform-origin:0 50%;transform:scaleX(0);background:var(--sw-accent);box-shadow:0 0 8px var(--sw-accent);}
  .sw-topbar{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:clamp(14px,2.4vw,26px) clamp(18px,5vw,64px);}
  .sw-brand{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--sw-ink);}
  .sw-brand__mark{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,var(--sw-accent),#fff);box-shadow:0 0 15px var(--sw-accent);}
  .sw-brand__name{font-family:var(--sw-font-display);font-weight:800;font-size:1.2rem;letter-spacing:-0.02em;}
  .sw-nav{display:flex;gap:4px;padding:5px;background:rgba(255,255,255,0.03);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.08);border-radius:999px;}
  .sw-nav__item{font:inherit;font-size:.82rem;font-weight:600;color:var(--sw-ink-soft);border:0;background:transparent;cursor:pointer;padding:8px 16px;border-radius:999px;transition:color .25s,background .25s,box-shadow .25s;}
  .sw-nav__item:hover{color:var(--sw-ink);} .sw-nav__item.is-active{color:#fff;background:var(--sw-accent);box-shadow:0 4px 12px color-mix(in srgb,var(--sw-accent) 40%,transparent);}
  .sw-stage{position:fixed;inset:0;z-index:10;pointer-events:none;}
  .sw-scene__video,.sw-scene__still-container{position:absolute;inset:0;width:100%;height:100%;}
  .sw-scene__video{object-fit:cover;object-position:center;opacity:0;transition:opacity 0.6s ease;z-index:2;}
  .sw-scene__video.is-ready{opacity:1;}
  .sw-scene__still{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;opacity:0;transition:opacity 0.5s ease;z-index:1;will-change:transform;}
  .sw-copylayer{position:fixed;inset:0;z-index:20;pointer-events:none;}
  .sw-copylayer::before{content:"";position:absolute;inset:0;width:min(54vw,700px);background:linear-gradient(90deg,var(--sw-bg) 10%,color-mix(in srgb,var(--sw-bg) 85%,transparent) 40%,color-mix(in srgb,var(--sw-bg) 30%,transparent) 70%,transparent 100%);}
  .sw-copy{position:absolute;left:clamp(24px,6vw,80px);top:50%;transform:translateY(-50%);width:min(44vw,480px);opacity:0;will-change:opacity,transform;}
  .sw-copy__num{font-family:ui-monospace,Menlo,monospace;font-size:.78rem;font-weight:600;letter-spacing:.12em;color:var(--sw-accent);}
  .sw-copy__eyebrow{display:block;margin-top:18px;font-family:var(--sw-font-display);font-weight:700;font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;color:var(--sw-ink-soft);}
  .sw-copy__title{font-family:var(--sw-font-display);font-weight:800;color:var(--sw-ink);font-size:clamp(2.2rem,4.6vw,3.8rem);line-height:1.02;margin:12px 0 0;letter-spacing:-.02em;text-shadow:0 4px 30px rgba(0,0,0,0.5);}
  .sw-copy__body{margin-top:18px;font-size:clamp(1rem,1.25vw,1.15rem);line-height:1.6;color:var(--sw-ink-soft);max-width:42ch;text-shadow:0 2px 15px rgba(0,0,0,0.4);}
  .sw-copy__tags{list-style:none;display:flex;flex-wrap:wrap;gap:8px;margin:24px 0 0;padding:0;}
  .sw-copy__tags li{font-size:.82rem;font-weight:600;color:#fff;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);}
  .sw-copy__cta{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px;pointer-events:auto;}
  .sw-btn{text-decoration:none;font-weight:600;font-size:.95rem;padding:14px 26px;border-radius:999px;transition:transform .2s,box-shadow .2s;}
  .sw-btn--primary{color:#000;background:#fff;} .sw-btn--primary:hover{transform:translateY(-2px);box-shadow:0 5px 15px rgba(255,255,255,0.25);}
  .sw-btn--ghost{color:#fff;border:1.5px solid rgba(255,255,255,0.2);} .sw-btn--ghost:hover{transform:translateY(-2px);background:rgba(255,255,255,0.05);}
  .sw-route{position:fixed;right:clamp(14px,2.4vw,30px);top:50%;z-index:40;transform:translateY(-50%);display:flex;flex-direction:column;gap:22px;padding:18px 10px;}
  .sw-route::before{content:"";position:absolute;left:50%;top:22px;bottom:22px;width:2px;transform:translateX(-50%);background:var(--sw-accent);opacity:.2;}
  .sw-route__dot{position:relative;border:0;background:transparent;cursor:pointer;width:14px;height:14px;display:grid;place-items:center;}
  .sw-route__dot i{width:8px;height:8px;border-radius:50%;background:color-mix(in srgb,var(--sw-accent) 30%,transparent);transition:transform .3s,background .3s,box-shadow .3s;}
  .sw-route__dot:hover i{transform:scale(1.25);background:var(--sw-accent);}
  .sw-route__dot.is-active i{background:var(--sw-accent);transform:scale(1.4);box-shadow:0 0 0 6px color-mix(in srgb,var(--sw-accent) 25%,transparent);}
  .sw-route__label{position:absolute;right:24px;top:50%;transform:translateY(-50%) translateX(6px);white-space:nowrap;font-size:.78rem;font-weight:600;color:var(--sw-ink);background:rgba(8,11,17,0.85);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);padding:6px 12px;border-radius:999px;opacity:0;pointer-events:none;transition:opacity .25s,transform .25s;border:1px solid rgba(255,255,255,0.08);}
  .sw-route__dot:hover .sw-route__label,.sw-route__dot.is-active .sw-route__label{opacity:1;transform:translateY(-50%) translateX(0);}
  .sw-hint{position:fixed;left:50%;bottom:26px;z-index:30;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:10px;font-size:.76rem;letter-spacing:.14em;text-transform:uppercase;color:var(--sw-ink-soft);transition:opacity .3s;}
  .sw-hint i{width:22px;height:34px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);position:relative;}
  .sw-hint i::after{content:"";position:absolute;left:50%;top:7px;width:4px;height:7px;border-radius:2px;background:var(--sw-accent);transform:translateX(-50%);animation:sw-wheel 1.7s ease-in-out infinite;}
  @keyframes sw-wheel{0%{opacity:0;top:6px}40%{opacity:1}100%{opacity:0;top:17px}}
  .sw-track{position:relative;z-index:1;width:100%;pointer-events:none;}
  @media (max-width:860px){
    .sw-nav{display:none;}
    .sw-copylayer::before{width:100%;height:65%;top:auto;bottom:0;background:linear-gradient(0deg,var(--sw-bg) 20%,color-mix(in srgb,var(--sw-bg) 75%,transparent) 55%,transparent 100%);}
    .sw-copy{left:clamp(20px,5vw,50px);right:clamp(20px,5vw,50px);top:auto;bottom:clamp(60px,12vh,110px);transform:none;width:auto;max-width:none;}
    .sw-copy{bottom:calc(clamp(56px,12dvh,100px) + env(safe-area-inset-bottom));}
    .sw-copy__title{font-size:clamp(1.9rem,7.5vw,2.7rem);}
    .sw-copy__body{max-width:none;font-size:clamp(.98rem,3.6vw,1.1rem);}
    .sw-hint{bottom:calc(20px + env(safe-area-inset-bottom));}
    .sw-route{gap:16px;right:6px;} .sw-route__label{display:none;}
  }
  @media (max-width:860px) and (orientation:portrait){
    .sw-scene__video,.sw-scene__still{object-position:center;}
  }
  @media (hover:none) and (pointer:coarse){
    .sw-route{padding:14px 6px;}
    .sw-route__dot{width:28px;height:28px;}
    .sw-btn{padding:15px 26px;}
  }
  @media (prefers-reduced-motion:reduce){ .sw-hint i::after{animation:none;} .sw-pt{display:none;} }

  /* Dual Product Showcase Stage (.sw-showcase-stage) */
  .sw-showcase-stage {
    position: fixed;
    inset: 0;
    z-index: 25;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    overflow: hidden;
  }
  .sw-showcase__backdrop {
    position: absolute;
    inset: 0;
    background: #080b11;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.1s linear;
  }
  .sw-showcase__ambient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.18), transparent 70%);
    pointer-events: none;
    z-index: 2;
  }
  .sw-showcase__content {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(16px, 3vh, 32px);
    width: 100%;
    max-width: 1200px;
    padding: 20px;
  }
  .sw-showcase__products {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(24px, 6vw, 70px);
    width: 100%;
    perspective: 1200px;
  }
  .sw-showcase__item {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: filter 0.3s ease;
    outline: none;
  }
  .sw-showcase__img-box {
    position: relative;
    border-radius: 20px;
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
  }
  .sw-showcase__img {
    height: clamp(250px, 48vh, 460px);
    width: auto;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.7));
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-showcase__item:hover .sw-showcase__img {
    transform: scale(1.06) translateY(-8px);
  }
  .sw-showcase__aura {
    position: absolute;
    inset: -25px;
    border-radius: 50%;
    filter: blur(45px);
    opacity: 0.35;
    pointer-events: none;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  .sw-showcase__aura--coca {
    background: radial-gradient(circle, rgba(244, 63, 94, 0.7), transparent 70%);
  }
  .sw-showcase__aura--zestify {
    background: radial-gradient(circle, rgba(168, 85, 247, 0.65), rgba(234, 179, 8, 0.4) 60%, transparent 70%);
  }
  .sw-showcase__item:hover .sw-showcase__aura {
    opacity: 0.85;
    transform: scale(1.1);
  }

  /* ==========================================================================
     Coca-Cola Hero Stage (.sw-coca-hero-stage)
     ========================================================================== */
  .sw-coca-hero-stage {
    position: fixed;
    inset: 0;
    z-index: 28;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    overflow: hidden;
  }
  .sw-coca-hero__backdrop {
    position: absolute;
    inset: 0;
    background: #080b11;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
  }
  .sw-coca-hero__ambient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(132, 204, 22, 0.22), rgba(244, 63, 94, 0.12) 50%, transparent 75%);
    pointer-events: none;
    z-index: 2;
  }
  .sw-coca-hero__content {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(18px, 3vh, 32px);
    width: 100%;
    max-width: 1200px;
    padding: 20px;
  }
  .sw-coca-hero__img-box {
    position: relative;
    will-change: transform, opacity;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sw-coca-hero__img {
    height: clamp(320px, 62vh, 620px);
    width: auto;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(132, 204, 22, 0.4));
    transition: filter 0.4s ease;
  }
  .sw-coca-hero__aura {
    position: absolute;
    inset: -35px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(132, 204, 22, 0.65), rgba(244, 63, 94, 0.35) 60%, transparent 70%);
    filter: blur(55px);
    opacity: 0.75;
    pointer-events: none;
    animation: heroAuraPulse 3s infinite ease-in-out;
  }
  @keyframes heroAuraPulse {
    0%, 100% { transform: scale(1); opacity: 0.65; }
    50% { transform: scale(1.12); opacity: 0.9; }
  }
  .sw-coca-hero__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 18px 32px;
    border-radius: 999px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(132, 204, 22, 0.25);
    opacity: 0;
    will-change: transform, opacity;
  }
  .sw-coca-hero__badge {
    font-family: var(--sw-font-display);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #84cc16;
  }
  .sw-coca-hero__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: clamp(1.4rem, 2.5vw, 1.85rem);
    color: #fff;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .sw-coca-hero__desc {
    font-size: 0.88rem;
    color: var(--sw-ink-soft);
    margin: 0;
    max-width: 48ch;
  }

  /* ==========================================================================
     Coca-Cola 60fps Scrolltelling Stage (.sw-coca-stage)
     ========================================================================== */
  .sw-coca-stage {
    position: fixed;
    inset: 0;
    z-index: 30;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    overflow: hidden;
  }
  .sw-coca-stage__video-wrap {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: #05070c;
  }
  .sw-coca-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #05070c;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .sw-coca-video.is-ready {
    opacity: 1;
  }
  .sw-coca-stage__vignette {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at center, transparent 40%, rgba(5, 7, 12, 0.65) 80%, rgba(5, 7, 12, 0.98) 100%);
  }
  .sw-coca-stage__ambient {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 50%, rgba(132, 204, 22, 0.18), transparent 65%);
  }
  .sw-coca-stage__copylayer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 10;
  }
  .sw-coca-chapter {
    position: absolute;
    left: clamp(24px, 6vw, 80px);
    bottom: clamp(36px, 9vh, 90px);
    max-width: min(480px, 86vw);
    background: transparent;
    border: none;
    border-radius: 24px;
    padding: 0;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    opacity: 0;
    will-change: transform, opacity;
  }
  .sw-coca-chapter__num {
    font-family: var(--sw-font-display);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #84cc16;
    text-shadow: 0 0 16px rgba(132, 204, 22, 0.6), 0 2px 10px rgba(0, 0, 0, 0.8);
  }
  .sw-coca-chapter__eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #e2e8f0;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9);
  }
  .sw-coca-chapter__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
    color: #fff;
    margin: 0;
    line-height: 1.15;
    text-shadow: 0 4px 25px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.9);
  }
  .sw-coca-chapter__body {
    font-size: 0.96rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin: 0;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.95);
  }
  .sw-coca-chapter__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }
  .sw-coca-tag {
    font-size: 0.74rem;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #f1f5f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }
  .sw-coca-stage__hud {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 22px 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    pointer-events: none;
    box-sizing: border-box;
  }
  .sw-coca-stage__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
  }
  .sw-coca-stage__progress-fill {
    display: block;
    height: 100%;
    width: 100%;
    transform-origin: left;
    transform: scaleX(0);
    background: linear-gradient(90deg, #84cc16, #a3e635, #fff);
    box-shadow: 0 0 12px #84cc16;
    transition: transform 0.08s linear;
  }
  .sw-coca-stage__badge {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: 0.86rem;
    letter-spacing: 0.08em;
    color: #84cc16;
    text-shadow: 0 0 15px rgba(132, 204, 22, 0.6);
  }
  .sw-coca-stage__counter {
    font-size: 0.84rem;
    color: var(--sw-ink-soft);
    background: rgba(255, 255, 255, 0.06);
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  .sw-coca-stage__counter strong {
    color: #fff;
  }

  /* ==========================================================================
     Zestify Hero Stage (.sw-zestify-hero-stage)
     ========================================================================== */
  .sw-zestify-hero-stage {
    position: fixed;
    inset: 0;
    z-index: 32;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    overflow: hidden;
  }
  .sw-zestify-hero__backdrop {
    position: absolute;
    inset: 0;
    background: #080b11;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
  }
  .sw-zestify-hero__ambient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.25), rgba(234, 179, 8, 0.15) 55%, transparent 75%);
    pointer-events: none;
    z-index: 2;
  }
  .sw-zestify-hero__content {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(18px, 3vh, 32px);
    width: 100%;
    max-width: 1200px;
    padding: 20px;
  }
  .sw-zestify-hero__img-box {
    position: relative;
    will-change: transform, opacity;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sw-zestify-hero__img {
    height: clamp(320px, 62vh, 620px);
    width: auto;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 35px rgba(168, 85, 247, 0.45));
    transition: filter 0.4s ease;
  }
  .sw-zestify-hero__aura {
    position: absolute;
    inset: -35px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.7), rgba(234, 179, 8, 0.4) 60%, transparent 70%);
    filter: blur(55px);
    opacity: 0.75;
    pointer-events: none;
    animation: heroAuraPulse 3s infinite ease-in-out;
  }
  .sw-zestify-hero__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    background: rgba(15, 23, 42, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.14);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 18px 32px;
    border-radius: 999px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(168, 85, 247, 0.25);
    opacity: 0;
    will-change: transform, opacity;
  }
  .sw-zestify-hero__badge {
    font-family: var(--sw-font-display);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #c084fc;
  }
  .sw-zestify-hero__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: clamp(1.4rem, 2.5vw, 1.85rem);
    color: #fff;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .sw-zestify-hero__desc {
    font-size: 0.88rem;
    color: var(--sw-ink-soft);
    margin: 0;
    max-width: 48ch;
  }

  /* ==========================================================================
     Zestify 60fps Scrolltelling Stage (.sw-zestify-stage)
     ========================================================================== */
  .sw-zestify-stage {
    position: fixed;
    inset: 0;
    z-index: 34;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    overflow: hidden;
  }
  .sw-zestify-stage__video-wrap {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: #05070c;
  }
  .sw-zestify-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #05070c;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .sw-zestify-video.is-ready {
    opacity: 1;
  }
  .sw-zestify-stage__vignette {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at center, transparent 40%, rgba(5, 7, 12, 0.65) 80%, rgba(5, 7, 12, 0.98) 100%);
  }
  .sw-zestify-stage__ambient {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2), transparent 65%);
  }
  .sw-zestify-stage__copylayer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 10;
  }
  .sw-zestify-chapter {
    position: absolute;
    left: clamp(24px, 6vw, 80px);
    bottom: clamp(36px, 9vh, 90px);
    max-width: min(480px, 86vw);
    background: transparent;
    border: none;
    border-radius: 24px;
    padding: 0;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    opacity: 0;
    will-change: transform, opacity;
  }
  .sw-zestify-chapter__num {
    font-family: var(--sw-font-display);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #c084fc;
    text-shadow: 0 0 16px rgba(192, 132, 252, 0.6), 0 2px 10px rgba(0, 0, 0, 0.8);
  }
  .sw-zestify-chapter__eyebrow {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #e2e8f0;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9);
  }
  .sw-zestify-chapter__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: clamp(1.6rem, 3.2vw, 2.4rem);
    color: #fff;
    margin: 0;
    line-height: 1.15;
    text-shadow: 0 4px 25px rgba(0, 0, 0, 0.95), 0 2px 8px rgba(0, 0, 0, 0.9);
  }
  .sw-zestify-chapter__body {
    font-size: 0.96rem;
    line-height: 1.6;
    color: #cbd5e1;
    margin: 0;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.95);
  }
  .sw-zestify-chapter__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }
  .sw-zestify-tag {
    font-size: 0.74rem;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #f1f5f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }
  .sw-zestify-stage__hud {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 22px 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    pointer-events: none;
    box-sizing: border-box;
  }
  .sw-zestify-stage__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
  }
  .sw-zestify-stage__progress-fill {
    display: block;
    height: 100%;
    width: 100%;
    transform-origin: left;
    transform: scaleX(0);
    background: linear-gradient(90deg, #c084fc, #eab308, #fff);
    box-shadow: 0 0 12px #c084fc;
    transition: transform 0.08s linear;
  }
  .sw-zestify-stage__badge {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: 0.86rem;
    letter-spacing: 0.08em;
    color: #c084fc;
    text-shadow: 0 0 15px rgba(192, 132, 252, 0.6);
  }
  .sw-zestify-stage__counter {
    font-size: 0.84rem;
    color: var(--sw-ink-soft);
    background: rgba(255, 255, 255, 0.06);
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  .sw-zestify-stage__counter strong {
    color: #fff;
  }

  @media (max-width: 860px) {
    .sw-zestify-hero__img {
      height: clamp(240px, 45vh, 380px);
    }
    .sw-zestify-hero__card {
      padding: 14px 20px;
      border-radius: 20px;
    }
    .sw-zestify-chapter {
      left: 16px;
      right: 16px;
      bottom: calc(20px + env(safe-area-inset-bottom));
      max-width: none;
      padding: 18px 20px;
    }
    .sw-zestify-stage__hud {
      padding: 14px 18px;
    }
    .sw-zestify-stage__badge {
      font-size: 0.72rem;
    }
  }

  /* ==========================================================================
     Grand Finale Outro Stage & Transparent Footer (.sw-outro-stage)
     ========================================================================== */
  .sw-outro-stage {
    position: fixed;
    inset: 0;
    z-index: 36;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.35s ease;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .sw-outro__backdrop {
    position: absolute;
    inset: 0;
    background: #080b11;
    opacity: 0;
    pointer-events: none;
    z-index: 1;
  }
  .sw-outro__ambient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 35% 45%, rgba(132, 204, 22, 0.18), transparent 55%),
                radial-gradient(circle at 65% 45%, rgba(168, 85, 247, 0.22), transparent 55%);
    pointer-events: none;
    z-index: 2;
  }
  .sw-outro__content {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: clamp(14px, 2vh, 26px);
    width: 100%;
    max-width: 1200px;
    padding: clamp(20px, 3vh, 40px) 24px;
    box-sizing: border-box;
    margin: auto;
  }
  .sw-outro__header {
    text-align: center;
    opacity: 0;
    will-change: transform, opacity;
  }
  .sw-outro__eyebrow {
    font-family: var(--sw-font-display);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    color: #60a5fa;
    text-shadow: 0 0 16px rgba(96, 165, 250, 0.6);
  }
  .sw-outro__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: clamp(1.5rem, 3vw, 2.3rem);
    color: #fff;
    margin: 6px 0 0;
    letter-spacing: -0.02em;
  }
  .sw-outro__products {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(20px, 4.5vw, 60px);
    width: 100%;
    perspective: 1200px;
  }
  .sw-outro__item {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    outline: none;
    will-change: transform, opacity;
  }
  .sw-outro__img-box {
    position: relative;
    border-radius: 20px;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-outro__img {
    height: clamp(190px, 34vh, 340px);
    width: auto;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8));
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-outro__item:hover .sw-outro__img {
    transform: scale(1.06) translateY(-6px);
  }
  .sw-outro__aura {
    position: absolute;
    inset: -25px;
    border-radius: 50%;
    filter: blur(45px);
    opacity: 0.45;
    pointer-events: none;
    transition: opacity 0.4s ease, transform 0.4s ease;
  }
  .sw-outro__aura--coca {
    background: radial-gradient(circle, rgba(132, 204, 22, 0.7), rgba(244, 63, 94, 0.4) 60%, transparent 70%);
  }
  .sw-outro__aura--zestify {
    background: radial-gradient(circle, rgba(168, 85, 247, 0.75), rgba(234, 179, 8, 0.4) 60%, transparent 70%);
  }
  .sw-outro__item:hover .sw-outro__aura {
    opacity: 0.9;
    transform: scale(1.15);
  }
  .sw-outro__product-label {
    font-family: var(--sw-font-display);
    font-weight: 700;
    font-size: 0.92rem;
    letter-spacing: 0.04em;
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 6px 18px;
    border-radius: 999px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all 0.3s;
  }
  .sw-outro__item:hover .sw-outro__product-label {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
  }

  /* Transparent Footer Styling */
  .sw-outro__footer {
    width: 100%;
    max-width: 1100px;
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    padding-top: 24px;
    box-sizing: border-box;
    opacity: 0;
    will-change: transform, opacity;
  }
  .sw-footer__inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  .sw-footer__top {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1.2fr;
    gap: 32px;
    align-items: start;
  }
  .sw-footer__brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sw-footer__brand-mark {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(135deg, #60a5fa, #c084fc);
    box-shadow: 0 0 14px #60a5fa;
  }
  .sw-footer__brand-name {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: 1.15rem;
    letter-spacing: -0.01em;
    color: #fff;
  }
  .sw-footer__tagline {
    margin: 10px 0 0;
    font-size: 0.85rem;
    line-height: 1.55;
    color: var(--sw-ink-soft);
    max-width: 34ch;
  }
  .sw-footer__nav-title {
    font-family: var(--sw-font-display);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    margin: 0 0 12px;
  }
  .sw-footer__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .sw-footer__link {
    color: var(--sw-ink-soft);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 500;
    transition: color 0.25s, transform 0.25s;
    display: inline-block;
  }
  .sw-footer__link:hover {
    color: #60a5fa;
    transform: translateX(4px);
  }
  .sw-footer__cta-desc {
    margin: 0 0 10px;
    font-size: 0.84rem;
    line-height: 1.5;
    color: var(--sw-ink-soft);
  }
  .sw-footer__newsletter {
    display: flex;
    gap: 8px;
  }
  .sw-footer__input {
    flex: 1;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 999px;
    padding: 9px 16px;
    color: #fff;
    font-size: 0.82rem;
    outline: none;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: border-color 0.25s;
  }
  .sw-footer__input:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 12px rgba(96, 165, 250, 0.3);
  }
  .sw-footer__btn {
    background: linear-gradient(135deg, #60a5fa, #c084fc);
    border: none;
    color: #fff;
    font-family: var(--sw-font-display);
    font-weight: 700;
    font-size: 0.82rem;
    padding: 9px 18px;
    border-radius: 999px;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(96, 165, 250, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .sw-footer__btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(96, 165, 250, 0.6);
  }
  .sw-footer__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
  .sw-footer__copy {
    font-size: 0.78rem;
    color: var(--sw-ink-soft);
  }
  .sw-footer__top-btn {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: var(--sw-ink);
    padding: 6px 14px;
    border-radius: 999px;
    font-family: var(--sw-font-display);
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all 0.25s;
  }
  .sw-footer__top-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    transform: translateY(-2px);
  }

  @media (max-width: 860px) {
    .sw-outro__products {
      gap: 16px;
    }
    .sw-outro__img {
      height: clamp(160px, 28vh, 240px);
    }
    .sw-footer__top {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .sw-footer__bottom {
      flex-direction: column;
      gap: 12px;
      align-items: flex-start;
    }
  }

  @media (max-width: 860px) {
    .sw-showcase__products {
      gap: 16px;
    }
    .sw-showcase__img {
      height: clamp(180px, 36vh, 280px);
    }
  }

  /* Glassmorphism Popup Modal */
  .sw-modal {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at center, rgba(15, 23, 42, 0.82) 0%, rgba(5, 7, 12, 0.94) 100%);
    backdrop-filter: blur(28px) saturate(140%);
    -webkit-backdrop-filter: blur(28px) saturate(140%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-modal.is-active {
    opacity: 1;
    pointer-events: auto;
  }
  .sw-modal__container {
    width: min(92vw, 1140px);
    max-height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    position: relative;
    padding: 30px 24px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .sw-modal__close {
    position: absolute;
    top: 12px;
    right: 20px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    color: var(--sw-ink-soft);
    font-size: 1.8rem;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 10;
  }
  .sw-modal__close:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg) scale(1.1);
  }

  /* Modal Header Animation */
  .sw-modal__header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    opacity: 0;
    transform: translateY(-24px);
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-modal.is-active .sw-modal__header {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
  }
  .sw-modal__eyebrow {
    font-family: var(--sw-font-display);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    background: linear-gradient(90deg, #c084fc, #60a5fa, #f472b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .sw-modal__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: clamp(2rem, 4vw, 2.9rem);
    color: #fff;
    margin: 0;
    letter-spacing: -0.02em;
    text-shadow: 0 4px 30px rgba(168, 85, 247, 0.35);
  }
  .sw-modal__subtitle {
    font-size: 0.98rem;
    color: var(--sw-ink-soft);
    margin: 0;
    max-width: 520px;
  }

  /* Cards Container & Animations */
  .sw-modal__cards {
    display: flex;
    gap: 28px;
    width: 100%;
    justify-content: center;
    perspective: 1200px;
  }

  /* Product Card Styling */
  .sw-card {
    flex: 1;
    max-width: 470px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(18, 24, 38, 0.7) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 26px;
    padding: 20px;
    box-shadow: 0 16px 45px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    user-select: none;
    outline: none;
    opacity: 0;
    transform: translateY(45px) scale(0.92) rotateX(8deg);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                background 0.4s;
  }

  /* Specific Themes for Cards */
  .sw-card--coca {
    --card-theme: #f43f5e;
    --card-theme-glow: rgba(244, 63, 94, 0.4);
    --card-theme-soft: rgba(244, 63, 94, 0.12);
  }
  .sw-card--zestify {
    --card-theme: #eab308;
    --card-theme-glow: rgba(234, 179, 8, 0.4);
    --card-theme-soft: rgba(234, 179, 8, 0.12);
  }

  /* Staggered Modal Entrance Animations */
  .sw-modal.is-active .sw-card--coca {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.18s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.18s,
                box-shadow 0.4s, border-color 0.4s, background 0.4s;
  }
  .sw-modal.is-active .sw-card--zestify {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0);
    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
                transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
                box-shadow 0.4s, border-color 0.4s, background 0.4s;
  }

  /* Ambient Glow Aura Behind Card */
  .sw-card__aura {
    position: absolute;
    inset: -20px;
    background: radial-gradient(circle at 50% 30%, var(--card-theme-glow), transparent 70%);
    opacity: 0.25;
    pointer-events: none;
    transition: opacity 0.5s ease, transform 0.5s ease;
    z-index: 0;
  }
  .sw-card:hover .sw-card__aura {
    opacity: 0.65;
    transform: scale(1.1);
  }

  /* Hover & Focus State */
  .sw-card:hover, .sw-card:focus-visible {
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 
                0 0 35px var(--card-theme-glow),
                inset 0 1px 1px rgba(255, 255, 255, 0.3);
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(24, 30, 48, 0.85) 100%);
  }

  /* Active / Selected Card State */
  .sw-card.is-selected {
    border-color: var(--card-theme);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 
                0 0 45px var(--card-theme-glow),
                inset 0 0 18px var(--card-theme-soft);
  }

  /* Card Image Presentation */
  .sw-card__img-wrapper {
    width: 100%;
    aspect-ratio: 1.55;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: #0d111a;
    z-index: 1;
  }
  .sw-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
    display: block;
  }
  .sw-card:hover .sw-card__img {
    transform: scale(1.08);
    filter: brightness(1.06) contrast(1.04);
  }

  /* Shimmer beam on hover */
  .sw-card__shimmer {
    position: absolute;
    top: 0;
    left: -150%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
    transform: skewX(-20deg);
    pointer-events: none;
  }
  .sw-card:hover .sw-card__shimmer {
    left: 150%;
    transition: left 0.85s ease-in-out;
  }

  /* Badge over image */
  .sw-card__badge {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    background: rgba(10, 14, 23, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
  .sw-card__badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--card-theme);
    box-shadow: 0 0 8px var(--card-theme);
    animation: badgePulse 2s infinite;
  }
  @keyframes badgePulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.7; }
  }

  /* Card Content & Typography */
  .sw-card__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 1;
  }
  .sw-card__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.78rem;
    font-weight: 600;
  }
  .sw-card__tier {
    color: var(--card-theme);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  .sw-card__potency {
    color: var(--sw-ink-soft);
    background: rgba(255, 255, 255, 0.06);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.06);
  }
  .sw-card__title {
    font-family: var(--sw-font-display);
    font-weight: 700;
    font-size: 1.4rem;
    color: #fff;
    margin: 0;
    line-height: 1.25;
    transition: color 0.3s;
  }
  .sw-card:hover .sw-card__title {
    color: #fff;
    text-shadow: 0 0 16px var(--card-theme-glow);
  }
  .sw-card__desc {
    font-size: 0.9rem;
    line-height: 1.55;
    color: var(--sw-ink-soft);
    margin: 0;
  }

  /* Tags */
  .sw-card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 2px;
  }
  .sw-tag {
    font-size: 0.74rem;
    font-weight: 500;
    color: #e2e8f0;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.09);
    padding: 4px 10px;
    border-radius: 999px;
    transition: all 0.25s ease;
  }
  .sw-card:hover .sw-tag {
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.07);
  }

  /* Card Footer Interactive Cue */
  .sw-card__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
  }
  .sw-card__action-text {
    font-family: var(--sw-font-display);
    font-size: 0.88rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: #fff;
    transition: color 0.3s;
  }
  .sw-card:hover .sw-card__action-text {
    color: var(--card-theme);
  }
  .sw-card__arrow-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #fff;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-card:hover .sw-card__arrow-btn {
    background: var(--card-theme);
    border-color: var(--card-theme);
    color: #000;
    transform: translateX(4px) scale(1.08);
    box-shadow: 0 0 16px var(--card-theme-glow);
  }
  .sw-card.is-selected .sw-card__arrow-btn {
    background: var(--card-theme);
    color: #000;
    transform: rotate(90deg);
  }

  /* Dynamic Ripple Animation */
  .sw-card__ripple {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle, var(--card-theme-glow) 0%, transparent 70%);
    pointer-events: none;
    transform: scale(0);
    animation: rippleAnimation 0.75s ease-out;
    z-index: 10;
  }
  @keyframes rippleAnimation {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  @media (max-width: 860px) {
    .sw-kettle-btn {
      left: 50%;
      top: 92%;
    }
    .sw-modal__container {
      max-height: 94vh;
      padding: 24px 14px;
      gap: 18px;
    }
    .sw-modal__cards {
      flex-direction: column;
      gap: 20px;
      overflow-y: auto;
      padding: 6px;
      width: 100%;
    }
    .sw-card {
      max-width: none;
      padding: 16px;
      gap: 14px;
      transform: none !important;
      opacity: 1 !important;
    }
    .sw-modal__close {
      top: 8px;
      right: 12px;
      width: 36px;
      height: 36px;
      font-size: 1.4rem;
    }
  }
  /* ==========================================================================
     Full-Screen Storytelling Video Scrub Viewer (.sw-story-viewer)
     ========================================================================== */
  .sw-story-viewer {
    --story-accent: #f43f5e;
    --story-accent-glow: rgba(244, 63, 94, 0.5);
    position: fixed;
    inset: 0;
    z-index: 200;
    background: #05070c;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    user-select: none;
  }
  .sw-story-viewer.is-active {
    opacity: 1;
    pointer-events: auto;
  }

  /* Progress Bar at Top */
  .sw-story-viewer__progress-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.08);
    z-index: 50;
  }
  .sw-story-viewer__progress-fill {
    display: block;
    height: 100%;
    width: 100%;
    transform-origin: left;
    transform: scaleX(0);
    background: linear-gradient(90deg, var(--story-accent), #fff);
    box-shadow: 0 0 14px var(--story-accent);
    transition: transform 0.08s linear;
  }

  /* Top Navigation Bar */
  .sw-story-viewer__topbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 22px 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 40;
    background: linear-gradient(180deg, rgba(5, 7, 12, 0.85) 0%, transparent 100%);
    pointer-events: auto;
  }
  .sw-story-viewer__brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sw-story-viewer__brand-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--story-accent);
    box-shadow: 0 0 10px var(--story-accent);
    animation: badgePulse 2s infinite;
  }
  .sw-story-viewer__brand-name {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: 1.05rem;
    letter-spacing: 0.06em;
    color: #fff;
    text-transform: uppercase;
  }
  .sw-story-viewer__brand-badge {
    font-size: 0.72rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: var(--sw-ink-soft);
    letter-spacing: 0.04em;
  }
  .sw-story-viewer__progress-counter {
    font-size: 0.85rem;
    color: var(--sw-ink-soft);
    background: rgba(255, 255, 255, 0.05);
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
  }
  .sw-story-viewer__progress-counter strong {
    color: #fff;
    font-family: var(--sw-font-display);
  }
  .sw-story-viewer__close {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    padding: 9px 18px;
    border-radius: 999px;
    font-family: var(--sw-font-display);
    font-size: 0.84rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;
    backdrop-filter: blur(12px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-story-viewer__close:hover {
    background: rgba(255, 255, 255, 0.18);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  }

  /* Stage & Video Frame Rendering */
  .sw-story-viewer__stage {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #05070c;
  }
  .sw-story-viewer__video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #05070c;
  }
  .sw-story-viewer__vignette {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at center, transparent 40%, rgba(5, 7, 12, 0.6) 80%, rgba(5, 7, 12, 0.95) 100%);
  }
  .sw-story-viewer__ambient-glow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at 50% 50%, var(--story-accent-glow), transparent 60%);
    opacity: 0.2;
  }

  /* Copy Story Layer & Animated Cards */
  .sw-story-viewer__copylayer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 20;
  }
  .sw-story-copy {
    position: absolute;
    left: clamp(24px, 6vw, 80px);
    bottom: clamp(36px, 9vh, 90px);
    max-width: min(500px, 86vw);
    background: rgba(8, 12, 20, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    padding: 26px 28px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.65), 0 0 35px var(--story-accent-glow);
    backdrop-filter: blur(24px) saturate(130%);
    -webkit-backdrop-filter: blur(24px) saturate(130%);
    display: flex;
    flex-direction: column;
    gap: 12px;
    opacity: 0;
    transform: translateY(35px) scale(0.95);
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-story-copy.is-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }
  .sw-story-copy__num {
    font-family: var(--sw-font-display);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: var(--story-accent);
  }
  .sw-story-copy__eyebrow {
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--sw-ink-soft);
  }
  .sw-story-copy__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: clamp(1.45rem, 2.8vw, 1.95rem);
    color: #fff;
    margin: 0;
    line-height: 1.2;
  }
  .sw-story-copy__body {
    font-size: 0.94rem;
    line-height: 1.55;
    color: var(--sw-ink-soft);
    margin: 0;
  }
  .sw-story-copy__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
  }
  .sw-story-tag {
    font-size: 0.74rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #f1f5f9;
  }

  /* HUD (Right Dots & Bottom Scroll Hint) */
  .sw-story-viewer__hud {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 30;
  }
  .sw-story-viewer__dots {
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 14px;
    pointer-events: auto;
  }
  .sw-story-dot {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: var(--sw-ink-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--sw-font-display);
    font-size: 0.75rem;
    font-weight: 700;
    cursor: pointer;
    backdrop-filter: blur(8px);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-story-dot:hover {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.15);
  }
  .sw-story-dot.is-active {
    background: var(--story-accent);
    border-color: var(--story-accent);
    color: #fff;
    box-shadow: 0 0 16px var(--story-accent);
    transform: scale(1.2);
  }
  .sw-story-viewer__hint {
    position: absolute;
    bottom: 24px;
    right: 32px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--sw-ink-soft);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.75;
    animation: hintBounce 2.2s infinite ease-in-out;
  }
  @keyframes hintBounce {
    0%, 100% { transform: translateY(0); opacity: 0.75; }
    50% { transform: translateY(6px); opacity: 1; }
  }

  /* Completion Card Modal */
  .sw-story-viewer__complete-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.88);
    width: min(90vw, 460px);
    background: rgba(9, 13, 22, 0.88);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 28px;
    padding: 34px 28px;
    text-align: center;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.85), 0 0 50px var(--story-accent-glow);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    opacity: 0;
    pointer-events: none;
    z-index: 50;
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .sw-story-viewer__complete-card.is-visible {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
  }
  .sw-complete-card__icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--story-accent);
    color: #fff;
    font-size: 1.8rem;
    box-shadow: 0 0 25px var(--story-accent);
    margin-bottom: 4px;
  }
  .sw-complete-card__title {
    font-family: var(--sw-font-display);
    font-weight: 800;
    font-size: 1.5rem;
    color: #fff;
    margin: 0;
  }
  .sw-complete-card__desc {
    font-size: 0.92rem;
    line-height: 1.55;
    color: var(--sw-ink-soft);
    margin: 0;
  }
  .sw-complete-card__actions {
    display: flex;
    gap: 12px;
    width: 100%;
    margin-top: 10px;
  }
  .sw-complete-card__btn {
    flex: 1;
    padding: 12px 18px;
    border-radius: 999px;
    font-family: var(--sw-font-display);
    font-weight: 700;
    font-size: 0.88rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  .sw-complete-card__btn--return {
    background: #fff;
    color: #000;
    border: none;
  }
  .sw-complete-card__btn--return:hover {
    background: var(--story-accent);
    color: #fff;
    box-shadow: 0 0 20px var(--story-accent);
  }
  .sw-complete-card__btn--replay {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
  }
  .sw-complete-card__btn--replay:hover {
    background: rgba(255, 255, 255, 0.16);
  }

  @media (max-width: 860px) {
    .sw-story-viewer__topbar {
      padding: 16px 18px;
    }
    .sw-story-viewer__brand-badge, .sw-story-viewer__progress-counter {
      display: none;
    }
    .sw-story-copy {
      left: 16px;
      right: 16px;
      bottom: 20px;
      max-width: none;
      padding: 20px;
    }
    .sw-story-viewer__dots {
      right: 12px;
      gap: 8px;
    }
    .sw-story-dot {
      width: 26px;
      height: 26px;
      font-size: 0.65rem;
    }
    .sw-story-viewer__hint {
      display: none;
    }
  }
  `;
  const style = document.createElement('style'); 
  style.id = 'sw-css';
  style.textContent = css;
  document.head.appendChild(style);
}

if (typeof module !== 'undefined' && module.exports) module.exports = { mountLetsScroll };
if (typeof window !== 'undefined') window.mountLetsScroll = mountLetsScroll;
