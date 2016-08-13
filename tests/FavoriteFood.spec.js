describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on favorite food correctly', function () {
	var mockedList = [{
		name: '1',
		favoriteFood: 'Hamburger'
	}, {
		name: '2',
		favoriteFood: 'Fries'
	}];

	var results = $filter('favoriteFood')(mockedList, 'Hamburger');

	expect(results.length).toBe(1);
	expect(results[0].name).toBe('1');
});
});
