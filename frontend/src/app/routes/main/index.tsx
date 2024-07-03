import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import {
  subscriptionData,
  catalogData,
  subscriptionButton,
  catalogBuyButton,
  catalogSellButton,
  cardsData,
  catalogUrl,
} from './constants/data';
import styles from './constants/styles';

import subscriptionImg from './assets/subscriptionImg.jpeg';
import catalogImg from './assets/catalogImg.png';

import Button from '../../../shared/ui/Button';
import SellModal from '../../../features/SellModal';

const Main = () => {
  const navigate = useNavigate();
  const [sellModalOpen, setSellModalOpen] = useState(false);

  const handleOpenSellModal = () => {
    setSellModalOpen(true);
  };

  const handleCloseSellModal = () => {
    setSellModalOpen(false);
  };

  const handleClickBuyButton = () => {
    navigate(catalogUrl);
  };

  const handleSubmit = () => {
    handleCloseSellModal();
  };

  return (
    <Box sx={styles.main}>
      <Box sx={styles.container}>
        <Box>
          <Typography sx={styles.title}>{subscriptionData.title}</Typography>
          <Typography sx={styles.subtitle}>
            {subscriptionData.subtitle}
          </Typography>
          <Button
            text={subscriptionButton.text}
            bgColor={subscriptionButton.bgColor}
            padding={subscriptionButton.padding}
            fontSize={subscriptionButton.fontSize}
            lineHeight={subscriptionButton.lineHeight}
            width={subscriptionButton.width}
            color={subscriptionButton.color}
          />
        </Box>
        <Box
          component={'img'}
          src={subscriptionImg}
          sx={styles.subscriptionImg}
        ></Box>
      </Box>
      <Box sx={styles.container}>
        <Box component={'img'} src={catalogImg} sx={styles.catalogImg}></Box>
        <Box>
          <Typography sx={styles.title}>{catalogData.title}</Typography>
          <Typography sx={styles.subtitle}>{catalogData.subtitle}</Typography>
          <Box sx={styles.buttonsContainer}>
            <Button
              onClick={handleClickBuyButton}
              text={catalogBuyButton.text}
              bgColor={catalogBuyButton.bgColor}
              padding={catalogBuyButton.padding}
              fontSize={catalogBuyButton.fontSize}
              lineHeight={catalogBuyButton.lineHeight}
              width={catalogBuyButton.width}
              color={catalogBuyButton.color}
            />
            <Button
              onClick={handleOpenSellModal}
              text={catalogSellButton.text}
              bgColor={catalogSellButton.bgColor}
              padding={catalogSellButton.padding}
              fontSize={catalogSellButton.fontSize}
              lineHeight={catalogSellButton.lineHeight}
              width={catalogSellButton.width}
              color={catalogSellButton.color}
              borderColor={catalogSellButton.borderColor}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={styles.cardsContainer}>
        {cardsData.map((card) => {
          return (
            <Box key={card.title} sx={styles.card}>
              <NavLink to={card.rout}>
                <Box component={'img'} src={card.img} sx={styles.cardImg}></Box>
              </NavLink>
              <Typography sx={styles.cardTitle}>{card.title}</Typography>
            </Box>
          );
        })}
      </Box>
      <SellModal
        open={sellModalOpen}
        handleClose={handleCloseSellModal}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default Main;
