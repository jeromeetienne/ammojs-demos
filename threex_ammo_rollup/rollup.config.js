export default {
	entry: 'rollup.main.js',
	targets: [
		{
			format: 'umd',
			moduleName: 'THREEx',
			dest: 'build/threex-ammo.js'
		},
	],
};