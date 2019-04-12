
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