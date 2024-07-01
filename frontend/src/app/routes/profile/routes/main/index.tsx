import { Box, Typography } from '@mui/material';
import {
  renewButton,
  cancelButton,
  orders,
  artistStatusText,
  myOrdersTitle,
  subscription,
  myDataTitle,
} from './constants/data';
import styles from './constants/styles';

import ClockIcon from './assets/clock.svg?react';
import CheckMarkIcon from './assets/checkMark.svg?react';

import Button from '../../../../../shared/ui/Button';

const ProfileMain = () => {
  return (
    <Box sx={styles.main}>
      <Box sx={styles.artistStatus}>
        <ClockIcon />
        <Typography sx={styles.artistStatusText}>{artistStatusText}</Typography>
      </Box>
      <Box sx={styles.myOrders}>
        <Typography sx={styles.myOrdersTitle}>{myOrdersTitle}</Typography>
        <Box sx={styles.orders}>
          {orders.map((order) => {
            return (
              <Box key={order.artName} sx={styles.order}>
                <Box component={'img'} src={order.img} sx={styles.artImg} />
                <Box sx={styles.orderInfo}>
                  <Box sx={styles.deliveryInfo}>
                    <Typography sx={styles.deliveryStatus}>
                      {order.status}
                    </Typography>
                    <Typography
                      color={`${order.isDelayed ? '#EA1212' : '#252525'}`}
                      sx={styles.deliveryDate}
                    >
                      {order.date}
                    </Typography>
                    <Typography sx={styles.deliveryType}>
                      {order.type}
                    </Typography>
                  </Box>
                  <Box sx={styles.artInfo}>
                    <Typography sx={styles.artAuthor}>
                      {order.artAuthor}
                    </Typography>
                    <Typography sx={styles.artName}>{order.artName}</Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box sx={styles.myData}>
        <Typography sx={styles.myDataTitle}>{myDataTitle}</Typography>
        {/* <Button
          text={subscriptionButton.text}
          bgColor={subscriptionButton.bgColor}
          padding={subscriptionButton.padding}
          fontSize={subscriptionButton.fontSize}
          lineHeight={subscriptionButton.lineHeight}
          width={subscriptionButton.width}
          color={subscriptionButton.color}
        /> */}
        <Box sx={styles.subscription}>
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
    </Box>
  );
};

export default ProfileMain;
