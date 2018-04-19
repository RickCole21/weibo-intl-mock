import io from 'socket.io-client'

const plugin = {
  install(Vue, options = {}) {
    Vue.prototype.$socket = io('http://localhost:4001');
  }
};

export default plugin;
