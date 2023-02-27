(() => {
    switch (window.siyuan.config.system.container) {
        case 'std':
        case 'docker':
            import('./index.js')
                .then((index) => {
                    index.main();
                })
                .catch((e) => {
                    console.error(e);
                });
            break;

        default:
            break;
    }
})();
