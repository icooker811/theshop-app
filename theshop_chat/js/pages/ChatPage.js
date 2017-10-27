/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import { Header } from 'react-native-elements';
import { BackHandler } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';


export default class LoginPage extends Component<{}> {

    static navigationOptions = {
        title: "THE SHOP CHAT",
        headerLeft: null,
        gesturesEnabled: false,
        backBehavior: null
    }

    constructor(props) {
        super(props);
    }

    handleBackPress = () => {
        // const { dispatch, nav } = this.props;
        // const navigation = addNavigationHelpers({
        //     dispatch,
        //     state: nav,
        // });
        // navigation.goBack();
        return true;
    };

    state = {
        messages: [],
    };

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'The Shop',
                        avatar: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
                    },
                },
            ],
        });
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={(messages) => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
