// script.js
function scrollToOrder() {
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

function submitOrder(e) {
  e.preventDefault();
  alert('Order submitted successfully!');
}
