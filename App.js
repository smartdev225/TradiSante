import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux'
import Home from './src/components/Home'

export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene component={Home} title='Home' key='home' hideNavBar={1}/>
        </Scene>
      </Router> 
    );
  }
}
