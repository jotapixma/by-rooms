import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { htmlConverter } from '../../../utils/utils';
import styles from './ItemProductFeature.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const ItemProductFeature = ({item}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return ( 
    <React.Fragment>
      <button onClick={handleOpen} className={styles.boxItem}>
        <figure className={styles.boxItem__img}>
          <Image src={item.icon} width={24} height={24} layout="intrinsic" alt={item.label} />
          {/* <img src="https://ultimatefitness.cl/wp-content/uploads/2022/07/headphones-white.svg" class="img-responsive" alt="headphones"> */}
        </figure>
        <div className={styles.boxItem__text}>
          <h6 className={styles.itemTitle}>{item.label}</h6>
        </div>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={styles.modalItem}
      >
        <Box sx={style}>       
          <div className={styles.modalItem__head}>
            <h2 className={styles.modalItem__title}>{item.label}</h2>
            <CloseIcon onClick={handleClose} />
          </div>
          <div className={styles.modalItem__description} dangerouslySetInnerHTML={htmlConverter(item.description)}></div>
        </Box>
      </Modal>
    </React.Fragment>

   );
}
 
export default ItemProductFeature;