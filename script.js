const form = document.getElementById('reserve');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    message.textContent = '未入力の必須項目があります。内容をご確認ください。';
    return;
  }
  message.textContent = '送信ありがとうございました。担当者より折り返しご連絡いたします。';
  form.reset();
});
