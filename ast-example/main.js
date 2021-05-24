const fs = require("fs");
const path = require("path");

const babel = require('@babel/core');

const { importInjectorFactory } = require('./ast-utils')

const originCode = fs.readFileSync(path.join(__dirname, './template/index.js'), 'utf-8')

const result = babel.transform(originCode, {
  plugins: [importInjectorFactory('data', 'data.json')]
});

console.log(result.code);