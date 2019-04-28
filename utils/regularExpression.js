export default class Regex{

    validatePhoneNumber(number){
        let regexPhoneNumber=/^09[0-9]{9}$/;
        return regexPhoneNumber.test(number);
    }

    convertPhoneNumber(m){
        let num=JSON.parse('{"۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"}');
        return m.replace(/./g,function(c){
            return (typeof num[c]==="undefined")?
                ((/\d+/.test(c))?c:''):
                num[c];
        })
    }
}