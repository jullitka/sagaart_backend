const styles = {
  consultation: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '80px 80px 100px 80px',
  },
  infoContainer: { width: '760px' },
  title: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  subtitle: {
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '43.57px',
    margin: '32px 0 48px 0',
  },
  textFieldLabel: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24.2px',
    color: '#757575',
  },
  textField: {
    width: '100%',
    marginTop: '8px',
    '& .MuiOutlinedInput-root': {
      fontWeight: '400',
      fontSize: '24px',
      lineHeight: '33.6px',
      padding: '16px 24px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray',
      },
    },
  },
  inputsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '17px',
    margin: '20px 0 40px 0',
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
    height: '657px',
    width: '913px',
  },
};

export default styles;
