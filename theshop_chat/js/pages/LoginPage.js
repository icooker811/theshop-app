/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    Button,
    Card,
    Divider,
    FormLabel,
    FormInput
} from 'react-native-elements'

import { NavigationActions } from 'react-navigation'

export default class LoginPage extends Component<{}> {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        var isAuth = true;
        if (isAuth) {
            this.props.navigation.dispatch(NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'Chat'})]
            }));
        }

        this.state = {
            isAuth: isAuth
        };
    }

    goToChat() {
        this.props.navigation.navigate('Chat');
    }

    render() {
        return (
            <View style={styles.container}>
                <Card title="THE SHOP CHAT">
                    <FormLabel>UserName</FormLabel><FormInput/>
                    <FormLabel>Password</FormLabel><FormInput/>
                    <Divider style={{backgroundColor: 'white', marginTop: 20}} />
                    <Button title='SIGN IN' onPress={() => this.goToChat()}/>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    }
});
