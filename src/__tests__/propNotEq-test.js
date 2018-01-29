import { propNotEq } from '../';

describe('propNotEq', () => {
	it('should return true when object literal does not contain the property at all', () => {
		expect(propNotEq('a', 1, {})).toBeTruthy();
	});

	describe('when object literal contains the property', () => {
		it('should return true when the value of property differs', () => {
			expect(propNotEq('a', 1, { a: 2 })).toBeTruthy();
		});
		it('should return false when the value of property equals', () => {
			expect(propNotEq('a', 1, { a: 1 }));
		});
	});
});
