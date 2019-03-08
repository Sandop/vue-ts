module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

    devServer : {
        host: "localhost",
        port: 8088,
        https: false,
        open: false
    }
};