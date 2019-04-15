import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import SignIn from './login/SingIn';
import Verify from './login/Verify';
import Main from './view/main';
import Cart from './view/cart';

const RootStack = createStackNavigator(
    {
        SignIn: SignIn,
        Verify: Verify,
        Main: Main,
        Cart: Cart,
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;