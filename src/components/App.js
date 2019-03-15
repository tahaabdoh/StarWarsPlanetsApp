import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Components
import Header from './Header';

// containers
import Home from '../containers/Home';
import PlanetDetails from '../containers/PlanetDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="overlay"></div>
          <div className="stars"></div>
          <div className="clouds"></div>
          <div className="masthead-bg"></div>
          <Container className='h-100'>
            <Row className='h-100 align-items-center'>
              <Header />
              <Col className="justify-content-center align-self-center" sm={6}>
                <Switch>
                  <Route path='/Planets/:id' component={PlanetDetails} />
                  <Route exact path='/' component={Home}></Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;