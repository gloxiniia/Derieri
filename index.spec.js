const chai = require('chai');
const deri = require('./');

describe('Testing output', () => {

	it('Testing function', done => {
		deri('Hello!').then(response => {
			typeof response == 'string';
			done();
		});
	});

});