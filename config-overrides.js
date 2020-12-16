const {
    override,
    fixBabelImports,
    addLessLoader,
    addWebpackAlias,
    overrideDevServer,
} = require("customize-cra");
const path = require("path");

const devServerCustom = () => config => {
    config.quiet = false;
    config.proxy = {
        "/api": {
            target: "http://49.235.106.43:9091",
            // target: "http://127.0.0.1:9999",
            changeOrigin: true,
            // pathRewrite: { '^/api': '/' },
        },
        // "/gq": {
        //     target: "http://103.93.180.122:28080",
        //     pathRewrite: {
        //         "^/gq": "/"
        //     }
        // },
    };
    return config;
};

module.exports = {
    webpack: override(
        // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)  
        fixBabelImports("import", {
            libraryName: "antd",
            libraryDirectory: "es",
            style: true, //自动打包相关的样式 默认为 style:'css'  
        }),
        // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题  
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#1DA57A" },
        }),
        //增加路径别名的处理 
        addWebpackAlias({
            '@': path.resolve('./src')
        })
    ),
    devServer: overrideDevServer(devServerCustom())
}

