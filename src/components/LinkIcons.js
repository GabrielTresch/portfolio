import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InstagramWhiteIcon from '../assets/img/instagram-white.svg';
import InstagramBlackIcon from '../assets/img/instagram-black.svg';
import CodepenWhiteIcon from '../assets/img/codepen-white.svg';
import CodepenBlackIcon from '../assets/img/codepen-black.svg';
import GithubWhiteIcon from '../assets/img/github-white.svg';
import GithubBlackIcon from '../assets/img/github-black.svg';
import YoutubeWhiteIcon from '../assets/img/youtube-white.svg';
import YoutubeBlackIcon from '../assets/img/youtube-black.svg';
import UnsplashWhiteIcon from '../assets/img/unsplash-white.svg';
import UnsplashBlackIcon from '../assets/img/unsplash-black.svg';

const useStyles = makeStyles({
  containerWhite: {
    textAlign: 'center',
  },
  containerBlack: {
    textAlign: 'center',
  },
  link: {
    margin: 'auto 10px',
  },
  '@media (min-width: 1200px)': {
    containerBlack: {
      width: '100%',
      marginLeft: '10px',
      marginBottom: '40px',
      textAlign: 'left',
      margin: 'auto',
    },
  },
});

const LinkIcons = ({ color }) => {
  const classes = useStyles();
  return (
    <div className={(color ? (classes.containerWhite) : (classes.containerBlack))}>
      <a className={classes.link} href="https://www.instagram.com/gabriel_tresch/" aria-label="instagram link">
        {color ? <img src={InstagramWhiteIcon} alt="instagram icon" /> : <img src={InstagramBlackIcon} alt="instagram icon" /> }
      </a>
      <a className={classes.link} href="https://codepen.io/gabriel_tresch/" aria-label="codepen link">
        {color ? <img src={CodepenWhiteIcon} alt="instagram icon" /> : <img src={CodepenBlackIcon} alt="instagram icon" /> }
      </a>
      <a className={classes.link} href="https://github.com/GabrielTresch/" aria-label="github link">
        {color ? <img src={GithubWhiteIcon} alt="instagram icon" /> : <img src={GithubBlackIcon} alt="instagram icon" /> }
      </a>
      <a className={classes.link} href="https://www.youtube.com/channel/UCcItYNtU9ytmlJ1MCVuErKw?view_as=subscriber" aria-label="youtube link">
        {color ? <img src={YoutubeWhiteIcon} alt="instagram icon" /> : <img src={YoutubeBlackIcon} alt="instagram icon" /> }
      </a>
      <a className={classes.link} href="https://unsplash.com/@gabriel_tresch" aria-label="unsplash link">
        {color ? <img src={UnsplashWhiteIcon} alt="instagram icon" /> : <img src={UnsplashBlackIcon} alt="instagram icon" /> }
      </a>
    </div>
  );
};

LinkIcons.defaultProps = {
  color: '',
};

LinkIcons.propTypes = {
  color: PropTypes.string,
};

export default LinkIcons;
