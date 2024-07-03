const logoSize = {
  width: '239px',
  height: '284px',
};

const aboutUsTitle = 'О нас';

const aboutUsNavLinks = [
  {
    rout: '/goal',
    text: 'Цель',
  },
  {
    rout: '/opportunities',
    text: 'Возможности',
  },
  {
    rout: '/news',
    text: 'Новости',
  },
];

const scannerTitle = 'Сканер';

const scannerNavLinks = [
  {
    rout: '/profile/subscription',
    text: 'О подписке',
  },
  {
    rout: '/profile/subscription',
    text: 'Купить подписку',
  },
];

const catalogTitle = 'Каталог';

const catalogNavLinks = [
  {
    rout: '/catalog/painting',
    text: 'Живопись',
  },
  {
    rout: '/catalog/graphics',
    text: 'Графика',
  },
  {
    rout: '/catalog/artists',
    text: 'Художники',
  },
  {
    rout: '/catalog/photography',
    text: 'Фотография',
  },
  {
    rout: '/catalog/digital',
    text: 'Digital',
  },
  {
    rout: '/catalog/prints',
    text: 'Принты',
  },
  {
    rout: '/catalog/styles',
    text: 'Стили',
  },
];

const profileTitle = 'Личный кабинет';

const profileNavLinks = {
  favorites: {
    route: '/profile/favorites',
    text: 'Избранное',
  },
  sell: {
    text: 'Продать',
  },
  appraisal: {
    text: 'Отправить на оценку',
  },
  purchases: {
    route: '/profile/purchases',
    text: 'История заказов',
  },
  settings: {
    route: '/profile/settings',
    text: 'Настройки',
  },
  feedback: {
    text: 'Обратная связь',
  },
};

const socialsTitle = 'Мы в соцсетях';

const mainRoute = '/';

export {
  logoSize,
  aboutUsTitle,
  aboutUsNavLinks,
  scannerTitle,
  scannerNavLinks,
  catalogTitle,
  catalogNavLinks,
  profileTitle,
  profileNavLinks,
  socialsTitle,
  mainRoute,
};
