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
      id: '2',
      project_name: 'eturf',
      title: 'E-turf',
      project_date: 'Avril - Juillet 2019',
      description: 'Mise à jour des langages de programmation, des moyens de paiements, d’export des commandes vers le CRM et création d’un gestionnaire des commandes passées sur le site.n',
      competences: 'HTML,CSS,JavaScript,PHP,AJAX',
      project_url: 'https://www.e-turf.fr/index.php',
      images: './img/project_2.jpg',
    },
    {
      id: '3',
      project_name: 'cerel',
      title: 'Cerel',
      project_date: 'Juillet - Août 2019',
      description: 'Mise à jour des langages de programmation, des moyens de paiements, d’export des commandes vers le CRM et création d’un gestionnaire des commandes passées sur le site.',
      competences: 'HTML,CSS,JavaScript,PHP,AJAX',
      project_url: 'http://www.cerel.net/comment-gagner-au-loto.html',
      images: './img/project_3.jpg',
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
      project_url: 'http://wow.gabrieltresch.fr/',
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
