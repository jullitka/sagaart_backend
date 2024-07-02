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

const arts = [
  {
    author: 'Анастасия Рыкунова',
    name: 'Цветы войны',
    original: 40000,
    print: 6000,
    img: warFlowers,
  },
  {
    author: 'Юлия Малинина',
    name: 'Меланхолия',
    original: 20000,
    print: 4000,
    img: melancholy,
  },
  {
    author: 'Мишель Ленц',
    name: 'Графитовый день',
    original: 160000,
    print: 20000,
    img: graphiteDay,
  },
  {
    author: 'Беонджи Ким',
    name: 'Покой',
    original: 180000,
    print: 20000,
    img: peace,
  },
  {
    author: 'Лена Чижова',
    name: 'Магия',
    original: 80000,
    print: 6000,
    img: magic,
  },
  {
    author: 'Хейди Ланина',
    name: 'Ангел надежды',
    original: 120000,
    print: 10000,
    img: angelOfHope,
  },
];

export { title, arts };
