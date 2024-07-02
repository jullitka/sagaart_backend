const styles = {
  subscription: { display: 'flex', flexDirection: 'column', rowGap: '40px' },
  title: {
    fontWeight: '500',
    fontSize: '36px',
    lineHeight: '43.57px',
    marginTop: '20px',
  },
  purchaseContainer:{
  },
  artContainer:{
    display: "grid", 
    gridTemplateColumns: "repeat(2, 1fr)",
    width: '68%',
    border: 1,
    padding: '20px 20px 20px 20px',
    margin: '20px 0px',
    borderColor: 'grey.400',
  },
  purchaseFilter:{
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '28px',
  },
  artInfo:{
    margin: '0px -50% 10px'
  },
  artStatus:{
        fontWeight: '700',
    fontSize: '32px',
    lineHeight: '38.73px',
  },
  deliveryDate:{
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '33px',
  },
  pickup:{
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '33.6px',
    color: 'text.secondary'
  },
  artCreatetor:{
    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '39.2px',
  },
  artTitle:{
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '33.6px',
    color: 'text.secondary'   
  }
};

export default styles;
