const styles = {
  cart: {
    width: '1750px',
    display: 'grid',
    rowGap: '84px',
    margin: '60px 80px 76px 80px',
  },
  container: { display: 'grid', justifyContent: 'space-between' },
  infoContainer: { paddingTop: '20px', width: '1750px', margin: '0px 0px 50px', },
  img: {
    height: '410px',
    width: '439px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
  },
    img1: {
    height: '410px',
    width: '439px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
  },
  imageInfo: {
    margin: '0px 611px 0px 40px;',
  },
  imageSection: {
    display: 'flex',
    width: '1750px',
    margin: '0px 0px 0px 0px',
  },
  imagePriceTotalPrice:{
    display: 'flex',
    justifycontent: 'end',
    flexDirection: 'row-reverse',
        margin: '-40px 85px 0px 0px;',
  },
  buttonBuy: {
        margin: '0px 0px 0px 78%;',
  },
  PurchaseInfoTitle: {fontWeight: '400',
  fontSize: '36px',
  lineHeight: '50.4px',
  margin: '0px 0px 0px 32px',
  width: 597,
  height: 150,
},
closeButton: {
    padding: '0',
    position: 'absolute',
    top: '35px',
    right: '32px',
},
  PurchaseInfoModal: {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 890,
  height: 1029,
  bgcolor: 'background.paper',
  p: 7.50,
},
PurchaseInfoModalHeader: {
  display: 'flex',
},
PurchaseInfoContact: {
  fontWeight: '400', fontSize: '20px', lineHeight: '28px', margin: '0px 0px 16px 0px',
},
PurchaseInfoAdress: {
  fontWeight: '500', fontSize: '20px', lineHeight: '24.2px', margin: '20px 0px 16px 0px', color: 'text.secondary',
},
PurchaseInfoCard: {
  width: 507,
  height: 58,
},
PurchaseInfoAdressInput: {
  width: 768,
  height: 60,
},
PurchaseInfoComment: {
  width: 768,
  height: 110,
},
PurchaseInfoPenIcon: {
  margin: '-42px 0px 0px 60%',
},
PurchaseInfoPenIcon2: {
  margin: '-45px 0px 0px 90%',
},
PurchaseInfoRadioArea: {
display: 'flex',
margin: '45px 0px 0px 0px',
  width: 663,
  height: 143,
},
PurchaseInfoRadioTitle: {
  fontWeight: '500', fontSize: '28px', lineHeight: '33.89px', margin: '0px 0px 25px 0px',
},
PurchaseInfoRadioSubTitle:{
  fontWeight: '400', fontSize: '24px', lineHeight: '33.6px', margin: '0px 0px 0px 0px',
},
PurchaseInfoPrice: {
margin: '80px -80px 26px 0px'
},
ButtonWidth: '768px',
ButtonfontSize: '24px',
PurchaseInfoBank: {
position: 'absolute',
margin: '15px 0px 0px 20px'
},
PurchaseInfoCardNumber:{
margin: '0px 0px 0px 90px',
fontWeight: '700',
fontSize: '20px',
lineHeight: '24.2px',
},
PurchaseInfoRadioPayment: {
margin: '0px 0px 0px 0px',
},
PurchaseInfoLine:{
  borderLeft: 1,
  borderColor: "secondary",
  margin: '0px 45px 10px 30px',
},
  deleteIcon: {
    display: 'flex',
    width: 65,
    height: 65,
    position: 'absolute',
    margin: '350px 0px 0px 380px',
    cursor: 'pointer',
  },
  line: {
    borderBottom: 1, 
    margin: '40px 10px 40px -110px',
    borderColor: 'grey.400',
    width: '110%',
  },
  imagePriceTotal: {fontWeight: '500', fontSize: '36px', lineHeight: '43.57px',color: 'text.secondary', margin: '0px 11px 0px 0px'},
  imagePriceTotalSum: {fontWeight: '500', fontSize: '36px', lineHeight: '43.57px'},
  imagePrice: { fontWeight: '500', fontSize: '36px', lineHeight: '43.57px' },
  title: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  imageAuthor: { fontWeight: '500', fontSize: '28px', lineHeight: '39.2px', margin: '0px 0px 11px 0px' },
  imageTitle: { fontWeight: '600', fontSize: '24px', lineHeight: '33.6px', color: 'text.secondary'},
  imageYear: { color: 'text.main', display: 'flex', fontWeight: '400', fontSize: '24px', lineHeight: '33.6px', margin: '35px 0px 16px 0px' },
  imageYearinfo: { fontWeight: '600', fontSize: '24px', lineHeight: '33.6px', color: 'text.secondary', margin: '0px 0px 0px 10px'},
  imageSize: { color: 'text.main', display: 'flex', fontWeight: '400', fontSize: '24px', lineHeight: '33.6px', margin: '0px 0px 16px 0px' },
  imageSizeInfo: {fontWeight: '600', fontSize: '24px', lineHeight: '33.6px', color: 'text.secondary', margin: '0px 0px 0px 10px'},
  imageMaterial: { color: 'text.main', display: 'flex', fontWeight: '400', fontSize: '24px', lineHeight: '33.6px', margin: '0px 0px 16px 0px' },
  imageMaterialInfo: {fontWeight: '600', fontSize: '24px', lineHeight: '33.6px', color: 'text.secondary', margin: '0px 0px 0px 10px'},
  imageStyle: { color: 'text.main', display: 'flex', fontWeight: '400', fontSize: '24px', lineHeight: '33.6px' },
  imageStyleType: {fontWeight: '600', fontSize: '24px', lineHeight: '33.6px', color: 'text.secondary', margin: '0px 0px 0px 10px'},
};

export default styles;
