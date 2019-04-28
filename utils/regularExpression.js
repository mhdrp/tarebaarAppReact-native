export default class Regex{

    validatePhoneNumber(number){
        let regexPhoneNumber=/^09[0-9]{9}$/;
        return regexPhoneNumber.test(number);
    }

}