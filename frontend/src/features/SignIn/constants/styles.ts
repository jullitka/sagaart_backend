const styles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 37, 37, 0.7)',
  },
  container: {
    padding: '60px',
    borderRadius: '4px',
    maxWidth: '880px',
    maxHeight: '90%',
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'auto',
  },
  title: {
    color: '#010101',
    fontSize: '36px',
    fontWeight: '400',
    lineHeight: '50.4px',
    maxWidth: '550px',
  },
  closeButton: {
    padding: '0',
    position: 'absolute',
    top: '35px',
    right: '32px',
  },
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: '32px',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px',
    marginTop: '40px',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
    marginTop: '30px',
  },
  or: {
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '24.2px',
    color: '#252525',
    textAlign: 'center',
  },
  yetFirst: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '33.6px',
    display: 'flex',
    columnGap: '8px',
    justifyContent: 'center',
  },
  yetSecond: {
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '33.6px',
    cursor: 'pointer',
  },
  inputLabel: {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24.2px',
    color: '#757575',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
  },
  input: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '33.6px',
    color: '#252525',
    '& .MuiOutlinedInput-input': {
      padding: '13px 0 13px 24px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
    },
  },
  passwordInput: {
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '33.6px',
    color: '#252525',
    '& .MuiOutlinedInput-input': {
      padding: '13px 0 13px 24px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
    },
    '& .MuiInputAdornment-root': {
      marginRight: '24px',
    },
  },
};

export default styles;
