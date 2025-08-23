export default function isValid(cardNumber) {
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    if (!/^\d+$/.test(cleanedCardNumber)) {
        return false;
    }

    const digits = cleanedCardNumber.split('').map(Number).reverse();
    let sum = 0;

    for (let i = 0; i < digits.length; i += 1) {
        let digit = digits[i];
        if (i % 2 !== 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }

    return sum % 10 === 0;
}