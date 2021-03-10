import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    marginLeft: 'auto',
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function TopArticleCard () {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {/* <Typography component="h5" variant="h5">
            Live From Space
          </Typography> */}
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <InfoOutlinedIcon />{' '}
            <Typography
              style={{ textTransform: 'capitalize', marginLeft: '10px' }}
            >
              {' '}
              <b>Shahzaib</b> in <b>Croudit</b>{' '}
            </Typography>{' '}
          </div>
          <Typography
            gutterBottom
            variant="h5"
            component="h6"
            style={{ fontWeight: '700' }}
          >
            10 React Interview Questions for 2020
          </Typography>

          <CardActions>
            <Typography size="small" color="primary" style={{ color: 'black' }}>
            Jun 10
            </Typography>
            <Typography size="small" color="primary" style={{ color: 'black' }}>
              6 min read
            </Typography>
            <IconButton>
              <StarBorderIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://picsum.photos/200/300"
        title="Live from space album cover"
      />
    </Card>
  );
}

TopArticleCard.propTypes = {};
