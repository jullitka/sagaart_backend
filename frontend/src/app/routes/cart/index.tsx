import { useState } from 'react';
import { Form } from 'react-router-dom';

import {
  Box,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Modal,
} from '@mui/material';
import { button, cart, logoSize } from './constants/data';
import styles from './constants/styles';

import PenIcon from './assets/pen.svg?react';
import MIR from './assets/MIR.svg?react';
import CloseIcon from './assets/close.svg?react';
import Line from './assets/Line 6.svg?react';

import Button from '../../../shared/ui/Button';
import Logo from '../../../shared/ui/Logo';

const Cart = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={styles.cart}>
      <Box sx={styles.container}>
        <Box sx={styles.infoContainer}>
          <Typography sx={styles.title}>{cart.title}</Typography>
        </Box>
        <Box>
          <Box sx={styles.imageSection}>
            <Box component='img' src={cart.deleteIcon} sx={styles.deleteIcon} />
            <Box component={'img'} src={cart.img} sx={styles.img} />
            <Box sx={styles.imageInfo}>
              <Typography sx={styles.imageAuthor}>
                {cart.imageAuthor}
              </Typography>
              <Typography sx={styles.imageTitle}>{cart.imageTitle}</Typography>
              <Typography sx={styles.imageYear}>
                {cart.imageYear}
                <Typography sx={styles.imageYearinfo}>
                  {cart.imageYearinfo}
                </Typography>
              </Typography>
              <Typography sx={styles.imageSize}>
                {cart.imageSize}
                <Typography sx={styles.imageSizeInfo}>
                  {cart.imageSizeInfo}
                </Typography>
              </Typography>
              <Typography sx={styles.imageMaterial}>
                {cart.imageMaterial}
                <Typography sx={styles.imageMaterialInfo}>
                  {cart.imageMaterialInfo}
                </Typography>
              </Typography>
              <Typography sx={styles.imageStyle}>
                {cart.imageStyle}
                <Typography sx={styles.imageStyleType}>
                  {cart.imageStyleType}
                </Typography>
              </Typography>
            </Box>
            <Typography sx={styles.imagePrice}>{cart.imagePrice}</Typography>
          </Box>
          <Box sx={styles.line} />
          <Box sx={styles.imageSection}>
            <Box component='img' src={cart.deleteIcon} sx={styles.deleteIcon} />
            <Box component={'img'} src={cart.img1} sx={styles.img1}></Box>
            <Box sx={styles.imageInfo}>
              <Typography sx={styles.imageAuthor}>
                {cart.imageAuthor1}
              </Typography>
              <Typography sx={styles.imageTitle}>{cart.imageTitle1}</Typography>
              <Typography sx={styles.imageYear}>
                {cart.imageYear}
                <Typography sx={styles.imageYearinfo}>
                  {cart.imageYearinfo}
                </Typography>
              </Typography>
              <Typography sx={styles.imageSize}>
                {cart.imageSize1}
                <Typography sx={styles.imageSizeInfo}>
                  {cart.imageSizeInfo}
                </Typography>
              </Typography>
              <Typography sx={styles.imageMaterial}>
                {cart.imageMaterial}
                <Typography sx={styles.imageMaterialInfo}>
                  {cart.imageMaterialInfo}
                </Typography>
              </Typography>
              <Typography sx={styles.imageStyle}>
                {cart.imageStyle}
                <Typography sx={styles.imageStyleType}>
                  {cart.imageStyleType1}
                </Typography>
              </Typography>
            </Box>
            <Typography sx={styles.imagePrice}>{cart.imagePrice1}</Typography>
          </Box>
          <Box sx={styles.line} />
        </Box>
      </Box>
      <Box sx={styles.imagePriceTotalPrice}>
        <Typography sx={styles.imagePriceTotalSum}>
          {cart.imagePriceTotalSum}
        </Typography>
        <Typography sx={styles.imagePriceTotal}>
          {cart.imagePriceTotal}
        </Typography>
      </Box>
      <Box sx={styles.buttonBuy}>
        <Button
          onClick={handleOpen}
          text={cart.buttonText}
          bgColor={button.bgColor}
          padding={button.padding}
          fontSize={button.fontSize}
          lineHeight={button.lineHeight}
          width={button.width}
          color={button.color}
        />
      </Box>
      <ModalWindow open={open} handleClose={handleClose} />
    </Box>
  );
};

function ModalWindow({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='PurchaseInfomodal-title'
      aria-describedby='PurchaseInfomodal-description'
    >
      <Box sx={styles.PurchaseInfoModal}>
        <Box sx={styles.PurchaseInfoModalHeader}>
          <Logo width={logoSize.width} height={logoSize.height} />
          <Typography sx={styles.PurchaseInfoTitle}>
            {cart.PurchaseInfo}
          </Typography>
          <IconButton onMouseDown={handleClose} sx={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Form color='primary'>
          <Typography sx={styles.PurchaseInfoContact}>
            {cart.PurchaseInfoContact}
          </Typography>
          <Box sx={styles.PurchaseInfoBank}>
            <MIR />
          </Box>
          <TextField
            sx={styles.PurchaseInfoCard}
            label={
              <Typography style={styles.PurchaseInfoCardNumber}>
                MIR **1111
              </Typography>
            }
            required
          ></TextField>
          <Box sx={styles.PurchaseInfoPenIcon}>
            <PenIcon />
          </Box>
          <Typography sx={styles.PurchaseInfoAdress}>
            {cart.PurchaseInfoAdress}
          </Typography>
          <TextField
            sx={styles.PurchaseInfoAdressInput}
            placeholder='Введите адрес'
            required
          ></TextField>
          <Box sx={styles.PurchaseInfoPenIcon2}>
            <PenIcon />
          </Box>
          <Box sx={styles.PurchaseInfoRadioArea}>
            <Box>
              <Typography sx={styles.PurchaseInfoRadioTitle}>
                Способ доставки
              </Typography>
              <RadioGroup>
                <FormControlLabel
                  value='Доставить с курьером'
                  control={<Radio sx={{ color: 'black' }} />}
                  label={
                    <Typography style={styles.PurchaseInfoRadioSubTitle}>
                      Доставить с курьером
                    </Typography>
                  }
                />
                <FormControlLabel
                  value='Самовывоз'
                  control={<Radio sx={{ color: 'black' }} />}
                  label={
                    <Typography style={styles.PurchaseInfoRadioSubTitle}>
                      Самовывоз
                    </Typography>
                  }
                />
              </RadioGroup>
            </Box>
            <Box sx={styles.PurchaseInfoLine}>
              <Line />
            </Box>
            <Box>
              <Box sx={styles.PurchaseInfoRadioPayment}>
                <Typography sx={styles.PurchaseInfoRadioTitle}>
                  Способ оплаты
                </Typography>
                <RadioGroup>
                  <FormControlLabel
                    value='При получении'
                    control={<Radio sx={{ color: 'black' }} />}
                    label={
                      <Typography style={styles.PurchaseInfoRadioSubTitle}>
                        При получении
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value='Оплатить онлайн'
                    control={<Radio sx={{ color: 'black' }} />}
                    label={
                      <Typography style={styles.PurchaseInfoRadioSubTitle}>
                        Оплатить онлайн
                      </Typography>
                    }
                  />
                </RadioGroup>
              </Box>
            </Box>
          </Box>
          <Typography sx={styles.PurchaseInfoAdress}>
            {cart.PurchaseInfoComment}
          </Typography>
          <Box sx={styles.PurchaseInfoComment}>
            <TextField
              sx={styles.PurchaseInfoComment}
              multiline
              rows={4}
              defaultValue='Введите сообщение...'
            />
          </Box>
          <Box sx={styles.PurchaseInfoPrice}>
            <Box sx={styles.imagePriceTotalPrice}>
              <Typography sx={styles.imagePriceTotalSum}>
                {cart.imagePriceTotalSum}
              </Typography>
              <Typography sx={styles.imagePriceTotal}>
                {cart.imagePriceTotal}
              </Typography>
            </Box>
          </Box>
          <Button
            text={cart.buttonText}
            bgColor={button.bgColor}
            padding={button.padding}
            fontSize={styles.ButtonfontSize}
            lineHeight={cart.buttonlineHeight}
            color={button.color}
            width={styles.ButtonWidth}
          />
        </Form>
      </Box>
    </Modal>
  );
}

export default Cart;
