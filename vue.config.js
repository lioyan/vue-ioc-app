/* eslint-disable */
const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("vue-ioc-app", path.join(__dirname, "/vue-ioc-app"));
  }
};
