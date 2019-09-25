import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://gabrieltresch.fr/api/realisation.php',
      );
      if (data.length <= 0) {
        setData(result.data);
      }
    }
    fetchData();
  }, [data]);
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
