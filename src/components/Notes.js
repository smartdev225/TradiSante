import React, {Component} from 'react';
import {Container, Text} from 'native-base'
import Styles from '../styles/Styles'
export default class Notes extends Component {

  render() {
    return (
      <Container style={Styles.container2}>
        <Text>Notes</Text>
      </Container>
    );
  }
}
