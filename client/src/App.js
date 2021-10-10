import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import "./assets/styles/globalStyles.css";

import {getPosts} from './actions/posts'
//components
import Posts from "./components/Posts";
import Form from "./components/Form";

import {useDispatch} from 'react-redux'

import memories from "./assets/images/memories.png";

const App = () => {

  const dispatch =  useDispatch()

  React.useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className="app-bar" position="static" color="inherit">
        <Typography className="app-heading" variant="h2" align="center">
          Memories
        </Typography>
        <img className="app-image" src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
