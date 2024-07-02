import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@mui/material';
import {
  logoSize,
  navButtonsRoutes,
  navLinksData,
  signInButton,
  signUpButton,
  mainRoute,
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
}

const Header: FC<HeaderProps> = ({
  isLoggedIn,
  handleSignUpOpen,
  handleSignInOpen,
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
            {navLinksData.map((link, i) => {
              return <NavLink key={i} route={link.rout} text={link.text} />;
            })}
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
