import { Masonry } from '@mui/lab';

import { Box, Typography, IconButton } from '@mui/material';
import { title, artists } from './constants/data';
import styles from './constants/styles';

import LikedIcon from './assets/heart.svg?react';

const FavoriteArtists = () => {
  return (
    <Box sx={styles.artists}>
      <Typography sx={styles.title}>{title}</Typography>
      <Masonry columns={3} spacing={5} sx={{ maxWidth: '1310px' }}>
        {artists.map((artist) => {
          return (
            <Box key={artist.name} sx={styles.artist}>
              <Box component={'img'} src={artist.img} sx={styles.artistImg} />
              <Typography sx={styles.artistName}>
                {artist.name}
                <IconButton sx={{ padding: '0' }}>
                  <LikedIcon />
                </IconButton>
              </Typography>
            </Box>
          );
        })}
      </Masonry>
    </Box>
  );
};

export default FavoriteArtists;
