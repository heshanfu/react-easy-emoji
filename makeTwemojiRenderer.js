var React = require('react'),
	assign = require('lodash.assign')

var pageProtocol = (typeof location === 'undefined') ? '' : ((location.pageProtocol === 'https:') ? 'https:' : 'http:')

var emojiStyle = {
	height: '1em',
	width: '1em',
	margin: '0 .05em 0 .1em',
	verticalAlign: '-0.1em'
}

module.exports = function makeTwemojiRenderer(options) {
	options = assign({}, {
		protocol: pageProtocol,
		baseUrl: '//twemoji.maxcdn.com/2/',
		size: '72x72',
		ext: '.png',
		props: null
	}, options)

	// Accept protocol with or without a colon
	if (options.protocol && options.protocol.length > 0 && options.protocol.charAt(protocol.length - 1) !== ':') {
		options.protocol += ':'
	}

	return function renderTwemoji (icon, match, offset) {
		var src = options.protocol + options.baseUrl + options.size + '/' + icon + options.ext

		return React.createElement(
			'img',
			assign({
				key: offset,
				alt: match,
				draggable: false,
				src: src,
				style: emojiStyle
			}, options.props)
		)
	}
}