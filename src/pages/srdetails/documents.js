import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';

import {SRDocumentItem} from "../uicomponents/components";
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
            <SRDocumentItem onPress={()=>alert("File1")} name="File1" />
            <SRDocumentItem onPress={()=>alert("File2")} name="File2" />
            <SRDocumentItem onPress={()=>alert("File3")} name="File3" />
            <SRDocumentItem onPress={()=>alert("File4")} name="File4" />
          </View>
    </>
  );
}
};

const styles = EStyleSheet.create({
  body : {
    flex: 1,
    padding: calcHeight(1)
  },
});

export default App;
