import {StyleSheet,Dimensions} from 'react-native'
import Colors from './Colors'

const Styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.vert,
    justifyContent:'center',
    alignItems: 'center',
    alignContent:'center',
    flexDirection: 'column'
  },
  container2:{
    backgroundColor:Colors.blanc,
  },
  texthome:{
    fontSize: 20,
    color: Colors.blanc,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textdescript:{
    color: Colors.blanc,
    textAlign: 'center',
    fontSize: 15
  },
  titreicons:{
    color: Colors.vert,
    fontSize: 30,
    marginTop: 55,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  iconsHome:{
    margin: 15,
    marginTop: 30,
    color: Colors.vert,
    fontSize: 150,
    height: Dimensions.get('window').height,
    width : Dimensions.get('window').width,
    flexDirection: 'row',
  },
  myicons:{
    color: Colors.vert,
    fontSize: 115,
  },
  navBar:{
    backgroundColor: Colors.vert,
  },
  titleStyle:{
    color: Colors.blanc,
    fontWeight:'bold',
    textAlign: 'center'
  },
})

export default Styles;
;
