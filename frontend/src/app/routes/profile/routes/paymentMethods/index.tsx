import { Box, IconButton, Typography } from '@mui/material';
import { title, addCardButton, card } from './constants/data';
import styles from './constants/styles';

import MirIcon from './assets/mir.svg?react';
import TrashIcon from './assets/trash.svg?react';

import Button from '../../../../../shared/ui/Button';

const PaymentMethods = () => {
  return (
    <Box sx={styles.payment}>
      <Typography sx={styles.title}>{title.haveCards}</Typography>
      <Box sx={styles.cards}>
        <Box sx={styles.card}>
          <Typography sx={styles.cardNumber}>
            <MirIcon />
            {card}
          </Typography>
          <IconButton sx={{ padding: '0' }}>
            <TrashIcon />
          </IconButton>
        </Box>
        <Box sx={styles.card}>
          <Typography sx={styles.cardNumber}>
            <MirIcon />
            {card}
          </Typography>
          <IconButton sx={{ padding: '0' }}>
            <TrashIcon />
          </IconButton>
        </Box>
      </Box>
      <Button
        text={addCardButton.text}
        bgColor={addCardButton.bgColor}
        padding={addCardButton.padding}
        fontSize={addCardButton.fontSize}
        lineHeight={addCardButton.lineHeight}
        width={addCardButton.width}
        color={addCardButton.color}
        borderColor={addCardButton.borderColor}
      />
    </Box>
  );
};

export default PaymentMethods;
