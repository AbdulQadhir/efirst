import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  Image,
  BackHandler,
} from 'react-native';

import {
  VisaBreadCrump,
  SRDetailsHdr,
  VisaFlowQst,
  VisaFlowChoice,
  VisaFlowChoiceNote,
} from '../../../pages/uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Loader from '../../../styled/loader';

import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from '../../../pages/uicomponents/components';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = '../../../Assets/';
import visa_options from './data';

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
      showPopUp: false,
      options: {
        title: '',
        options: [],
      },
      selectedOption: '',
      pageData: [],
      _prev_options: {
        title: '',
        options: [],
      },
      _prev_pageData: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const lastSelected = this.props.navigation.state.params.lastSelected
      ? this.props.navigation.state.params.lastSelected
      : '';

    const select_service = this.props.navigation.state.params.select_service
      ? this.props.navigation.state.params.select_service
      : '';

    var pageData = this.props.navigation.state.params.pageData
      ? this.props.navigation.state.params.pageData
      : [];

    this.setState({pageData: pageData});

    var options = null;
    if (this.props.navigation.state.params.url) {
      this.setState({loading: true});
      pageData.push({
        Text: 'Select Service',
        Name: 'Select Service'.replace(/ /g, '') + '0',
        Value: select_service,
        ControlType: 'Radio',
      });
      pageData.push({
        Text: 'Visa Type',
        Name: 'Visa Type'.replace(/ /g, '') + '0',
        Value: lastSelected,
        ControlType: 'Radio',
      });
      try {
        var myHeaders = new Headers();
        myHeaders.set('Accept', 'application/json');
        myHeaders.set('Content-Type', 'application/json');
        myHeaders.set('Cache-Control', 'no-cache');
        myHeaders.set('Pragma', 'no-cache');
        myHeaders.set('Expires', '0');

        let response = await fetch(this.props.navigation.state.params.url, {
          method: 'GET',
          headers: myHeaders,
        });

        options = visa_options; //await response.json();

        this.setState({pageData, loading: false});
      } catch (error) {
        this.setState({
          options: {
            title: '',
            options: [],
            loading: false,
          },
        });
      }
    }
    this.setState({options: options});

    var visaFlow = pageData.map(obj => obj.Value).join(' > ');
    this.setState({visaFlow: visaFlow});

    this.setState({lastSelected});
  }

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

  NextOption = option => {
    this.setState({selectedOption: option});
    var pageData = this.state.pageData;

    if (this.state.options && this.state.options.title) {
      let obj = pageData.find(o => o.Text === this.state.options.title);
      if (obj) pageData.pop();
    } else pageData.pop();
    var i = 1;
    pageData.push({
      Text: this.state.options.title ? this.state.options.title : '',
      Name:
        (this.state.options.title ? this.state.options.title : '').replace(
          / /g,
          '',
        ) + i++,
      Value: option,
      ControlType: 'Radio',
    });
    this.setState({pageData: pageData}, () => {
      if (this.state.options[option]['title'])
        this.props.navigation.push('VisaFlow', {
          options: this.state.options[option],
          lastSelected: option,
          pageData: pageData,
        });
      else {
        this.props.navigation.navigate('VisaDocs', {
          details: this.state.options[option],
          pageData: pageData,
        });
      }
    });
  };

  renderList = () => {
    return this.state.options.options.map(option => {
      return (
        <VisaFlowChoice
          label={option}
          onPress={() => this.NextOption(option)}
        />
      );
    });
  };

  render() {
    return (
      <>
        <Loader loading={this.state.loading} />
        <View style={styles.body}>
          <VisaBreadCrump path={this.state.visaFlow} />
          <View style={{paddingHorizontal: calcHeight(2.5)}}>
            <SRDetailsHdr label={this.state.lastSelected} />
            <VisaFlowQst
              label={this.state.options.title ? this.state.options.title : ''}
            />
            {this.renderList()}
            <VisaFlowChoiceNote
              text={
                this.state.options.message ? this.state.options.message : ''
              }
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    borderRadius: calcHeight(2),
    padding: calcHeight(1.5),
    margin: calcHeight(1),
  },
  visa: {
    flex: 1,
    flexDirection: 'column',
    padding: calcHeight(1),
  },
});

export default App;
