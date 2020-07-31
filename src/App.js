import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button'
import {Card, CardGroup, CardColumns} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';


let dat;

  fetch(`https://raw.githubusercontent.com/SatyamAnand98/data/master/db.json`)
  .then(res => res.json())
  .then(data => {
    dat=data;
    console.log(dat)
  })


function App() {

  const rendercard = (card, index) => {
    return(
      <Card border="primary" style={{ width: '25rem', height: '17rem' }}>
        <Card.Header>I8LABS QUOTES</Card.Header>
        <Card.Body>
        <Card.Title>Quote Number {index}</Card.Title>
          <br></br>
          <Card.Text className="scrolls">{card.quote}</Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div className="App">
      <CardColumns>
      {dat.map(rendercard)}
      </CardColumns>
    </div>
  );
}

export default App;
