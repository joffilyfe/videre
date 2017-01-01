import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: 'src/main.js',
	dest: 'dist/js/videre.min.js',
	format: 'umd',
	sourceMap: 'inline',
	plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      exclude: ['**/*.sass', '**/*.css']
    }),
		babel({
			exclude: 'node_modules/**'
		}),
    uglify()
	],
  moduleName: 'Videre',
  moduleId: 'videre',
};
