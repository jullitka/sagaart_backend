const logoSize = {
  width: '111px',
  height: '132px',
};

const title = 'Для оценки и размещения арт-объекта в каталоге заполните форму';

const inputsData = {
  artist: {
    label: 'Автор',
    placeHolder: 'Имя Фамилия',
    name: 'artist',
  },
  art: {
    label: 'Название работы',
    placeHolder: 'Введите название',
    name: 'art',
  },
  year: {
    label: 'Год создания работы',
    placeHolder: '2024',
    name: 'year',
  },
  size: {
    label: 'Размер работы в см',
    placeHolder: '58x70',
    name: '',
  },
  material: {
    label: 'Материал',
    placeHolder: 'Холст, масло',
    name: 'material',
  },
  decor: {
    label: 'Оформление',
    placeHolder: 'Подрамник, рама',
    name: 'decor',
  },
  style: {
    label: 'Стиль',
    placeHolder: 'Реализм',
    name: 'style',
  },
  signature: {
    label: 'Наличие авторской подписи',
    placeHolder: 'Есть авторская подпись',
    name: 'signature',
  },
  email: {
    label: 'Почта',
    placeHolder: 'mail@gmail.com',
    name: 'email',
  },
  phoneNumber: {
    label: 'Номер телефона',
    placeHolder: 'Введите номер',
    name: 'phoneNumber',
  },
  upload: {
    label: 'Загрузите фото художника и фото произведения искусства',
  },
};

const sendButton = {
  text: 'Отправить на оценку',
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: 'white',
};

export { title, inputsData, logoSize, sendButton };
