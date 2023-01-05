if (
  window.siyuan.config.system.container !== "ios" &&
  window.siyuan.config.system.container !== "android"
) {
  import("./index.js")
    .then((index) => {
      index.main();
    })
    .catch((e) => {
      console.error(e);
    });
}
