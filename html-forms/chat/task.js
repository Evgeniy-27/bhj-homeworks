const chatButton = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatInput = document.querySelector('.chat-widget__input');
let date = new Date();
let timeMessag = date.getHours() + ':' + date.getMinutes();

function getMessage() {
  const messagesArray = [
    'Кто тут?',
    'Где Ваша совесть?',
    'К сожалению все операторы заняты, не пишите нам больше!!!',
    'Вы не купили ни одного товара, чтобы с нами разговаривать!',
    'Мы ничего не будем Вам продавать!',
    'Добрый день! До свидания!'
  ]
  message = Math.floor(Math.random() * messagesArray.length);

  return messagesArray[message];
};

chatButton.addEventListener('click', function () {
  chatButton.classList.add('chat-widget_active');
});

document.addEventListener('keydown', event => {

  if (event.keyCode === 13) {
    if (chatInput.value !== '') {

      messages.innerHTML += `
              <div class="message message_client">
                <div class="message__time">${timeMessag}</div>
                <div class="message__text">${chatInput.value}</div>
              </div>
            `;
      chatInput.value = '';

      messages.innerHTML += `
              <div class="message">
                <div class="message__time">${timeMessag}</div>
                <div class="message__text">${getMessage()}</div>
              </div>
            `;
    } else {
      event.preventDefault();
    }
  }
})