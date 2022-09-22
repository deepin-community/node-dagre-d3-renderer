import node from "@rollup/plugin-node-resolve";
var buble = require('rollup-plugin-buble');
var cjs = require('@rollup/plugin-commonjs');

const config = {
  output: {
    indent: false,
    extend: true,
  },
  plugins: [
    buble(),
    node(
     {
        moduleDirectories: ['/usr/share/nodejs', '/usr/lib/nodejs', 'node_modules'],
        preferBuiltins: false
     }
    ),
    cjs(),
  ]
};

export default [
  config
];
