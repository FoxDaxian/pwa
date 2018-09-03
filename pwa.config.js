const OfflinePlugin = require('offline-plugin');
exports.webpack = function(config, env) {
    let { production, webpack } = env;

    if (production) {
        config.plugins.push(
            new webpack.DefinePlugin({
                MY_API: JSON.stringify('https://api.example.com')
            })
        );
    } else {
        config.devServer.https = true;
        config.plugins.push(
            new webpack.DefinePlugin({
                MY_API: JSON.stringify('http://staging.example.com')
            })
        );
    }
};
