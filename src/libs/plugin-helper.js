const mergeOptions = function ($vm, options) {
  const defaults = {};
  const ops = {};

  for (let i in $vm.$options.props) {
    defaults[i] = $vm.$options.props[i].default;
    options[i] && (ops[i] = options[i]);
  }

  const _options = Object.assign({}, defaults, ops);
  for (let i in _options) {
    $vm[i] = _options[i]
  }
};

export {
  mergeOptions
}
