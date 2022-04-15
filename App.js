import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListScreen from "./src/screens/ListScreen"
import AddScreen from "./src/screens/AddScreen"
import DetailScreen from "./src/screens/DetailScreen"

const navigator = createStackNavigator({
  List: ListScreen,
  Add: AddScreen,
  Detail: DetailScreen
}, {
  initialRouteName: "List",
  defaultNavigationOptions: {
    title: "Simpsons",
    headerTitleAlign: 'center'
  }
})

export default createAppContainer(navigator);