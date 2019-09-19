import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
          odd={value.id % 2 === 0}
        />
        // </div>
      ))}
    </div>
  );
};

export default Realisation;
