(function () {
  import("./scripts/index.js")
    .then((module) => {
      module.main();
    })
    .catch((e) => {
      console.error(e);
    });
})();