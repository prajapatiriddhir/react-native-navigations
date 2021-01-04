import React, { Component } from 'react'
import FlatListReact from './componets/FlatListReact'
import Home from './componets/Home'
import About from './componets/About'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (

            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen  name="FlatListReactNative" component={FlatListReact}></Stack.Screen>
                    <Stack.Screen name="Home" component={Home}></Stack.Screen>
                    <Stack.Screen name="About" component={About}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default App;