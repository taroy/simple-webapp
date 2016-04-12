module.exports = {

    entry: {
        start: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/components/start.jsx'
        ],
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
};