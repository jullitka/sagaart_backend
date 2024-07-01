import { Masonry } from '@mui/lab';

import { Box, IconButton, Typography } from '@mui/material';
import { title, arts, originalText, printText } from './constants/data';
import styles from './constants/styles';

import LikeIcon from './assets/heart.svg?react';

const OnSale = () => {
  return (
    <Box sx={styles.onSale}>
      {/* <Typography sx={styles.title}>{title.dontHaveArts}</Typography> */}
      <Typography sx={styles.title}>{title.haveArts}</Typography>
      <Masonry columns={3} spacing={5} sx={{ maxWidth: '1310px' }}>
        {arts.map((art) => {
          return (
            <Box key={art.name} sx={styles.art}>
              <Box component={'img'} src={art.img} sx={styles.artImg} />
              <Box sx={styles.artInfo}>
                <Typography sx={styles.artAuthor}>
                  {art.author}
                  <IconButton sx={{ padding: '0' }}>
                    <LikeIcon />
                  </IconButton>
                </Typography>
                <Typography sx={styles.artName}>{art.name}</Typography>
              </Box>
              <Box sx={styles.artPricing}>
                <Typography sx={styles.artOriginalText}>
                  {originalText}
                  <Typography sx={styles.artOriginalPrice} component={'span'}>
                    {art.original}
                  </Typography>
                </Typography>
                <Typography sx={styles.artPrintText}>
                  {printText}
                  <Typography sx={styles.artPrintPrice} component={'span'}>
                    {art.print}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Masonry>
    </Box>
  );
};

export default OnSale;
