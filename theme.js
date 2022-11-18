import("./scripts/index.js")
  .then((scripts) => {
    scripts.main();
  })
  .catch((e) => {
    console.error(e);
  });
