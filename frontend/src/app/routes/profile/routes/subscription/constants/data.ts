const title = 'Подписка';

const subscription = {
  time: '3 месяца',
  options: [
    {
      text: 'Возможность оценить арт объект по честному алгоритму',
    },
    {
      text: 'Просматривать аналитику по художникам',
    },
    {
      text: 'Оценить свою собственную работу',
    },
  ],
  expirationText: 'Окончание подписки:',
  expirationDate: '23.11.2024',
};

const subscriptionButton = {
  text: 'Оформить подписку',
  bgColor: '#252525',
  padding: '28px 0',
  fontSize: '32px',
  lineHeight: '38.73px',
  width: '859px',
  color: 'white',
};

const renewButton = {
  text: 'Продлить',
  bgColor: '#252525',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: 'white',
};

const cancelButton = {
  text: 'Отменить',
  bgColor: 'white',
  padding: '16px 0',
  fontSize: '24px',
  lineHeight: '33.6px',
  width: '100%',
  color: '#252525',
  borderColor: '#757575',
};

export { title, subscription, subscriptionButton, renewButton, cancelButton };
