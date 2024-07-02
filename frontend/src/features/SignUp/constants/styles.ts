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
  headerContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: '32px',
  },
  closeButton: {
    padding: '0',
    position: 'absolute',
    top: '35px',
    right: '32px',
  },
  inputsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '16px',
    rowGap: '20px',
    marginTop: '40px',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '16px',
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
  inputContainer: { display: 'flex', flexDirection: 'column', rowGap: '8px' },
  inputLabel: {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24.2px',
    color: '#757575',
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
      marginRight: '13px',
    },
  },
  radioCheckboxes: {
    marginTop: '40px',
    display: 'flex',
    rowGap: '28px',
    flexDirection: 'column',
  },
  radioCheckboxesTitle: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24.2px',
  },
  radioCheckboxesContainer: { display: 'flex', columnGap: '40px' },
  radioCheckboxLabel: {
    margin: '0',
    display: 'flex',
    columnGap: '16px',
    '& .MuiFormControlLabel-label': {
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '28px',
    },
  },
  radioCheckbox: { p: '0', color: 'secondary.main' },
  checkboxLabel: {
    margin: '60px 0 24px 0',
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: '8px',
    '& .MuiFormControlLabel-label': {
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '28px',
    },
  },
  checkbox: { p: '0', color: 'secondary.main' },
};

export default styles;
