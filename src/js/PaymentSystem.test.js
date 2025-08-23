import getPaymentSystem from './PaymentSystem';

test('should detect Visa', () => {
    expect(getPaymentSystem('4')).toBe('visa');
});

test('should detect Mastercard', () => {
    expect(getPaymentSystem('5')).toBe('mastercard');
});

test('should detect Mir', () => {
    expect(getPaymentSystem('2')).toBe('mir');
});