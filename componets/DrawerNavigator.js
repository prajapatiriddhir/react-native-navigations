import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const App = () => {
  const Drawer = createDrawerNavigator();
  return (

    <NavigationContainer>
      <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
      <Drawer.Screen name="Demo" component={Demo}></Drawer.Screen>
    </NavigationContainer>
  )
}


const Setting = () => {
  return (
    <View>
      <Text>Setting Page</Text>
    </View>
  )
}


const Demo = () => {
  return (
    <View>
      <Text>Demo</Text>
    </View>
  )
}

export default App;