const styles = {
  header: {
    p: '28px 80px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #D5D5D5',
  },
  logoSearchContainer: { display: 'flex', columnGap: '48px', width: '100%' },
  searchContainer: {
    paddingBottom: '11px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '28px',
    maxWidth: '1150px',
    width: '100%',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  actionButtonsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: '32px',
    paddingTop: '16px',
  },
  authButtonsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    columnGap: '12px',
  },
  appraisalButton: {
    padding: '0',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '33.6px',
    textTransform: 'none',
    color: '#252525',
  },
};

export default styles;
