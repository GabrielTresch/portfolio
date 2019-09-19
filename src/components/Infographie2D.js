import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpaceImg from '../assets/img/space_infographie.svg';
import BeeImg from '../assets/img/bee_golden_ratio.svg';
import KoiImg from '../assets/img/koi_golden_ratio.svg';
import SwanImg from '../assets/img/swan_golden_ratio.svg';
import ButterflyImg from '../assets/img/papillon_golden_ratio.svg';
import OrqueImg from '../assets/img/orque_golden_ratio.svg';

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    columns: '3 250px',
    columnGap: '1rem',
    margin: '40px auto',
  },
  img: {
    maxWidth: '380px',
    width: '100%',
    margin: '0 1rem 1rem 0',
    display: 'inline-block',
  },
  '@media (max-width: 535px)': {
    img: {
      display: 'block',
      margin: '20px auto',
    },
  },
});

const Infographie2D = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={SpaceImg} alt="" className={classes.img} />
      <img src={BeeImg} alt="" className={classes.img} />
      <img src={KoiImg} alt="" className={classes.img} />
      <img src={SwanImg} alt="" className={classes.img} />
      <img src={ButterflyImg} alt="" className={classes.img} />
      <img src={OrqueImg} alt="" className={classes.img} />
    </div>
  );
};

export default Infographie2D;
