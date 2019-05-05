const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./_assets/_js/index.js",
    output: {
        filename: "js/app.bundle.js",
        path: path.resolve(__dirname, "assets/")
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === "development"
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".css", ".scss"],
        modules: ["node_modules", path.resolve(__dirname, "_assets/_js")]
    }
};
