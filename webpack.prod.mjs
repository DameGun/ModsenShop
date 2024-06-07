import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.mjs';

export default merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
});
