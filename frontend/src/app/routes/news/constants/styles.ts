const styles = {
  news: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '84px',
    margin: '60px 80px 76px 80px',
  },
  container: { display: 'flex', justifyContent: 'space-between' },
  infoContainer: { paddingTop: '20px', width: '754px' },
  img: {
    height: '487px',
    width: '815px',
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '4px',
  },
  title: { fontWeight: '700', fontSize: '36px', lineHeight: '43.57px' },
  subtitle: {
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38.73px',
    marginTop: '40px',
  },
  description: {
    fontWeight: '400',
    fontSize: '32px',
    lineHeight: '38.73px',
    margin: '20px 0 60px 0',
  },
  paginationContainer: { display: 'flex', justifyContent: 'center' },
  pagination: {
    '& .MuiPaginationItem-root': {
      fontWeight: '400',
      fontSize: '20px',
      lineHeight: '24.2px',
      color: '#757575',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      color: '#252525',
    },
  },
};

export default styles;
