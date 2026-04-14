// ── Longinus: Minimal page init (archive removed, Live Wire is primary) ──

(function () {
  // Keyboard shortcut: / to focus search (if one exists)
  const searchEl = document.getElementById('search-input');
  if (searchEl) {
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchEl) {
        e.preventDefault();
        searchEl.focus();
      }
    });
  }
})();
