import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RealisationCard from './RealisationCard';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '750px',
    margin: 'auto',
  },
  '@media (max-width: 660px)': {
    wrapper: {
      maxWidth: '300px',
    },
  },
});

const Realisation = () => {
  const data = [
    {
      id: '1',
      project_name: 'sendsms',
      title: 'SendSms',
      project_date: 'Mai 2018',
      description: 'Réalisation d’une plateforme d’envoi de SMS en ligne.',
      competences: 'HTML,CSS,PHP,API Sendinblue',
      project_url: 'http:www.sendsms.fr',
      images: './img/project_1.jpg',
    },
    {
      id: '4',
      project_name: 'portfolio',
      title: 'Portfolio',
      project_date: 'Septembre 2019',
      description: 'Réalisation de mon propre portfolio en React.',
      competences: 'React,JSS,CSS,PHP,SQL',
      project_url: 'https://www.gabrieltresch.fr',
      images: './img/project_4.jpg',
    },
    {
      id: '5',
      project_name: 'wow-dashboard',
      title: 'World of Warcraft dashboard',
      project_date: 'En cours de réalisation',
      description: "Création d'une plateforme en React permettant de récupérer dynamiquement les informations d'un personnage du jeu World of Warcraft grâce à son API.",
      competences: 'React,Hooks,Redux,API,TweenMax',
      project_url: '#',
      images: './img/project_5.jpg',
    },
  ];

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {data.reverse().map((value) => (
        // <div key={value.id} className={classes.container}>
        <RealisationCard
          key={value.id}
          project={value.project_name}
          title={value.title}
          date={value.project_date}
          description={value.description}
          competences={value.competences}
          link={value.project_url}
          img={value.images}
        />
        // </div>
      ))}
    </div>
  );
};

export default Realisation;
