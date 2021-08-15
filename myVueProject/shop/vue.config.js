module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";
                @import "@/styles/_setup.scss";
                @import "@/styles/_pageTitleBlock.scss";`,
            }
        }
    },
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                secure: false,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/api' }
            }
        }
    }
}