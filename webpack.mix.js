const mix = require("laravel-mix")
const path = require("path")

/*
 |--------------------------------------------------------------------------
 | Webpack Config
 |--------------------------------------------------------------------------
 */
var webpackConfig = {
    output: {
        // This organizes your split files into a specific folder
        chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
        publicPath: '/', // Required for dynamic imports to find the chunks
    },
    resolve: {
        alias: {
            "@": path.resolve("resources/js")
        }
    }
}

mix.options({
    hmrOptions: {
        host: "localhost",
        port: 8081,
        https: false
    }
})

// Frontend
mix.js("resources/js/Frontend/app.jsx", "public/js/frontend")
    .sass("resources/scss/Frontend/globals.scss", "public/css/frontend")
    .styles("resources/css/frontend/bootstrap.min.css", "public/css/frontend/bootstrap.min.css")
    .react()
    .webpackConfig(webpackConfig) // Apply the config here

// Admin
mix.js("resources/js/Admin/app.jsx", "public/js/admin")
    .styles(
        ["resources/css/admin/bootstrap.min.css", "resources/css/admin/fontawesome.css", "resources/css/admin/iDashboard.css"],
        "public/css/admin/all.css"
    )
    .react()
    .webpackConfig(webpackConfig)

mix.copyDirectory("resources/static", "public/static")

mix.copyDirectory("node_modules/tinymce/models", "public/js/tinymce/models");
mix.copyDirectory("node_modules/tinymce/skins", "public/js/tinymce/skins");
mix.copyDirectory("node_modules/tinymce/themes", "public/js/tinymce/themes");
mix.copyDirectory("node_modules/tinymce/plugins", "public/js/tinymce/plugins");
mix.copyDirectory("node_modules/tinymce/icons", "public/js/tinymce/icons");
mix.copy("node_modules/tinymce/tinymce.min.js", "public/js/tinymce/tinymce.min.js");

if (mix.inProduction()) {
    mix.version();
}
