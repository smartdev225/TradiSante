import React, {Component} from 'react';
import {Container, Text, List, ListItem} from 'native-base'
import Maladies from '../containers/Maladies'
import {FlatList, TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'

class Remedes extends Component {
  constructor() {
    super();
    this._detailsMethodes = this._detailsMethodes.bind(this)
  }

  _detailsMethodes(text){
    Actions.meth()
  }


  render() {
    return (
      <Container>
        <List>
          <FlatList
            data={Maladies}
            renderItem={({item}) =>(
              <ListItem>
                <TouchableOpacity onPress={this._detailsMethodes(item.name)}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              </ListItem>
            )}
            keyExtractor={item =>item._id}
          />
        </List>
      </Container>
    );
  }
}
export default Remedes;
