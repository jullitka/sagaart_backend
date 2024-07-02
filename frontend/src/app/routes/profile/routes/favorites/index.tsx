import { SetStateAction, useState } from 'react';
import { Masonry } from '@mui/lab';

import { Box, IconButton, MenuItem, Select, Typography } from '@mui/material';
import {
  arts,
  originalText,
  printText,
  title,
  selectData,
} from './constants/data';
import styles from './constants/styles';

import LikeIcon from './assets/heart.svg?react';
import ChevronIcon from './assets/chevronDown.svg?react';

const Favorites = () => {
  const [selectValue, setSelectValue] = useState(selectData.defaultValue);

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
    </Box>
  );
};

export default Favorites;
