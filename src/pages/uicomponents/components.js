import React from 'react';
import {
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {calcHeight, calcWidth} from '../../config';
const entireScreenWidth = Dimensions.get('window').width;
import LinearGradient from 'react-native-linear-gradient';
import {BASE_URL} from '../../constants';
EStyleSheet.build({
  $rem: entireScreenWidth / 380,
  $inputFontSize: RFPercentage(2),
  $inputTextColor: '#8d847d',
});
const assetsPath = '../../Assets/';
const colorTop = '#a10606';
const colorBottom = '#ff4747';
export const Input = props => {
  return (
    <TextInput style={styles.input} {...props} placeholderTextColor="#8d847d" />
  );
};

export const LabelInput = props => {
  return (
    <Text {...props} style={styles.lblInput}>
      {props.label}
    </Text>
  );
};

export const LabelHeader = props => {
  return (
    <Text {...props} style={styles.lblHeader}>
      {props.label}
    </Text>
  );
};

export const Button = props => {
  return (
    <TouchableOpacity {...props}>
      <LinearGradient
        style={[styles.button, props.extraStyle]}
        colors={[colorTop, colorBottom]}>
        <Text style={styles.txtBtn}>{props.label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const ButtonLabel = props => {
  const {textStyle, wrapperStyle} = props;
  return (
    <TouchableOpacity style={[styles.btnLbl, wrapperStyle]} {...props}>
      <Text style={[styles.txtBtnLbl, textStyle]}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export const ErrorLabel = props => {
  const {textStyle, wrapperStyle} = props;
  return (
    <View style={[styles.errorLbl, , wrapperStyle]} {...props}>
      <Text style={[styles.txtBtnLbl, {color: colorBottom}, textStyle]}>
        {props.label}
      </Text>
    </View>
  );
};

export const ButtonExtLogin = props => {
  const {extLoginUrls, navigation} = props;
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExternalLogin', {
            uri: BASE_URL + extLoginUrls.data[0].Url,
          })
        }
        style={styles.btnExtLeft}
        {...props}>
        <Image
          style={styles.ext_icon}
          source={require('../../Assets/external_login/facebook_icon.png')}
        />
        <Text style={styles.txtBtnExtLeft}>By Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ExternalLogin', {
            uri: BASE_URL + extLoginUrls.data[1].Url,
          })
        }
        style={styles.btnExtRight}
        {...props}>
        <Image
          style={styles.ext_icon}
          source={require('../../Assets/external_login/google_icon.png')}
        />
        <Text style={styles.txtBtnExtRight}>By Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export const DashNotify = props => {
  return (
    <View style={styles.dash_notify}>
      <Image
        style={styles.dash_notify_img}
        source={require(`${assetsPath}Dashboard/bell.png`)}
      />
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <Text style={styles.dash_notify_txt}>
          You have {props.updates} Updates
        </Text>
      </View>
    </View>
  );
};

export const DashCard = props => {
  var img = require(`${assetsPath}Dashboard/card_required.png`);
  switch (props.type) {
    case 1:
      img = require(`${assetsPath}Dashboard/card_required.png`);
      break;
    case 2:
      img = require(`${assetsPath}Dashboard/card_review.png`);
      break;
    case 3:
      img = require(`${assetsPath}Dashboard/card_completed.png`);
      break;
    case 4:
      img = require(`${assetsPath}Dashboard/card_rejected.png`);
      break;
  }

  return (
    <TouchableOpacity
      style={
        props.type == 1
          ? styles.dash_card_outer_required
          : styles.dash_card_outer
      }
      onPress={props.onPress}>
      <View style={styles.dash_card}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.dash_card_img} source={img} />
        </View>
        <View>
          <View
            style={
              props.type == 1
                ? styles.dash_card_Title_required
                : styles.dash_card_Title
            }>
            <Text style={styles.dash_card_txtTitle}>{props.label}</Text>
          </View>
          <Text style={styles.dash_card_txtUpdates}>
            You have {props.updates} Updates
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const SearchBar = props => {
  return (
    <TextInput {...props} style={styles.search_bar} placeholder="Search" />
  );
};

export const NoRequestsLabel = props => {
  return (
    <View style={styles.no_request_lbl}>
      <Text style={styles.no_request_text}>{props.label}</Text>
    </View>
  );
};

export const NoRequestsBody = props => {
  var img = require(`${assetsPath}myrequests/empty1.png`);
  /*   switch(props.type)
    {
        case 1: 
            img = require(`${assetsPath}myrequests/empty1.png`);
            break;
        case 2: 
            img = require(`${assetsPath}myrequests/empty2.png`);
            break;
        case 3: 
            img = require(`${assetsPath}myrequests/empty3.png`);
            break;
    }
*/
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1}}>
      <View style={styles.no_request_inner}>
        <Image style={styles.no_request_img} source={img} />
        <Text style={styles.no_request_body_text}>{props.emptyText}</Text>
      </View>
    </View>
  );
};

export const LoginFooter = props => {
  var img = require(`${assetsPath}logo.png`);
  return (
    <View style={styles.loginfooter}>
      <Image style={styles.loginfooter_img} source={img} />
      <View
        style={{
          backgroundColor: '#e2eae7',
          height: calcHeight(0.6),
          width: calcWidth(31),
          marginTop: calcHeight(-2.5),
        }}></View>
    </View>
  );
};

export const MyRequestItem = props => {
  var status_type = null;
  switch (props.type) {
    case 1:
      status_type = styles.myreqitem_completed;
      break;
    case 2:
      status_type = styles.myreqitem_rejected;
      break;
    default:
      status_type = styles.myreqitem_other;
  }
  return (
    <View style={styles.myreqitem}>
      <View style={{flex: 1}}>
        <Text style={styles.myreqitem_head}>Date</Text>
        <Text style={styles.myreqitem_text}>{props.date}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.myreqitem_head}>Service Request</Text>
        <Text style={styles.myreqitem_text}>{props.service}</Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={[styles.myreqitem_head, {textAlign: 'center'}]}>
          Status
        </Text>
        <Text style={[styles.myreqitem_status, status_type]}>
          {props.status}
        </Text>
      </View>
    </View>
  );
};

export const ServiceHomeItem = props => {
  var img = require(`${assetsPath}Dashboard/card_required.png`);
  return (
    <View style={ styles.servicehome_item}>
      <View >
          <Image style={styles.servicehome_item_img} source={img} />

      </View>
      <View style={styles.servicehome_item_right} >
        <Text style={styles.servicehome_item_title} >{props.title}</Text>
        <Text  style={styles.servicehome_item_text} >{props.desc}</Text>
        <TouchableOpacity  style={styles.servicehome_item_btn} {...props}  >
            <Text style={styles.servicehome_item_btntxt} >Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  servicehome_item : {
    padding: "5 rem",
    borderBottomWidth : 1,
    borderColor: "#999999",
    width: "100%",
    flexDirection : "row",
    paddingHorizontal: "20 rem",
  },
  servicehome_item_right : {
    padding: "5 rem",
    paddingHorizontal: "10 rem",
    flex: 1
  },
  servicehome_item_title:{
    fontSize : "18 rem",
    fontWeight : "bold",
    paddingVertical: "5 rem"
  },
  servicehome_item_btn:{
    backgroundColor: "#47489f",
    padding: "5 rem",
    alignItems: "center",
    borderRadius: "5 rem",
    width: "50%"
  },
  servicehome_item_btntxt:{
    fontSize : "14 rem",
    color:"#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  servicehome_item_text: {
    fontSize : "12 rem",
    color: "#666666",
    paddingVertical: "5 rem",
  },
  servicehome_item_img: {
    width: "33 rem",
    height: "33 rem",
    margin: "8 rem"
  },
  loginfooter: {
    alignItems: 'center',
    height: calcHeight(20),
    backgroundColor: '#FFF',

    justifyContent: 'space-around',
  },
  loginfooter_img: {
    height: calcHeight(14),
    resizeMode: 'contain',
  },
  myreqitem_completed: {
    backgroundColor: '#008837',
    color: '#ffffff',
  },
  myreqitem_rejected: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
  },
  myreqitem_other: {
    backgroundColor: '#f84563',
    color: '#ffffff',
  },
  myreqitem_status: {
    padding: calcHeight(0.5),
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
    borderRadius: calcHeight(0.8),
    overflow: 'hidden',
  },
  myreqitem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#999999',
    padding: calcHeight(0.5),
    paddingBottom: calcHeight(1.9),
    marginTop: calcHeight(2.5),
  },
  myreqitem_text: {
    padding: calcHeight(0.7),
    color: '#4d4d4d',
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
  },
  myreqitem_head: {
    fontFamily: 'Montserrat-Medium',
    padding: calcHeight(1),
    color: '#081344',
    fontSize: RFValue(11),
  },
  no_request_body_text: {
    padding: calcHeight(1),
    color: '#4d4d4d',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
    fontSize: RFValue(12),
  },
  no_request_inner: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  no_request_img: {
    width: calcHeight(30),
    height: calcHeight(25),
    padding: calcHeight(2),
  },
  no_request_lbl: {
    marginTop: calcHeight(2),
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#999999',
  },
  no_request_text: {
    padding: calcHeight(1),
    color: '#081344',
    fontFamily: 'Montserrat-Light',
    fontSize: RFValue(12),
  },
  search_bar: {
    fontSize: RFValue(14),
    borderRadius: calcHeight(4),
    paddingHorizontal: calcWidth(6),
    paddingVertical: calcHeight(2),
    backgroundColor: '#f2f2f2',
    color: '#8d847d',
    marginBottom: calcHeight(1),
    marginTop: calcHeight(2),
    width: calcWidth(79),
    marginLeft: calcWidth(3),
    fontFamily: 'Montserrat-Medium',
  },
  dash_card_Title_required: {
    height: calcHeight(5),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dash_card_Title: {
    height: calcHeight(5),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dash_card_txtUpdates: {
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
    color: '#4d4d4d',
    marginTop: calcHeight(0.2),
  },
  dash_card_txtTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(14),
    color: '#081344',
    //marginTop: calcHeight(0.1),
  },
  dash_card_outer: {
    borderRadius: calcWidth(2),
    backgroundColor: '#fff',
    height: calcHeight(22),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    elevation: 1,
    alignSelf: 'flex-end',
  },
  dash_card: {
    justifyContent: 'center',
    width: calcWidth(41.7),
    //height: calcHeight(22),
    paddingLeft: calcWidth(3),
    paddingRight: calcWidth(1),
    paddingBottom: 15,
    alignSelf: 'flex-end',
  },
  ext_icon: {
    width: calcHeight(3.5),
    height: calcHeight(3.5),
  },
  dash_card_outer_required: {
    borderRadius: '5 rem',
    backgroundColor: '#fff',
    height: calcHeight(28),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    elevation: 1,
  },
  dash_card_img: {
    width: calcHeight(11),
    height: calcHeight(11),
    padding: calcWidth(1),
  },
  dash_notify: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderRadius: calcHeight(2),
    justifyContent: 'center',
    padding: calcHeight(0.5),
    borderColor: '#081344',
  },
  dash_notify_img: {
    width: calcHeight(5),
    height: calcHeight(5),
    padding: calcHeight(1),
  },
  dash_notify_txt: {
    fontSize: '$inputFontSize',
    color: '#4d4d4d',
    fontFamily: 'Montserrat-Medium',
    //fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#081344',
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    color: '$inputTextColor',
    margin: 5,
    fontFamily: 'Montserrat-Light',
  },
  lblInput: {
    fontSize: '$inputFontSize',
    color: '#081344',
    fontFamily: 'Montserrat-Light',
    margin: calcWidth(1),
  },
  lblHeader: {
    fontSize: RFValue(25),
    color: '#58546b',
    marginVertical: calcHeight(1.2),
    marginHorizontal: calcWidth(0.8),
    //fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
  },
  txtBtn: {
    fontSize: '$inputFontSize',
    color: '#FFF',

    fontFamily: 'Montserrat-SemiBold',
  },
  button: {
    width: calcWidth(65),
    padding: calcHeight(2),
    //backgroundColor: '#f90a08',
    borderRadius: calcHeight(2),
    alignItems: 'center',
    alignSelf: 'center',
    margin: calcWidth(4),
  },
  txtBtnLbl: {
    fontSize: '$inputFontSize',
    color: '#8d847d',
    fontFamily: 'Montserrat-Light',
  },
  btnLbl: {
    padding: calcHeight(1),
    alignItems: 'center',
    alignSelf: 'center',
    margin: calcHeight(1),
  },

  errorLbl: {
    //paddingTop: calcHeight(0.2),
    paddingLeft: calcWidth(1),
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: calcHeight(0.2),
  },
  btnExtLeft: {
    padding: calcHeight(1.3),
    borderWidth: 1,
    borderTopLeftRadius: calcHeight(2),
    borderBottomLeftRadius: calcHeight(2),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: '#081344',
    flexDirection: 'row',
  },
  btnExtRight: {
    padding: calcHeight(1.3),
    borderWidth: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: calcHeight(2),
    borderBottomRightRadius: calcHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    borderColor: '#f90a08',
    flexDirection: 'row',
  },
  txtBtnExtLeft: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#081344',
    fontSize: '$inputFontSize',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: calcWidth(1),
  },
  txtBtnExtRight: {
    alignItems: 'center',
    alignSelf: 'center',
    color: '#f90a08',
    fontSize: '$inputFontSize',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: calcWidth(1),
  },
});
