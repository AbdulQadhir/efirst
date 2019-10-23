import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import { VisaBreadCrump, SRDetailsHdr, VisaOgDocTxt, VisaDtItem, ButtonNormal } from '../../../pages/uicomponents/components';
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
    };
  }
    
  componentDidMount = () => {
      this.setState({ visaFlow : this.props.navigation.state.params.visaFlow })
  };
  
  renderPageData = () => {
    return this.props.navigation.state.params.pageData.map(datum => {
      return (
        <VisaDtItem txt1={datum["Text"]} txt2={datum["Value"]}/>
      );
    });
  };

  renderDocsData = () => {
    const docs = this.props.navigation.state.params.docsAttached;
    return this.props.navigation.state.params.docs.map(datum => {
      return (
        <VisaDtItem isDoc txt1={datum} txt2={docs.indexOf(datum) >= 0 ? "Yes" : "No"}/>
      );
    });
  };

  goToNext = () => {
    
    var _data = {};
    var pageData = this.props.navigation.state.params.pageData;
    var docsAndPayment = this.props.navigation.state.params.docsAndPayment;
    var Documents = [];

    const docsAttached = this.props.navigation.state.params.docsAttached;

    _data.CurrencyUsed = "AED";
    _data.MinimumServiceCharge = 105;

    this.props.navigation.state.params.docs.forEach(function(doc) {
      Documents.push({
        Text: doc,
        Name: doc.replace(/ /g, ""),
        FileUploaded: docsAttached.indexOf(doc) >= 0 ? "YES" : "NO"
      });
    });

    docsAndPayment.Documents = Documents;
    pageData.push(docsAndPayment);
    _data.PageData = pageData;

    const docItem = this.props.navigation.state.params.docItem;

    this.props.navigation.navigate("VisaDetails2", {
      docsAndPayment,
      data: _data,
      passportExpiry : this.props.navigation.state.params.passportExpiry,
      docItem,
      visaFlow: this.state.visaFlow
    });
  }

  render() {
  return (
    <>
        <ScrollView>
          <View style={styles.body} >
            <VisaBreadCrump path={this.state.visaFlow} />
            <View style={styles.container1}  >           
              <View style={{paddingHorizontal: calcWidth(3)}} >
                <SRDetailsHdr label="Original Document Required" />  
              </View> 
              <VisaOgDocTxt text={this.props.navigation.state.params.docsAndPayment.OriginalDocumentRequired} />
              {this.renderPageData()}
              <View style={{paddingHorizontal: calcWidth(3)}} >
                <SRDetailsHdr label="Documents Uploaded" />   
              </View> 
              {this.renderDocsData()}
              <ButtonNormal label="Next" onPress={()=>this.goToNext()} />
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
