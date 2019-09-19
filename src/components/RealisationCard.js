import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioImg from '../assets/img/project_4.jpg';

const useStyles = makeStyles({
  container: {
    width: '320px',
    margin: 'auto',
    background: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,.5)',
    textDecoration: 'none',
    color: 'black',
  },
  img: {
    width: '320px',
  },
  content: {
    padding: '10px',
  },
  title: {
    margin: '0 auto 0 0',
  },
  date: {
    margin: '0 auto 0 0',
    fontSize: '12px',
  },
  competences: {
    background: 'black',
    color: 'white',
    fontSize: '12px',
    padding: '2px 5px',
    margin: 'auto 5px',
  },
});

const RealisationCard = ({
  id, title, date, description, competences, link,
}) => {
  const classes = useStyles();
  return (
    <div key={id} className={classes.container}>
      <a href={link}>
        <img src={PortfolioImg} alt="portfolio" className={classes.img} />
      </a>
      <div className={classes.content}>
        <h2 className={classes.title}>{title}</h2>
        <h3 className={classes.date}>{date}</h3>
        <p>{description}</p>
        {competences.split(',').map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index} className={classes.competences}>{value}</span>
        ))}
      </div>
    </div>
  );
};

RealisationCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  competences: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default RealisationCard;
