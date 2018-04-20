import ToastComponent from './toast.vue'
import {mergeOptions} from '../../libs/plugin-helper'

let $vm;
let watcher;

const plugin = {
  install(vue, options = {}) {
    const Toast = vue.extend(ToastComponent);

    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      });
      document.body.appendChild($vm.$el);
    }

    const toast = (options = {}) => {

      if (typeof options === 'string') {
        $vm.text = options;
      }

      if (typeof options === 'object') {
        mergeOptions($vm, options)
      }

      $vm.show = true;
    };

    // all wui's plugins are included in this.$wui
    if (!vue.$wui) {
      vue.$wui = {
        toast
      }
    } else {
      vue.$wui.toast = toast;
    }

    vue.mixin({
      created: function () {
        this.$wui = vue.$wui
      }
    })

  }
};

export default plugin;
