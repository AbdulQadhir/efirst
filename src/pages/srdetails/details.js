import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import {SRDetailsHdr, ButtonSlim, SRDtDate, SRTimeline} from "../uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';
import Ionicons from 'react-native-vector-icons/AntDesign';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

import {calcHeight, calcWidth} from '../../config';

class App extends React.Component {
  render() {
  return (
    <>
          <View style={styles.body} >
                <View style={{flexDirection:'column',padding:calcWidth(3)}}>
                    <SRTimeline title={"Service Request Created"} date={"Sep 18, 2019, 9.43 am"}/>
                    <SRTimeline title={"Service Request Created"} date={"Sep 18, 2019, 9.43 am"}/>
                    <SRTimeline title={"Service Request Created"} date={"Sep 18, 2019, 9.43 am"}/>
                    <SRTimeline title={"Service Request Created"} date={"Sep 18, 2019, 9.43 am"}/>
                    <SRTimeline title={"Service Request Created"} date={"Sep 18, 2019, 9.43 am"}/>

                </View>  
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    flex: 1,
    
  },
});

export default App;
