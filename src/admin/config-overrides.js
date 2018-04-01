const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireLessModule = require('react-app-rewire-less-modules');
const rewireImageminPlugin = require('react-app-rewire-imagemin-plugin');
// const createRewireDll = require('react-app-rewire-dll');

module.exports = function override(config, env) {
    config = rewireLessModule(config, env);

    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);

    config = rewireLess.withLoaderOptions({
        modifyVars: {"@primary-color": "#ff3f3b"},
    })(config, env);

    config = rewireImageminPlugin(config, env, {
        disable: process.env.NODE_ENV !== 'production',
        pngquant: {
            quality: '85-95'
        }
    });

    // if(env === 'production') {
    //     const rewireHost = createRewireDll({
    //         entry: {
    //             vendor: Object.keys(require('./package.json').dependencies),
    //         },
    //         path: './dll',
    //         filename: '[name].dll.js'
    //     });
    //     config = rewireHost(config, env);
    // }

    return config;
};