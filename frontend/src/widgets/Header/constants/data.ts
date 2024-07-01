const logoSize = {
  width: '113px',
  height: '134px',
};

const navLinksData = [
  { rout: '/', text: 'Главная' },
  { rout: '/catalog', text: 'Каталог' },
  { rout: '/appraisal', text: 'Честная оценка' },
  { rout: '/pricing', text: 'Ценообразование' },
  { rout: '/consultation', text: 'Арт-консультация' },
  { rout: '/news', text: 'Новости' },
];

const navButtonsRoutes = {
  cart: '/cart',
  favorite: '/profile/favorites',
  profile: '/profile/main',
};

const signInButton = {
  text: 'Вход',
  bgColor: 'white',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '140px',
  color: '#252525',
  borderColor: '#757575',
};

const signUpButton = {
  text: 'Регистрация',
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '232px',
  color: 'white',
};

const mainRoute = '/'

export { logoSize, navLinksData, navButtonsRoutes, signInButton, signUpButton, mainRoute };
