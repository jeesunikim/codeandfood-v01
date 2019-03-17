const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./_assets/_js/index.js",
    output: {
        filename: "js/app.bundle.js",
        path: path.resolve(__dirname, "assets/")
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new UglifyJSPlugin({
                sourceMap: false,
                uglifyOptions: {
                    compress: {
                        inline: false
                    }
                }
            })
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "./_assets/_js")],
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "_assets/_js")]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ]
};
