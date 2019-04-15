
import {StyleSheet} from "react-native";
import strings from './strings'

const styles = StyleSheet.create({
    /* Essential style */
    body: {
        backgroundColor: strings.color.bgColor,
    },
    container: {
        width: "94%",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: 20,
        marginBottom: 10,
    },
    textRight: {
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    },
    title: {
        textAlign: 'center',
        color: strings.color.title,
        fontFamily: strings.font.medium,
        marginTop: 20,
        marginBottom: 20,
        fontSize: strings.size.normalTitle,
        lineHeight: 45,
    },
    subTitle: {
        textAlign: 'center',
        color: strings.color.text,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
        lineHeight: 26
    },
    cardBorderButton: {
        borderRadius: strings.size.borderRadius,
    },
    cardBorderRadius:{
        borderRadius:5
    },

    /*button styles*/
    txtBtn: {
        color: strings.color.txtBtn,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalBtn,
        lineHeight: 26
    },
    btnPrimary: {
        borderRadius: strings.size.borderRadius,
    },
    btnColorPrimary: {
        backgroundColor: strings.color.primaryBtn,
    },

    /*style input*/
    txtInputNumber: {
        color: strings.color.txtInput,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
        height: 40,
        paddingBottom: 2,
    },
    itemInput: {
        flexDirection: 'row-reverse',
        marginRight: 15,
        marginBottom: 20,
        marginTop: 20,

    },
    cardStyle: {
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10,
    },
    verifyResendDisable: {
        textAlign: 'center',
        color: strings.color.txtDisable,
        fontFamily: strings.font.light,
        fontSize: strings.size.smallText,
    },
    verifyResendEnable: {
        textAlign: 'center',
        color: strings.color.primary,
        fontFamily: strings.font.light,
        fontSize: strings.size.smallText,

    },
    bgInputVerifyCode: {
        textAlign: 'center',
        backgroundColor: strings.color.bgSecondary,
        color: strings.color.txtSecondary,
        borderRadius: strings.size.normalBorderRadius,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: "20%",
        height: 60,
        margin: 5,
        alignItems: "center",

    },


    /* footer tab navigation style*/
    footerNavigation: {
        borderTopWidth: 0,
        borderColor: strings.color.bgColor,
        backgroundColor: strings.color.bgColor,
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        elevation: 0,
    },
    containerFooter: {
        width: "80%",
        marginLeft: "10%",
        marginRight: "10%",
        backgroundColor: strings.color.bgColor,
    },

    iconFooterTab: {
        color: strings.color.iconFooterColor
    },
    iconActiveFooterTab: {
        color: strings.color.iconActiveFooterColor
    },
    buttonFooterTab: {
        color: strings.color.iconFooterColor
    },
    footerBg: {
        backgroundColor: strings.color.bgColor,
        borderTopWidth: 1,
        borderTopColor: strings.color.borderColor,
    },
    buttonActiveFooterTab: {
        borderTopWidth: 1,
        backgroundColor: strings.color.bgColor,
        borderTopColor: strings.color.borderColor,
    },

    /*just margins style*/
    mgTop10: {
        marginTop: 10,
    },
    mgTop20: {
        marginTop: 20,
    },
    mgTop50: {
        marginTop: 50,
    },
    mgBottom20: {
        marginBottom: 20,
    },
    mgRight20: {
        marginRight: 20,
    },
    mgLeft20: {
        marginLeft: 20,
    },
    mgUpDown20: {
        marginBottom: 20,
        marginTop: 20,
    },
    mgLR20: {
        marginRight: 20,
        marginLeft: 20,
    },
    mgAll20: {
        margin: 20
    },
    mgAll10: {
        margin: 10
    },
});
export default styles;