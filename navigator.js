import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import SignIn from './view/SingIn';
import Verify from './view/Verify';
import Main from './view/main';
import Cart from './view/cart';
import Orders from './view/orders';
import Wallet from './view/wallet';
import Messages from './view/messages';
import List from './view/list';
import CheckOut from './view/check_out';
import Profile from './view/profile';
import EditProfile from './view/edit_profile';
import ListAddress from './view/list_address';
import AddAddress from './view/add_address';
import HistoryOrder from './view/history_order';
import AboutTarebaar from './view/about_tarebaar';
import Help from './view/help';
import Shop from './view/shop';
import Splash from './view/splash';

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
        Profile: Profile,
        EditProfile: EditProfile,
        ListAddress: ListAddress,
        AddAddress: AddAddress,
        HistoryOrder: HistoryOrder,
        AboutTarebaar: AboutTarebaar,
        Help: Help,
        Shop: Shop,
        Splash: Splash,
    },
    {
        initialRouteName: 'Shop',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;