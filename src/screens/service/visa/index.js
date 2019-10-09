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
                          onPress={()=>this.props.navigation.navigate("VisaFlow", { 
                            lastSelected: "Partner / Investor", 
                            url: 'https://api.efirst.ae/Json/new_visa/partner.json' ,
                            select_service: "New Visa"
                          } )} 
                          btnName="Partner / Investor"  
                          img={require(`${assetsPath}Visa/partner.png`)}/>
                        <FAQMenuItem 
                          onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Husband",
                          url: 'https://api.efirst.ae/Json/new_visa/husband.json' ,
                          select_service: "New Visa"
                          } )} 
                          btnName="Husband Visa"  
                          img={require(`${assetsPath}Visa/husband.png`)}/>
                        <FAQMenuItem 
                          onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Child",
                          url: 'https://api.efirst.ae/Json/new_visa/child.json' ,
                          select_service: "New Visa"
                          } )} 
                          btnName="Child Visa"  
                          img={require(`${assetsPath}Visa/child.png`)}/>
                      </View>
                      <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:calcWidth(3)}} >
                        <FAQMenuItem 
                          onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Parent",
                          url: 'https://api.efirst.ae/Json/new_visa/parent.json' ,
                          select_service: "New Visa"
                          } )} 
                          btnName="Parent Visa"  
                          img={require(`${assetsPath}Visa/parent.png`)}/>
                        <FAQMenuItem 
                          onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Wife",
                          url: 'https://api.efirst.ae/Json/new_visa/wife.json' ,
                          select_service: "New Visa"
                          } )} 
                          btnName="Wife Visa"  
                          img={require(`${assetsPath}Visa/wife.png`)}/>
                        <FAQMenuItem 
                          onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Change Status",
                          url: 'https://api.efirst.ae/Json/new_visa/change_status.json' ,
                          select_service: "New Visa"
                          } )} 
                          btnName="Change Status"  
                          img={require(`${assetsPath}Visa/change_status.png`)}/>
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
                    <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:calcWidth(3)}} >
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Partner / Investor",
                        url: 'https://api.efirst.ae/Json/visa_stamping/partner.json' ,
                        select_service: "Visa Stamping"
                        } )} 
                        btnName="Partner / Investor"  
                        img={require(`${assetsPath}Visa/partner.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Husband Visa",
                        url: 'https://api.efirst.ae/Json/visa_stamping/husband.json' ,
                        select_service: "Visa Stamping"
                        } )} 
                        btnName="Husband Visa"  
                        img={require(`${assetsPath}Visa/husband.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Wife Visa",
                        url: 'https://api.efirst.ae/Json/visa_stamping/wife.json' ,
                        select_service: "Visa Stamping"
                         } )} 
                        btnName="Wife Visa"  
                        img={require(`${assetsPath}Visa/wife.png`)}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:calcWidth(3)}} >
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Parent Visa",
                        url: 'https://api.efirst.ae/Json/visa_stamping/parent.json' ,
                        select_service: "Visa Stamping"
                         } )} 
                        btnName="Parent Visa"  
                        img={require(`${assetsPath}Visa/parent.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Child Visa",
                        url: 'https://api.efirst.ae/Json/visa_stamping/child.json' 
                         } )} 
                        btnName="Child Visa"  
                        img={require(`${assetsPath}Visa/child.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "New Born",
                        url: 'https://api.efirst.ae/Json/visa_stamping/newborn.json' ,
                        select_service: "Visa Stamping"
                         } )} 
                        btnName="New Born"  
                        img={require(`${assetsPath}Visa/newborn.png`)}/>
                    </View>
                  </View>
                    )}
                </View>

                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(3)}>
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(2), fontSize:RFValue(16),fontFamily:'Montserrat-Medium',color:'#081344'}}>Visa Renewal</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 3 && (
                      
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:calcWidth(3)}} >
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Partner / Investor",
                        url: 'https://api.efirst.ae/Json/visa_renewal/partner.json' ,
                        select_service: "Visa Renewal"
                          } )} 
                        btnName="Partner / Investor"  
                        img={require(`${assetsPath}Visa/partner.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Husband Visa",
                        url: 'https://api.efirst.ae/Json/visa_renewal/husband.json' ,
                        select_service: "Visa Renewal"
                           } )} 
                        btnName="Husband Visa"  
                        img={require(`${assetsPath}Visa/husband.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Wife Visa",
                        url: 'https://api.efirst.ae/Json/visa_renewal/wife.json' ,
                        select_service: "Visa Renewal"
                           } )} 
                        btnName="Wife Visa"  
                        img={require(`${assetsPath}Visa/wife.png`)}/>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:calcWidth(3)}} >
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Child Visa",
                        url: 'https://api.efirst.ae/Json/visa_renewal/child.json' ,
                        select_service: "Visa Renewal"
                            } )} 
                        btnName="Child Visa"  
                        img={require(`${assetsPath}Visa/child.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Parent Visa",
                        url: 'https://api.efirst.ae/Json/visa_renewal/parent.json' ,
                        select_service: "Visa Renewal"
                            } )} 
                        btnName="Parent Visa"  
                        img={require(`${assetsPath}Visa/parent.png`)}/>
                    </View>
                  </View>
                    )}
                </View>

                <View style={styles.box} >
                    <TouchableOpacity onPress={()=>this.openAccordion(4)}>
                          <Text style={{ padding:calcHeight(2), paddingHorizontal:calcWidth(2), fontSize:RFValue(16),fontFamily:'Montserrat-Medium',color:'#081344'}}>Visa Cancellation</Text>
                    </TouchableOpacity>
                    { this.state.activeAccordion == 4 && (
                    <View>
                    <View style={{flexDirection:'row',justifyContent:'center', paddingHorizontal:calcWidth(3)}} >
                    <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Partner / Investor",
                        url: 'https://api.efirst.ae/Json/visa_cancellation/partner.json' ,
                        select_service: "Visa Cancellation"
                            } )} 
                        btnName="Partner / Investor"  
                        img={require(`${assetsPath}Visa/partner.png`)}/>
                      <FAQMenuItem 
                        onPress={()=>this.props.navigation.navigate("VisaFlow", { lastSelected: "Partner / Investor",
                        url: 'https://api.efirst.ae/Json/visa_cancellation/family.json' ,
                        select_service: "Visa Cancellation"
                            } )} 
                        btnName="Family Visa"  
                        img={require(`${assetsPath}Visa/family.png`)}/>
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
