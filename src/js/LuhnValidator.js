export default function isValid(cardNumber) {
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    const digits = cardNumber.split('').map(Number);
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