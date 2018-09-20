import React, {Component} from 'react';
import {Container, Text, Icon} from 'native-base'
import {Image, ScrollView, TouchableOpacity} from 'react-native'
import Styles from '../styles/Styles'
import {Grid, Row} from 'react-native-easy-grid'

export default class Home extends Component {
  render(){
    return(
      <Grid>

        <Row size={60} style={Styles.container}>
          <Image source={require('../icons/logo.png')} alt="logo" style={Styles.logo} />
          <Text style={Styles.texthome}>La medecine traditionnelle pour tous.</Text>
          <Text style={Styles.textdescript}>Defiler les options horizontalement</Text>
        </Row>

        <Row size={40}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={Styles.iconsHome} >
              <Icon name="local-hospital" style={Styles.myicons} type='MaterialIcons'/>
              <Text style={Styles.titreicons}>Pharmacopee</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconsHome} >
              <Icon name="ambulance" style={Styles.myicons} type='FontAwesome'/>
              <Text style={Styles.titreicons}>Remedes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconsHome} >
              <Icon name="book" style={Styles.myicons} type='MaterialIcons'/>
              <Text style={Styles.titreicons}>Astuces</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.iconsHome} >
              <Icon name="pencil" style={Styles.myicons} type='FontAwesome'/>
              <Text style={Styles.titreicons}>Notations</Text>
            </TouchableOpacity>
          </ScrollView>
        </Row>

      </Grid>
    );
  }
}
