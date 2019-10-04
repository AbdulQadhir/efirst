import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {calcHeight, calcWidth} from '../../config';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {connect} from 'react-redux';
class AlertView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.setState({visible: true});
    !this.props.Timeout && setTimeout(this.hideview, 5000);
  }
  // componentDidUpdate(prevProps) {
  //   if (
  //     this.props.applicationState.error ||
  //     this.props.applicationState.success
  //   ) {
  //     this.setState({visible: true}, () => this.props.resetApplicationState());
  //   }
  // }
  hideview = () => {
    this.setState({visible: false});
    const {clearAlert} = this.props;
    clearAlert && clearAlert();
  };

  render() {
    const {type, message} = this.props;
    const backgroundColor = type === 'success' ? '#007f00' : '#e22d39';
    const text =
      type === 'success'
        ? message
          ? message
          : 'Succesfully updated !'
        : message
        ? message
        : 'Oops! Something went wrong!';
    return (
      <View>
        {this.state.visible && (
          <View style={[styles.bottomView, {backgroundColor}]}>
            <Text style={styles.textStyle}>{text}.</Text>
          </View>
        )}
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  resetApplicationState: () => dispatch({type: 'APPLICATION_STATE_RESET'}),
});
const mapStateToProps = ({applicationState}) => ({
  applicationState,
  //
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertView);
const styles = StyleSheet.create({
  bottomView: {
    width: '100%',
    padding: calcHeight(1),
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    fontSize: RFPercentage(2),
    color: 'white',
    fontFamily: 'Montserrat-Light',
  },
});
