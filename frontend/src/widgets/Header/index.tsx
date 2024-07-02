import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Box, Button as MuiButton } from '@mui/material';
import {
  logoSize,
  navButtonsRoutes,
  navLinksData,
  signInButton,
  signUpButton,
  mainRoute,
  appraisalText,
} from './constants/data';
import styles from './constants/styles';

import CartIcon from './assets/cart.svg?react';
import HeartIcon from './assets/heart.svg?react';
import UserIcon from './assets/user.svg?react';

import SearchInput from '../../shared/ui/SearchInput';
import NavLink from '../../shared/ui/NavLink';
import Button from '../../shared/ui/Button';
import IconButton from '../../shared/ui/IconButton';
import Logo from '../../shared/ui/Logo';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
  handleSignUpOpen: () => void;
  handleSignInOpen: () => void;
  handlePaidAppraisalOpen: () => void;
}

const Header: FC<HeaderProps> = ({
  isLoggedIn,
  handleSignUpOpen,
  handleSignInOpen,
  handlePaidAppraisalOpen,
}) => {
  return (
    <Box sx={styles.header}>
      <Box sx={styles.logoSearchContainer}>
        <RouterNavLink to={mainRoute}>
          <Logo width={logoSize.width} height={logoSize.height} />
        </RouterNavLink>
        <Box sx={styles.searchContainer}>
          <SearchInput />
          <Box sx={styles.navContainer}>
            <NavLink
              route={navLinksData.main.rout}
              text={navLinksData.main.text}
            />
            <NavLink
              route={navLinksData.catalog.rout}
              text={navLinksData.catalog.text}
            />
            <MuiButton
              onClick={handlePaidAppraisalOpen}
              sx={styles.appraisalButton}
            >
              {appraisalText}
            </MuiButton>
            <NavLink
              route={navLinksData.pricing.rout}
              text={navLinksData.pricing.text}
            />
            <NavLink
              route={navLinksData.consultation.rout}
              text={navLinksData.consultation.text}
            />
            <NavLink
              route={navLinksData.news.rout}
              text={navLinksData.news.text}
            />
          </Box>
        </Box>
      </Box>
      {isLoggedIn ? (
        <Box sx={styles.actionButtonsContainer}>
          <Link to={navButtonsRoutes.cart}>
            <IconButton
              SvgIcon={CartIcon}
              isCart={true}
              numberOfProducts={'2'}
            />
          </Link>
          <Link to={navButtonsRoutes.favorite}>
            <IconButton SvgIcon={HeartIcon} />
          </Link>
          <Link to={navButtonsRoutes.profile}>
            <IconButton SvgIcon={UserIcon} />
          </Link>
        </Box>
      ) : (
        <Box sx={styles.authButtonsContainer}>
          <Button
            onClick={handleSignInOpen}
            text={signInButton.text}
            bgColor={signInButton.bgColor}
            padding={signInButton.padding}
            fontSize={signInButton.fontSize}
            lineHeight={signInButton.lineHeight}
            width={signInButton.width}
            color={signInButton.color}
            borderColor={signInButton.borderColor}
          />
          <Button
            onClick={handleSignUpOpen}
            text={signUpButton.text}
            bgColor={signUpButton.bgColor}
            padding={signUpButton.padding}
            fontSize={signUpButton.fontSize}
            lineHeight={signUpButton.lineHeight}
            width={signUpButton.width}
            color={signUpButton.color}
          />
        </Box>
      )}
    </Box>
  );
};

export default Header;
