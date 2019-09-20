import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioImg from '../assets/img/project_4.jpg';

const useStyles = makeStyles({
  container: {
    width: '300px',
    maxHeight: '363px',
    margin: '20px auto 0 auto',
    textDecoration: 'none',
    color: 'black',
  },
  img: {
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,.5)',
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
    padding: '3px 5px',
    margin: 'auto 5px',
  },
  odd: {
    // transform: 'translateY(50%)',
    marginTop: '200px',
  },
  '@media (max-width: 660px)': {
    container: {
      margin: '30px auto',
    },
    odd: {
      marginTop: '0',
    },
  },
});

const RealisationCard = ({
  title, date, description, competences, link, odd,
}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.container} ${odd ? '' : classes.odd}`}>
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
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  competences: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  odd: PropTypes.string.isRequired,
};

export default RealisationCard;
