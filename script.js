// ── Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });

    // ── Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    function closeMenu() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }

    // ── Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
      });
      navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === current);
      });
    });

    // ── Skill bar animation on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            bar.style.width = bar.style.getPropertyValue('--w') || bar.style['--w'];
            bar.classList.add('animated');
          });
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skills').forEach(el => observer.observe(el));

    // ── Reveal on scroll
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('revealed');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.portfolio-card, .service-card, .tech-card, .edu-card, .contact-card').forEach(el => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });

    // ── WhatsApp send
    function sendWA() {
      const name = document.querySelector('.form-group input[type="text"]').value || 'Seseorang';
      const msg = document.querySelector('textarea').value || '';
      const text = `Halo! Saya ${name}. ${msg}`;
      window.open(`https://wa.me/6282223141940?text=${encodeURIComponent(text)}`, '_blank');
    }

    // ── Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        const toggle = document.getElementById('darkToggle');

        // ── DARK MODE ─────────────────────────
          const darkToggletoggle = document.getElementById('darkToggle');

          // cek saat pertama kali load
          if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light');
            toggle.textContent = '☀️';
          } else {
            toggle.textContent = '🌙';
          }

          // klik tombol
          toggle.addEventListener('click', () => {
            document.body.classList.toggle('light');

            if (document.body.classList.contains('light')) {
              localStorage.setItem('theme', 'light');
              toggle.textContent = '☀️';
            } else {
              localStorage.setItem('theme', 'dark');
              toggle.textContent = '🌙';
            }
        });
      });
    });