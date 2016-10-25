module.exports = {
    entry: {
        Demo: "./src/Demo.js",
        ReactRSS: "./src/ReactRSS.js"
    },
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}
