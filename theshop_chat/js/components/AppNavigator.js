
import {
    StackNavigator,
} from 'react-navigation';

import LoginPage from "../pages/LoginPage";
import ChatPage from "../pages/ChatPage";

const AppNavigator = StackNavigator({
    Login: { screen: LoginPage },
    Chat: { screen: ChatPage },
});

export default AppNavigator;


