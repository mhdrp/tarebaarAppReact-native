import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import SignIn from './login/SingIn';

const RootStack = createStackNavigator(
    {
        SignIn: SignIn,
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;