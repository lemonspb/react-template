import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import "./styles.css";

class App extends Component {
  render() {
    console.log("dsfdsfsdfd");
    return (
      <div>
        <Container maxWidth="sm">
          <h1>My Reasdfdsfdct App!</h1>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Container>
      </div>
    );
  }
}

export default App;
