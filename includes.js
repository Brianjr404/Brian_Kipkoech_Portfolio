// Simple include loader: injects includes/header.html into elements marked with data-include="header"
// Usage in HTML: <div data-include="header" data-title="[ CS RESOURCE HUB ]"></div>

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-include="header"]').forEach(function (el) {
    fetch('includes/header.html')
      .then(function (res) { return res.text(); })
      .then(function (html) {
        el.innerHTML = html;
        var title = el.getAttribute('data-title') || document.title || '';
        var titleEl = el.querySelector('#shared-title');
        if (titleEl) titleEl.textContent = title;
      })
      .catch(function (err) {
        console.error('Failed to load include: includes/header.html', err);
      });
  });
});
