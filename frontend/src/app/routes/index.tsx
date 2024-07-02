import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import '../fonts/Inter/inter.css';

import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import SignUp from '../../features/SignUp';
import SignIn from '../../features/SignIn';
import Appraisal from '../../features/Appraisal';
import PaymentModal from '../../features/PaymentModal';

interface OutletProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isAppraisalOpen, setIsAppraisalOpen] = useState(false);
  const [isPaidAppraisalOpen, setIsPaidAppraisalOpen] = useState(false);
  const [isPaymentModalOPen, setIsPaymentModalOPen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAppraisalSubmit = () => {
    handleClosePopups();
  };

  const handlePaidAppraisalSubmit = () => {
    setIsPaidAppraisalOpen(false);
    setIsPaymentModalOPen(true);
  };

  const handleClosePopups = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(false);
    setIsAppraisalOpen(false);
    setIsPaidAppraisalOpen(false);
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignInOpen = () => {
    setIsSignInOpen(true);
  };

  const handlePaidAppraisalOpen = () => {
    setIsPaidAppraisalOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', maxWidth: '1920px', margin: '0 auto' }}>
        <Header
          isLoggedIn={isLoggedIn}
          handleSignUpOpen={handleSignUpOpen}
          handleSignInOpen={handleSignInOpen}
          handlePaidAppraisalOpen={handlePaidAppraisalOpen}
        />
        <Box>
          <Outlet context={{ setIsLoggedIn } satisfies OutletProps} />
        </Box>
        <Footer />
        {isSignUpOpen ? (
          <SignUp
            handleClose={handleClosePopups}
            setIsSignUpOpen={setIsSignUpOpen}
            setIsSignInOpen={setIsSignInOpen}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          ''
        )}
        {isSignInOpen ? (
          <SignIn
            handleClose={handleClosePopups}
            setIsSignUpOpen={setIsSignUpOpen}
            setIsSignInOpen={setIsSignInOpen}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : (
          ''
        )}
        <PaymentModal
          open={isPaymentModalOPen}
          handleClose={handleClosePopups}
        />
        <Appraisal
          open={isPaidAppraisalOpen}
          isPaid={true}
          handleClose={handleClosePopups}
          onSubmit={handlePaidAppraisalSubmit}
        />
        <Appraisal
          open={isAppraisalOpen}
          isPaid={false}
          handleClose={handleClosePopups}
          onSubmit={handleAppraisalSubmit}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
