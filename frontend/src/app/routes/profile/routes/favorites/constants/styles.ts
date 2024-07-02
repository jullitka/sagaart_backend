const styles = {
  favorites: { display: 'flex', flexDirection: 'column', rowGap: '40px' },
  title: {
    fontWeight: '500',
    fontSize: '36px',
    lineHeight: '43.57px',
    marginTop: '20px',
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
