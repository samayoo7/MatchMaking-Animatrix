module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [['module-resolver',
		{
			root: ['./src'],
			extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
			alias: {
				'@assets': './src/assets',
				'@components': './src/components',
				'@constants': './src/constants',
				'@interface': './src/interface',
				'@navigation': './src/navigation',
				'@screens': './src/screens',
				'@utils': './src/utils'
			}
		}],
		'react-native-reanimated/plugin'
	]
};