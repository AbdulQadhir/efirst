import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Image
} from 'react-native';

import {VisaBreadCrump,FAQMenuItem} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../pages/uicomponents/components';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = "../../../Assets/";
import visa_options from "./data";

class App extends React.Component {
  
  static navigationOptions = ({navigation}) => ({
    title: 'Visa Service',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.goBack()} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });

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
              <View style={{paddingHorizontal:20}}>
                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(1)} >
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(2), fontSize:RFValue(16),fontFamily:'Montserrat-Medium' ,color:'#081344'}}>New Visa</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 1 && (
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:calcWidth(3)}} >
                          <FAQMenuItem 
                            onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Partner / Investor", options: visa_options } )} 
                            btnName="Partner / Investor"  
                            img={require(`${assetsPath}Visa/partner.png`)}/>
                          <FAQMenuItem 
                            onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Husband Visa", options: visa_options } )} 
                            btnName="Husband Visa"  
                            img={require(`${assetsPath}Visa/husband.png`)}/>
                          <FAQMenuItem 
                            onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Child Visa", options: visa_options } )} 
                            btnName="Child Visa"  
                            img={require(`${assetsPath}Visa/child.png`)}/>
                        
                    </View>
                    </View>
                    )}
                </View>

                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(2)}>
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(2), fontSize:RFValue(16),fontFamily:'Montserrat-Medium',color:'#081344'}}>Visa Stamping</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 2 && (
                    <View>
                    </View>
                    )}
                </View>

                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(3)}>
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(2), fontSize:RFValue(16),fontFamily:'Montserrat-Medium',color:'#081344'}}>Visa Renewal</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 3 && (
                    <View>
                    </View>
                    )}
                </View>

                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(4)}>
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(2), fontSize:RFValue(16),fontFamily:'Montserrat-Medium',color:'#081344'}}>Visa Cancellation</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 4 && (
                    <View>
                    </View>
                    )}
                </View>

              </View>
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    backgroundColor:'#FFF',
    flex: 1,
    paddingHorizontal:calcWidth(1),
    paddingVertical:calcHeight(1),
  },
  box:{
    flexDirection:'column',
    justifyContent:'space-between',
    backgroundColor:'#f2f2f2',
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
