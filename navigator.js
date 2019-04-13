import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import SignIn from './login/SingIn';
import Verify from './login/Verify';


const RootStack = createStackNavigator(
    {
        SignIn: SignIn,
        Verify: Verify,
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;