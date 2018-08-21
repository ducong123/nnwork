'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
 /* API_ROOT: '"//rap2api.taobao.org/app/mock/24754"'*///测试环境的接口
})
