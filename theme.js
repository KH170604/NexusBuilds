// Apply saved theme immediately to avoid flash of wrong mode.
// This script must be loaded in <head> before any body content renders.
(function () {
    const saved = localStorage.getItem('nexus-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

// Call this from the toggle button's onclick.
// Pass `this` (the button element) so the icon can be updated.
function toggleTheme(btn) {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('nexus-theme', isDark ? 'dark' : 'light');
    const icon = btn.querySelector('span');
    if (icon) {
        icon.textContent = isDark ? 'dark_mode' : 'light_mode';
    }
}

// After the DOM is ready, sync all toggle-button icons to the current theme.
document.addEventListener('DOMContentLoaded', function () {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('[aria-label="Toggle Theme"] span').forEach(function (icon) {
        icon.textContent = isDark ? 'dark_mode' : 'light_mode';
    });
});
