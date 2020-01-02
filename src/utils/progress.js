import progress from 'nprogress';

export default {
    beforeRouteEnter(from, to, next) {
        next(() => {
            progress.done();
        });
    },
    beforeRouteUpdate(from, to, next) {
        progress.done();
        next();
    },
};
