(() => {
  if (window.siyuan.config.system.container === "std") {
    import("./index.js")
      .then((index) => {
        index.main();
      })
      .catch((e) => {
        console.error(e);
      });
  }
})();
