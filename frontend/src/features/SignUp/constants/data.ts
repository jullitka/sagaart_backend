const emailRegex =
  /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const logoSize = {
  width: '111px',
  height: '132px',
};

const title =
  'Зарегистрируйтесь, чтобы покупать и продавать художественные шедевры';

const signUpButton = {
  text: 'Регистрация',
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: 'white',
};

const orText = 'или';

const checkboxText =
  'Создавая аккаунт, вы соглашаетесь с Условиями и Политикой конфиденциальности Saagart';

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

const yetFirstPart = 'Есть аккаунт?';

const yetSecondPart = 'Вход';

const inputsData = {
  firstName: {
    name: 'firstName',
    label: 'Имя',
  },
  lastName: {
    name: 'lastName',
    label: 'Фамилия',
  },
  phone: {
    name: 'phone',
    label: 'Телефон',
  },
  email: {
    name: 'email',
    label: 'Почта',
    placeHolder: 'mail@gmail.com',
  },
  password: {
    name: 'password',
    label: 'Пароль',
  },
  confirmPassword: {
    name: 'confirmPassword',
    label: 'Подтвердите пароль',
  },
};

const radioCheckboxYes = 'Да';

const radioCheckboxNo = 'Нет';

const radioCheckboxesTitle = 'Вы художник?';

export {
  logoSize,
  title,
  signUpButton,
  orText,
  checkboxText,
  appleButton,
  googleButton,
  yetFirstPart,
  yetSecondPart,
  inputsData,
  emailRegex,
  passwordRegex,
  phoneRegex,
  radioCheckboxYes,
  radioCheckboxNo,
  radioCheckboxesTitle,
};
