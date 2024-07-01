const styles = {
  onSale: { display: 'flex', flexDirection: 'column', rowGap: '40px' },
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
};

export default styles;
