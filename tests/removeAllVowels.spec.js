describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels', function () {
		var results = $filter('removeAllVowels')('taeiou');

		expect(results).toEqual('t');
	});
});
