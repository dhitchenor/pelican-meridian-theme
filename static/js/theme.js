document.addEventListener('DOMContentLoaded', function () {
  /* ---- Theme toggle ---- */
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    var label = themeBtn.querySelector('.theme-toggle-label');

    function syncThemeButton() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeBtn.setAttribute('aria-pressed', isDark ? 'false' : 'true');
      themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      if (label) label.textContent = isDark ? 'Light mode' : 'Dark mode';
    }
    syncThemeButton();

    themeBtn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      syncThemeButton();
    });
  }

  /* ---- Sidebar drawer (mobile) ---- */
  var sidebarBtn = document.getElementById('sidebar-toggle');
  var closeBtn = document.getElementById('sidebar-close');
  var overlay = document.getElementById('sidebar-overlay');
  var root = document.documentElement;

  function closeSidebar() {
    root.classList.remove('sidebar-open');
    if (sidebarBtn) {
      sidebarBtn.setAttribute('aria-expanded', 'false');
      sidebarBtn.setAttribute('aria-label', 'Open menu');
    }
  }

  function openSidebar() {
    root.classList.add('sidebar-open');
    if (sidebarBtn) {
      sidebarBtn.setAttribute('aria-expanded', 'true');
      sidebarBtn.setAttribute('aria-label', 'Close menu');
    }
  }

  if (sidebarBtn) {
    sidebarBtn.addEventListener('click', function () {
      if (root.classList.contains('sidebar-open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });

  /* ---- Copy button on code blocks ---- */
  var copyIcon = '<svg class="icon-copy" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var checkIcon = '<svg class="icon-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  document.querySelectorAll('.post-content pre').forEach(function (pre) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-code-btn';
    btn.setAttribute('aria-label', 'Copy code');
    btn.innerHTML = copyIcon + checkIcon;
    pre.appendChild(btn);

    btn.addEventListener('click', function () {
      var codeEl = pre.querySelector('code');
      var text = (codeEl || pre).innerText;

      function showCopied() {
        btn.classList.add('copied');
        btn.setAttribute('aria-label', 'Copied');
        setTimeout(function () {
          btn.classList.remove('copied');
          btn.setAttribute('aria-label', 'Copy code');
        }, 1500);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(showCopied).catch(function () {
          fallbackCopy(text, showCopied);
        });
      } else {
        fallbackCopy(text, showCopied);
      }
    });
  });

  function fallbackCopy(text, onDone) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      onDone();
    } catch (e) {
      /* clipboard unavailable; nothing more we can do */
    }
    document.body.removeChild(textarea);
  }
});
