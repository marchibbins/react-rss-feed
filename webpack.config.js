module.exports = {
    entry: {
        Demo: "./src/Demo.js",
        ReactRSS: "./src/ReactRSS.js"
    },
    output: {
        path: "./dist",
        filename: "[name].js",
        libraryTarget: "umd",
        library: "[name]"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
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
}
