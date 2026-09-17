import { orders, saveOrders } from './storage.js';
import { renderOrders } from './render-orders.js';
import { startDispatchCountdown } from './countdown.js';

const sendOrdersButton = document.querySelector('.js-send-orders');
const deliveryMessage = document.querySelector('.js-check-summary');

export function setupOrderDelivery(orders) {
  // Додайте click на sendOrdersButton.
  // Знайдіть readyOrders та unavailableOrders.
  // Якщо готових немає, покажіть повідомлення й завершіть обробник.
  // Змініть ready на delivering, збережіть і відобразіть orders.
  // Запустіть startDispatchCountdown(5000).
  // У then() змініть delivering на delivered, збережіть і зробіть рендер.
  // У finally() знову активуйте sendOrdersButton.
}

// Викличте setupOrderDelivery() для масиву orders.
