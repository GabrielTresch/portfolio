import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '80px',
    padding: '10px',
  },
  reaCard: {
    width: 'calc(50% - 10px)',
    maxWidth: '280px',
    margin: 'auto auto 20px auto',
  },
  firstReaCard: {
    marginTop: '10px',
    width: 'calc(50% - 30px)',
    paddingLeft: '30px',
  },
  link: {
    padding: '6px 10px',
    background: 'black',
    color: 'white',
    textDecoration: 'none',
    fontSize: '13px',
  },
  img: {
    width: '100%',
    boxShadow: '0 2px 4px rgba(0,0,0,.5)',
  },
  '@media (min-width: 1200px)': {
    container: {
      maxWidth: '1200px',
      margin: '150px auto auto auto',
      flexDirection: 'row-reverse',
    },
  },
});

const AboutRealisation = () => {
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
    <div className={classes.container}>
      <div className={`${classes.reaCard} ${classes.firstReaCard}`}>
        <h3>Projets</h3>
        <NavLink className={classes.link} to="/realisations">voir plus</NavLink>
      </div>
      {data.slice(data.length - 3, data.length).map((value) => (
        <div key={value.id} className={classes.reaCard}>
          <a href={value.project_url}>
            <img src={value.images} alt={value.project_name} className={classes.img} />
          </a>
          <h3>{value.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default AboutRealisation;
