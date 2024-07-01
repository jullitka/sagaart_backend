import cartItem from '../assets/CartItem.png';
import cartItem1 from '../assets/CartItem1.png';
import deleteIcon from '../assets/DeleteButton.png'

const cart = {
  title: 'Корзина',
  imagePrice: '40 000 ₽',
  imagePrice1: '90 000 ₽',
  imageAuthor: 'Анастасия Рыкунова',
  imageTitle: 'Цветы войны',
  imageYear:'Год:',
  imageYearinfo: '2024',
  imageSize: 'Размер:',
  imageSizeInfo: '58х70 см',
  imageMaterial: 'Материал:',
  imageMaterialInfo: 'масло, холст',
  imageStyle: 'Стиль:',
  imageStyleType: 'реализм',
  imageAuthor1: 'Сами Мендиратта',
  imageTitle1: 'Графитовый день',
  imageYear1:'Год: 2024',
  imageSize1: 'Размер:',
  imageMaterial1: 'Материал: масло, холст',
  imageStyleType1: 'абстракционизм',
  img: cartItem,
  img1: cartItem1,
  deleteIcon: deleteIcon,
  buttonText: 'оформить',
  imagePriceTotal: ' Итого: ',
  imagePriceTotalSum: ' 130 000₽ ',
};

const button = {
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '32px',
  right: '80px',
  width: '410px',
  height: '195px',
  color: 'white',
  display: 'flex',
  lineHeight: '38.73px',
};

export { cart, button };
