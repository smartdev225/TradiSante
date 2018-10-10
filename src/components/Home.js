import React, {Component} from 'react';
import {Text, Icon} from 'native-base'
import {Image, ScrollView, TouchableOpacity} from 'react-native'
import Styles from '../styles/Styles'
import {Actions} from 'react-native-router-flux'
import {Grid, Row} from 'react-native-easy-grid'

export default class Home extends Component {
  render(){
    return (
      <Grid>

        <Row size={60} style={Styles.container}>
          <Image source={require('../icons/logo.png')} alt="logo" style={Styles.logo}/>
          <Text style={Styles.texthome}>La medecine traditionnelle pour tous.</Text>
          <Text style={Styles.textdescript}>Defiler les options horizontalement</Text>
        </Row>

        <Row size={40}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={Styles.iconsHome} onPress={() => Actions.pharma()}>
              <Icon name="local-hospital" style={Styles.myicons} type='MaterialIcons'/>
              <Text style={Styles.titreicons}>Pharmacopee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconsHome} onPress={() => Actions.remedes()}>
              <Icon name="ambulance" style={Styles.myicons} type='FontAwesome'/>
              <Text style={Styles.titreicons}>Remedes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconsHome} onPress={() => Actions.astuces()}>
              <Icon name="book" style={Styles.myicons} type='MaterialIcons'/>
              <Text style={Styles.titreicons}>Astuces</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconsHome} onPress={() => Actions.notes()}>
              <Icon name="pencil" style={Styles.myicons} type='FontAwesome'/>
              <Text style={Styles.titreicons}>Forum</Text>
            </TouchableOpacity>
          </ScrollView>
        </Row>

      </Grid>
    );
  }
}
