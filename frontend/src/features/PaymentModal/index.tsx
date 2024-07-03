import { FC } from 'react';

import {
  Box,
  IconButton,
  InputAdornment,
  Modal,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { buyButton, inputPlaceholder, logoSize, title } from './constants/data';
import styles from './constants/styles';

import CloseIcon from './assets/close.svg?react';
import MirIcon from './assets/mir.svg?react';
import PenIcon from './assets/pen.svg?react';

import Button from '../../shared/ui/Button';
import Logo from '../../shared/ui/Logo';

interface PaymentModalProps {
  open: boolean;
  handleClose: () => void;
}

const PaymentModal: FC<PaymentModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='child-modal-title'
      aria-describedby='child-modal-description'
    >
      <Box sx={styles.paymentModal}>
        <IconButton onMouseDown={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Box sx={styles.header}>
          <Logo width={logoSize.width} height={logoSize.height} />
          <Typography sx={styles.title}>{title}</Typography>
        </Box>
        <Box>
          <Typography sx={styles.userInfo}>
            Иванов Иван, ivanov@gmail.com, +375 29 258 12 13
          </Typography>
          <OutlinedInput
            sx={styles.input}
            startAdornment={
              <InputAdornment position='start'>
                <MirIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position='end'>
                <IconButton sx={{ padding: '0' }}>
                  <PenIcon />
                </IconButton>
              </InputAdornment>
            }
            placeholder={inputPlaceholder}
          />
          <Button
            type='submit'
            text={buyButton.text}
            bgColor={buyButton.bgColor}
            padding={buyButton.padding}
            fontSize={buyButton.fontSize}
            lineHeight={buyButton.lineHeight}
            width={buyButton.width}
            color={buyButton.color}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
