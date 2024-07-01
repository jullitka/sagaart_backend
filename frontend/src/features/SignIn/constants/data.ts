const emailRegex =
  /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const logoSize = {
  width: '111px',
  height: '132px',
};

const title = 'Войдите, чтобы покупать и продавать произведения искусства';

const signInButton = {
  text: 'Войти',
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: 'white',
};

const orText = 'или';

const appleButton = {
  text: 'Продолжить с Apple',
  bgColor: 'white',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: '#252525',
  borderColor: '#757575',
};

const googleButton = {
  text: 'Продолжить с Google',
  bgColor: 'white',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: '#252525',
  borderColor: '#757575',
};

const yetFirstPart = 'Нет аккаунта?';

const yetSecondPart = 'Регистрация';

const inputsData = {
  email: {
    name: 'email',
    label: 'Почта',
    placeHolder: 'mail@gmail.com',
  },
  password: {
    name: 'password',
    label: 'Пароль',
  },
};

export {
  logoSize,
  title,
  signInButton,
  orText,
  appleButton,
  googleButton,
  yetFirstPart,
  yetSecondPart,
  inputsData,
  emailRegex,
  passwordRegex,
};
