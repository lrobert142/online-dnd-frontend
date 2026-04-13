(() => {
  const STORAGE_KEY = "adultContentEnabled";

  function isEnabled() {
    return localStorage.getItem(STORAGE_KEY) === "true";
  }

  function applyToImages() {
    const enabled = isEnabled();
    document.querySelectorAll("img[data-adult-src][data-safe-src]").forEach((img) => {
      img.src = enabled ? img.dataset.adultSrc : img.dataset.safeSrc;
    });
    document.querySelectorAll("a[data-adult-href][data-safe-href]").forEach((a) => {
      a.href = enabled ? a.dataset.adultHref : a.dataset.safeHref;
    });
  }

  // Exported so dynamically-rendered pages (e.g. Lunr search results) can
  // call it after inserting new images into the DOM.
  window.applyAdultContentFilter = applyToImages;

  function updateToggleButton() {
    const btn = document.getElementById("adult-content-toggle");
    if (!btn) return;
    const enabled = isEnabled();
    btn.setAttribute("aria-pressed", enabled);
    btn.title = enabled ? "Hide adult content" : "Show adult content";
  }

  function toggle() {
    const enabled = !isEnabled();
    localStorage.setItem(STORAGE_KEY, enabled);
    applyToImages();
    updateToggleButton();
  }

  // Run on DOM ready
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("adult-content-toggle");
    if (btn) {
      btn.addEventListener("click", toggle);
    }
    updateToggleButton();
    applyToImages();
  });
})();
