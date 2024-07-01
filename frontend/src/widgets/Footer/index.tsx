import { NavLink } from 'react-router-dom';
import './Footer.css';

import { Box, Typography } from '@mui/material';
import {
  aboutUsNavLinks,
  aboutUsTitle,
  catalogNavLinks,
  catalogTitle,
  logoSize,
  profileTitle,
  profileNavLinks,
  scannerNavLinks,
  scannerTitle,
  socialsTitle,
  mainRoute,
} from './constants/data';
import styles from './constants/styles';

import TwitterIcon from './assets/twitter.svg?react';
import InstagramIcon from './assets/instagram.svg?react';
import TelegramIcon from './assets/telegram.svg?react';
import Logo from '../../shared/ui/Logo';

import IconButton from '../../shared/ui/IconButton';

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Logo width={logoSize.width} height={logoSize.height} />
      <Box sx={styles.container}>
        <Box sx={styles.routesContainer}>
          <Typography sx={styles.title}>{aboutUsTitle}</Typography>
          <Box sx={styles.navLinksContainer}>
            {aboutUsNavLinks.map((link, i) => {
              return (
                <NavLink className='footer__link' to={link.rout} key={i}>
                  {link.text}
                </NavLink>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.routesContainer}>
          <Typography sx={styles.title}>{scannerTitle}</Typography>
          <Box sx={styles.navLinksContainer}>
            {scannerNavLinks.map((link, i) => {
              return (
                <NavLink className='footer__link' to={link.rout} key={i}>
                  {link.text}
                </NavLink>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.routesContainer}>
          <Typography sx={styles.title}>{catalogTitle}</Typography>
          <Box sx={styles.navLinksContainer}>
            {catalogNavLinks.map((link, i) => {
              return (
                <NavLink className='footer__link' to={link.rout} key={i}>
                  {link.text}
                </NavLink>
              );
            })}
          </Box>
        </Box>
        <Box sx={styles.routesContainer}>
          <Typography sx={styles.title}>{profileTitle}</Typography>
          <Box sx={styles.navLinksContainer}>
            <NavLink
              className='footer__link'
              to={profileNavLinks.favorites.route}
            >
              {profileNavLinks.favorites.text}
            </NavLink>
            <NavLink className='footer__link' to={mainRoute}>
              {profileNavLinks.sell.text}
            </NavLink>
            <NavLink className='footer__link' to={mainRoute}>
              {profileNavLinks.appraisal.text}
            </NavLink>
            <NavLink
              className='footer__link'
              to={profileNavLinks.purchases.route}
            >
              {profileNavLinks.purchases.text}
            </NavLink>
            <NavLink
              className='footer__link'
              to={profileNavLinks.settings.route}
            >
              {profileNavLinks.settings.text}
            </NavLink>
            <NavLink className='footer__link' to={mainRoute}>
              {profileNavLinks.feedback.text}
            </NavLink>
          </Box>
        </Box>
        <Box sx={styles.socialsContainer}>
          <Typography sx={styles.title}>{socialsTitle}</Typography>
          <Box sx={styles.socialButtonsContainer}>
            <IconButton SvgIcon={TwitterIcon} />
            <IconButton SvgIcon={InstagramIcon} />
            <IconButton SvgIcon={TelegramIcon} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
