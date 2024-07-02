import warFlowers from '../assets/warFlowers.png';
import melancholy from '../assets/melancholy.png';
import graphiteDay from '../assets/graphiteDay.png';
import peace from '../assets/peace.png';
import magic from '../assets/magic.png';
import angelOfHope from '../assets/angelOfHope.png';

const title = {
  dontHaveArts: 'У вас нет произведений на продаже',
  haveArts: 'Мои произведения искусства',
};

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
  {
    author: 'Беонджи Ким',
    name: 'Покой',
    original: '180 000 ₽',
    print: '20 000 ₽',
    img: peace,
  },
  {
    author: 'Лена Чижова',
    name: 'Магия',
    original: '80 000 ₽',
    print: '6 000 ₽',
    img: magic,
  },
  {
    author: 'Хейди Ланина',
    name: 'Ангел надежды',
    original: '120 000 ₽',
    print: '10 000 ₽',
    img: angelOfHope,
  },
];

export { title, originalText, printText, arts };
