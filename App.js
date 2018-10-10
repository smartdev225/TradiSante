import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux'
import Home from './src/components/Home'
import Pharmacopee from './src/components/Pharmacopee'
import Remedes from './src/components/Remedes'
import Astuces from './src/components/Astuces'
import Forums from './src/components/Forums'
import Methodes from './src/components/Methodes'

import Styles from './src/styles/Styles'



export default class App extends Component{
  render() {
    return (
      <Router navigationBarStyle={Styles.navBar} titleStyle={Styles.titleStyle}
        navBarButtonColor='white'>
        <Scene key='root'>
          <Scene component={Home} title='Home' key='home' hideNavBar={1}/>
          <Scene component={Pharmacopee} title='Pharmacopee' key='pharma' />
          <Scene component={Remedes} title='Maladies et Remedes' key='remedes'/>
          <Scene component={Astuces} title='Astuces et Conseils' key='astuces'/>
          <Scene component={Forums} title='Forums' key='notes'/>
          <Scene component={Methodes} title={this.props.mytitle} key='meth'/>
        </Scene>
      </Router>
    );
  }
}
