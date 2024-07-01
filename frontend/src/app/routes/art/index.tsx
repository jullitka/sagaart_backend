import { useState } from 'react';

import { Box, Button as MuiButton, Typography } from '@mui/material';
import {
  artData,
  originalButton,
  printButton,
  title,
  artistTitle,
  artMockData,
} from './constants/data';
import styles from './constants/style';

import artImg from './assets/art.png';
import artistImg from './assets/artistAvatar.png';
import ArrowIcon from './assets/arrowUp.svg?react';
import ProgressionIcon from './assets/progression.svg?react';
import ChevronIcon from './assets/chevronRight.svg?react';
import CartIcon from './assets/cart.svg?react';
import LikeIcon from './assets/heart.svg?react';

import Button from '../../../shared/ui/Button';

const Art = () => {
  const [art] = useState(artMockData);

  return (
    <Box sx={styles.mainContainer}>
      <Box sx={styles.container}>
        <Box sx={styles.imgContainer}>
          <Box component={'img'} src={artImg} sx={styles.artImg}></Box>
          <MuiButton sx={styles.imgButtonTop}>
            <CartIcon />
          </MuiButton>
          <MuiButton sx={styles.imgButtonBottom}>
            <LikeIcon />
          </MuiButton>
        </Box>
        <Box sx={styles.artContainer}>
          <Box sx={styles.artHeaderContainer}>
            <Typography sx={styles.artistName}>{art.artist.name}</Typography>
            <Typography sx={styles.artName}>{art.artName}</Typography>
          </Box>
          <Box sx={styles.artInfoContainers}>
            <Box sx={styles.artInfoContainer}>
              <Typography sx={styles.artInfoTitle}>
                {artData.year}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.year}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.size}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.size}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.material}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.material}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.style}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.style}
                </Typography>
              </Typography>
            </Box>
            <Box sx={styles.artInfoContainer}>
              <Typography sx={styles.artInfoTitle}>
                {artData.signature}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.signature}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.exhibitions}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.exhibitions}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.design}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.design}
                </Typography>
              </Typography>
              <Typography sx={styles.artInfoTitle}>
                {artData.series}
                <Typography component={'span'} sx={styles.artInfoValue}>
                  {art.series}
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.artButtonsContainer}>
            <MuiButton sx={styles.progressionButton} variant='outlined'>
              <ArrowIcon />
              {art.price.increasedBy}
              <ProgressionIcon />
              <ChevronIcon />
            </MuiButton>
            <Button
              text={originalButton.text + ' ' + art.price.original}
              bgColor={originalButton.bgColor}
              padding={originalButton.padding}
              fontSize={originalButton.fontSize}
              lineHeight={originalButton.lineHeight}
              width={originalButton.width}
              color={originalButton.color}
            />
            <Button
              text={printButton.text + ' ' + art.price.print}
              bgColor={printButton.bgColor}
              padding={printButton.padding}
              fontSize={printButton.fontSize}
              lineHeight={printButton.lineHeight}
              width={printButton.width}
              color={printButton.color}
              borderColor={printButton.borderColor}
            />
          </Box>
        </Box>
      </Box>
      <Typography sx={styles.title}>{title}</Typography>
      <Box sx={styles.container}>
        <Box sx={styles.imgContainer}>
          <Box component={'img'} src={artistImg} sx={styles.artistImg}></Box>
          <MuiButton sx={styles.imgButtonBottom}>
            <LikeIcon />
          </MuiButton>
        </Box>
        <Box sx={styles.artistInfoContainer}>
          <Box sx={styles.artistDescriptionContainer}>
            <Box>
              <Typography sx={styles.artistTextDefault}>
                {art.artist.description}
              </Typography>
              <Typography sx={styles.artistTextDefault}>
                {art.artist.mentors}
              </Typography>
            </Box>
            <Box>
              {art.artist.study.map((data) => {
                return (
                  <Typography sx={styles.artistTextDefault}>
                    {data.period + ' - ' + data.institutionName}
                  </Typography>
                );
              })}
            </Box>
          </Box>
          <Box sx={styles.artistExhibitions}>
            <Typography sx={styles.artistTextBold}>{artistTitle}</Typography>
            <Box sx={styles.artistExhibitionsContainer}>
              {art.artist.exhibitions.map((exhibition) => {
                return (
                  <Typography sx={styles.artistTextDefault}>
                    {exhibition.year + ' - ' + exhibition.info}
                  </Typography>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Art;
