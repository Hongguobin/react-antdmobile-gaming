const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// ---------导入样式文件
const theme = require('./antd-theme.json');

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: theme
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true
    })
);