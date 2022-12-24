// const CracoAlias = require('craco-alias')

//     module.exports = {
//       plugins: [
//         {
//           plugin: CracoAlias,
//           options: {
//             source: 'tsconfig',
//             baseUrl: '.',
//             tsConfigPath: './tsconfig.path.json',
//           },
//         },
//       ],
//     }

const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};