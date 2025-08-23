export default function getPaymentSystem(cardNumber) {
    if (cardNumber.startsWith('4')) return 'visa';
    if (cardNumber.startsWith('5')) return 'mastercard';
    if (cardNumber.startsWith('2')) return 'mir';
    return 'unknown';
}