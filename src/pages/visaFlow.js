import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';

import {VisaBreadCrump,SRDetailsHdr} from "./uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = "../Assets/";

class App extends React.Component {
  state = {
    activeAccordion : 1
  }

  openAccordion = (index) => {
    this.setState({activeAccordion: index})
  }

  render() {
  return (
    <>
          <View style={styles.body} >
              <VisaBreadCrump path="Visa Service >New Visa"/>
              <View style={{paddingHorizontal:20}}>
                  <SRDetailsHdr label={"Entry Permit"}/>

              </View>
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    flex: 1,
    
  },
  box:{
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'#f2f2f2',
    borderRadius : calcHeight(2),
    padding:calcHeight(1),
    margin:calcHeight(1),
},
visa:{
  flex:1,
  flexDirection:'column',
  padding:20,

}
});

export default App;
