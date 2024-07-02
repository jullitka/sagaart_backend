const styles = {
  profile: {
    display: 'grid',
    gridTemplateColumns: '430px 1fr',
    margin: '40px 80px 60px 80px',
  },
  sideContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 36px 20px 0',
    rowGap: '20px',
    borderRight: '1px solid #D5D5D5',
  },
  userContainer: { display: 'flex', columnGap: '8px' },
  avatar: { width: '86px', height: '86px' },
  userText: {
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '38.73px',
  },
  navLinks: { display: 'flex', flexDirection: 'column', rowGap: '32px' },
  buttons: {
    borderTop: '1px solid #D5D5D5',
    borderBottom: '1px solid #D5D5D5',
    margin: '-16px 0',
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '32px',
  },
  buttonBold: {
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '33.6px',
    padding: '0',
    textTransform: 'none',
    color: '#252525',
    justifyContent: 'flex-start',
    textAlign: 'start',
    ':hover': {
      backgroundColor: 'white',
    },
  },
  buttonDefault: {
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '33.6px',
    padding: '0',
    textTransform: 'none',
    color: '#252525',
    justifyContent: 'flex-start',
    textAlign: 'start',
    ':hover': {
      backgroundColor: 'white',
    },
  },
  outletContainer: { paddingLeft: '22px' },
};

export default styles;
