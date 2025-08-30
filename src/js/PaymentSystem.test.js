import getPaymentSystem from './PaymentSystem';

describe('getPaymentSystem', () => {
    const testCases = [
        ['4', 'visa'],
        ['51', 'mastercard'],
        ['55', 'mastercard'],
        ['2221', 'mastercard'],
        ['2720', 'mastercard'],
        ['2200', 'mir'],
        ['2204', 'mir'],
        ['6011', 'discover'],
        ['65', 'discover'],
        ['3528', 'jcb'],
        ['3589', 'jcb'],
        ['300', 'diners'],
        ['36', 'diners'],
        ['37', 'amex'],
        ['34', 'amex'],
        ['9', 'unknown'],
    ];

    test.each(testCases)('should detect %s card as %s', (cardNumber, expectedSystem) => {
        expect(getPaymentSystem(cardNumber)).toBe(expectedSystem);
    });
});