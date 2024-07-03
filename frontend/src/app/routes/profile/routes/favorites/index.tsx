import { SetStateAction, useEffect, useState } from 'react';
import { getFavoriteArts } from './lib/api';
import { Masonry } from '@mui/lab';

import { Box, MenuItem, Select, Typography } from '@mui/material';
import { title, selectData } from './constants/data';
import { ArtInFavorites } from './constants/types';
import styles from './constants/styles';

import ChevronIcon from './assets/chevronDown.svg?react';

import ArtCard from '../../../../../features/ArtCard';

const Favorites = () => {
  const [arts, setArts] = useState<ArtInFavorites[]>([]);
  const [selectValue, setSelectValue] = useState(selectData.defaultValue);

  useEffect(() => {
    getFavoriteArts().then((res) => {
      setArts(res);
    });
  }, []);

  const handleRemoveFromArray = ({
    removedArtId,
  }: {
    removedArtId: number;
  }) => {
    const newArts = arts.filter((art) => {
      art.artwork !== removedArtId;
    });

    setArts(newArts);
  };

  const handleSelectChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectValue(e.target.value);
  };

  return (
    <Box sx={styles.favorites}>
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.container}>
        <Select
          IconComponent={ChevronIcon}
          onChange={handleSelectChange}
          value={selectValue}
          sx={styles.select}
        >
          {selectData.options.map((option) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
        <Masonry columns={3} spacing={5} sx={{ maxWidth: '1310px' }}>
          {arts.map((art) => {
            return (
              <ArtCard
                key={art.artwork}
                id={art.artwork}
                title={art.art_name}
                imageUrl={art.art_photo}
                artist={art.artist_name}
                original={art.original_price}
                print={art.poster_price}
                isInFavorites={true}
                handleRemoveFromArray={handleRemoveFromArray}
              />
            );
          })}
        </Masonry>
      </Box>
    </Box>
  );
};

export default Favorites;
