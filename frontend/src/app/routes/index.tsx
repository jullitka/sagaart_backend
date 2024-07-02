import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import theme from '../theme/theme';
import '../fonts/Inter/inter.css';
import { Outlet } from 'react-router-dom';
import Header from '../../widgets/Header';
import Footer from '../../widgets/Footer';
import SignUp from '../../features/SignUp';
import SignIn from '../../features/SignIn';

interface OutletProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClosePopups = () => {
    setIsSignUpOpen(false);
    setIsSignInOpen(false);
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignInOpen = () => {
    setIsSignInOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', maxWidth: '1920px', margin: '0 auto' }}>
        <Header
          isLoggedIn={isLoggedIn}
          handleSignUpOpen={handleSignUpOpen}
          handleSignInOpen={handleSignInOpen}
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
      </Box>
    </ThemeProvider>
  );
};

export default App;
