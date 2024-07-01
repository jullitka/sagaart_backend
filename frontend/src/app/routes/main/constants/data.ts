import paintingImg from '../assets/painting.jpeg';
import graphicsImg from '../assets/graphics.jpeg';
import photographyImg from '../assets/photography.jpeg';
import artistsImg from '../assets/artists.jpeg';

const subscriptionData = {
  title: 'Откройте ценность исскуства!',
  subtitle:
    'Мы много лет трудились над инновационным продуктом, призванным перевернуть представления людей о стоимости объектов искусства. Технология Sagaart создана как для профессионалов, так и для новичков, желающих узнать стоимость любого объекта искусства. Как это работает? Заходи в раздел и узнавай подробности!',
};

const catalogData = {
  title: 'Маркетплейс',
  subtitle:
    'А это наш маркеплейс, где все цены на предметы искусства рассчитаны с помощью нашего алгоритма. Смелее заходи и погружайся в мир искусства!',
};

const subscriptionButton = {
  text: 'Попробовать за 300 рублей',
  bgColor: '#252525',
  padding: '28px 0',
  fontSize: '32px',
  lineHeight: '38.73px',
  width: '100%',
  color: 'white',
};

const catalogBuyButton = {
  text: 'Купить',
  bgColor: '#252525',
  padding: '28px 0',
  fontSize: '32px',
  lineHeight: '38.73px',
  width: '100%',
  color: 'white',
};

const catalogSellButton = {
  text: 'Продать',
  bgColor: 'white',
  padding: '28px 0',
  fontSize: '32px',
  lineHeight: '38.73px',
  width: '100%',
  color: '#252525',
  borderColor: '#757575',
};

const cardsData = [
  { title: 'Живопись', rout: '/catalog/painting', img: paintingImg },
  { title: 'Графика', rout: '/catalog/graphics', img: graphicsImg },
  { title: 'Фотография', rout: '/catalog/photography', img: photographyImg },
  { title: 'Художники', rout: '/catalog/artists', img: artistsImg },
];

export {
  subscriptionData,
  catalogData,
  subscriptionButton,
  catalogBuyButton,
  catalogSellButton,
  cardsData,
};
