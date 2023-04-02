/* eslint-disable @typescript-eslint/no-var-requires */
const withTwin = require('./withTwin.js')

/** @type {import('next').NextConfig} **/
module.exports = withTwin({
  reactStrictMode: true,
  env: {
    NEXT_GITHUB_KEY: process.env.NEXT_GITHUB_KEY,
  },
})
