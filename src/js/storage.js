const STORAGE_KEY = 'delivery-orders';

const initialOrders = [
  {
    id: 1,
    customer: 'Олена',
    product: 'Ноутбук',
    quantity: 1,
    isAvailable: true,
    status: 'new',
  },
  {
    id: 2,
    customer: 'Максим',
    product: 'Навушники',
    quantity: 2,
    isAvailable: false,
    status: 'new',
  },
  {
    id: 3,
    customer: 'Ірина',
    product: 'Клавіатура',
    quantity: 1,
    isAvailable: true,
    status: 'new',
  },
];

export function saveOrders(orders) {
  // Перетворіть orders на JSON-рядок і збережіть його за ключем STORAGE_KEY.
}

export function loadOrders() {
  // Отримайте дані зі сховища.
  // Якщо їх немає, поверніть [].
  // Виконайте JSON.parse() у try, а в catch поверніть [].
  return [];
}

let savedOrders = [];

// Запишіть у savedOrders результат loadOrders().
// Якщо масив порожній, створіть копію initialOrders і збережіть її.

export let orders = savedOrders;
