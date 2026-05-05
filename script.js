const form = document.getElementById('buy');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    message.textContent = '入力内容をご確認ください。';
    return;
  }

  const size = form.elements.size.value;
  const qty = form.elements.qty.value;
  message.textContent = `${size}サイズを${qty}点で受け付けました。ありがとうございます。`;
  form.reset();
});
