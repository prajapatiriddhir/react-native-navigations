import React from 'react'
import {View,Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={ HomeScreen}></Tab.Screen>
      <Tab.Screen name="AboutScreen" component={AboutScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const HomeScreen = () =>{
  return(
    <View><Text style={{fontSize:20}}>Home</Text></View>
  )
}


const AboutScreen = () =>{
  return(
    <View><Text style={{fontSize:20}}>About</Text></View>
  )
}
export default App;