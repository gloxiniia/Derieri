const fetch = require('node-fetch');
const crypto = require('crypto');
const querystring = require('querystring');
const utf8 = require('utf8');

module.exports.Client = function Client(options = { islearning: true }) {
	const QUERY = {
		'islearning': options.islearning ? '1' : '0',
		'icognoid': 'wsf'
	};

	this.reply = async function replyMessage(message, context) {
		QUERY.stimulus = encode(message);

		if (context && context.length > 0) {
			context.reverse();
			for (var i = 0; i < context.length; i++) {
				QUERY['vText' + (i + 2)] = encode(context[i]);
			}
		}

		QUERY.cb_settings_scripting = 'no';
		QUERY.icognocheck = md5(querystring.stringify(QUERY).substring(33, 59));

		const res = await fetch('https://www.cleverbot.com/webservicemin?uc=UseOfficialCleverbotAPI', {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
				'Cookie': 'XVIS=TEI939AFFIAGAYQZ;Path=/'
			},
			body: querystring.stringify(QUERY)
		});

		if (res.ok) {
			return utf8.decode(unescape(res.headers.get('cboutput')));
		} else {
			return null;
		}
	}

	function encode(message) {
		return escape(message).includes("%u") ? escape(escape(message).replace(/%u/g, "|")) : escape(message);
	}

	function md5(message) {
		return crypto.createHash('md5').update(message).digest('hex');
	}
}