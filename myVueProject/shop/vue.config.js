module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/_variables.scss";
                @import "@/styles/_setup.scss";
                @import "@/styles/_pageTitleBlock.scss";`,
            }
        }
    }
}