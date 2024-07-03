import { Box, Typography } from '@mui/material';
import {
  title,
  subscription,
  renewButton,
  cancelButton,
} from './constants/data';
import styles from './constants/styles';

import CheckMarkIcon from './assets/checkMark.svg?react';

import Button from '../../../../../shared/ui/Button';

const Subscription = () => {
  return (
    <Box sx={styles.subscription}>
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.subscriptionContainer}>
        <Box sx={styles.subscriptionInfo}>
          <Typography sx={styles.subscriptionTitle}>
            {subscription.time}
          </Typography>
          <Box sx={styles.subscriptionOptions}>
            {subscription.options.map((option) => {
              return (
                <Typography key={option.text} sx={styles.subscriptionOption}>
                  <CheckMarkIcon />
                  {option.text}
                </Typography>
              );
            })}
          </Box>
          <Typography sx={styles.subscriptionExpiration}>
            {subscription.expirationText} {subscription.expirationDate}
          </Typography>
        </Box>
        <Box sx={styles.subscriptionButtons}>
          <Button
            text={cancelButton.text}
            bgColor={cancelButton.bgColor}
            padding={cancelButton.padding}
            fontSize={cancelButton.fontSize}
            lineHeight={cancelButton.lineHeight}
            width={cancelButton.width}
            color={cancelButton.color}
            borderColor={cancelButton.borderColor}
          />
          <Button
            text={renewButton.text}
            bgColor={renewButton.bgColor}
            padding={renewButton.padding}
            fontSize={renewButton.fontSize}
            lineHeight={renewButton.lineHeight}
            width={renewButton.width}
            color={renewButton.color}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Subscription;
