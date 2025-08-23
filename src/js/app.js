import '../css/style.css';
import WidgetController from './WidgetController';

document.addEventListener('DOMContentLoaded', () => {
    const widget = new WidgetController();
    widget.init();
});