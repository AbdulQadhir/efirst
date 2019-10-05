import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import {
  Input2,
  ErrorLabel,
  ProfilePhoto,
  ProfileName,
  ButtonSlim,
  ProfileSaveIcon,
  Underline,
  ProfileSectionHdr,
  LabelInput,
} from './uicomponents/components';

import EStyleSheet from 'react-native-extended-stylesheet';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  HeaderBtnMenu,
  HeaderBtnBack,
  HeaderBtnProfile,
} from './uicomponents/components';

import {calcHeight, calcWidth} from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Manage my Profile',
    headerLeft: (
      <View style={{flexDirection: 'row'}}>
        <HeaderBtnMenu onPress={() => alert('')} />
        <HeaderBtnBack onPress={() => navigation.navigate('Dashboard')} />
      </View>
    ),
    headerRight: (
      <HeaderBtnProfile onPress={() => navigation.navigate('Profile')} />
    ),
  });

  state = {
    state: '',
    editProfile: false,
    IsDatePickerVisible: false,
    dob: new Date(),
  };

  setEditProfile = state => {
    this.setState({editProfile: state});
  };

  render() {
    const ShowDateTimePicker = () => this.setState({IsDatePickerVisible: true});
    const HideDateTimePicker = () =>
      this.setState({IsDatePickerVisible: false});
    const HandleDatePicked = date => {
      this.setState({dob: new Date(date).toDateString()});
      HideDateTimePicker();
    };

    const dateFormat = date => {
      return date
        ? new Date(date).getDate() +
            '/' +
            (new Date(date).getMonth() + 1) +
            '/' +
            new Date(date).getFullYear()
        : '';
    };

    return (
      <View style={styles.body}>
        <View>
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always">
            <ProfilePhoto img={require(`../Assets/Profile/profile.jpg`)} />
            {this.state.editProfile && (
              <TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    padding: calcHeight(0.5),
                    textDecorationLine: 'underline',
                    fontSize: RFValue(13),
                    fontFamily: 'Montserrat-Light',
                  }}>
                  Change Photo
                </Text>
              </TouchableOpacity>
            )}
            {!this.state.editProfile ? (
              <ProfileName
                name="Michelle"
                designation="VP Human Resources"
                onEditPress={() => this.setEditProfile(true)}
              />
            ) : (
              <View>
                <ProfileSaveIcon onPress={() => this.setEditProfile(false)} />
                <Input2 placeholder="Name*" />
                <Input2 placeholder="Designation*" />
              </View>
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: calcWidth(3),
              }}>
              <ButtonSlim
                label="Open Services: 24"
                style={{backgroundColor: '#47489f'}}
              />
              <ButtonSlim
                label="Completed Services: 5"
                style={{backgroundColor: '#008837'}}
              />
              <ButtonSlim
                label="Rejected Services: 1"
                style={{backgroundColor: '#ff0000'}}
              />
            </View>
            <Underline />
            <ProfileSectionHdr
              label={'Personal Details'}
              onSavePress={() => alert('Saved')}
            />
            <View style={{paddingHorizontal: calcWidth(2)}}>
              <LabelInput label="Birthday" />
              <Input2
                style={{marginVertical: 0}}
                onTouchStart={ShowDateTimePicker}
                value={dateFormat(this.state.dob)}
              />
              <LabelInput label="Gender" />
              <Input2 style={{marginVertical: 0}} />
            </View>
            <ProfileSectionHdr
              label={'Contact Details'}
              onSavePress={() => alert('Saved')}
            />
            <View style={{paddingHorizontal: calcWidth(2)}}>
              <LabelInput label="Country" />
              <Input2 style={{marginVertical: 0}} />
              <LabelInput label="Website" />
              <Input2 style={{marginVertical: 0}} />
            </View>
            <ProfileSectionHdr
              label={'Company Details'}
              onSavePress={() => alert('Saved')}
            />
            <View style={{paddingHorizontal: calcWidth(2)}}>
              <LabelInput label="Company" />
              <Input2 style={{marginVertical: 0}} />
            </View>
          </ScrollView>
          <DateTimePicker
            isVisible={this.state.IsDatePickerVisible}
            onConfirm={HandleDatePicked}
            onCancel={HideDateTimePicker}
            date={new Date('01/01/1947')}
          />
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  body: {
    flex: 1,
  },
  container: {
    padding: calcWidth(3),

    backgroundColor: '#f8f9fc',
    justifyContent: 'center',
  },
});

export default App;
