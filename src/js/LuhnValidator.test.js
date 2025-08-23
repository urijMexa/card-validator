import isValid from './LuhnValidator';

test('should validate correct card number', () => {
    expect(isValid('4561-2612-1234-1234')).toBeTruthy();
});

test('should invalidate incorrect card number', () => {
    expect(isValid('4561-2612-1234-1235')).toBeFalsy();
});

test('should work with spaces', () => {
    expect(isValid('4561 2612 1234 1234')).toBeTruthy();
});

test('should return false for empty string', () => {
    expect(isValid('')).toBeFalsy();
});