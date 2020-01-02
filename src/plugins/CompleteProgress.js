import progress from '@/utils/progress';

const CompleteProgress = {};
CompleteProgress.install = function _CompleteProgress(Vue) {
    // 3. 注入组件选项
    Vue.mixin(progress);
};
export default CompleteProgress;
