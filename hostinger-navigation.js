// Makes every internal page link work when this folder is opened with VS Code Live Server.
(function () {
  const scriptUrl = new URL(document.currentScript.src, window.location.href);
  const projectBase = new URL("./", scriptUrl);

  document.addEventListener("click", function (event) {
    const link = event.target.closest("a");
    if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

    const rawHref = link.getAttribute("href");
    if (!rawHref || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;

    let destination = new URL(rawHref, window.location.href);
    if (destination.origin !== window.location.origin) return;

    if (!destination.pathname.startsWith(projectBase.pathname)) {
      destination = new URL(destination.pathname.replace(/^\//, "") + destination.search + destination.hash, projectBase);
    }

    if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign(destination.href);
  }, true);
})();
