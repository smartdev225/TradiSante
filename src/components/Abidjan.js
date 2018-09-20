import React, {Component} from 'react';
import {Container, Text, List, ListItem} from 'native-base'
import {FlatList, TouchableOpacity} from 'react-native'
import Styles from '../styles/Styles'
import Commune from '../containers/Commune'

export default class Abidjan extends Component {

  render() {
    return (
      <Container>
        <List>
          <FlatList
            refreshing={true}
            data={Commune}
            renderItem={({item}) => (
                <ListItem>
                  <TouchableOpacity>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </ListItem>
            )}
            keyExtractor={item => item._id}
          />
        </List>
      </Container>
    );
  }
}
