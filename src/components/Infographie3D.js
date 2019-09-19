import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '@google/model-viewer';
// import G3D from '../assets/3d/g.gltf';
import Earth3D from '../assets/3d/earth.gltf';

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    columns: '2 600px',
    columnGap: '1rem',
    margin: '40px auto',
  },
  content: {
    maxWidth: '582.03px',
    width: '100%',
    height: '190px',
    margin: '0 1rem 1rem 0',
    display: 'inline-block',
  },
});

const Infographie3D = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <ModelViewer type="gtlf" src={G3D} /> */}
      <model-viewer alt="A 3D model of the earth" src={Earth3D} auto-rotate camera-controls background-color="#65749e" className={classes.content} />
    </div>
  );
};

export default Infographie3D;
