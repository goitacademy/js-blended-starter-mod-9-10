import { orders, saveOrders } from './storage.js';
import { renderOrders } from './render-orders.js';

const ordersList = document.querySelector('.js-orders');

export function checkOrder(order) {
  // Поверніть проміс із затримкою 1000 мс.
  // Для доступного товару викличте resolve() зі статусом ready.
  // Для недоступного — reject() зі статусом unavailable.
}

export function setupOrderCheck(orders) {
  // Додайте делегований слухач click на ordersList.
  // Знайдіть кнопку й замовлення за data-id.
  // Вимкніть кнопку та викличте checkOrder(order).
  // Обробіть результат через then(), catch() і finally().
  // У finally() збережіть і повторно відобразіть orders.
}

// Викличте setupOrderCheck() для масиву orders.
setupOrderCheck(orders);
