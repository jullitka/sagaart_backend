const styles = {
  appraisal: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: '60px',
    maxWidth: '880px',
    width: '100%',
    maxHeight: '90%',
    overflow: 'auto',
  },
  header: {
    display: 'flex',
    columnGap: '32px',
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
    maxWidth: '450px',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    marginTop: '58px',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '8px',
  },
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
  uploadLabel: {
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '24.2px',
  },
  imgProperties: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
  },
  imgPropertie: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19.36px',
    color: '#757575',
  },
  price: {
    textAlign: 'end',
    fontSize: '24px',
    lineHeight: '33.6px',
    marginBottom: '10px',
  },
  artImg: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
    margin: '24px 0 12px 0',
    width: '160px',
    height: '160px',
  },
  uploadButton: {
    backgroundColor: 'white',
    height: '30px',
    minWidth: '30px',
    padding: '0',
    '& .MuiButton-startIcon': {
      margin: '0',
    },
  },
  uploadIcon: {
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid black',
    height: '30px',
    width: '30px',
  },
};

export default styles;
