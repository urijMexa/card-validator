import isValid from './LuhnValidator';

const validCardNumber = '4242 4242 4242 4242';
const invalidCardNumber = '4242 4242 4242 4243';

test('should validate correct card number', () => {
    expect(isValid(validCardNumber)).toBeTruthy();
});

test('should invalidate incorrect card number', () => {
    expect(isValid(invalidCardNumber)).toBeFalsy();
});

test('should work with dashes', () => {
    expect(isValid('4242-4242-4242-4242')).toBeTruthy();
});

test('should return false for empty string', () => {
    expect(isValid('')).toBeFalsy();
});

s