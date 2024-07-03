import { ChangeEvent, useEffect, useState } from 'react';
import { getArts, getFavoriteArts } from './lib/api';
import { Masonry } from '@mui/lab';

import { Box, Button, Pagination, PaginationItem } from '@mui/material';
import { filterButtonsText, artsLimit } from './constants/data';
import { Art, ArtInFavorites } from './constants/types';
import styles from './constants/styles';

import ChevronLeftIcon from './assets/chevronLeft.svg?react';
import ChevronRightIcon from './assets/chevronRight.svg?react';
import ChevronDownIcon from './assets/chevronDown.svg?react';
import FilterIcon from './assets/filter.svg?react';

import ArtCard from '../../../features/ArtCard';

const Catalog = () => {
  const [offset, setOffset] = useState('0');
  const [page, setPage] = useState(1);
  const [arts, setArts] = useState<Art[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      Promise.all([
        getArts({ limit: artsLimit, offset: offset }),
        getFavoriteArts(),
      ]).then(([{ results }, favoriteArts]) => {
        const sortedArts = results.map((art: Art) => {
          return {
            ...art,
            isInFavorites: favoriteArts.some(
              (favoriteArt: ArtInFavorites) => favoriteArt.artwork === art.id
            ),
          };
        });

        setArts(sortedArts);
      });
    } else {
      getArts({ limit: artsLimit, offset: offset }).then(({ results }) => {
        setArts(results);
      });
    }
  }, [offset]);

  const handlePagination = (_e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    if (value > page) {
      setOffset(`${+offset + +artsLimit}`);
    } else {
      setOffset(`${+offset - +artsLimit}`);
    }
  };

  const handleRemoveFromArray = ({
    removedArtId,
  }: {
    removedArtId: number;
  }) => {
    const newArts = arts.map((art) => {
      if (art.id === removedArtId) {
        art.isInFavorites = false;
      }
      return art;
    });

    setArts(newArts);
  };

  const handleAddToArray = ({ artId }: { artId: number }) => {
    const newArts = arts.map((art) => {
      if (art.id === artId) {
        art.isInFavorites = true;
      }
      return art;
    });

    setArts(newArts);
  };

  return (
    <Box sx={styles.catalog}>
      <Box sx={styles.filter}>
        <Box sx={styles.filterSelects}>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.price}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.sizes}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.orientation}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.category}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.style}
          </Button>
          <Button
            variant='outlined'
            sx={styles.filterButtonSelect}
            endIcon={<ChevronDownIcon />}
          >
            {filterButtonsText.color}
          </Button>
        </Box>
        <Button sx={styles.filterButton} startIcon={<FilterIcon />}>
          {filterButtonsText.recommended}
        </Button>
      </Box>
      <Masonry columns={4} spacing={5}>
        {arts.map((art) => {
          return (
            <ArtCard
              key={art.id}
              id={art.id}
              title={art.title}
              imageUrl={art.imageUrl}
              artist={art.artist}
              original={40000}
              print={5000}
              isInFavorites={art.isInFavorites}
              handleRemoveFromArray={handleRemoveFromArray}
              handleAddToArray={handleAddToArray}
            />
          );
        })}
      </Masonry>
      <Box sx={styles.paginationContainer}>
        <Pagination
          sx={styles.pagination}
          count={100}
          page={page}
          onChange={handlePagination}
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

export default Catalog;
