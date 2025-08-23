import isValid from './LuhnValidator';
import getPaymentSystem from './PaymentSystem';

export default class WidgetController {
    constructor() {
        this.form = document.querySelector('.card-form');
        this.input = document.querySelector('.card-input');
        this.button = document.querySelector('.validate-button');
        this.logos = document.querySelectorAll('.card-logo');

        this.onInput = this.onInput.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    init() {
        this.form.addEventListener('submit', this.onClick);
        this.input.addEventListener('input', this.onInput);
    }

    onInput() {
        this.input.classList.remove('valid', 'invalid');
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
        } else {
            this.input.classList.remove('valid');
            this.input.classList.add('invalid');
        }
    }
}