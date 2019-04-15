
import {StyleSheet} from "react-native";
import strings from './strings'

const styles = StyleSheet.create({
    /* Essential style */
    rtl: {
        flexDirection: 'row-reverse'
    },
    body: {
        backgroundColor: strings.color.bgColor,
    },
    headerTop: {
        backgroundColor: strings.color.bgColor,
        elevation: 0,
        /* height:40,*/
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
    txtSmallBtn: {
        textAlign: 'center',
        color: strings.color.txtBtn,
        fontFamily: strings.font.light,
        fontSize: strings.size.smallText,
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
    txtInput: {
        color: strings.color.txtInput,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
        height: 40,
        paddingBottom: 2,
        textAlign: "right"
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
    /*ezafe ha baraye test*/
    test: {
        backgroundColor: '#cf001a',
        flex: 1,
        width: 300,
        justifyContent: "flex-start"
    },
    shadows: {
        shadowColor: '#cf001a',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 7,
    },

    center: {
        textAlign: 'center',
        justifyContent: "flex-start", alignItems: "center",
    },

    searchBox: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: strings.color.white,
        borderRadius: strings.size.borderRadius,
        borderWidth: 0,
        borderColor: '#d4d6dc',
        borderBottomWidth: 0,
        shadowColor: '#b7b7b7',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 1.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 40,

    },
    itemInputSearch: {
        flex: 5
    },
    txtInputSearch: {
        color: strings.color.txtInput,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
        height: 40,
        textAlign: "right",
        paddingBottom: 7,
    },
    iconSearchBox: {
        color: strings.color.iconBoxSearch,
        fontSize: strings.size.smallIcon
    },

    /*header bar*/
    titleHeader: {
        alignItems: "center",
        backgroundColor: strings.color.white,
        justifyContent: "center",
        flexDirection: 'row',
        width: "150%",
        borderRadius: 20,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,

    },
    txtTitleHeader: {
        color: strings.color.textPrimary,
        fontFamily: strings.font.light,
        fontSize: strings.size.smallText,
        textAlign: 'center',
    },
    iconTitleHeader: {
        justifyContent: "center",
        color: strings.color.textPrimary,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
        marginRight: 10,

    },

    iconHeaderColor: {
        color: strings.color.iconHeaderColor
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



    titleBox: {
        width: "88%",
        marginLeft: "6%",
        marginRight: "6%",
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleBoxOne: {
        width: "88%",
        marginLeft: "6%",
        marginRight: "6%",
        marginTop: 7,
        marginBottom: 7,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleBoxCenter: {
        width: "88%",
        marginLeft: "6%",
        marginRight: "6%",
        marginTop: 7,
        marginBottom: 7,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    txtTitleOne: {
        textAlign: 'right',
        color: strings.color.title,
        fontFamily: strings.font.medium,
        fontSize: strings.size.smallTitle,
        lineHeight: 36,
    },

    titleNormal: {
        textAlign: 'right',
        color: strings.color.title,
        fontFamily: strings.font.medium,
        fontSize: strings.size.smallerTitle,
    },
    txtTitleOneCenter: {
        textAlign: 'center',
        color: strings.color.title,
        fontFamily: strings.font.medium,
        fontSize: strings.size.normalText,
        lineHeight: 36,
    },
    txtTomanCenter: {
        textAlign: 'center',
        color: strings.color.black,
        fontFamily: strings.font.medium,
        fontSize: strings.size.normalText,
        lineHeight: 36,
    },
    txtMessages: {
        textAlign: 'center',
        color: strings.color.text,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
        lineHeight:30,
    },
    txtMore: {
        textAlign: 'left',
        color: strings.color.text,
        fontFamily: strings.font.medium,
        fontSize: strings.size.smallerText,

    },
    txtDetails: {
        textAlign: 'left',
        color: strings.color.primary,
        fontFamily: strings.font.medium,
        fontSize: strings.size.smallerText,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        padding:0

    },
    txtSelectPriceWallet: {

        fontFamily: strings.font.light,
        fontSize: strings.size.smallText,


    },

    /* tab style*/
    tabTabBarUnderlineStyle: {
        backgroundColor: strings.color.textPrimary,
    },
    tabActiveTextStyle: {
        color: strings.color.textPrimary,
    },
    tabTextStyle: {
        color: strings.color.text
    },
    tabTabStyle: {
        backgroundColor: strings.color.bgColor
    },
    tabActiveTabStyle: {
        backgroundColor: strings.color.bgColor,


    },
    /*just color style*/
    colorTitle: {
        color: strings.color.title
    },
    colorPrimary: {
        color: strings.color.primary,
    },

    textAlignLeft: {
        textAlign: "left"
    },
    textAlignRight: {

        textAlign: "right",

    }
    
});
export default styles;