import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';

import {Input2} from '../uicomponents/components';
import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/AntDesign';

import {calcHeight, calcWidth} from '../../config';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

class App extends React.Component {
  render() {
    return (
      <>
        <View style={styles.body}>
          <View style={{flexDirection: 'column', padding: calcWidth(3)}}>
            <Input2 editable={false} value={'Name: Abdul Qadhir'} />
            <Input2
              editable={false}
              value={'Email: '}
              style={{borderColor: '#8d847d'}}
            />
            <Input2
              editable={false}
              value={'Mobile: '}
              style={{borderColor: '#8d847d'}}
            />
            <Input2
              editable={false}
              value={'Address: '}
              style={{borderColor: '#8d847d'}}
            />
            <Input2
              editable={false}
              value={'Country: '}
              style={{borderColor: '#8d847d'}}
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
});

export default App;
