// const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
	dest: 'public',
	// runtimeCaching,
	// disable: process.env.NODE_ENV === 'development',
	// register: true,
	// skipWaiting: true,
})

module.exports = withPWA({})
