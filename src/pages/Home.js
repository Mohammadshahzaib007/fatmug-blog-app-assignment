import { Container, Grid } from '@material-ui/core';
import React from 'react';
import HomePageBlogCard from '../components/HomePageBlogCard';

function Home () {
  return (
    <section>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={8}>
            <HomePageBlogCard
              imageLink="https://picsum.photos/seed/picsum/500/300"
              heading="Lizard"
              description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica"
              author="shahzaib"
              organization="Croudit"
            />
          </Grid>
          <Grid item xs={4}>
            <h1>I am 4</h1>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Home;
