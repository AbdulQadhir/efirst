import React from 'react';
import {
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
    $rem: entireScreenWidth / 380,
    $inputFontSize: "15 rem",
    $inputTextColor: "#8d847d"
});
const assetsPath = "../../Assets/";

export const Input = (props) => {
    return (
        <TextInput style={styles.input} {...props}
            placeholderTextColor="#8d847d"
         />
    )
}

export const LabelInput = (props) => {
    return (
        <Text  {...props} style={styles.lblInput} >{props.label}</Text>
    )
}

export const LabelHeader = (props) => {
    return (
        <Text  {...props} style={styles.lblHeader} >{props.label}</Text>
    )
}

export const Button = (props) => {
    return (
        <TouchableOpacity  style={[styles.button, props.extraStyle]} {...props}  >
            <Text style={styles.txtBtn} >{props.label}</Text>
        </TouchableOpacity>
    )
}

export const ButtonLabel = (props) => {
    return (
        <TouchableOpacity  style={styles.btnLbl}  {...props}  >
            <Text style={styles.txtBtnLbl} >{props.label}</Text>
        </TouchableOpacity>
    )
}

export const ButtonExtLogin = (props) => {
    return (
        <View style={{ flexDirection: "row", width: "100%" }} >
        <TouchableOpacity  style={styles.btnExtLeft}  {...props}  >
            <Text style={styles.txtBtnExtLeft} >By Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.btnExtRight}  {...props}  >
            <Text style={styles.txtBtnExtRight} >By Google</Text>
        </TouchableOpacity>
        </View>
    )
}

export const DashNotify = (props) => {
    return (
        <View style={styles.dash_notify} >
            <Image style={styles.dash_notify_img} source={require(`${assetsPath}Dashboard/bell.png`)} />
            <View style={{ alignItems: "center", flexDirection:"row" }} >
                <Text style={styles.dash_notify_txt} >You have {props.updates} Updates</Text>
            </View>
        </View>
    )
}

export const DashCard = (props) => {
    var img = require(`${assetsPath}Dashboard/card_required.png`);
    switch(props.type)
    {
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
        <TouchableOpacity style={props.type==1 ? styles.dash_card_outer_required : styles.dash_card_outer} onPress={props.onPress} >
            <View style={styles.dash_card} >
                <View style={{ alignItems: "center"  }} >
                    <Image style={styles.dash_card_img} source={img} />
                </View>
                <View >
                    <View style={props.type==1 ? styles.dash_card_Title_required : styles.dash_card_Title} >
                        <Text style={styles.dash_card_txtTitle} >{props.label}</Text>
                    </View>
                    <Text style={styles.dash_card_txtUpdates} >You have {props.updates} Updates</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const SearchBar = (props) => {
    return (
        <TextInput {...props} style={styles.search_bar} placeholder="Search" />
    )
}

export const NoRequestsLabel = (props) => {
    return (
        <View style={styles.no_request_lbl} >
            <Text style={styles.no_request_text} >{props.label}</Text>
        </View>
    )
}


export const NoRequestsBody = (props) => {
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
        <View style={{ flexDirection:"row", justifyContent:"center", flex:1 }} >
            <View style={styles.no_request_inner}>
                <Image style={styles.no_request_img} source={img} />
                <Text style={styles.no_request_body_text} >{props.emptyText}</Text>
            </View>
        </View>
    )
}

export const LoginFooter = (props) => {
    var img = require(`${assetsPath}logo.png`);
    return (
        <View style={styles.loginfooter} >
            <Image style={styles.loginfooter_img} source={img} />
            <View style={{backgroundColor:"#e2eae7", height:5, width: "30%"}} ></View>
        </View>
    )
}

export const MyRequestItem = (props) => {
    var status_type = null;
    switch (props.type){
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
        <View style={styles.myreqitem} >
            <View style={{ flex:1}} >
                <Text style={styles.myreqitem_head}>Date</Text>
                <Text style={styles.myreqitem_text}>{props.date}</Text>
            </View>
            <View style={{ flex:2}} >
                <Text style={styles.myreqitem_head}>Service Request</Text>
                <Text style={styles.myreqitem_text}>{props.service}</Text>
            </View>
            <View style={{ flex:1}} >
                <Text style={styles.myreqitem_head}>Status</Text>
                <Text style={[styles.myreqitem_status, status_type]}>{props.status}</Text>
            </View>
        </View>
    )
}

const styles = EStyleSheet.create({
    loginfooter:{
        flex: 1,
        alignItems: "center",
        height: "20%",
        backgroundColor: "#FFF",
        paddingTop: "10 rem",
        justifyContent:"space-around"
    },
    loginfooter_img: {
        height: "90 rem",
        resizeMode: "contain"
    },
    myreqitem_completed : {
        backgroundColor: "#008837",
        color: "#ffffff",
    },
    myreqitem_rejected : {
        backgroundColor: "#ff0000",
        color: "#ffffff",
    },
    myreqitem_other : {
        backgroundColor: "#f84563",
        color: "#ffffff",
    },
    myreqitem_status : {
        padding: "5 rem",
        fontSize : "12 rem",
        borderRadius: "5 rem",
    },
    myreqitem : {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#999999",
        padding: "5 rem",
        paddingBottom: "10 rem"
    },
    myreqitem_text: {
        padding: "5 rem",
        color: "#4d4d4d",
        fontSize : "12 rem",
    },
    myreqitem_head: {
        fontWeight: "bold",
        padding: "5 rem",
        color: "#081344",
        fontSize : "12 rem",
    },
    no_request_body_text: {
        padding: "10 rem",
        color: "#4d4d4d",
        textAlign: "center"
    },
    no_request_inner : {
        justifyContent: "center",
        alignSelf: "center",
        width: "250 rem",
    },
    no_request_img: {
        width: "200 rem",
        height: "200 rem",
        padding: "10 rem"
    },
    no_request_lbl: {
        marginTop: "5 rem",
        borderBottomWidth :1,
        alignItems:"center",
        borderColor: "#999999"
    },
    no_request_text: {
        padding: "10 rem",
        color: "#081344"
    },
    search_bar: {
        fontSize : "$inputFontSize",
        borderRadius: "25 rem",
        paddingHorizontal: "20 rem",
        paddingVertical: "15 rem",
        backgroundColor: "#f2f2f2",
        color: "#8d847d"
    },
    dash_card_Title_required : {
        height: "45 rem",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    dash_card_Title : {
        height: "20 rem",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    dash_card_txtUpdates : {
        fontSize : "10 rem",
        color: "#4d4d4d",
        marginTop : "3 rem"
    },
    dash_card_txtTitle : {
        fontFamily: "Montsterrat",
        fontSize : "$inputFontSize",
        color: "#081344",
        fontWeight: "bold",
        marginTop : "7 rem",
        width: "100 rem",
    },
    dash_card_outer: {
        borderRadius: "5 rem",
        backgroundColor: "#fff",
        height: "150 rem",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        elevation: 1,
        alignSelf : "flex-end"
    },
    dash_card: {
        justifyContent: "center",
        width: "158 rem",
        height: "150 rem",
        padding: "15 rem",
        alignSelf : "flex-end"
    },
    dash_card_outer_required: {
        borderRadius: "5 rem",
        backgroundColor: "#fff",
        height: "200 rem",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        elevation: 1,
    },
    dash_card_img: {
        width: "75 rem",
        height: "75 rem",
        padding: "10 rem"
    },
    dash_notify: {
        flexDirection: "row",
        width: "100%" ,
        borderWidth: 1,
        borderRadius: "10 rem",
        justifyContent: "center",
        padding: "5 rem",
        borderColor: "#081344"
    },
    dash_notify_img: {
        width: "40 rem",
        height: "40 rem",
        padding: "10 rem"
    },
    dash_notify_txt : {
        fontSize : "$inputFontSize",
        color: "#4d4d4d",
        fontWeight: "bold"
    },
    input: {
      borderBottomWidth: 1,
      borderColor : "#081344",
      fontSize : "$inputFontSize",
      paddingHorizontal : "10 rem",
      paddingVertical : "5 rem",
      color : "$inputTextColor",
      margin : "3 rem"
    },
    lblInput : {
        fontSize : "$inputFontSize",
        color : "#081344",
        margin : "3 rem"
    },
    lblHeader : {
        fontSize : "30 rem",
        color : "#58546b",
        marginVertical : "10 rem",
        marginHorizontal : "5 rem",
        fontWeight: "bold"
    },
    txtBtn: {
        fontSize : "$inputFontSize",
        color : "#FFF",
        fontWeight : "bold"
    },
    button : {
        width: "200 rem",
        padding : "15 rem",
        backgroundColor : "#f90a08",
        borderRadius : "10 rem",
        alignItems : "center",
        alignSelf: "center",
        margin : "8 rem"
    },
    txtBtnLbl :{
        fontSize : "$inputFontSize",
        color : "#8d847d",
    },
    btnLbl : {
        padding : "15 rem",
        alignItems : "center",
        alignSelf: "center",
        margin : "8 rem"
    },
    btnExtLeft : {
        padding : "15 rem",
        borderWidth: 1,
        borderTopLeftRadius : "10 rem",
        borderBottomLeftRadius : "10 rem",
        borderTopRightRadius : 0,
        borderBottomRightRadius : 0,
        alignItems : "center",
        alignSelf: "center",
        flex: 1,
        borderColor: "#081344"
    },
    btnExtRight : {
        padding : "15 rem",
        borderWidth: 1,
        borderTopLeftRadius : 0,
        borderBottomLeftRadius : 0,
        borderTopRightRadius : "10 rem",
        borderBottomRightRadius : "10 rem",
        alignItems : "center",
        alignSelf: "center",
        flex: 1,
        borderColor: "#f90a08"
    },
    txtBtnExtLeft : {
        alignItems : "center",
        alignSelf: "center",
        color :  "#081344",
        fontWeight : "bold"
    },
    txtBtnExtRight : {
        alignItems : "center",
        alignSelf: "center",
        color :  "#f90a08",
        fontWeight : "bold"
    },
  });
