const toTop = () => window.scrollTo({ top: 0 });

const toBottom = () => window.scrollTo({ top: window.scrollY });

export { toBottom, toTop };
