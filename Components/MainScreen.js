import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';

/* createBottomTabNavigator
const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab },
    AddMediaTab: { screen: AddMediaTab },
}); */

const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab },
    AddMediaTab: { screen: AddMediaTab },
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                ios: {
                    backgroundColor: 'white',
                },
                android: {
                    backgroundColor: 'white'
                }
            })
        },
        iconStyle: { height: 30 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    }
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends React.Component {

    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }} />,
        title: 'Instagram',
        headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }} />,
    }

    render() {
        return <AppTabContainer />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});