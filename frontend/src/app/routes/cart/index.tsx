import { Box, Typography } from "@mui/material";
import { button, cart } from "./constants/data";
import styles from "./constants/styles";

import Button from "../../../shared/ui/Button";

const Cart = () => {
 return (
  <Box sx={styles.cart}>
   <Box sx={styles.container}>
    <Box sx={styles.infoContainer}>
     <Typography sx={styles.title}>{cart.title}</Typography>
    </Box>
    <Box>
     <Box sx={styles.imageSection}>
      <Box component="img" src={cart.deleteIcon} sx={styles.deleteIcon} />
      <Box component={"img"} src={cart.img} sx={styles.img} />
      <Box sx={styles.imageInfo}>
       <Typography sx={styles.imageAuthor}>{cart.imageAuthor}</Typography>
       <Typography sx={styles.imageTitle}>{cart.imageTitle}</Typography>
       <Typography sx={styles.imageYear}>
        {cart.imageYear}
        <Typography sx={styles.imageYearinfo}>{cart.imageYearinfo}</Typography>
       </Typography>
       <Typography sx={styles.imageSize}>
        {cart.imageSize}
        <Typography sx={styles.imageSizeInfo}>{cart.imageSizeInfo}</Typography>
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
      <Box component="img" src={cart.deleteIcon} sx={styles.deleteIcon} />
      <Box component={"img"} src={cart.img1} sx={styles.img1}></Box>
      <Box sx={styles.imageInfo}>
       <Typography sx={styles.imageAuthor}>{cart.imageAuthor1}</Typography>
       <Typography sx={styles.imageTitle}>{cart.imageTitle1}</Typography>
       <Typography sx={styles.imageYear}>
        {cart.imageYear}
        <Typography sx={styles.imageYearinfo}>{cart.imageYearinfo}</Typography>
       </Typography>
       <Typography sx={styles.imageSize}>
        {cart.imageSize1}
        <Typography sx={styles.imageSizeInfo}>{cart.imageSizeInfo}</Typography>
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
    <Typography sx={styles.imagePriceTotal}>{cart.imagePriceTotal}</Typography>
   </Box>
   <Box sx={styles.buttonBuy}>
    <Button
     text={cart.buttonText}
     bgColor={button.bgColor}
     padding={button.padding}
     fontSize={button.fontSize}
     lineHeight={button.lineHeight}
     width={button.width}
     color={button.color}
    />
   </Box>
  </Box>
 );
};

export default Cart;
