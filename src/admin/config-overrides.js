const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireLessModule = require('react-app-rewire-less-modules');

module.exports = function override(config, env) {
    config = rewireLessModule(config, env);

    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);

    config = rewireLess.withLoaderOptions({
        modifyVars: {"@primary-color": "#ff790a"},
    })(config, env);
    return config;
};