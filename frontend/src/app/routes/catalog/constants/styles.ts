const styles = {
  catalog: {
    display: 'flex',
    flexDirection: 'column',
    margin: '60px 80px 76px 80px',
    rowGap: '36px',
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
  filterButtonSelect: {
    padding: '12px 28px 16px 28px',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '28px',
    textTransform: 'none',
    color: '#252525',
    borderColor: '#D5D5D5',
    '& .MuiButton-endIcon': {
      margin: '0 0 0 12px',
    },
  },
  filterButton: {
    padding: '0',
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '28px',
    textTransform: 'none',
    color: '#252525',
    border: 'none',
    '& .MuiButton-startIcon': {
      margin: '0 19px 0 0',
    },
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterSelects: { display: 'flex', columnGap: '20px' },
};

export default styles;
