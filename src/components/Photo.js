import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    columns: '3 250px',
    columnGap: '1rem',
    margin: '40px auto',
  },
  img: {
    maxWidth: '380px',
    width: '100%',
    margin: '0 1rem 1rem 0',
    display: 'inline-block',
  },
  '@media (max-width: 535px)': {
    img: {
      display: 'block',
      margin: '20px auto',
    },
  },
});

const Photo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src="https://images.unsplash.com/photo-1565638340979-61844ee1cf51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1565024823341-d48ffae6d7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1565024870048-e4807f1ef897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1565024859443-636ac2dd30e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1565024847366-be44b4fbbc4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1565024735633-743eb9f7197e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932367171-49d2df4fb36d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932386917-83d28418c6f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932352535-0ad4f376d6e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932386503-ecfe7dbf3a03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932367379-655fdf9989e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932386325-7b9b6b072e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932330365-ac256028faae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932324225-1725039b3f8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1565438889405-8f974fdc27a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="" className={classes.img} />
      <img src="https://images.unsplash.com/photo-1564932367297-3d3f350a2e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className={classes.img} />
    </div>
  );
};

export default Photo;
