export default class Regex{

    validatePhoneNumber(number){
        let regexPhoneNumber=/^09[0-9]{9}$/;
        return regexPhoneNumber.test(number);
    }
    validateEmail(email){
        let regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexEmail.test(email);
    }
    validateIranianNationalCode(input) {
        if (!/^\d{10}$/.test(input))
            return false;

        let check = +input[9];
        let sum = Array(9).fill().map((_, i) => +input[i] * (10 - i)).reduce((x, y) => x + y) % 11;
        return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
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