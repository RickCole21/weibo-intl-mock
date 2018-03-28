import ToastComponent from './toast.vue'

let $vm;
let watcher;

const plugin = {
  install(Vue, options = {}) {
    const Toast = Vue.extend(ToastComponent);

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      });
      document.body.appendChild($vm.$el);
    }

    const defaults = {};
    for (let i in $vm.$options.props) {
      defaults[i] = $vm.$options.props[i].default;
    }

    Vue.prototype.$toast = function () {
      console.log('toasted');
      if ($vm.show) return;
      $vm.show = true;
    }

  }
};

export default plugin;
