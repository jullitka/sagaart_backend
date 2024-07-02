import { FC, useState } from 'react';
import { formatBytes } from './lib/utils';

import {
  Box,
  IconButton,
  InputLabel,
  Modal,
  OutlinedInput,
  Typography,
  Button as MuiButton,
} from '@mui/material';
import {
  inputsData,
  logoSize,
  priceText,
  sendButton,
  title,
} from './constants/data';
import styles from './constants/styles';

import Logo from '../../shared/ui/Logo';
import CloseIcon from './assets/close.svg?react';
import UploadIcon from '@mui/icons-material/Upload';

import Button from '../../shared/ui/Button';
import VisuallyHiddenInput from './constants/VisuallyHiddenInput';

interface AppraisalProps {
  open: boolean;
  handleClose: () => void;
  isPaid: boolean;
  onSubmit: () => void;
}

const Appraisal: FC<AppraisalProps> = ({
  open,
  handleClose,
  isPaid,
  onSubmit,
}) => {
  const [imgSize, setImgSize] = useState<string>();
  const [imgName, setImgName] = useState<string>();
  const [uploadedImg, setUploadedImg] = useState<string>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const handleFile = (e) => {
    setUploadedImg(e.target.result);
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const fileSize = formatBytes(file.size);

    setImgName(file.name);
    setImgSize(fileSize);

    const reader = new FileReader();
    reader.onload = handleFile;
    reader.readAsDataURL(file);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.appraisal}>
        <IconButton onMouseDown={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Box sx={styles.header}>
          <Logo width={logoSize.width} height={logoSize.height} />
          <Typography sx={styles.title}>{title}</Typography>
        </Box>
        <Box component={'form'} onSubmit={handleSubmit}>
          <Box sx={styles.inputsContainer}>
            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.artist.name}
              >
                {inputsData.artist.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.artist.name}
                placeholder={inputsData.artist.placeHolder}
                name={inputsData.artist.name}
              />
            </Box>
            <Box sx={styles.inputContainer}>
              <InputLabel sx={styles.inputLabel} htmlFor={inputsData.art.name}>
                {inputsData.art.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.art.name}
                name={inputsData.art.name}
              />
            </Box>
            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.description.name}
              >
                {inputsData.description.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.description.name}
                placeholder={inputsData.description.placeHolder}
                name={inputsData.description.name}
              />
            </Box>
            <Box>
              <Typography sx={styles.uploadLabel}>
                {inputsData.upload.label}
              </Typography>

              <Box component={'img'} src={uploadedImg} sx={styles.artImg}></Box>
              <Box sx={styles.imgProperties}>
                <Typography sx={styles.imgPropertie}>{imgName}</Typography>
                <Typography sx={styles.imgPropertie}>{imgSize}</Typography>
              </Box>
              <MuiButton
                sx={styles.uploadButton}
                component='label'
                role={undefined}
                tabIndex={-1}
                startIcon={<UploadIcon sx={styles.uploadIcon} />}
              >
                <VisuallyHiddenInput
                  required
                  onChange={handleChangeFile}
                  type='file'
                />
              </MuiButton>
            </Box>
          </Box>
          {isPaid ? (
            <Typography sx={styles.price}>{`${priceText} 300₽`}</Typography>
          ) : (
            ''
          )}
          <Button
            type='submit'
            text={sendButton.text}
            bgColor={sendButton.bgColor}
            padding={sendButton.padding}
            fontSize={sendButton.fontSize}
            lineHeight={sendButton.lineHeight}
            width={sendButton.width}
            color={sendButton.color}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default Appraisal;
