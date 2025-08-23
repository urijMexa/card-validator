export default function isValid(cardNumber) {
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    if (!/^\d+$/.test(cleanedCardNumber)) {
        return false;
    }

    const digits = cleanedCardNumber.split('').map(Number);
    let sum = 0;

    for (let i = digits.length - 1; i >= 0; i -= 1) {
        let digit = digits[i];
        if ((digits.length - 1 - i) % 2 === 1) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    return sum % 10 === 0;
}