import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import propTypes from 'prop-types';

const useStyles = makeStyles({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  iconsContainer: {
    marginLeft: 'auto'
  },
  imgContainer: {
    width: '200px',
    height: '200px',
    background: 'yellow'
  },
  headingContainer: {
    width: '65%',
    marginLeft: '1.875rem'
  }
});

function YourArticleCard ({ heading, desc, imgSrc }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>{imgSrc}</div>
      <div className={classes.headingContainer}>
        <h1>{heading}</h1>
        <p>
          {desc}
        </p>
      </div>
      <div className={classes.iconsContainer}>
      <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default YourArticleCard;

YourArticleCard.propTypes = {
  heading: propTypes.string,
  desc: propTypes.string,
  imgSrc: propTypes.string
}
;
