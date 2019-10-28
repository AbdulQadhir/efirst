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
} from './uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';

import {calcHeight, calcWidth} from '../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});
const assetsPath = '../Assets/';
import visa_options from './data';

class App extends React.Component {
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
    };
  }

  componentDidMount = () => {
    const options = this.props.navigation.state.params
      ? this.props.navigation.state.params.options
      : visa_options;
    const pageData = this.props.navigation.state.params
      ? this.props.navigation.state.params.pageData
      : [];
    const lastSelected = this.props.navigation.state.params
      ? this.props.navigation.state.params.lastSelected
      : '';

    this.setState({options: options});
    this.setState({pageData: pageData});

    var visaFlow = pageData.map(obj => obj.Value).join(' > ');
    this.setState({visaFlow: visaFlow});

    this.setState({lastSelected});
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

    if (this.state.options) {
      let obj = pageData.find(o => o.Text === this.state.options.title);
      if (obj) pageData.pop();
    } else pageData.pop();
    var i = 1;
    pageData.push({
      Text: this.state.options.title,
      Name: this.state.options.title.replace(/ /g, '') + i++,
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
        <View style={styles.body}>
          <VisaBreadCrump path={this.state.visaFlow} />
          <View style={{paddingHorizontal: 20}}>
            <SRDetailsHdr label={this.state.lastSelected} />
            <VisaFlowQst label={this.state.options.title} />
            {this.renderList()}
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
    padding: calcHeight(1),
    margin: calcHeight(1),
  },
  visa: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
});

export default App;
