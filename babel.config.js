module.exports = {
  presets: [
    'next/babel',
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@emotion/babel-plugin',
    'babel-plugin-twin',
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
  ],
}
