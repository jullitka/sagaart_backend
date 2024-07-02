const styles = {
  favorites: { display: 'flex', flexDirection: 'column', rowGap: '40px' },
  title: {
    fontWeight: '500',
    fontSize: '36px',
    lineHeight: '43.57px',
    marginTop: '20px',
  },
  art: { display: 'flex', flexDirection: 'column' },
  artImg: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '2px',
  },
  artInfo: {
    margin: '16px 0 12px 0',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
  },
  artAuthor: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24.2px',
  },
  artName: {
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24.2px',
    color: '#757575',
  },
  artPricing: { display: 'flex', flexDirection: 'column', rowGap: '4px' },
  artOriginalText: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21.78px',
  },
  artOriginalPrice: {
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '21.78px',
  },
  artPrintText: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21.78px',
    color: '#757575',
  },
  artPrintPrice: {
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '21.78px',
    color: '#757575',
  },
  select: {
    color: '#252525',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '28px',
    border: '1px solid #D5D5D5',
    width: '128px',
    '& .MuiSelect-select': {
      padding: '12px 28px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-iconOutlined': {
      right: '28px',
    },
  },
  container: { display: 'flex', flexDirection: 'column', rowGap: '20px' },
};

export default styles;
