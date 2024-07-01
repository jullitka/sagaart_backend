import { FC } from 'react';
import LogoIcon from '../../assets/logo.svg?react';

interface LogoProps {
  width: string;
  height: string;
}

const Logo: FC<LogoProps> = ({ width, height }) => {
  return <LogoIcon width={width} height={height} />;
};

export default Logo;
