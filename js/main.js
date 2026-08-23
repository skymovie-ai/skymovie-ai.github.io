// モバイルナビ開閉
document.querySelector('.nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav').classList.toggle('open');
});

// スクロールで要素をふわっと表示
var targets = document.querySelectorAll(
  '.card, .step, .plan, .blog-item, .contact-card, .faq details, .section-title, .section-sub, .profile-grid, .timeline li, .form'
);
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el, i) {
    el.classList.add('rv');
    el.style.transitionDelay = (i % 3) * 0.08 + 's';
    io.observe(el);
  });
}
