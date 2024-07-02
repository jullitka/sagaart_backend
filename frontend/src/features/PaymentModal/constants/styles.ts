const styles = {
  paymentModal: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: '60px',
    maxWidth: '860px',
    width: '100%',
  },
  header: {
    display: 'flex',
    columnGap: '32px',
    height: '132px',
    alignItems: 'flex-start',
  },
  closeButton: {
    padding: '0',
    position: 'absolute',
    top: '35px',
    right: '32px',
  },
  title: {
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '50.4px',
  },
  userInfo: {
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '28px',
  },
  input: {
    padding: '16px 24px 16px 20px',
    margin: '16px 0 40px 0',
    width: '507px',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '24.2px',
    '& .MuiInputBase-input': {
      padding: '0',
    },
  },
};

export default styles;
