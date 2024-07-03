import { useState } from 'react';

import {
  Box,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
} from '@mui/material';
import { data } from './constants/data';
import styles from './constants/styles';

const PurchaseHistory = () => {
  const [type, setType] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
    <Box>
      <Typography sx={styles.title}>{data.title}</Typography>
      <Box sx={{ maxWidth: 120 }}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            sx={styles.purchaseFilter}
            value={type}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value=''>
              <em>Все</em>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Box sx={styles.artContainer}>
          <Box>
            <Box component='img' src={data.artItem}></Box>
          </Box>
          <Box sx={styles.artInfo}>
            <Typography sx={styles.artStatus}>{data.artStatus}</Typography>
            <Typography sx={styles.deliveryDate}>
              {data.deliveryDate}
            </Typography>
            <Typography sx={styles.pickup}>{data.pickup}</Typography>
            <Typography sx={styles.artCreatetor}>
              {data.artCreatetor}
            </Typography>
            <Typography sx={styles.artTitle}>{data.artTitle}</Typography>
          </Box>
        </Box>
        <Box sx={styles.artContainer}>
          <Box>
            <Box component='img' src={data.artItem}></Box>
          </Box>
          <Box sx={styles.artInfo}>
            <Typography sx={styles.artStatus}>{data.artStatus}</Typography>
            <Typography sx={styles.deliveryDate}>
              {data.deliveryDate}
            </Typography>
            <Typography sx={styles.pickup}>{data.pickup}</Typography>
            <Typography sx={styles.artCreatetor}>
              {data.artCreatetor}
            </Typography>
            <Typography sx={styles.artTitle}>{data.artTitle}</Typography>
          </Box>
        </Box>
        <Box sx={styles.artContainer}>
          <Box>
            <Box component='img' src={data.artItem}></Box>
          </Box>
          <Box sx={styles.artInfo}>
            <Typography sx={styles.artStatus}>{data.artStatus}</Typography>
            <Typography sx={styles.deliveryDate}>
              {data.deliveryDate}
            </Typography>
            <Typography sx={styles.pickup}>{data.pickup}</Typography>
            <Typography sx={styles.artCreatetor}>
              {data.artCreatetor}
            </Typography>
            <Typography sx={styles.artTitle}>{data.artTitle}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PurchaseHistory;
