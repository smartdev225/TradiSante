import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux'
import Home from './src/components/Home'
import Pharmacopee from './src/components/Pharmacopee'
import Remedes from './src/components/Remedes'
import Astuces from './src/components/Astuces'
import Notes from './src/components/Notes'



export default class App extends Component{
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene component={Home} title='Home' key='home' hideNavBar={1}/>
          <Scene component={Pharmacopee} title='Pharmacopee' key='pharma'/>
          <Scene component={Remedes} title='Remedes' key='remedes'/>
          <Scene component={Astuces} title='Astuces et Conseils' key='astuces'/>
          <Scene component={Notes} title='Votre Note' key='notes'/>
        </Scene>
      </Router>
    );
  }
}
