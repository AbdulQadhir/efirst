import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {BoxHeading, VSText ,ButtonPay,VisaBorder,TextTwo} from "./uicomponents/_components";
import { VisaBreadCrump, SRDetailsHdr, VisaOgDocTxt, VisaDtItem, ButtonNormal } from "./uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
import { calcWidth, calcHeight } from '../config';

class App extends React.Component {
  
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
        <VisaDtItem txt1={datum} txt2={docs.indexOf(datum) >= 0 ? "Yes" : "No"}/>
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
      docItem
    });
  }

  render() {
  return (
    <>
        <ScrollView>
          <View style={styles.body} >
            <VisaBreadCrump path="Flow" />
            <View style={styles.container1}  >           
              <View style={{paddingHorizontal: calcWidth(3)}} >
                <SRDetailsHdr label="Original Document Required" />  
              </View> 
              <VisaOgDocTxt text="Emirates ID" />
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
