module.exports = {
    entry: {
        Demo: './src/Demo.js',
        ReactRSS: './src/ReactRSS.js'
    },
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: '[name]'
    },
    externals: {
        'react': {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
