const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '80px',
    margin: '80px',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '40px',
  },
  title: {
    fontSize: '64px',
    fontWeight: '600',
    lineHeight: '70.4px',
    color: '#252525',
  },
  subtitle: {
    fontSize: '32px',
    fontWeight: '400',
    lineHeight: '38.73px',
    color: '#757575',
    margin: '16px 0 24px 0',
  },
  subscriptionImg: {
    width: '100%',
    height: '554px',
    borderRadius: '4px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  catalogImg: {
    width: '100%',
    height: '439px',
    borderRadius: '4px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '40px',
    gridTemplateRows: '471px',
  },
  card: { position: 'relative' },
  cardImg: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
    width: '100%',
    height: '100%',
  },
  cardTitle: {
    position: 'absolute',
    left: '32px',
    bottom: '32px',
    color: 'white',
  },
};

export default styles;
