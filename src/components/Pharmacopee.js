import React, {Component} from 'react';
import {Container, Tabs, Tab} from 'native-base'
import Abidjan from './Abidjan'
import Interieur from './Interieur'
import Proximite from './Proximite'

export default class Pharmacopee extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Abidjan">
            <Abidjan/>
          </Tab>
          <Tab heading="Interieur">
            <Interieur/>
          </Tab>
          <Tab heading="Proximite">
            <Proximite/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
