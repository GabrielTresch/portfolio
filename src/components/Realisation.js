import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import RealisationCard from './RealisationCard';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
    <>
      {data.reverse().map((value) => (
        <div key={value.id} className={classes.container}>
          <RealisationCard
            id={value.id}
            project={value.project_name}
            title={value.title}
            date={value.project_date}
            description={value.description}
            competences={value.competences}
            link={value.project_url}
            img={value.images}
          />
        </div>
      ))}
    </>
  );
};

export default Realisation;
