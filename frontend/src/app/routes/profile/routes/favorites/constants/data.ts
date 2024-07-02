import warFlowers from '../assets/warFlowers.png';
import melancholy from '../assets/melancholy.png';
import graphiteDay from '../assets/graphiteDay.png';

const title = 'Избранное';

const originalText = 'Оригинал';

const printText = 'Принт';

const arts = [
  {
    author: 'Анастасия Рыкунова',
    name: 'Цветы войны',
    original: '40 000 ₽',
    print: '6 000 ₽',
    img: warFlowers,
  },
  {
    author: 'Юлия Малинина',
    name: 'Меланхолия',
    original: '20 000 ₽',
    print: '4 000 ₽',
    img: melancholy,
  },
  {
    author: 'Мишель Ленц',
    name: 'Графитовый день',
    original: '160 000 ₽',
    print: '20 000 ₽',
    img: graphiteDay,
  },
];

const selectData = {
  defaultValue: 'Все',
  options: ['Все', 'Не Все'],
};

export { title, arts, originalText, printText, selectData };
