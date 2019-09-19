/* eslint-disable max-len */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhotoPresentation from '../components/PhotoPresentation';
import Wave from '../assets/img/wave.svg';
import ActivityCard from '../components/ActivityCard';
import SpaceImg from '../assets/img/infographie_wallpaper.svg';
import BeeImg from '../assets/img/golden_ratio_bee.svg';
import SwanImg from '../assets/img/golden_ratio_swan.svg';
import FlowerImg from '../assets/img/photo_fleur.jpg';
import PacmanImg from '../assets/img/photo_pacman.jpg';
import SkeletonImg from '../assets/img/photo_skeleton.jpg';
import FlightImg from '../assets/img/travel_avion.jpg';
import MajorqueImg from '../assets/img/travel_majorque.jpg';
import CascadeImg from '../assets/img/travel_cascade.jpg';
import Competences from '../components/Competences';

const useStyles = makeStyles({
  presentation: {
    minHeight: '302px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  description: {
    padding: '20px',
  },
  activities: {
    position: 'relative',
    margin: '100px 0',
    background: '#d3d3d3',
  },
  waveTop: {
    top: '0',
    transform: 'translateY(-99%)',
    position: 'absolute',
    width: '100%',
  },
  waveBottom: {
    bottom: '0',
    transform: 'translateY(99%) rotate(180deg)',
    position: 'absolute',
    width: '100%',
  },
  textAlign: {
    textAlign: 'center',
  },
  cardContainer: {
    maxWidth: '1350px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    padding: '10px 30px',
  },
  competences: {
    padding: '10px',
    maxWidth: '700px',
    margin: 'auto',
  },
  competencesTitle: {
    marginBottom: '30px',
  },
  '@media (min-width: 1200px)': {
    presentation: {
      flexDirection: 'row',
      marginBottom: '200px',
    },
    description: {
      width: '25vw',
      marginRight: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
    },
    descriptionH1: {
      width: '100%',
      marginBottom: '10px',
      margin: 'auto',
    },
    descriptionP: {
      marginTop: '10px',
      margin: 'auto',
    },
    activities: {
      marginBottom: '220px',
    },
    competences: {
      position: 'relative',
      maxWidth: '1200px',
    },
    competencesTitle: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(calc(-50% - 25px)) rotate(-90deg)',
      fontSize: '40px',
    },
  },
});

const AboutContainer = () => {
  const cards = [
    {
      id: 1,
      img1: `${SpaceImg}`,
      img2: `${BeeImg}`,
      img3: `${SwanImg}`,
      title: 'Infographie 2D/3D',
      description: 'Je fais de l\'infographie 2D sur Adobe illustrator ou sur Blender pour la 3D',
      link: '/infographie',
    },
    {
      id: 2,
      img1: `${FlowerImg}`,
      img2: `${PacmanImg}`,
      img3: `${SkeletonImg}`,
      title: 'Photographie',
      description: 'La photographie est un domaine qui me passionne et que je travaille régulièrement.',
      link: '/photo',
    },
    {
      id: 3,
      img1: `${FlightImg}`,
      img2: `${MajorqueImg}`,
      img3: `${CascadeImg}`,
      title: 'Voyages',
      description: 'J\'adore voyager, découvrir de nouveaux endroits, des cultures différentes ainsi que les spécialités locales.',
      link: '/travel',
    },
  ];

  const competences = [
    {
      id: 1,
      title: 'Développement web',
      competences: ['HTML', 'CSS', 'SASS', 'JavaScript', 'PHP', 'React'],
    },
    {
      id: 2,
      title: 'Infographie',
      competences: ['Adobe XD', 'Photoshop', 'Illustrator', 'Indesign'],
    },
    {
      id: 3,
      title: 'Outils que j\'utilise',
      competences: ['Github', 'Codepen', 'Gulp', 'After Effect', 'Premiere Pro'],
    },
  ];

  const classes = useStyles();
  return (
    <>
      <div className={classes.presentation}>
        <PhotoPresentation />
        <div className={classes.description}>
          <h1 className={classes.descriptionH1}>Qui suis-je ?</h1>
          <p className={classes.descriptionP}>
            {`Je m'appelle Gabriel Tresch, j'ai 22 ans et je viens de terminer 
            mes études dans le développement web et le webdesign. 
            Je suis passionné par l'informatique et les nouvelles technologies.`}
          </p>
        </div>
      </div>
      <div className={classes.activities}>
        <img src={Wave} className={classes.waveTop} alt="wave top" />
        <h2 className={classes.textAlign}>Mes activités</h2>
        <div className={classes.cardContainer}>
          {cards.map((value) => (
            <ActivityCard
              key={value.id}
              id={value.id}
              img1={value.img1}
              img2={value.img2}
              img3={value.img3}
              title={value.title}
              description={value.description}
              link={value.link}
            />
          ))}
        </div>
        <img src={Wave} className={classes.waveBottom} alt="wave bottom" />
      </div>
      <div className={classes.competences}>
        <h2 className={classes.competencesTitle}>Mes compétences</h2>
        {competences.map((value) => (
          <Competences key={value.id} title={value.title} competences={value.competences} />
        ))}
      </div>
    </>
  );
};

export default AboutContainer;
