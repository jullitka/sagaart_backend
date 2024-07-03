import { Masonry } from '@mui/lab';

import { Box, Typography } from '@mui/material';
import { title, arts } from './constants/data';
import styles from './constants/styles';

import ArtCard from '../../../../../features/ArtCard';

const OnSale = () => {
  return (
    <Box sx={styles.onSale}>
      <Typography sx={styles.title}>{title.haveArts}</Typography>
      <Masonry columns={3} spacing={5} sx={{ maxWidth: '1310px' }}>
        {arts.map((art, i) => {
          return (
            <ArtCard
              key={art.name}
              id={i}
              title={art.name}
              imageUrl={art.img}
              artist={art.author}
              original={art.original}
              print={art.print}
              isInFavorites={false}
            />
          );
        })}
      </Masonry>
    </Box>
  );
};

export default OnSale;
