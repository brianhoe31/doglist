import React, { Component } from 'react';
import Navbar from './Navbar';
import Dogs from './Dogs';
import DogProfile from './DogProfile';
import {Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: '../imgs/whiskey.jpg',
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: '../imgs/hazel.jpg',
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: './tubby.jpg',
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render() {
    let dogList = this.props.dogs.map(e => (
      {name: e.name}
    ));
    console.log(dogList);
    return (
      <div className="App">
        <Navbar dogList = {this.props.dogs} />
        <Switch>
          <Route exact path='/dogs' render={() => <Dogs  dogList = {this.props.dogs}/>}/>
          <Route exact path='/dogs/:name' render={(routeProps) => <DogProfile name={routeProps} dogList = {this.props.dogs}/>}/>
        </Switch>
      </div>

    );
  }
}



export default App;
