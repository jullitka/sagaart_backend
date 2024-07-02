const artData = {
  year: 'Год:',
  size: 'Размер:',
  material: 'Материал:',
  style: 'Стиль:',
  signature: 'Подпись:',
  exhibitions: 'Выставки:',
  design: 'Оформление:',
  series: 'Серия:',
};

const title = 'О художнике';

const artistTitle = 'Избранные выставки:';

const originalButton = {
  text: 'Купить оригинал за',
  bgColor: '#252525',
  padding: '28px 0',
  fontSize: '32px',
  lineHeight: '38.73px',
  width: '100%',
  color: 'white',
};

const printButton = {
  text: 'Купить принт за',
  bgColor: 'white',
  padding: '28px 0',
  fontSize: '32px',
  lineHeight: '38.73px',
  width: '100%',
  color: '#252525',
  borderColor: '#757575',
};

const artMockData = {
  artist: {
    mentors:
      'На моё творчество повлияли такие художники, как: Lucian Freud, Phil Hale, Francois Bard, Käthe Kollwitz.',
    study: [
      {
        period: '2015-2017',
        institutionName:
          'Московская центральная художественная школа при Российской академии художеств',
      },
      {
        period: '2018',
        institutionName:
          'н.в. Мастерская Айдан Салаховой (МГАХИ им. В.И. Сурикова)',
      },
    ],
    exhibitions: [
      {
        year: '2023',
        info: 'Далёкое эхо, галерея «Sistema gallery», Москва, Россия',
      },
      { year: '2022', info: 'Акт творения, галерея «Соль», Москва, Россия' },
      {
        year: '2022',
        info: 'Если чуствуешь себя гвоздем - все вокруг кажется молотком, галерея «Sistema Gallery», Москва',
      },
      {
        year: '2018',
        info: 'Восточное путешествие Цесаревича 1890-1891 гг. в полотнах современников, Москва, Россия',
      },
      { year: '2017', info: 'Дым перемен, Москва, Россия' },
    ],
  },
  price: {
    original: '40 000 ₽',
    print: '6 000 ₽',
    increasedBy: '5 000 ₽',
  },
};

export {
  artData,
  originalButton,
  printButton,
  title,
  artistTitle,
  artMockData,
};
