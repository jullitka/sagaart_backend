import { FC } from 'react';

import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  text: string;
  bgColor: string;
  padding: string;
  fontSize: string;
  lineHeight: string;
  width: string;
  color: string;
  borderColor?: string;
  // Мы не знаем какой тип нужно задать чтобы не было ошибки
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SvgIcon?: any;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: FC<ButtonProps> = ({
  text,
  bgColor,
  padding,
  fontSize,
  lineHeight,
  width,
  color,
  borderColor,
  SvgIcon,
  onClick,
  type,
}) => {
  return (
    <MuiButton
      type={type}
      onClick={onClick}
      startIcon={SvgIcon ? <SvgIcon /> : ''}
      variant='outlined'
      sx={{
        bgcolor: `${bgColor}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        lineHeight: `${lineHeight}`,
        width: `${width}`,
        color: `${color}`,
        borderColor: `${borderColor ? borderColor : '#252525'}`,
        textTransform: 'none',
        ':hover': {
          backgroundColor: `${bgColor}`,
        },
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
