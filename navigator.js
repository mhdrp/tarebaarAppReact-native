import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import SignIn from './login/SingIn';
import Verify from './login/Verify';
import Main from './view/main';
import Cart from './view/cart';
import Orders from './orders/orders';
import Wallet from './view/wallet';
import Messages from './view/messages';
import List from './view/list';
import CheckOut from './view/check_out';

const RootStack = createStackNavigator(
    {
        SignIn: SignIn,
        Verify: Verify,
        Main: Main,
        Cart: Cart,
        Orders: Orders,
        Wallet: Wallet,
        Messages: Messages,
        List: List,
        CheckOut: CheckOut,
    },
    {
        initialRouteName: 'CheckOut',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;