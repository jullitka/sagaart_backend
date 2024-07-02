import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { addToFavorites, removeFromFavorites } from './lib/api';

import { Box, IconButton, Typography } from '@mui/material';
import { originalText, printText } from './constants/data';
import { ArtCardProps } from './constants/types';
import styles from './constants/styles';

import LikeIcon from './assets/heart.svg?react';
import FilledLikeIcon from './assets/filledHeart.svg?react';

const ArtCard: FC<ArtCardProps> = ({
  id,
  title,
  imageUrl,
  artist,
  original,
  print,
  isInFavorites,
  handleRemoveFromArray,
  handleAddToArray,
}) => {
  const navigate = useNavigate();

  const handleArtOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === '0') {
      return;
    }
    navigate(`/art/${id}`);
  };

  const handleAddToFavorites = () => {
    addToFavorites({
      artName: title,
      artId: id,
      artPhoto: imageUrl,
      artistName: artist,
    })
      .then((res) => {
        handleAddToArray !== undefined && handleAddToArray({ artId: id });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites({ artId: id })
      .then(() => {
        handleRemoveFromArray({ removedArtId: id });
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  return (
    <Box onMouseUp={handleArtOpen} sx={styles.art}>
      <Box
        component={'img'}
        src={`http://158.160.134.225${imageUrl}`}
        sx={styles.artImg}
      />
      <Box sx={styles.artInfo}>
        <Typography sx={styles.artAuthor}>
          {artist}
          <IconButton
            sx={{ padding: '0' }}
            onClick={
              isInFavorites ? handleRemoveFromFavorites : handleAddToFavorites
            }
          >
            {isInFavorites ? <FilledLikeIcon id='0' /> : <LikeIcon id='0' />}
          </IconButton>
        </Typography>
        <Typography sx={styles.artName}>{title}</Typography>
      </Box>
      <Box sx={styles.artPricing}>
        <Typography sx={styles.artOriginalText}>
          {originalText}
          <Typography sx={styles.artOriginalPrice} component={'span'}>
            {original}
          </Typography>
        </Typography>
        <Typography sx={styles.artPrintText}>
          {printText}
          <Typography sx={styles.artPrintPrice} component={'span'}>
            {print}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ArtCard;
