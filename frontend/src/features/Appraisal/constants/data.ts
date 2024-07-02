const logoSize = {
  width: '111px',
  height: '132px',
};

const title = 'Для оценки  арт-объекта заполните форму';

const inputsData = {
  artist: {
    label: 'Автор',
    placeHolder: 'Имя Фамилия',
    name: 'artist',
  },
  art: {
    label: 'Название картины',
    name: 'art',
  },
  description: {
    label: 'Описание',
    placeHolder: 'Холст, масло.....',
    name: 'description',
  },
  upload: {
    label: 'Загрузите фото произведения искусства',
  },
};

const priceText = 'Итого: ';

const sendButton = {
  text: 'Отправить на оценку',
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: 'white',
};

export { title, inputsData, priceText, logoSize, sendButton };
