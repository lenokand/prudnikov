const path = require ('path')
const {CleanWebpackPlugin} = require ('clean-webpack-plugin')
const CopyWebpackPlugin = require ('copy-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');
const merge = require('webpack-merge')

module.exports = {
    entry: [
        './src/index.js',      
        './src/style/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),

        filename: `[name].bundle.[contenthash].js`,
        
    },
    mode: 'production',
    devServer: {
        port: 8082,
        open: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
        // new webpack.SourceMapDevToolPlugin ({
        //     filename:'[file].map'
        //   }),

        new MiniCssExtractPlugin({
            filename: `${new Date().getTime()}.bundle.css`
        }),          
        new CleanWebpackPlugin(),

        
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './src/html/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({ 
            filename: 'second.html',
            template: './src/html/second.html',
            inject: 'body'
    }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets',
                  
                }
            ]
        })

    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                loader:'file-loader',
                exclude:'/node_modules',
                options: {
                    name:'[name].[ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader  //'style-loader', - inject CSS to page
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: { sourceMap: true } // post css plugins, can be exported to postcss.config.js
                    },
                    {
                        loader: 'sass-loader',  // compiles SASS to CSS
                        options: {
                            implementation: require('sass'),
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader  //'style-loader', - inject CSS to page
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: { sourceMap: true } // post css plugins, can be exported to postcss.config.js
                    }
                    
                ]
            }
           
        ]
            
        }
    
}

