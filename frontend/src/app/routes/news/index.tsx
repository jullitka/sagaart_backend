import { Box, Pagination, PaginationItem, Typography } from '@mui/material';
import { button, news } from './constants/data';
import styles from './constants/styles';

import ChevronLeftIcon from './assets/chevronLeft.svg?react';
import ChevronRightIcon from './assets/chevronRight.svg?react';

import Button from '../../../shared/ui/Button';

const News = () => {
  return (
    <Box sx={styles.news}>
      <Box sx={styles.container}>
        <Box sx={styles.infoContainer}>
          <Typography sx={styles.title}>{news.title}</Typography>
          <Typography sx={styles.subtitle}>{news.subtitle}</Typography>
          <Typography sx={styles.description}>{news.description}</Typography>
          <Button
            text={news.buttonText}
            bgColor={button.bgColor}
            padding={button.padding}
            fontSize={button.fontSize}
            lineHeight={button.lineHeight}
            width={button.width}
            color={button.color}
          />
        </Box>
        <Box component={'img'} src={news.img} sx={styles.img} />
      </Box>
      <Box sx={styles.paginationContainer}>
        <Pagination
          sx={styles.pagination}
          count={100}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ChevronLeftIcon, next: ChevronRightIcon }}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default News;
