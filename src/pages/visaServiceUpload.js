import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  BackHandler,
  Text,
} from 'react-native';

import {
  TxtUnderline,
  ButtonLong,
  ButtonPay,
  VisaBorder,
  FileUpload,
} from './uicomponents/_components';
import {
  VisaBreadCrump,
  SRDetailsHdr,
  VisaFlowQst,
  VisaFlowChoice,
  VisaFlowChoiceNote,
} from './uicomponents/components';

import {
  Input,
  TxtSubHead,
  PriceDetailItem,
  TxtTotalAmount,
  ButtonNormal,
  SelectFile,
} from './uicomponents/components';

import {validateFileTypeAndSizeForTranslation} from '../constants';

import EStyleSheet from 'react-native-extended-stylesheet';
import {calcWidth, calcHeight} from '../config';

import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionType: 'Through Courier',
      docsAttached: [],
      docNames: [],
      docsNotRequired: [],
      docItem: [],
      courier_charge: 10,
      notes: '',
      iban: '',
      validationMsg: '',
    };
  }

  componentWillMount = () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  };

  handleBackButtonClick = () => {
    if (Array.isArray(this.state.pageData))
      this.setState(
        {
          pageData: this.state.pageData.pop(),
        },
        () => {
          this.props.navigation.goBack(null);
        },
      );
    else this.props.navigation.goBack(null);
    return true;
  };

  openlaunchCamera = (doc, index) => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
    };
    try {
      ImagePicker.showImagePicker(options, response => {
        if (response.didCancel) {
        } else if (response.error) {
        } else if (response.customButton) {
        } else {
          let source = {uri: response.uri};
          let imgName = response.fileName;
          if (Platform.OS === 'ios') {
            // on iOS, using camera returns undefined fileName. This fixes that issue, so API can work.
            var getFilename = response.uri.split('/');
            imgName = getFilename[getFilename.length - 1];
          }

          var _docs = this.state.docsAttached;
          var _docNames = this.state.docNames;

          const file =
            Platform.OS === 'ios'
              ? {
                  uri: response.uri,
                  type: response.type,
                  name: imgName,
                }
              : {
                  uri: response.uri,
                  type: response.type,
                  name: imgName,
                };

          this.state.docItem.push(file);
          _docs.push(doc);
          if (index < 0) {
            _docNames[doc] = !Array.isArray(_docNames[doc])
              ? []
              : _docNames[doc];
            _docNames[doc].push(response.fileName);
          } else _docNames[doc][index] = response.fileName;
          this.setState({docsAttached: _docs});
          this.setState({docNames: _docNames});

          return;
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  openFile = async (doc, index) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      if (res) {
        const {name, size} = res;
        const valdateRes = validateFileTypeAndSizeForTranslation({
          fileName: name,
          fileSize: size,
        });

        if (valdateRes.validateSize && valdateRes.validateType) {
          const file = {
            uri: res.uri,
            type: res.type,
            name: res.name,
          };

          var _docs = this.state.docsAttached;
          var _docNames = this.state.docNames;
          _docs.push(doc);

          if (index < 0) {
            _docNames[doc] = !Array.isArray(_docNames[doc])
              ? []
              : _docNames[doc];
            _docNames[doc].push(res.name);
          } else _docNames[doc][index] = res.name;

          this.setState({docsAttached: _docs});
          this.setState({docNames: _docNames});

          this.state.docItem.push(file);
        } else {
          showToast('- Invalid file type.\n- File must be smaller than 5 MB');
        }
      }
    } catch (err) {}
  };

  renderDocs = () => {
    var docsNotRequired =
      this.props.navigation.state.params.details.docsNotRequired || null;

    return this.props.navigation.state.params.details.docs.map(doc => {
      var IsRequired =
        docsNotRequired != null
          ? docsNotRequired.indexOf(doc) >= 0
            ? ''
            : '*'
          : '*';
      return (
        <View>
          <TxtSubHead
            title={`${doc} ${IsRequired}`}
            style={{marginBottom: 0}}
          />
          {this.renderDocArr(doc)}
          {this.renderDocNew(doc)}
        </View>
      );
    });
  };

  renderDocNew = doc => {
    return (
      <SelectFile
        subTitle={'Select File'}
        onLeftPress={() => this.openlaunchCamera(doc, -1)}
        onRightPress={() => this.openFile(doc, -1)}
      />
    );
  };

  renderDocArr = doc => {
    const _doc = doc;
    return this.state.docNames[doc] ? (
      this.state.docNames[doc].map((doc, index) => {
        return (
          <SelectFile
            subTitle={doc || 'Select File'}
            onLeftPress={() => this.openlaunchCamera(_doc, index)}
            onRightPress={() => this.openFile(_doc, index)}
          />
        );
      })
    ) : (
      <View />
    );
  };

  goToDetails = () => {
    var docsNotRequired =
      this.props.navigation.state.params.details.docsNotRequired || [];
    var docs = this.props.navigation.state.params.details.docs || [];
    var docsAttached = this.state.docsAttached || [];

    this.setState({validationMsg: ''});

    var validationErr = '';
    docs.forEach(doc => {
      if (docsAttached.indexOf(doc) == -1 && docsNotRequired.indexOf(doc) == -1)
        validationErr = 'Please select all required files';
    });

    if (
      this.props.navigation.state.params.details.ibanRequired &&
      this.state.iban == ''
    )
      validationErr = 'Please fill the IBAN No.';

    if (validationErr) {
      this.setState({validationMsg: validationErr});
      //  return;
    }

    var pageData = this.props.navigation.state.params.pageData;
    var price_details = this.props.navigation.state.params.details.PriceDetails;

    var docsAndPayment = {
      Text: 'Documents and Payment Collection',
      Name:
        'PIFV_New_EntryPermit_FamilyVisa_PartnerOrInvestor_HusbandOrWife_InsideCountry',
      ControlType: 'AdditionalDetails',
      Value: '',
      IsRequired: false,
      IsVisible: true,
    };

    docsAndPayment.IBANNumber = {
      Text: 'IBAN Number',
      Name: 'IBANNumber',
      IsRequired: false,
      value: this.state.iban,
    };

    docsAndPayment.AdditionalNotes = {
      Text: 'Additional Notes',
      Name: 'AdditionalNotes',
      IsRequired: false,
      value: this.state.notes,
    };

    docsAndPayment.OriginalDocumentSubmissionType = {
      Text: 'Original Document Submission Type',
      Name: 'OriginalDocumentSubmissionType',
      IsRequired: true,
      Options: ['Through Courier', 'Direct Submission at Office'],
      Value: this.state.submissionType,
      CourierCharge: 10,
    };

    docsAndPayment.PriceDetils = price_details;
    docsAndPayment.Notes = this.props.navigation.state.params.details.Notes;
    docsAndPayment.OriginalDocumentRequired = this.props.navigation.state.params.details.OriginalDocumentRequired;

    this.props.navigation.navigate('VisaDetails', {
      pageData: pageData,
      docs: this.props.navigation.state.params.details.docs,
      docsAttached: this.state.docsAttached,
      docItem: this.state.docItem,
      docsAndPayment: docsAndPayment,
      passportExpiry: this.props.navigation.state.params.details.PassportExpiry
        ? false
        : true,
    });
  };

  setSubmissionType = type => {
    this.setState({submissionType: type});
  };

  render() {
    return (
      <>
        <ScrollView>
          <View style={styles.body}>
            <VisaBreadCrump path="Flow" />

            <View style={styles.container}>
              <SRDetailsHdr label="Origial Document Submission Type" />

              <VisaFlowChoice
                label={'Through Courier'}
                onPress={() => this.setSubmissionType('Through Courier')}
                isSelected={this.state.submissionType == 'Through Courier'}
              />
              <VisaFlowChoice
                label={'Direct Submission at Office'}
                onPress={() =>
                  this.setSubmissionType('Direct Submission at Office')
                }
                isSelected={
                  this.state.submissionType == 'Direct Submission at Office'
                }
              />

              {this.renderDocs()}

              <Input
                placeholder="IBAN Number"
                value={this.state.iban}
                onTextChange={iban => this.setState({iban})}
              />
              <Input
                placeholder="Additional Notes"
                value={this.state.notes}
                onTextChange={notes => this.setState({notes})}
              />

              <ButtonNormal label="Next" onPress={() => this.goToDetails()} />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    paddingHorizontal: calcWidth(5),
    paddingVertical: calcHeight(2),
    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});

export default App;
