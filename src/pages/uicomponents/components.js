import React from 'react';
import {
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  Picker,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {calcHeight, calcWidth} from '../../config';
const entireScreenWidth = Dimensions.get('window').width;
import LinearGradient from 'react-native-linear-gradient';
import {BASE_URL} from '../../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconsAws from 'react-native-vector-icons/FontAwesome';
import IconsAws5 from 'react-native-vector-icons/FontAwesome5';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import Radio from './radio';
import CheckBox from 'react-native-check-box';
import CheckBoxItem from '../../styled/checkbox';
import {PROFILE_BASE_URL} from '../../constants';
import {connect} from 'react-redux';
// import PickerModal from 'react-native-picker-modal-view';

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
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor="#8d847d"
    />
  );
};

export const Input2 = props => {
  const {style, noBorder} = props;

  const borderBottomWidth = noBorder ? 0 : 1;

  return (
    <TextInput
      placeholderTextColor="#081344"
      {...props}
      style={[
        styles.input2,
        {borderColor: '#999999', borderBottomWidth},
        props.style,
      ]}
    />
  );
};
export const InputNoBorder = props => {
  return (
    <TextInput
      {...props}
      placeholder={props.placeholder}
      style={[
        styles.input2,
        {
          borderBottomWidth: 0,
          flex: 1,
          paddingVertical: calcHeight(0.3),
          paddingHorizontal: calcWidth(0),
        },
      ]}
      placeholderTextColor="#081344"
    />
  );
};
export const LabelInput = props => {
  return (
    <Text {...props} style={[styles.lblInput, props.style]}>
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
    <View style={[styles.errorLbl, wrapperStyle]} {...props}>
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
            headerTitle: 'www.facebook.com',
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
            headerTitle: 'www.google.com',
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
  switch (props.img) {
    case 3:
      img = require(`${assetsPath}myrequests/empty2.png`);
      break;
    case 4:
      img = require(`${assetsPath}myrequests/empty3.png`);
      break;
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
      }}>
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

export const MyRequestItem = ({
  service,
  color,
  backgroundColor,
  statusLabel,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.myreqitem}>
      <View style={{flex: 1}}>
        <Text style={styles.myreqitem_head}>Date</Text>
        <Text style={styles.myreqitem_text}>{service.CreatedDate}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.myreqitem_head}>Service Request</Text>
        <Text style={styles.myreqitem_text}>
          {service.SRTitle} - SR{service.SRID}
        </Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={[styles.myreqitem_head, {textAlign: 'center'}]}>
          Status
        </Text>
        <Text style={[styles.myreqitem_status, {backgroundColor, color}]}>
          {statusLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const ServiceHomeItem = props => {
  var img = require(`${assetsPath}service/attestation-icon.png`);
  switch (props.type) {
    case 1:
      img = require(`${assetsPath}service/attestation-icon.png`);
      break;
    case 2:
      img = require(`${assetsPath}service/translation-icon.png`);
      break;
    case 3:
      img = require(`${assetsPath}service/visa-icon.png`);
      break;
  }
  return (
    <View style={styles.servicehome_item}>
      <View>
        <Image style={styles.servicehome_item_img} source={img} />
      </View>
      <View style={styles.servicehome_item_right}>
        <Text style={styles.servicehome_item_title}>{props.title}</Text>
        <Text style={styles.servicehome_item_text}>{props.desc}</Text>
        <TouchableOpacity style={styles.servicehome_item_btn} {...props}>
          <Text style={styles.servicehome_item_btntxt}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const HeaderTitle = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={styles.header_title}>{props.title}</Text>
    </View>
  );
};

export const ServiceHomeText = props => {
  return <Text style={styles.servicehome_text}>{props.text}</Text>;
};

export const Pick = props => {
  return (
    <Picker
      mode="dropdown"
      {...props}
      style={styles.picker}
      activeItemTextStyle={{fontSize: 18, fontWeight: '300'}}
      itemStyle={styles.pickeritem}></Picker>
  );
};

// export const RNPicker = props => {
//   return <PickerModal {...props} />;
// };

export const HeaderBtnMenu = props => {
  return (
    <TouchableOpacity
      style={{
        padding: calcHeight(1),

        paddingLeft: calcWidth(5),
      }}
      onPress={props.onPress}>
      <Ionicons
        name="ios-menu"
        style={{
          color: '#081344',
          fontSize: RFValue(25),
        }}
      />
    </TouchableOpacity>
  );
};

export const HeaderBtnBack = props => {
  return (
    <TouchableOpacity
      style={{
        padding: calcHeight(1),
        marginTop: calcHeight(0.2),
        paddingLeft: calcWidth(5),
      }}
      onPress={props.onPress}>
      <Ionicons
        name="ios-arrow-back"
        style={{
          color: '#081344',
          fontSize: RFValue(22),
        }}
      />
    </TouchableOpacity>
  );
};

export const RadioButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {flexDirection: 'row', padding: 5, alignItems: 'center', flex: 1},
        props.style,
      ]}>
      <Radio {...props} />
      <Text style={styles.radiotxt}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export const CheckBoxCustom = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
      }}>
      <CheckBoxItem {...props} />
      {props.text && <Text style={styles.radiotxt}>{props.text}</Text>}
    </TouchableOpacity>
  );
};

export const TxtSubHead = props => {
  return (
    <View
      style={[
        {
          borderBottomWidth: 1,
          borderColor: '#999999',
          marginTop: calcHeight(2),
          marginBottom: calcHeight(4),
        },
        props.style,
      ]}>
      <Text style={[styles.txtSubHead, {color: '#081344'}]}>{props.title}</Text>
    </View>
  );
};

export const PriceDetailItem = props => {
  return (
    <View style={styles.pricedt_item}>
      <View>
        <Text style={styles.pricedt_item_txt}>{props.label}</Text>
      </View>
      <View>
        <Text style={styles.pricedt_item_amt}>AED {props.amount}</Text>
      </View>
    </View>
  );
};

export const TxtTotalAmount = props => {
  return (
    <View>
      <Text style={styles.txt_total_amt}>
        Your Total Bill Amount : {props.amount}
      </Text>
    </View>
  );
};

export const TxtAgreement = props => {
  return (
    <View style={styles.agreement}>
      <CheckBox {...props} checkBoxColor={'#f84563'} />
      <Text style={styles.txt_agreement}>
        I have read & agree to the{' '}
        <Text style={styles.agreement_lnk} onPress={props.onTermsClick}>
          Terms and Conditions
        </Text>{' '}
        of Service
      </Text>
    </View>
  );
};

export const ButtonNormal = props => {
  return (
    <TouchableOpacity
      style={[styles.button_normal, props.extraStyle]}
      {...props}>
      <Text style={styles.txtBtn}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export const UploadTitle = props => (
  <Text style={[styles.txtSubHead, {fontWeight: '300', color: '#081344'}]}>
    {props.title}
  </Text>
);

export const ReplyButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.reply_button, props.style]}>
      <Text style={styles.reply_text}>{props.label}</Text>
    </TouchableOpacity>
  );
};
export const SelectFile = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: calcHeight(1.5),
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={styles.selectfiletxt}>{props.subTitle}</Text>
        {props.onDelPress && (
          <TouchableOpacity onPress={props.onDelPress}>
            <Image
              style={styles.del_icon_img}
              source={require(`${assetsPath}service/delete.png`)}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={props.onLeftPress}
          style={[
            styles.btnFile,
            {
              borderWidth: 1,
              borderRightWidth: 1,
              paddingVertical: calcHeight(1.2),
              paddingHorizontal: calcWidth(5.2),
              borderRadius: 5,
              borderColor: '#081344',
            },
          ]}>
          <Image
            style={styles.file_img}
            source={require(`${assetsPath}File/file1.png`)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onRightPress}
          style={[
            styles.btnFile,
            {
              borderWidth: 1,
              borderLefttWidth: 1,
              paddingVertical: calcHeight(1.2),
              paddingHorizontal: calcWidth(5.2),
              borderRadius: 5,
              borderColor: '#081344',
            },
          ]}
          {...props}>
          <Image
            style={styles.file_img}
            source={require(`${assetsPath}File/file2.png`)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const UploadValdation = props => (
  <View>
    <Text style={styles.selectfilefooter}>File Format : jpeg | png | jpg</Text>
    <Text style={styles.selectfilefooter}>{'File Size < 5 MB'}</Text>
  </View>
);

export const ModalPickerItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={[styles.input, {borderColor: '#999999', color: '#081344'}]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export const ProfilePhoto = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
      }}>
      <View style={styles.profileBorder}>
        <Image style={styles.profile} source={props.img} />
      </View>
    </View>
  );
};

export const ProfileName = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.profilename_txt}>{props.name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.profilename_desig}>{props.designation}</Text>
        <TouchableOpacity onPress={props.onEditPress}>
          <Image
            style={styles.editIcon}
            source={require(`${assetsPath}Profile/edit.png`)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ButtonSlim = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={[styles.btnslimtxt, props.style]}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export const ProfileSaveIcon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          alignSelf: 'flex-end',
          padding: calcWidth(1),
          paddingHorizontal: calcWidth(2),
        },
        props.style,
      ]}>
      <Ionicons
        name="md-checkmark-circle-outline"
        style={styles.profilesave_icon}
      />
    </TouchableOpacity>
  );
};

export const ProfileEditIcon = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          alignSelf: 'flex-end',
          padding: calcWidth(1),
          paddingHorizontal: calcWidth(2),
        },
        props.style,
      ]}>
      <Image
        style={styles.editIcon}
        source={require(`${assetsPath}Profile/edit.png`)}
      />
    </TouchableOpacity>
  );
};

export const Underline = props => {
  return <View style={styles.underline}></View>;
};

export const ProfileSectionHdr = props => {
  const {value, handleSubmit} = props;
  const onPress = value => {
    props.onPress(value);
  };
  return (
    <View style={styles.profile_section_hdr}>
      <Text style={styles.profile_section_hdr_txt}>
        <IconsAws5 style={{fontSize: RFValue(12)}} name="ellipsis-v" />
        {'  '}
        {props.label}
      </Text>
      {value ? (
        <ProfileSaveIcon
          style={{alignSelf: 'center'}}
          onPress={() => {
            handleSubmit();
            // onPress(false);
          }}
        />
      ) : (
        <ProfileEditIcon
          style={{alignSelf: 'center'}}
          onPress={() => {
            onPress(true);
          }}
        />
      )}
    </View>
  );
};

export const SRDetailsHdr = props => {
  return (
    <View style={styles.srdt_hdr} {...props}>
      <IconsAws5
        name="ellipsis-v"
        style={[styles.srdt_hdr_txt, {fontSize: RFValue(12)}]}
      />
      <Text style={[styles.srdt_hdr_txt, props.textStyle]}> {props.label}</Text>
    </View>
  );
};

export const SRDtDate = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: calcHeight(1),
        marginHorizontal: calcWidth(2),
        paddingVertical: calcHeight(1.5),
      }}>
      <Text
        style={{
          fontSize: RFValue(16),
          fontFamily: 'Montserrat-Light',
          color: '#8d847d',
        }}>
        {props.label}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={props.onRefresh}
          style={{paddingHorizontal: calcWidth(1)}}>
          <Ionicons
            name="ios-refresh"
            style={{fontSize: RFValue(17), color: '#8d847d'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.onChatPress}
          style={{paddingHorizontal: calcWidth(2)}}>
          <IconsAnt
            name="message1"
            style={{fontSize: RFValue(17), color: '#8d847d'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const SRMessage = ({name, date, message, replyEvent}) => {
  return (
    <View style={styles.srmessagearea}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.srmessage_title}>{name}</Text>
        <Text style={styles.srmessage_date}>{date} </Text>
        <Text style={styles.srmessage_date}>{message} </Text>
      </View>
    </View>
  );
};

export const SRMessageArea = props => {
  return (
    <View style={styles.srtimeline}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.srtimeline_title}>{props.title}</Text>
        <View
          style={{
            borderBottomWidth: 1,
            padding: 3,
            borderColor: '#081344',
            width: '75%',
          }}></View>
        {props.children}
        <ReplyButton label="Reply" onPress={props.onPress} />
      </View>
    </View>
  );
};

export const SRTimeline = props => {
  const {color} = props;
  return (
    <View style={styles.srtimeline}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={[styles.srtimeline_title, {color}]}>{props.title}</Text>
        <View
          style={{
            borderBottomWidth: 1,
            padding: 3,
            borderColor: color,
            width: '75%',
          }}></View>
        <Text style={[styles.srtimeline_date, {color}]}>{props.date} </Text>
      </View>
    </View>
  );
};

export const SideMenuItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: calcHeight(2),
        paddingHorizontal: calcWidth(7),
      }}>
      <Image source={props.img} style={styles.sidemenuitem_img} />
      <Text style={styles.sidemenuitem_txt}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export const SideMenuDivider = () => {
  return (
    <View
      style={{
        borderColor: '#999999',
        borderTopWidth: 1,
        width: '80%',
        marginVertical: calcHeight(1),
        alignSelf: 'center',
      }}></View>
  );
};

export const SideMenuHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: calcHeight(1.5),
        // marginVertical: calcHeight(1),
      }}>
      <View style={styles.sidemenuhdr_img_border}>
        {props.profilePic ? (
          <Image
            style={styles.sidemenuhdr_img}
            source={{
              uri: `${PROFILE_BASE_URL}${props.profilePic}`,
            }}
          />
        ) : (
          <Image
            style={styles.sidemenuhdr_img}
            source={require(`${assetsPath}/userProfile.png`)}
          />
        )}
      </View>
      <View style={{flexDirection: 'column', padding: calcHeight(1)}}>
        <Text style={[styles.profilename_txt, {width: calcWidth(50)}]}>
          {props.name}
        </Text>
        <Text style={[styles.profilename_desig, {width: calcWidth(50)}]}>
          {props.desig}
        </Text>
      </View>
    </View>
  );
};

export const FAQLogoUnderline = props => {
  return (
    <View
      style={{
        backgroundColor: '#e2eae7',
        height: calcHeight(0.6),
        width: calcWidth(31),
        marginTop: calcHeight(1),
      }}></View>
  );
};

export class FAQMenuItem extends React.Component {
  state = {
    isPressed: false,
  };
  render() {
    const props = this.props;

    return (
      <TouchableHighlight
        underlayColor="#ffffff00"
        onHideUnderlay={() => {
          this.setState({isPressed: false});
        }}
        onShowUnderlay={() => {
          this.setState({isPressed: true});
        }}
        onPress={props.onPress}>
        <View style={styles.faqView}>
          <View
            style={[
              styles.menu,
              this.state.isPressed
                ? props.img2 && {
                    backgroundColor: '#183761',
                    borderColor: '#183761',
                  }
                : {
                    borderColor: '#183761',
                  },
            ]}
            {...props}>
            <Image
              style={styles.file_img}
              source={
                this.state.isPressed ? props.img2 && props.img2 : props.img
              }
            />
          </View>
          <Text style={styles.faqTxt}>{props.btnName}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export const FAQCategoryHdr = props => {
  return (
    <View style={styles.faqcat_hdr} {...props}>
      <Text style={styles.faqcat_hdrtxt}>{props.label}</Text>
    </View>
  );
};

export const FAQuestion = props => {
  return (
    <View style={{marginTop: calcHeight(1)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          borderColor: '#999999',
          // width: calcWidth(80),
          color: '#8d847d',
        }}>
        <Text style={styles.faq_qst}>{props.question}</Text>
        <Image
          style={styles.faq_qst_img}
          source={require(`${assetsPath}FAQMenu/question.png`)}
        />
      </View>
      <View style={{paddingVertical: calcHeight(1)}}>
        <Text style={[styles.faq_ans]}>{props.answer}</Text>
      </View>
    </View>
  );
};

export const AnnouncementDetails = ({message}) => (
  <View style={{marginTop: calcHeight(1)}}>
    <Text style={styles.not_body}>{message}</Text>
  </View>
);
export const AnnouncementTitle = ({title}) => (
  <View style={{marginTop: calcHeight(3)}}>
    <Text style={styles.not_title}>{title}</Text>
  </View>
);
export const AnnouncementImage = ({image}) => (
  <View style={{alignContent: 'center', marginTop: calcHeight(1)}}>
    <Image
      source={{uri: image}}
      style={{
        // flexGrow: 1,
        width: calcWidth(90),
        height: calcHeight(40),
      }}
      resizeMode="contain"
    />
  </View>
);
export const InputSupport = props => {
  return (
    <TextInput
      {...props}
      style={[
        styles.input,
        {
          fontFamily: 'Montserrat-Light',
          color: '#081344',
          textAlignVertical: 'top',
          borderColor: '#999999',
        },
        props.style,
      ]}
      placeholderTextColor="#081344"
    />
  );
};

export const TxtInputMessage = props => {
  return (
    <TextInput
      style={[
        styles.input,
        {fontWeight: 'bold', textAlignVertical: 'top', fontSize: 18},
      ]}
      {...props}
      placeholder={props.name}
      multiline={true}
      numberOfLines={8}
      placeholderTextColor="#081344"
    />
  );
};

export const SupportDetail = props => {
  return (
    <View style={{marginTop: calcHeight(2), marginHorizontal: calcWidth(2)}}>
      <Text style={styles.supportdt_title}>{props.title}</Text>
      <Text style={styles.supportdt_data}>{props.data} </Text>
    </View>
  );
};

export const SRDocumentItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.doc_main}>
        <Image
          style={styles.image}
          source={require('../../Assets/service/document.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            padding: 5,
            marginTop: 5,
            color: '#515A5A',
            fontSize: RFValue(13),
          }}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const VisaFlowQst = props => {
  const label = props.label ? `${props.label}*` : '';
  return <Text style={styles.visaflow_qst_txt}>{label}</Text>;
};

export const VisaBreadCrump = props => {
  return (
    <View style={{backgroundColor: '#081344'}}>
      <Text style={styles.visaBorder}>{props.path}</Text>
    </View>
  );
};

export const VisaFlowChoice = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        borderColor: '#999999',
        borderBottomWidth: calcHeight(0.103),
        marginVertical: calcHeight(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text style={styles.visaflow_choice_txt}>{props.label}</Text>
      <RadioButton
        style={{flex: 0}}
        text=""
        isSelected={props.isSelected}
        onPress={props.onPress}
      />
    </TouchableOpacity>
  );
};

export const VisaFlowChoiceNote = props => {
  return <Text style={styles.visaflowchoice_note}>{props.text}</Text>;
};

export const VisaOgDocTxt = props => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: calcHeight(1),
        paddingHorizontal: calcWidth(1.5),
      }}>
      <Text style={styles.visaogdoc_txt}>{props.text}</Text>
    </View>
  );
};

export const VisaDtItem = props => {
  return (
    <View style={{padding: calcHeight(1.5)}}>
      <View style={styles.txtBorder}>
        <Text
          style={[
            styles.visadtitem_txt,
            {color: '#081344'},
            props.isDoc ? {flex: 0.8} : {},
          ]}>
          {props.txt1}
        </Text>
        <Text
          style={[
            styles.visadtitem_txt,
            {
              textAlign: 'right',
              alignSelf: 'flex-end',
              fontFamily: 'Montserrat-Light',
            },
            props.isDoc ? {flex: 0.2} : {},
          ]}>
          {props.txt2}{' '}
        </Text>
      </View>
    </View>
  );
};

export const VisaFileFormat = props => (
  <View
    style={{
      backgroundColor: '#f2f2f2',
      borderRadius: calcHeight(1),
      justifyContent: 'center',
      alignItems: 'center',
      padding: calcHeight(1.5),
      margin: calcHeight(0.5),
    }}>
    <View
      style={{borderBottomWidth: calcHeight(0.102), borderColor: '#081344'}}>
      <Text style={styles.visafileformat_title}>{props.title}</Text>
    </View>
    <Text style={styles.visafileformat_footer}>{props.footer}</Text>
  </View>
);

class HeaderBtnProfileScreen extends React.Component {
  render() {
    const {onPress, userdetail} = this.props;
    return (
      <TouchableOpacity
        style={{
          padding: calcHeight(1),
          paddingRight: calcWidth(4.5),
          // height: calcHeight(5.5),
        }}
        onPress={onPress}>
        {userdetail.ProfilePic ? (
          <View style={[styles.profileHeaderBorder]}>
            <Image
              style={[
                styles.profile,
                {
                  width: calcHeight(3),
                  height: calcHeight(3),
                },
              ]}
              source={{
                uri: `${PROFILE_BASE_URL}${userdetail.ProfilePic}`,
              }}
            />
          </View>
        ) : (
          <IconsAws
            name="user-circle-o"
            style={{
              color: '#081344',
              fontSize: RFValue(20),
            }}
          />
        )}
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = ({
  profile: {
    data: {userdetail},
  },
}) => ({
  userdetail,
});
export const HeaderBtnProfile = connect(
  mapStateToProps,
  null,
)(HeaderBtnProfileScreen);

export const styles = EStyleSheet.create({
  visafileformat_title: {
    fontSize: RFValue(15),
    fontFamily: 'Montserrat-Light',
    color: '#081344',
    padding: calcHeight(0.5),
    textAlign: 'center',
  },
  visafileformat_footer: {
    fontSize: RFValue(12),
    fontFamily: 'Montserrat-Light',
    color: '#081344',
    padding: calcHeight(0.5),
    textAlign: 'center',
  },
  txtBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: calcHeight(0.11),
    paddingVertical: calcHeight(1),
    borderColor: '#99999999',
  },
  visadtitem_txt: {
    fontSize: RFValue(14),
    width: calcWidth(40),
    fontFamily: 'Montserrat-Medium',
    color: '#081344',
  },
  visaogdoc_txt: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Light',
    color: '#081344',
  },
  visaflowchoice_note: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Light',
    color: '#081344',
    padding: calcHeight(1),
    textAlign: 'center',
  },
  visaflow_choice_txt: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Light',
    color: '#081344',
    padding: calcHeight(1),
    flex: 1,
  },
  visaflow_qst_txt: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-LightItalic',
    color: '#081344',
    padding: calcHeight(1),
    marginVertical: calcHeight(1),
  },
  visaBorder: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-LightItalic',
    color: '#FFF',
    textAlign: 'center',
    padding: calcHeight(1),
  },
  doc_main: {
    backgroundColor: '#E5E8E8',
    borderRadius: calcHeight(1),
    padding: calcHeight(1),
    margin: calcHeight(0.5),
    alignItems: 'center',
    width: calcWidth(40),
  },
  image: {
    width: calcHeight(7),
    height: calcHeight(7),
  },
  supportdt_title: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-MediumItalic',
    color: '#081344',
  },
  supportdt_data: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Light',
    padding: calcHeight(1),
    color: '#081344',
  },
  faq_ans: {
    color: '#081344',
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Light',
    textAlign: 'justify',
    //marginHorizontal: calcWidth(3),
  },
  not_body: {
    color: '#081344',
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Light',
    textAlign: 'justify',
    lineHeight: calcHeight(3.1),
  },
  not_title: {
    color: '#081344',
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Medium',
    textAlign: 'justify',
  },
  faq_qst: {
    color: '#081344',
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Medium',
    textAlign: 'justify',
    width: calcWidth(73),
  },
  faq_qst_img: {
    height: calcHeight(3),
    width: calcHeight(3),
  },
  faqcat_hdrtxt: {
    color: '#FFF',
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Medium',
  },
  faqcat_hdr: {
    width: calcWidth(50),
    padding: calcHeight(1),
    backgroundColor: '#081344',
    borderRadius: calcWidth(1),
    alignItems: 'center',
    alignSelf: 'center',
    margin: calcHeight(1),
  },
  menu: {
    width: calcHeight(8),
    height: calcHeight(8),
    borderWidth: 1,
    borderRadius: calcHeight(2),
    borderColor: '#8d847d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faqView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: calcHeight(1),
    alignSelf: 'center',
    width: calcWidth(30),
  },
  faqTxt: {
    fontSize: RFValue(11),
    color: '#081344',
    padding: calcHeight(1),
    height: calcHeight(6),
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  sidemenuhdr_img_border: {
    width: calcHeight(8.3),
    height: calcHeight(8.3),
    borderRadius: calcHeight(9),
    borderWidth: calcHeight(0.33),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8d847d',
  },
  sidemenuhdr_img: {
    width: calcHeight(7),
    height: calcHeight(7),
    borderRadius: calcHeight(6.5),
  },
  del_icon_img: {
    width: calcHeight(2.5),
    height: calcHeight(2.5),
  },
  sidemenuitem_img: {
    width: calcHeight(3.8),
    height: calcHeight(3.8),
  },
  sidemenuitem_txt: {
    fontSize: RFValue(15),
    paddingHorizontal: calcWidth(3),
    color: '#4d4d4d',
    fontFamily: 'Montserrat-Medium',
  },
  srtimeline_date: {
    fontSize: RFValue(12),
    padding: calcWidth(2),
    textAlign: 'center',
    color: '#081344',
    fontFamily: 'Montserrat-Light',
  },
  srtimeline_title: {
    fontSize: RFValue(16),
    fontFamily: 'Montserrat-Light', //bold,
    color: '#081344',
    textAlign: 'center',
  },

  srmessage_date: {
    fontSize: RFValue(12),
    paddingBottom: calcHeight(0.8),
    textAlign: 'center',
    color: '#081344',
    fontFamily: 'Montserrat-Light',
  },
  srmessage_title: {
    fontSize: RFValue(13.5),
    fontFamily: 'Montserrat-Medium', //bold,
    paddingBottom: calcHeight(0.5),
    color: '#081344',
    textAlign: 'center',
  },
  srtimeline: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: '#EDECF0',
    alignItems: 'center',
    borderRadius: '10 rem',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: calcHeight(1),
    marginTop: calcWidth(4),
  },

  srmessagearea: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: '#EDECF0',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: calcWidth(2),
    marginBottom: calcHeight(1.1),
  },
  srdt_hdr_txt: {
    fontSize: RFValue(16),
    color: '#081344',
    fontFamily: 'Montserrat-Light',
    padding: calcHeight(0.85),
  },
  srdt_hdr: {
    paddingHorizontal: calcWidth(3),
    borderWidth: 1,
    borderRadius: calcWidth(2),
    borderColor: '#999999',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: calcWidth(2),
  },
  profile_section_hdr: {
    padding: calcHeight(1),
    marginVertical: calcHeight(1.2),
    marginTop: calcHeight(5),
    borderRadius: calcHeight(1.5),
    borderWidth: 1,
    borderColor: '#8d847d',
    paddingHorizontal: calcWidth(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile_section_hdr_txt: {
    fontSize: RFValue(13),
    color: '#4d4d4d',
    fontFamily: 'Montserrat-Medium', //bold,
  },
  underline: {
    borderTopWidth: 1,
    borderColor: '#999999',
    marginHorizontal: calcWidth(2),
    marginTop: calcHeight(2),
  },
  btnslimtxt: {
    width: calcWidth(28),
    fontSize: RFValue(13),
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Montserrat-Light', //bold,
    padding: calcWidth(2),
    borderRadius: calcWidth(2.5),
    margin: calcWidth(1),
  },
  profilesave_icon: {
    fontSize: RFValue(19),
  },
  profilename_desig: {
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Light',
    color: '#4d4d4d',
    paddingHorizontal: calcWidth(1),
  },
  profilename_txt: {
    fontSize: RFValue(16),
    fontFamily: 'Montserrat-Medium',
    color: '#4d4d4d',
    paddingHorizontal: calcWidth(1),
  },
  editIcon: {
    width: calcWidth(5),
    height: calcWidth(5),
    padding: calcHeight(1),
  },
  profile: {
    width: calcHeight(10),
    height: calcHeight(10),
    borderRadius: calcHeight(6),
  },
  profileBorder: {
    width: calcHeight(11.5),
    height: calcHeight(11.5),
    borderRadius: calcHeight(7),
    borderWidth: calcHeight(0.4),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8d847d',
  },

  profileHeaderBorder: {
    width: calcHeight(4),
    height: calcHeight(4),
    borderRadius: calcHeight(2),
    borderWidth: calcHeight(0.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#081344',
  },
  selectfilefooter: {
    padding: calcWidth(1),
    color: '#081344',
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
  },
  selectfiletxt: {
    padding: calcWidth(1),
    color: '#081344',
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Light',
    textAlign: 'center',
  },
  file_img: {
    width: calcHeight(5),
    height: calcHeight(5),
  },
  agreement: {
    marginVertical: calcWidth(5),
    marginHorizontal: calcHeight(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreement_lnk: {
    padding: calcHeight(1),
    //fontStyle: 'italic',
    color: '#081344',
    fontSize: RFValue(13),
    textDecorationLine: 'underline',
    fontFamily: 'Montserrat-LightItalic',
  },
  txt_agreement: {
    marginLeft: calcWidth(2),
    padding: calcHeight(1),
    // fontStyle: 'italic',
    color: '#081344',
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-LightItalic',
  },
  txt_total_amt: {
    flex: 1,
    padding: calcHeight(1),
    backgroundColor: '#183761',
    borderRadius: calcHeight(1),
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: RFValue(13),
    fontFamily: 'Montserrat-Medium',
  },
  pricedt_item_txt: {
    fontSize: RFValue(14),
    color: '#081344',
    fontFamily: 'Montserrat-Medium',
  },
  pricedt_item_amt: {
    width: calcWidth(30),
    padding: calcHeight(1),
    backgroundColor: '#183761',
    borderRadius: calcHeight(0.8),
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: RFValue(12),
    fontFamily: 'Montserrat-Light',
  },
  pricedt_item: {
    flexDirection: 'row',
    marginVertical: calcHeight(1),
    paddingHorizontal: calcHeight(2),
    paddingVertical: calcHeight(2),
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    borderRadius: calcHeight(0.8),
  },
  txtSubHead: {
    fontSize: RFValue(14),
    color: '#8d847d',
    margin: calcHeight(0.8),
    paddingVertical: calcWidth(1),
    fontFamily: 'Montserrat-Light',
  },
  radiotxt: {
    fontSize: RFValue(14),
    color: '#081344',
    paddingHorizontal: calcWidth(1.5),
    fontFamily: 'Montserrat-Light',
    marginBottom: calcHeight(0.5),
  },
  pickeritem: {
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    color: '$inputTextColor',
    fontFamily: 'Montserrat-Light',
  },
  picker: {
    borderColor: '#081344',
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    fontWeight: '100',
    //  backgroundColor: "red",
    color: '$inputTextColor',
    fontFamily: 'Montserrat-Light',
  },
  header_title: {
    textAlign: 'center',
    fontSize: RFValue(16.8),
    fontWeight: 'bold',
  },
  servicehome_text: {
    marginLeft: calcWidth(2.7),
    marginTop: calcHeight(2),
    fontSize: RFValue(13),
    padding: calcHeight(0.5),
    fontFamily: 'Montserrat-Light',
  },
  servicehome_item: {
    padding: calcHeight(1),
    borderBottomWidth: 1,
    borderColor: '#999999',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: calcHeight(2),
  },
  servicehome_item_right: {
    padding: calcHeight(1),
    paddingHorizontal: calcHeight(1.5),
    flex: 1,
  },
  servicehome_item_title: {
    fontSize: RFValue(14),
    fontFamily: 'Montserrat-Medium',
    paddingVertical: calcHeight(0.55),
  },
  servicehome_item_btn: {
    backgroundColor: '#183761',
    padding: calcHeight(0.9),
    alignItems: 'center',
    borderRadius: calcHeight(1),
    width: calcHeight(12.5),
  },
  servicehome_item_btntxt: {
    fontSize: calcHeight(1.6),
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  servicehome_item_text: {
    fontSize: RFValue(11),
    fontFamily: 'Montserrat-Light',
    color: '#666666',
    paddingVertical: calcHeight(1),
  },
  servicehome_item_img: {
    width: calcHeight(7),
    height: calcHeight(7),
    margin: calcHeight(1),
    marginTop: calcHeight(3),
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
    color: '#081344',
    fontSize: RFValue(12),
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
    marginTop: calcHeight(1.5),
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
  input2: {
    fontSize: RFValue(14),
    color: '#081344',
    borderBottomWidth: calcHeight(0.1),
    borderColor: '#081344',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    margin: calcHeight(1),
    fontFamily: 'Montserrat-Light',
  },
  input: {
    borderBottomWidth: calcHeight(0.1),
    borderColor: '#081344',
    fontSize: '$inputFontSize',
    paddingHorizontal: calcWidth(1.5),
    paddingVertical: calcHeight(0.8),
    color: '$inputTextColor',
    margin: calcHeight(1),
    fontFamily: 'Montserrat-Light',
  },
  reply_text: {
    fontSize: RFValue(12),
    color: '#ffff',
    fontFamily: 'Montserrat-Light',
  },
  reply_button: {
    backgroundColor: '#183761',
    paddingVertical: calcHeight(0.4),
    paddingHorizontal: calcWidth(7),
    borderRadius: calcHeight(1),
    marginBottom: calcHeight(1),
    justifyContent: 'center',
    alignItems: 'center',
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
  button_normal: {
    width: calcWidth(65),
    padding: calcHeight(1.8),
    backgroundColor: '#f84563',
    borderRadius: calcHeight(2),
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: calcHeight(1.5),
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

export const hdrStyles = EStyleSheet.create({
  header: {
    backgroundColor: '#f8f9fc',
    elevation: 0,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    borderBottomColor: 'transparent',
    height: calcHeight(5.5),
  },
  title: {
    color: '#081344',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: RFValue(15),
    textAlign: 'center',
    // backgroundColor: 'red',
    flex: 1,
    //width: '100%',
  },
});
