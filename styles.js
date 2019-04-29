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
    itemRight: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    rightIcon: {
        alignSelf: 'flex-start',
        textAlign: 'right'
    },
    displayBlock: {
        flex: 1
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    noSpaceBetween: {
        justifyContent: 'flex-start',
    },
    headerTop: {
        backgroundColor: strings.color.bgColor,
        elevation: 0,
        /* height:40,*/
        borderBottomWidth: 0
    },
    container: {
        flex: 1,
        width: "94%",
        marginLeft: "3%",
        marginRight: "3%",
        marginTop: 0,
        marginBottom: 10,
    },
    textRight: {
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    },
    rightText: {
        textAlign: "right",
        alignItems: "flex-start",
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
    cardBorderRadius: {
        borderRadius: 5
    },

    textModal: {
        textAlign: 'center',
        color: strings.color.txtSecondary,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
    },
    boxModal: {
        borderRadius: 7,
        height: 220,
        width: "75%",
        padding: 10,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
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
    txtSmallBtnBorder: {
        textAlign: 'center',
        color: strings.color.primary,
        fontFamily: strings.font.light,
        fontSize: strings.size.smallerText,
    },
    btnSmallBorder: {

        borderRadius: strings.size.borderRadius,
        borderColor: strings.color.primary,
        borderWidth: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,

    },


    btnPrimary: {
        borderRadius: strings.size.borderRadius,
    },
    btnColorPrimary: {
        backgroundColor: strings.color.primaryBtn,
    },
    btnBorderBlack: {
        backgroundColor: strings.color.bgColor,
        borderColor: strings.color.BtnBorder,
        borderWidth: 1,

    },
    btnTextBorderBlack: {
        color: strings.color.title
    },
    btnColorBody: {
        backgroundColor: strings.color.bgColor,
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
        /* TODO change textAlign to left in android */
        textAlign: "right",
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    itemInput: {
        flexDirection: 'row-reverse',
        marginRight: 15,
        marginBottom: 20,
        marginTop: 20,
    },
    itemInputForm: {
        flexDirection: 'row',
        marginRight: 15,
        marginBottom: 5,
        marginTop: 5,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: "right",

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
    itemCenter: {
        textAlign: 'center',
        justifyContent: "center", alignItems: "center",
    },
    titleStore: {
        flex: 1,
        flexDirection: 'row',
        margin: 4,
        borderColor: strings.color.borderColor,
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    imgStore: {
        width: 50, height: 50, borderRadius: 7, marginLeft: 15, marginRight: 15
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
        shadowOffset: {width: 0, height: 2},
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
        paddingBottom: 4,
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
    iconHeader: {
        fontSize: 20,
        color: strings.color.iconHeaderColor
    },
    iconHeaderColor: {
        color: strings.color.iconHeaderColor
    },
    iconItem: {
        color: strings.color.primary,
        marginRight: 7,
        marginLeft: 7,
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
        borderTopWidth: 0,
        backgroundColor: strings.color.bgColor,
        borderTopColor: strings.color.borderColor,
    },

    shoppingCart: {
        position: "relative",
        top: -8
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
    mgBottom10: {
        marginBottom: 10,
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
    mgNull: {
        marginBottom: 0,
        marginTop: 0,
    },

    titleBox: {
        width: "88%",
        marginLeft: "6%",
        marginRight: "6%",
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleListAddress: {
        width: "95%",
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
    titleBoxBlowList: {
        width: "100%",
        marginLeft: "1%",
        marginRight: "1%",
        marginTop: 20,
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
        alignSelf:"flex-start",
        textAlign: 'left',
        color: strings.color.textMessage,
        fontFamily: strings.font.light,
        fontSize: strings.size.normalText,
        lineHeight: 30,
    },
    txtMore: {
        textAlign: 'left',
        color: strings.color.text,
        fontFamily: strings.font.medium,
        fontSize: strings.size.smallText,

    },
    txtMorePrimary: {
        textAlign: 'left',
        color: strings.color.primary,
        fontFamily: strings.font.medium,
        fontSize: strings.size.smallText,
    },
    txtDetails: {
        textAlign: 'left',
        color: strings.color.primary,
        fontFamily: strings.font.medium,
        fontSize: strings.size.smallerText,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        padding: 0

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
        alignSelf: "flex-start",
        textAlign: "right",

    },

    itemBox: {
        width: "100%",
        flex: 1,
        flexDirection: 'row',
        padding: 3,
        alignItems: 'center',
        borderBottomColor: strings.color.borderColor,
        borderBottomWidth: 1,

    },
    noBorder: {
        borderBottomWidth: 0,
    },

    red: {
        color: strings.color.red,
    },
    green: {
        color: strings.color.green,
    },
    colorStar: {
        color: strings.color.star,
    },
    itemIcon: {
        marginRight: 4,
        marginLeft: 4
    },
    itemRow: {
        flex: 1, flexDirection: 'row', textAlign: 'right',
        justifyContent: "center", alignItems: "center",
    },
    itemColumn: {
        flex: 1,
        textAlign: 'right',
        justifyContent: "center", alignItems: "center",

        flexDirection: 'column'
    },
    noPadding: {
        padding: 0
    },
    drawerMenu: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: strings.color.bgDrawerMenu,
        alignItems: "flex-start",
        paddingRight:40,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
    },
    txtDrawerMenu:{
        color: strings.color.white,
        margin:1,
        fontFamily: strings.font.medium,
        fontSize: strings.size.normalText,
    },
    userNameDrawerMenu:{
        margin:10,
        fontSize: strings.size.largeText,
    },
    iconDrawerMenu: {
        color: strings.color.white,
        marginRight: 7,
        marginLeft: 7,
    },

});
export default styles;