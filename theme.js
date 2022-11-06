(function () {
  import("./scripts/index.js")
    .then((module) => {
      module.mode();
    })
    .catch((e) => {
      console.error(e);
    });
})();