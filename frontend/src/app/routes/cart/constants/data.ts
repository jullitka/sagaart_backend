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
  buttonlineHeight: '1.6',
  imagePriceTotal: ' Итого: ',
  imagePriceTotalSum: ' 130 000₽ ',
  PurchaseInfo: 'Для оформления заказа выберите способ оплаты и доставки ',
  PurchaseInfoContact: 'Иванов Иван, ivanov@gmail.com, +375 29 258 12 13',
  PurchaseInfoAdress: 'Адрес',
  PurchaseInfoComment: 'Комментарий к заказу',
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

const logoSize = {
  width: '111px',
  height: '132px',
};

export { cart, button, logoSize };
