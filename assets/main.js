// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }
})();

// Gentle reveal on scroll (one effect, reduced-motion aware)
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();

// Contact form (client-side demo handler)
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = document.getElementById('form-status');
    var name = (document.getElementById('cf-name') || {}).value || '';
    if (status) {
      status.textContent =
        'Thank you' + (name ? ', ' + name.split(' ')[0] : '') +
        '. Your message has been received \u2014 Jason will reply within one to two business days. ' +
        'If this is an emergency, please call 911 or the Suicide Crisis Helpline at 988.';
      status.classList.add('show');
      status.setAttribute('role', 'status');
    }
    form.reset();
    if (status) status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
