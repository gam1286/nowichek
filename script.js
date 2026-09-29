const cartCount = document.querySelector('#cart-count');
const toast = document.querySelector('#toast');
let count = 0;
let timeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(timeout);
  timeout = setTimeout(() => toast.classList.remove('show'), 2400);
}

document.querySelectorAll('.add').forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    cartCount.textContent = count;
    showToast(`«${button.dataset.product}» добавлен в корзину`);
  });
});

document.querySelector('#subscribe').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  showToast('Спасибо! Первое письмо уже готовится.');
});

document.querySelector('#cart-button').addEventListener('click', () => {
  showToast(count ? `В корзине ${count} ${count === 1 ? 'предмет' : 'предмета'}` : 'Корзина пока пуста');
});
