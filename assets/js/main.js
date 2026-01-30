/**
 * Main JavaScript for Adel Daoud's Website
 */

(function() {
  'use strict';

  // DOM Elements
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const body = document.body;

  // Create overlay element for mobile menu
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  body.appendChild(overlay);

  /**
   * Toggle mobile menu
   */
  function toggleMenu() {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', !isOpen);
    mainNav.classList.toggle('is-open');
    overlay.classList.toggle('is-visible');
    body.style.overflow = isOpen ? '' : 'hidden';
  }

  /**
   * Close mobile menu
   */
  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    body.style.overflow = '';
  }

  /**
   * Handle dropdown toggles on mobile
   */
  function setupMobileDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

    dropdownItems.forEach(function(item) {
      const link = item.querySelector('.nav-link');

      link.addEventListener('click', function(e) {
        // Only handle on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    });
  }

  /**
   * Highlight current page in navigation
   */
  function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function(link) {
      const linkPath = link.getAttribute('href');

      // Remove any existing active class
      link.classList.remove('active');

      // Check for exact match or if current path starts with link path (for sections)
      if (linkPath === currentPath ||
          (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.classList.add('active');
      }

      // Special case for home page
      if (linkPath === '/' && currentPath === '/') {
        link.classList.add('active');
      }
    });
  }

  /**
   * Handle window resize
   */
  function handleResize() {
    if (window.innerWidth > 768) {
      closeMenu();

      // Reset all mobile dropdowns
      document.querySelectorAll('.nav-item.has-dropdown').forEach(function(item) {
        item.classList.remove('is-open');
      });
    }
  }

  /**
   * Handle escape key to close menu
   */
  function handleEscapeKey(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      closeMenu();
    }
  }

  /**
   * Initialize
   */
  function init() {
    // Event listeners
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }

    overlay.addEventListener('click', closeMenu);
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscapeKey);

    // Setup functionality
    setupMobileDropdowns();
    highlightCurrentPage();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
