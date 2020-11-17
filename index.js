const superagent = require('superagent');
const crypto = require('crypto');

module.exports = async content => {
	content = escape(content).includes('%u') ? escape(escape(content).replace(/%u/g, '|')) : escape(content);
	
	let payload = 'stimulus=' + content + '&cb_settings_scripting=no&islearning=1&icognoid=wsf&icognocheck=';
	payload += crypto.createHash('md5').update(payload.substring(7, 33)).digest('hex');

	const req = await superagent.post('https://www.cleverbot.com/webservicemin?uc=UseOfficialCleverbotAPI')
		.set('Cookie', (await superagent.get('https://www.cleverbot.com/')).headers['set-cookie'])
		.type('text/plain')
		.send(payload);

	return decodeURIComponent(req.header["cboutput"]);
}