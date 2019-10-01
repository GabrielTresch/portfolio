import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ModalImage from 'react-modal-image';

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

const images = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1565638340979-61844ee1cf51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    alt: 'yellow ice tea',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1565024823341-d48ffae6d7d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'chicken doritos salad',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1565024870048-e4807f1ef897?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'burger lab',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1565024859443-636ac2dd30e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'palma majorque cathedral',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1565024847366-be44b4fbbc4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'violet bike',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1565024735633-743eb9f7197e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'pacman',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1564932367171-49d2df4fb36d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'blue flower',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1564932386917-83d28418c6f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'cactus',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1564932352535-0ad4f376d6e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'swimming pool',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1564932386503-ecfe7dbf3a03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    alt: 'white mushroom',
  },
  {
    id: 11,
    img: 'https://images.unsplash.com/photo-1564932367379-655fdf9989e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'pink flament',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/photo-1564932386325-7b9b6b072e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'pink flower',
  },
  {
    id: 13,
    img: 'https://images.unsplash.com/photo-1564932330365-ac256028faae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'multi color umbrella',
  },
  {
    id: 14,
    img: 'https://images.unsplash.com/photo-1564932324225-1725039b3f8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'see',
  },
  {
    id: 15,
    img: 'https://images.unsplash.com/photo-1565438889405-8f974fdc27a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    alt: 'wheel',
  },
  {
    id: 16,
    img: 'https://images.unsplash.com/photo-1564932367297-3d3f350a2e88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    alt: 'yellow flower',
  },
];

const Photo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {images.map((value) => (
        <ModalImage
          small={value.img}
          large={value.img}
          // alt={value.alt}
          className={classes.img}
        />
      ))}
    </div>
  );
};

export default Photo;
