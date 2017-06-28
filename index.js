const defaultConfig = {
  debug: true
};

let config = defaultConfig;

const debug = function () {
  if (config.debug){
    [].unshift.call(arguments, '|HYPER-NOOP|');
    console.log.apply(this, arguments);
  }
};

exports.decorateConfig = globalConfig => {
  debug('decorateConfig');

  return globalConfig;
};
