import { FC, useState } from 'react';
import { formatBytes } from '../Appraisal/lib/utils';

import {
  Box,
  IconButton,
  InputLabel,
  Modal,
  OutlinedInput,
  Typography,
  Button as MuiButton,
} from '@mui/material';
import { inputsData, logoSize, sendButton, title } from './constants/data';
import styles from './constants/styles';

import CloseIcon from './assets/close.svg?react';
import UploadIcon from '@mui/icons-material/Upload';

import Logo from '../../shared/ui/Logo';
import Button from '../../shared/ui/Button';
import VisuallyHiddenInput from './constants/VisuallyHiddenInput';

type UploadedFile = {
  name: string;
  size: number;
  dataUrl: string;
};

interface SellProps {
  open: boolean;
  handleClose: () => void;
  onSubmit: () => void;
}

const SellModal: FC<SellProps> = ({ open, handleClose, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileAuthor = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result) {
        const dataUrl = e.target.result;
        if (typeof dataUrl === 'string') {
          setUploadedFiles((prevFiles) => [
            ...prevFiles,
            { name: file.name, size: file.size, dataUrl },
          ]);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileArt = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result) {
        const dataUrl = e.target.result;
        if (typeof dataUrl === 'string') {
          setUploadedFiles((prevFiles) => [
            ...prevFiles,
            { name: file.name, size: file.size, dataUrl },
          ]);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleChangeFileAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => handleFileAuthor(file));
    }
  };

  const handleChangeFileArt = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => handleFileArt(file));
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styles.sellModal}>
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
                placeholder={inputsData.art.placeHolder}
                name={inputsData.art.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel sx={styles.inputLabel} htmlFor={inputsData.year.name}>
                {inputsData.year.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.year.name}
                placeholder={inputsData.year.placeHolder}
                name={inputsData.year.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel sx={styles.inputLabel} htmlFor={inputsData.size.name}>
                {inputsData.size.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.size.name}
                placeholder={inputsData.size.placeHolder}
                name={inputsData.size.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.material.name}
              >
                {inputsData.material.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.material.name}
                placeholder={inputsData.material.placeHolder}
                name={inputsData.material.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.decor.name}
              >
                {inputsData.decor.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.decor.name}
                placeholder={inputsData.decor.placeHolder}
                name={inputsData.decor.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.style.name}
              >
                {inputsData.style.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.style.name}
                placeholder={inputsData.style.placeHolder}
                name={inputsData.style.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.signature.name}
              >
                {inputsData.signature.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.signature.name}
                placeholder={inputsData.signature.placeHolder}
                name={inputsData.signature.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.email.name}
              >
                {inputsData.email.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.email.name}
                placeholder={inputsData.email.placeHolder}
                name={inputsData.email.name}
              />
            </Box>

            <Box sx={styles.inputContainer}>
              <InputLabel
                sx={styles.inputLabel}
                htmlFor={inputsData.phoneNumber.name}
              >
                {inputsData.phoneNumber.label}
              </InputLabel>
              <OutlinedInput
                required
                sx={styles.input}
                id={inputsData.phoneNumber.name}
                placeholder={inputsData.phoneNumber.placeHolder}
                name={inputsData.phoneNumber.name}
              />
            </Box>
          </Box>
          <Box>
            <Typography sx={styles.uploadLabel}>
              {inputsData.upload.label}
            </Typography>
            <Box sx={styles.imgBlock}>
              {uploadedFiles.map((file, index) => (
                <Box key={index} sx={styles.imgContainer}>
                  <Box
                    component='img'
                    src={file.dataUrl}
                    alt={`Загруженное изображение ${index + 1}`}
                    sx={styles.artImg}
                  />
                  <Typography sx={styles.imgPropertie}>{file.name}</Typography>
                  <Typography sx={styles.imgPropertie1}>
                    {formatBytes(file.size)}
                  </Typography>
                </Box>
              ))}
            </Box>
            <MuiButton
              sx={styles.uploadButton}
              component='label'
              role={undefined}
              tabIndex={-1}
              startIcon={<UploadIcon sx={styles.uploadIcon} />}
            >
              <Typography sx={styles.uploadLabelImg}> Фото автора</Typography>
              <VisuallyHiddenInput
                required
                onChange={handleChangeFileAuthor}
                type='file'
              />
            </MuiButton>
            <MuiButton
              sx={styles.uploadButton}
              component='label'
              role={undefined}
              tabIndex={-1}
              startIcon={<UploadIcon sx={styles.uploadIcon} />}
            >
              <Typography sx={styles.uploadLabelImg}> Фото картины</Typography>
              <VisuallyHiddenInput
                required
                onChange={handleChangeFileArt}
                type='file'
              />
            </MuiButton>
          </Box>
        </Box>
        <Button
          type='submit'
          onClick={handleClose}
          text={sendButton.text}
          bgColor={sendButton.bgColor}
          padding={sendButton.padding}
          fontSize={sendButton.fontSize}
          lineHeight={sendButton.lineHeight}
          width={sendButton.width}
          color={sendButton.color}
        />
      </Box>
    </Modal>
  );
};

export default SellModal;
