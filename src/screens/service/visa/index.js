import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ScrollView,
  BackHandler,
} from 'react-native';

import {connect} from 'react-redux';

import {
  VisaBreadCrump,
  FAQMenuItem,
} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../pages/uicomponents/components';
import Accordian from '../../../pages/uicomponents/accordian';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = '../../../Assets/';

class App extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Visa Service',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => navigation.openDrawer()} />
        <HeaderBtnBack onPress={() => navigation.navigate('ServiceHome')} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });
  constructor(props) {
    super(props);
    this.state = {
      activeAccordion: 1,
      selectedIndex: 1,
      url: "Json"
    };
  }

  componentDidMount(){
    
  }

  setSelectedIndex = index => {
    this.setState({selectedIndex: index});
  };

  render() {
    return (
      <>
        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingHorizontal: 20}}>
              <View style={styles.box}>
                <Accordian
                  setSelectedIndex={this.setSelectedIndex}
                  index={1}
                  selectedIndex={this.state.selectedIndex}
                  title="New Visa">
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Partner / Investor',
                            url:
                              `https://api.efirst.ae/${this.state.url}/new_visa/partner.json`,
                            select_service: 'New Visa',
                          })
                        }
                        btnName="Partner / Investor"
                        img={require(`${assetsPath}Visa/partner.png`)}
                        img2={require(`${assetsPath}Visa/partner_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Husband',
                            url:
                              `https://api.efirst.ae/${this.state.url}/new_visa/husband.json`,
                            select_service: 'New Visa',
                          })
                        }
                        btnName="Husband Visa"
                        img={require(`${assetsPath}Visa/husband.png`)}
                        img2={require(`${assetsPath}Visa/husband_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Child',
                            url:
                              `https://api.efirst.ae/${this.state.url}/new_visa/child.json`,
                            select_service: 'New Visa',
                          })
                        }
                        btnName="Child Visa"
                        img={require(`${assetsPath}Visa/child.png`)}
                        img2={require(`${assetsPath}Visa/child_white.png`)}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Parent',
                            url:
                              `https://api.efirst.ae/${this.state.url}/new_visa/parent.json`,
                            select_service: 'New Visa',
                          })
                        }
                        btnName="Parent Visa"
                        img={require(`${assetsPath}Visa/parent.png`)}
                        img2={require(`${assetsPath}Visa/parent_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Wife',
                            url:
                              `https://api.efirst.ae/${this.state.url}/new_visa/wife.json`,
                            select_service: 'New Visa',
                          })
                        }
                        btnName="Wife Visa"
                        img={require(`${assetsPath}Visa/wife.png`)}
                        img2={require(`${assetsPath}Visa/wife_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Change Status',
                            url:
                              `https://api.efirst.ae/${this.state.url}/new_visa/change_status.json`,
                            select_service: 'New Visa',
                          })
                        }
                        btnName="Change Status"
                        img={require(`${assetsPath}Visa/change_status.png`)}
                        img2={require(`${assetsPath}Visa/change_status_white.png`)}
                      />
                    </View>
                  </View>
                </Accordian>
              </View>

              <View style={styles.box}>
                <Accordian
                  setSelectedIndex={this.setSelectedIndex}
                  index={2}
                  selectedIndex={this.state.selectedIndex}
                  title="Visa Stamping">
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Partner / Investor',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_stamping/partner.json`,
                            select_service: 'Visa Stamping',
                          })
                        }
                        btnName="Partner / Investor"
                        img={require(`${assetsPath}Visa/partner.png`)}
                        img2={require(`${assetsPath}Visa/partner_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Husband Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_stamping/husband.json`,
                            select_service: 'Visa Stamping',
                          })
                        }
                        btnName="Husband Visa"
                        img={require(`${assetsPath}Visa/husband.png`)}
                        img2={require(`${assetsPath}Visa/husband_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Wife Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_stamping/wife.json`,
                            select_service: 'Visa Stamping',
                          })
                        }
                        btnName="Wife Visa"
                        img={require(`${assetsPath}Visa/wife.png`)}
                        img2={require(`${assetsPath}Visa/wife_white.png`)}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Parent Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_stamping/parent.json`,
                            select_service: 'Visa Stamping',
                          })
                        }
                        btnName="Parent Visa"
                        img={require(`${assetsPath}Visa/parent.png`)}
                        img2={require(`${assetsPath}Visa/parent_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Child Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_stamping/child.json`,
                          })
                        }
                        btnName="Child Visa"
                        img={require(`${assetsPath}Visa/child.png`)}
                        img2={require(`${assetsPath}Visa/child_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'New Born',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_stamping/newborn.json`,
                            select_service: 'Visa Stamping',
                          })
                        }
                        btnName="New Born"
                        img={require(`${assetsPath}Visa/newborn.png`)}
                        img2={require(`${assetsPath}Visa/newborn_white.png`)}
                      />
                    </View>
                  </View>
                </Accordian>
              </View>

              <View style={styles.box}>
                <Accordian
                  setSelectedIndex={this.setSelectedIndex}
                  index={3}
                  selectedIndex={this.state.selectedIndex}
                  title="Visa Renewal">
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Partner / Investor',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_renewal/partner.json`,
                            select_service: 'Visa Renewal',
                          })
                        }
                        btnName="Partner / Investor"
                        img={require(`${assetsPath}Visa/partner.png`)}
                        img2={require(`${assetsPath}Visa/partner_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Husband Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_renewal/husband.json`,
                            select_service: 'Visa Renewal',
                          })
                        }
                        btnName="Husband Visa"
                        img={require(`${assetsPath}Visa/husband.png`)}
                        img2={require(`${assetsPath}Visa/husband_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Wife Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_renewal/wife.json`,
                            select_service: 'Visa Renewal',
                          })
                        }
                        btnName="Wife Visa"
                        img={require(`${assetsPath}Visa/wife.png`)}
                        img2={require(`${assetsPath}Visa/wife_white.png`)}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Child Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_renewal/child.json`,
                            select_service: 'Visa Renewal',
                          })
                        }
                        btnName="Child Visa"
                        img={require(`${assetsPath}Visa/child.png`)}
                        img2={require(`${assetsPath}Visa/child_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Parent Visa',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_renewal/parent.json`,
                            select_service: 'Visa Renewal',
                          })
                        }
                        btnName="Parent Visa"
                        img={require(`${assetsPath}Visa/parent.png`)}
                        img2={require(`${assetsPath}Visa/parent_white.png`)}
                      />
                    </View>
                  </View>
                </Accordian>
              </View>

              <View style={styles.box}>
                <Accordian
                  setSelectedIndex={this.setSelectedIndex}
                  index={4}
                  selectedIndex={this.state.selectedIndex}
                  title=" Visa Cancellation">
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Partner / Investor',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_cancellation/partner.json`,
                            select_service: 'Visa Cancellation',
                          })
                        }
                        btnName="Partner / Investor"
                        img={require(`${assetsPath}Visa/partner.png`)}
                        img2={require(`${assetsPath}Visa/partner_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Partner / Investor',
                            url:
                              `https://api.efirst.ae/${this.state.url}/visa_cancellation/family.json`,
                            select_service: 'Visa Cancellation',
                          })
                        }
                        btnName="Family Visa"
                        img={require(`${assetsPath}Visa/family.png`)}
                        img2={require(`${assetsPath}Visa/family_white.png`)}
                      />
                    </View>
                  </View>
                </Accordian>
              </View>

              <View style={styles.box}>
                <Accordian
                  setSelectedIndex={this.setSelectedIndex}
                  index={5}
                  selectedIndex={this.state.selectedIndex}
                  title="Complete Visa Package">
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Partner / Investor',
                            url:
                              `https://api.efirst.ae/${this.state.url}/complete/partner.json`,
                            select_service: 'Complete Visa Package',
                          })
                        }
                        btnName="Partner / Investor"
                        img={require(`${assetsPath}Visa/partner.png`)}
                        img2={require(`${assetsPath}Visa/partner_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Husband',
                            url:
                              `https://api.efirst.ae/${this.state.url}/complete/husband.json`,
                            select_service: 'Complete Visa Package',
                          })
                        }
                        btnName="Husband Visa"
                        img={require(`${assetsPath}Visa/husband.png`)}
                        img2={require(`${assetsPath}Visa/husband_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Child',
                            url:
                              `https://api.efirst.ae/${this.state.url}/complete/child.json`,
                            select_service: 'Complete Visa Package',
                          })
                        }
                        btnName="Child Visa"
                        img={require(`${assetsPath}Visa/child.png`)}
                        img2={require(`${assetsPath}Visa/child_white.png`)}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: calcWidth(3),
                      }}>
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Parent',
                            url:
                              `https://api.efirst.ae/${this.state.url}/complete/parent.json`,
                            select_service: 'Complete Visa Package',
                          })
                        }
                        btnName="Parent Visa"
                        img={require(`${assetsPath}Visa/parent.png`)}
                        img2={require(`${assetsPath}Visa/parent_white.png`)}
                      />
                      <FAQMenuItem
                        onPress={() =>
                          this.props.navigation.navigate('VisaFlow', {
                            lastSelected: 'Wife',
                            url:
                              `https://api.efirst.ae/${this.state.url}/complete/wife.json`,
                            select_service: 'Complete Visa Package',
                          })
                        }
                        btnName="Wife Visa"
                        img={require(`${assetsPath}Visa/wife.png`)}
                        img2={require(`${assetsPath}Visa/wife_white.png`)}
                      />
                    </View>
                  </View>
                </Accordian>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingHorizontal: calcWidth(1),
    paddingVertical: calcHeight(1),
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    padding: calcHeight(1),
    margin: calcHeight(1),
  },
  visa: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
});
const mapStateToProps = ({
  profile
}) => ({
  profile
});
const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

