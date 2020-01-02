const scrollBehavior = function _scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition;
    }
    const position = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
        position.selector = to.hash;

        // specify offset of the element
        if (to.hash === '#anchor2') {
            position.offset = { y: 100 };
        }

        // bypass #1number check
        if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
            return position;
        }

        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false;
    }

    return new Promise((resolve) => {
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // coords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }

        setTimeout(() => {
            resolve(position);
        }, 0);
    });
};

export default scrollBehavior;
