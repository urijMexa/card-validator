const paymentSystems = [
    { name: 'visa', pattern: /^4/ },
    { name: 'mastercard', pattern: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[0-1]|2720)/ },
    { name: 'mir', pattern: /^220[0-4]/ },
    { name: 'discover', pattern: /^(6011|65|64[4-9]|622)/ },
    { name: 'jcb', pattern: /^35(2[89]|[3-8][0-9])/ },
    { name: 'diners', pattern: /^3(0[0-5]|[689])/ },
    { name: 'amex', pattern: /^3[47]/ },
];

export default function getPaymentSystem(cardNumber) {
    const cleanedCardNumber = cardNumber.replace(/\D/g, '');

    for (const system of paymentSystems) {
        if (system.pattern.test(cleanedCardNumber)) {
            return system.name;
        }
    }

    return 'unknown';
}