import React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import SignIn from "./view/auth/SignIn";
import {colors} from "./constants/colors";
import SearchContainer from "./view/search/SearchContainer";
import Icon from 'react-native-vector-icons/FontAwesome'

export const LoginBottomTabStack = createBottomTabNavigator({
  Screen_Search: {
    screen: SearchContainer,

    navigationOptions: {
      title: 'Tìm kiếm',
      gesturesEnabled: false,
      tabBarIcon: ({tintColor}) => (
        <Icon name="bell" size={25} style={{
          color: tintColor
        }}/>
      )
    },
  },
  Screen_ReceiptBoughtContainer: {
    screen: SearchContainer,
    navigationOptions: {
      title: 'Ở ghép',
      tabBarIcon: ({tintColor}) => (
        <Icon name="bell" size={25} style={{
          color: tintColor
        }}/>
      )
    }
  },
  Screen_NotificationCustomer: {
    screen: SearchContainer,
    navigationOptions: {
      title: 'Yêu thích',
      tabBarIcon: ({tintColor}) => (
        <Icon name="bell" size={25} style={{
          color: tintColor
        }}/>
      )
    }
  },
  Screen_Setting: {
    screen: SearchContainer,
    navigationOptions: {
      title: 'Cá nhân',
      tabBarIcon: ({tintColor}) => (
        <Icon name="bell" size={25} style={{
          color: tintColor
        }}/>
      )

    }
  },

}, {
  initialRouteName: 'Screen_Search',
  tabBarOptions: {
    borderColor: colors.white,
    activeTintColor: colors.main,
    inactiveTintColor: 'gray',
    activeBackgroundColor: colors.white,
    showIcon: true,
    showLabel: true,
    style: {
      backgroundColor: colors.white,
      borderColor: colors.white
    },
    animationEnabled: true,
  },
  //swipeEnabled: false,
});

export const rootStack = (initrouteName) => createStackNavigator({
  Screen_Auth: {
    screen: SignIn
  },
  Screen_Login: {
    screen: LoginBottomTabStack,
    navigationOptions: {
      gesturesEnabled: false,
    }
  }
}, {
  initialRouteName: initrouteName,
  headerMode: 'none'
})

export default rootStack