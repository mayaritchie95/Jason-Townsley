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
        '. Your message has been received — Jason will reply within one to two business days. ' +
        'If this is an emergency, please call 911 or Talk Suicide Canada at 1-833-456-4566.';
      status.classList.add('show');
      status.setAttribute('role', 'status');
    }
    form.reset();
    if (status) status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
})();
