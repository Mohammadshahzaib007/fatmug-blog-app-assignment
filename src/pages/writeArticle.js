import {
  Container,
  Grid,
  TextField,
  makeStyles,
  Button,
  FormControl
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  label: {
    fontSize: '1.5625rem',
    color: 'black',
    letterSpacing: '5px',
    textTransform: 'uppercase',
    display: 'inline-block',
    fontWeight: '700',
    marginBottom: '0.9375rem'
  }
});

function writeArticle () {
  const classes = useStyles();

  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <label htmlFor="title" className={classes.label}>
                Title
              </label>
              <TextField
                id="title"
                style={{ marginBottom: '6.25rem' }}
                inputProps={{ style: { fontSize: '1.5625rem' } }} // font size of input text
                fullWidth
                variant="filled"
              />

              <label htmlFor="discription" className={classes.label}>
                Discription
              </label>
              <TextField
                rows="20"
                id="discription"
                inputProps={{ style: { fontSize: '1.5625rem' } }} // font size of input text
                fullWidth
                variant="filled"
                multiline
              />

              <div style={{ marginTop: '100px' }}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload Image
                  </Button>
                </label>
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default writeArticle;
