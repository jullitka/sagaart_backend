import { Dispatch, SetStateAction } from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { logOutHandler } from './utils';

import { Avatar, Box, Button, Typography } from '@mui/material';
import { navLinks, buttons } from './constants/data';
import styles from './constants/styles';

import avatarImg from './assets/avatar.jpeg';

import NavLink from '../../../shared/ui/NavLink';

interface OutletProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Profile = () => {
  const { setIsLoggedIn } = useOutletContext<OutletProps>();
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const navigate = useNavigate();

  const onLogOut = () => {
    logOutHandler();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Box sx={styles.profile}>
      <Box sx={styles.sideContainer}>
        <Box sx={styles.userContainer}>
          <Avatar src={avatarImg} sx={styles.avatar} />
          <Box>
            <Typography sx={styles.userText}>{firstName}</Typography>
            <Typography sx={styles.userText}>{lastName}</Typography>
          </Box>
        </Box>
        <Box sx={styles.navLinks}>
          <NavLink route={navLinks.main.route} text={navLinks.main.text} />
          <NavLink
            route={navLinks.subscription.route}
            text={navLinks.subscription.text}
          />
          <NavLink route={navLinks.onSale.route} text={navLinks.onSale.text} />
          <NavLink
            route={navLinks.purchases.route}
            text={navLinks.purchases.text}
          />
          <NavLink
            route={navLinks.favoriteArtists.route}
            text={navLinks.favoriteArtists.text}
          />
          <NavLink
            route={navLinks.favorites.route}
            text={navLinks.favorites.text}
          />
          <NavLink
            route={navLinks.paymentMethods.route}
            text={navLinks.paymentMethods.text}
          />
          <Box sx={styles.buttons}>
            <Button disableRipple sx={styles.buttonBold}>
              {buttons.sellArt}
            </Button>
            <Button disableRipple sx={styles.buttonBold}>
              {buttons.sellMyArt}
            </Button>
          </Box>
          <Button disableRipple sx={styles.buttonDefault}>
            {buttons.edit}
          </Button>
          <NavLink
            route={navLinks.settings.route}
            text={navLinks.settings.text}
          />
          <Button disableRipple sx={styles.buttonDefault}>
            {buttons.feedback}
          </Button>
          <Button disableRipple sx={styles.buttonDefault} onClick={onLogOut}>
            {buttons.logOut}
          </Button>
        </Box>
      </Box>
      <Box sx={styles.outletContainer}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Profile;
