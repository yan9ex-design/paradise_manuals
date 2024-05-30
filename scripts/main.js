// Появление блока в форме
const formBlock = document.getElementById('log-block');
formBlock.classList.add('show');

// Анимация кнопки
const buttonLog = document.getElementById('button-log');
buttonLog.style.transitionDuration = '0.3s';
buttonLog.addEventListener('mouseover', () => {
  buttonLog.style.transform = 'scale(1.1)';
});
buttonLog.addEventListener('mouseout', () => {
  buttonLog.style.transform = 'scale(1)';
});

// Descr
const textElement = document.getElementById('descr');
const text = 'lease enter your login and password';
const charArray = text.split('');
let i = 0;
let timerId;

function animateText() {
  timerId = setInterval(() => {
    if (i === charArray.length) {
      clearInterval(timerId);
      return;
    }
    const charItem = charArray[i];
    textElement.innerHTML += charItem;
    i++;
  }, 80);
}

setTimeout(animateText, 1000);
//temp passwor and login 
const tempUsername = 'temp';
const tempPassword = 'temp';
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');

  // Проверяем, что поля заполнены
  if (username && password) {
    // Проверяем, соответствуют ли введённые данные временному логину и паролю
    if (username === tempUsername && password === tempPassword) {
      // Если да, перенаправляем пользователя на страницу guide.html
      window.location.href = 'guide.html';
    } else {
      // Если нет, выводим сообщение об ошибке
      alert('Неверный логин или пароль');
    }
  }
});
// Получаем data
const form = document.getElementById('form');
const button = document.getElementById('button-log');

const formData = {};

button.addEventListener('click', (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (input.type === 'text') {
      formData.username = input.value;
    } else if (input.type === 'password') {
      formData.password = input.value;
    }
  });

  console.log(formData);
});

// password en
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('keydown', (e) => {
  // Проверяем, является ли символ английским
  if (!/^[a-zA-Z0-9]+$/.test(e.key)) {
    e.preventDefault();
  }

  // Переключаем раскладку на английский
  if (e.key === 'Shift' || e.key === 'Alt') {
    e.preventDefault();
    document.execCommand('insertText', false, 'en');
  }
});

