const chai = require('chai');
const { Client } = require('./');
const deri = new Client();

describe('Testing output', () => {

	it('Testing function', done => {
		deri.reply('Hello!').then(response => {
			typeof response == 'string';
			done();
		});
	});

});