/* Minimal zero-dependency deck runtime for the handwritten case.
 * Original html-ppt runtime (overview/presenter/iframe clones) confuses
 * some embedded WebViews; this keeps only: ←/→/Space/Home/End paging,
 * F fullscreen, URL hash deep-link, notes overlay (N). */
(function () {
  'use strict';
  function ready(fn){ if(document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }
  ready(function () {
    var deck = document.querySelector('.deck');
    if (!deck) return;
    var slides = Array.prototype.slice.call(deck.children).filter(function (el) {
      return el.classList && el.classList.contains('slide');
    });
    if (!slides.length) return;
    var cur = 0;
    var m = /#\/(\d+)/.exec(location.hash || '');
    if (m) cur = Math.max(0, Math.min(slides.length - 1, parseInt(m[1], 10) - 1));

    function show(i, push) {
      cur = Math.max(0, Math.min(slides.length - 1, i));
      slides.forEach(function (s, j) {
        var active = j === cur;
        s.classList.toggle('is-active', active);
        s.classList.toggle('is-prev', j < cur);
        /* WebView-safe visibility: drive opacity/transform inline so a
         * frozen CSS-transition clock can never leave a slide hidden. */
        s.style.opacity = active ? '1' : '0';
        s.style.transform = active ? 'none' : 'translateX(30px)';
        s.style.pointerEvents = active ? 'auto' : 'none';
        if (active) s.style.zIndex = '2'; else s.style.zIndex = '';
      });
      if (push !== false) history.replaceState(null, '', '#/' + (cur + 1));
      var n = document.querySelector('.notes-drawer');
      if (n) n.textContent = (slides[cur].querySelector('.notes') || {}).textContent || '';
    }
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { show(cur + 1); e.preventDefault(); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { show(cur - 1); e.preventDefault(); }
      else if (e.key === 'Home') { show(0); e.preventDefault(); }
      else if (e.key === 'End') { show(slides.length - 1); e.preventDefault(); }
      else if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        var d = document.querySelector('.notes-drawer');
        if (!d) {
          d = document.createElement('div');
          d.className = 'notes-drawer';
          d.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:50;padding:14px 24px;font-size:18px;line-height:1.6;background:rgba(24,34,77,.94);color:#f7f5ed;display:none';
          document.body.appendChild(d);
        }
        d.textContent = (slides[cur].querySelector('.notes') || {}).textContent || '';
        d.style.display = d.style.display === 'none' ? 'block' : 'none';
      }
    });
    var x0 = null;
    deck.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    deck.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 48) show(cur + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });
    show(cur, false);
  });
})();
