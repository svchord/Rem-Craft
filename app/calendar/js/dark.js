(() => {
  if (window.parent.siyuan.config.appearance.mode === 1) {
    document.body.setAttribute(
      "style",
      "filter: invert(0.9) hue-rotate(200deg);"
    );
  }
})();
