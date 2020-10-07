'use strict';

module.exports.hello = async event => {
	let time = new Date().toString();
	return {
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true
		},
		body: JSON.stringify({
			time: time
		})
	};
};
