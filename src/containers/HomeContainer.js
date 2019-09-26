import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Titles from '../config/Titles';
import LinkIcons from '../components/LinkIcons';
import Vignette from '../components/Vignette';
import iconG from '../assets/img/g.svg';
import Photo from '../assets/img/photo.jpg';
import Code from '../assets/img/code.jpg';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    height: 'calc(100vh - 50px)',
  },
  title: {
    margin: 'auto',
    marginBottom: '0',
  },
  h1: {
    margin: '0 auto',
    fontSize: '3em',
    fontFamily: 'Anton',
    color: 'black',
  },
  p: {
    marginTop: '0px',
    color: 'black',
  },
  svgImg: {
    width: '60%',
    margin: 'auto',
  },
  HomeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  '@media (min-width: 1200px)': {
    header: {
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: 'calc(100vh - 70px)',
    },
    title: {
      marginBottom: '0',
    },
    h1: {
      fontSize: '6em',
    },
    p: {
      fontSize: '1.5em',
    },
    svgImg: {
      width: '25%',
      marginBottom: '0',
    },
    HomeContainer: {
      maxWidth: '1200px',
      margin: 'auto',
    },
    homeContent: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      margin: '100px auto',
    },
    homeContentLast: {
      flexDirection: 'row-reverse',
    },
  },
});


const HomeContainer = () => {
  const classes = useStyles();
  const vignette = [
    {
      id: 1,
      title: 'Mes passions',
      description: 'Dans cette partie, je vous montrerai différents travaux faits dans les domaines que j\'affectionne. Vous y trouverez certaines de mes infographies 2D, des photos etc..',
      link: '/a-propos',
      photo: `${Photo}`,
      style: `${classes.homeContent}`,
    },
    {
      id: 2,
      title: 'Mes réalisations',
      description: 'J\'ai eu l\'occasion de réaliser quelques projets lors de mes études. Vous trouverez dans cette partie les projets dont j\'ai dû m\'occuper ainsi que mes projets personnels',
      link: '/realisations',
      photo: `${Code}`,
      style: `${[classes.homeContent, classes.homeContentLast].join(' ')}`,
    },
  ];

  return (
    <>
      <Titles title="Accueil" />
      <div className={classes.header}>
        <div className={classes.title}>
          <h1 className={classes.h1}>GABRIEL TRESCH</h1>
          <p className={classes.p}>Développeur web</p>
        </div>
        <img className={classes.svgImg} src={iconG} alt="icon g" />
        <LinkIcons />
      </div>
      <div className={classes.HomeContainer}>
        {vignette.map((value) => (
          <Vignette
            key={value.id}
            title={value.title}
            description={value.description}
            link={value.link}
            photo={value.photo}
            style={value.style}
          />
        ))}
      </div>
    </>
  );
};

export default HomeContainer;
