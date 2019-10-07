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

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = "../../../Assets/";

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
                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(1)} >
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(5), fontSize:RFValue(17),fontFamily:'Montserrat-Bold', fontWeight:"bold" ,color:'#081344'}}>New Visa</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 1 && (
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenuItem btnName="General" img={require(`${assetsPath}FAQMenu/general.png`)}/>
                          <FAQMenuItem btnName="Price"  img={require(`${assetsPath}FAQMenu/price.png`)}/>
                          <FAQMenuItem btnName="Support/Complanits" img={require(`${assetsPath}FAQMenu/support.png`)}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenuItem btnName="Using Service" img={require(`${assetsPath}FAQMenu/service.png`)}/>
                          <FAQMenuItem btnName="Counter/Delivery" img={require(`${assetsPath}FAQMenu/delivery.png`)}/>
                          <FAQMenuItem btnName="Have a question?" img={require(`${assetsPath}FAQMenu/qstn.png`)}/>
                    </View>
                    </View>
                    )}
                </View>

                
                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(2)}>
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(5), fontSize:RFValue(17),fontFamily:'Montserrat-Bold', fontWeight:"bold" ,color:'#081344'}}>New Visa</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 2 && (
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenuItem btnName="General" img={require(`${assetsPath}FAQMenu/general.png`)}/>
                          <FAQMenuItem btnName="Price"  img={require(`${assetsPath}FAQMenu/price.png`)}/>
                          <FAQMenuItem btnName="Support/Complanits" img={require(`${assetsPath}FAQMenu/support.png`)}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenuItem btnName="Using Service" img={require(`${assetsPath}FAQMenu/service.png`)}/>
                          <FAQMenuItem btnName="Counter/Delivery" img={require(`${assetsPath}FAQMenu/delivery.png`)}/>
                          <FAQMenuItem btnName="Have a question?" img={require(`${assetsPath}FAQMenu/qstn.png`)}/>
                    </View>
                    </View>
                    )}
                </View>

                
                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(3)}>
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(5), fontSize:RFValue(17),fontFamily:'Montserrat-Bold', fontWeight:"bold" ,color:'#081344'}}>New Visa</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 3 && (
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenuItem btnName="General" img={require(`${assetsPath}FAQMenu/general.png`)}/>
                          <FAQMenuItem btnName="Price"  img={require(`${assetsPath}FAQMenu/price.png`)}/>
                          <FAQMenuItem btnName="Support/Complanits" img={require(`${assetsPath}FAQMenu/support.png`)}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center'}} >
                          <FAQMenuItem btnName="Using Service" img={require(`${assetsPath}FAQMenu/service.png`)}/>
                          <FAQMenuItem btnName="Counter/Delivery" img={require(`${assetsPath}FAQMenu/delivery.png`)}/>
                          <FAQMenuItem btnName="Have a question?" img={require(`${assetsPath}FAQMenu/qstn.png`)}/>
                    </View>
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
