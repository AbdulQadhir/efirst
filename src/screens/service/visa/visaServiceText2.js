import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import { VisaBreadCrump, TxtSubHead, VisaOgDocTxt, PriceDetailItem, ButtonNormal } from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../pages/uicomponents/components';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
import { calcWidth, calcHeight } from '../../../config';

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

  constructor(props) {
    super(props);
    this.state = {
      visaFlow: "",
      totalBillAmt: 0,
      courier_charge: 15
    };
  }

  renderPriceDts = () => {
    return this.props.navigation.state.params.docsAndPayment.PriceDetils.map(
      datum => {
        return (
          <PriceDetailItem label={datum.Text} amount={datum.Value} />
        );
      }
    );
  };
  
  goToNext = () => {
    var data = this.props.navigation.state.params.data;
    data.TotalBillAmount = this.state.totalBillAmt;

    this.props.navigation.navigate("VisaPersonalDt", {
      data,
      passportExpiry : this.props.navigation.state.params.passportExpiry,
      CourierCharge : this.props.navigation.state.params.CourierCharge,
      docItem: this.props.navigation.state.params.docItem,
    });
  }
  
  componentDidMount = () => {
    this.setState({ visaFlow : this.props.navigation.state.params.visaFlow, courier_charge: this.props.navigation.state.params.CourierCharge })

    let total = this.props.navigation.state.params.docsAndPayment.PriceDetils.reduce(
      (accumulator, item) => accumulator + parseFloat(item.Value),
      0
    );
    if(this.props.navigation.state.params.docsAndPayment.OriginalDocumentSubmissionType.Value == "Through Courier")
      total += this.props.navigation.state.params.CourierCharge;
    this.setState({ totalBillAmt: Math.round(total * 100) / 100 });
  };

  render() {
  return (
    <>
        <ScrollView>
          <View style={styles.body} >
            <VisaBreadCrump  path={this.state.visaFlow}  />
            <View style={styles.container1}  >           
              <TxtSubHead title="Additional Notes" style={{marginBottom:0}} />
              <VisaOgDocTxt text={this.props.navigation.state.params.docsAndPayment.AdditionalNotes.value} />  
              <TxtSubHead title="IBAN Number" style={{marginBottom:0}} />

              <VisaOgDocTxt text={this.props.navigation.state.params.docsAndPayment.IBANNumber.value} />  
              <TxtSubHead title="Notes" style={{marginBottom:0}} />

              <VisaOgDocTxt text={this.props.navigation.state.params.docsAndPayment.Notes.Options[0]} />  
              <TxtSubHead title="Price Details" style={{marginBottom:0}} />

              {this.renderPriceDts()}
              
              {
                this.props.navigation.state.params.docsAndPayment.OriginalDocumentSubmissionType.Value == "Through Courier" ?
                (<PriceDetailItem label={"Courier Charge"} amount={this.props.navigation.state.params.CourierCharge} />) :
                (<View />)
              }

              <PriceDetailItem label="Total Charge" amount={this.state.totalBillAmt} />
              
              <ButtonNormal label="Next" onPress={() => {this.goToNext()}} />
              </View>
          </View>
        </ScrollView>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    flex: 1
  },
  container1 : {
    paddingHorizontal: calcWidth(3),
    paddingVertical: calcHeight(2),
    backgroundColor: "#f8f9fc",
  },
});

export default App;
