import path from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 9000,
    hot: true,
  },
});
