import isValid from './LuhnValidator';
import getPaymentSystem from './PaymentSystem';

export default class WidgetController {
    constructor() {
        this.form = document.querySelector('.card-form');
        this.input = document.querySelector('.card-input');
        this.button = document.querySelector('.validate-button');
        this.logos = document.querySelectorAll('.card-logo');
        this.message = document.getElementById('validation-message');

        this.onInput = this.onInput.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.form.addEventListener('submit', this.onClick);
        this.input.addEventListener('input', this.onInput);
    }

    onInput() {
        // Очищаем стили и сообщение при вводе
        this.input.classList.remove('valid', 'invalid');
        this.message.textContent = '';
        this.message.className = 'message';

        const system = getPaymentSystem(this.input.value);

        this.logos.forEach((logo) => {
            logo.classList.remove('active');
        });

        if (system !== 'unknown') {
            const activeLogo = document.querySelector(`.${system}`);
            if (activeLogo) {
                activeLogo.classList.add('active');
            }
        }
    }

    onClick(e) {
        e.preventDefault();
        const cardNumber = this.input.value;

        if (isValid(cardNumber)) {
            this.input.classList.remove('invalid');
            this.input.classList.add('valid');
            this.message.textContent = 'Card number is valid!';
            this.message.className = 'message valid';
        } else {
            this.input.classList.remove('valid');
            this.input.classList.add('invalid');
            this.message.textContent = 'Card number is invalid!';
            this.message.className = 'message invalid';
        }
    }
}