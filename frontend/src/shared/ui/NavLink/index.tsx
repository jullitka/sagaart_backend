import { FC } from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import './NavLink.css';

interface NavLinkProps {
  route: string;
  text: string;
  alwaysActive?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ route, text, alwaysActive }) => {
  return (
    <Link
      className={({ isActive }) =>
        isActive
          ? 'link link__active'
          : `${alwaysActive ? 'link link__active' : 'link'}`
      }
      to={route}
    >
      <Typography
        sx={{
          fontWeight: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default NavLink;
