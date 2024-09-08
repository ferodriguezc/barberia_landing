const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // Asegúrate de que Webpack esté en modo producción
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // Otras configuraciones de Webpack...
};
