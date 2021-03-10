import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import YourArticleCard from '../components/YourArticleCard';

function MyArticle () {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div
              style={{
                width: '100%',
                borderTop: '1px solid black',
                borderBottom: '1px solid black',
                padding: '20px 0',
                marginBottom: '50px'
              }}
            >
              <Typography
                variant="h5"
                component="h1"
                style={{ textTransform: 'uppercase', fontWeight: '700' }}
              >
               your SUBMITTED articles
              </Typography>
            </div>
            <YourArticleCard />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default MyArticle;
