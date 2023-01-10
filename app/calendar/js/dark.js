const darkmode = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.setAttribute('style','filter: invert(0.8) hue-rotate(200deg);')
    }
}

darkmode();