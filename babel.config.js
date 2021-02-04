module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // env: {
  //   production: {
  //     plugins: ['react-native-paper/babel'],
  //   },
  // },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "@assets": "./app/assets",
          "@components": "./app/components",
          "@config": "./app/config",
          "@lib": "./app/lib",
          "@models": "./app/models",
          "@navigation": "./app/navigation",
          "@screens": "./app/screens",
          "@services": "./app/services",
          "@store": "./app/store",
          "@utils": "./app/utils"
        },
      },
    ],
  ],
};


// "paths": {
//   "@assets": ["./src/assets"],
//   "@components": ["./src/components"],
//   "@config": ["./src/config"],
//   "@lib": ["./src/lib"],
//   "@models": ["./src/models"],
//   "@navigation": ["./src/navigation"],
//   "@screens": ["./src/screens"],
//   "@services": ["./src/services"],
//   "@store": ["./src/store"],
//   "@utils": ["./src/utils"]
// },