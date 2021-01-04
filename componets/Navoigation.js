import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native'
import { useState } from 'react';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'red'
        },
        headerTintColor: 'white'
      }} initialRoutes="Home" >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen options={({ route }) => ({ title: route.params.name })} name="About" component={About}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  )
}



function Home({ navigation }) {
  const [count, setCount] = useState(0)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Button onPress={() => setCount(count => count + 1)} title="INCERMENT" />
          <Button onPress={() => setCount(count => count - 1)} title="DECREMENT" />
        </View>
      )
    })
  }, [navigation, setCount])
  let data = { name:'riddhi', email:'riddhi@gmail.com' }
  return (
    <View>
      <Text style={{ fontSize: 50, color: '#ff69b4', margin: 20, padding: 20, textAlign: 'center' }}>Home Page</Text>
      <Text>{count}</Text>
      <Button
        onPress={() => navigation.push('About', data)}
        title="Go TO About" />


    </View>
  )
}


function About({ route, navigation }) {
  let data = route.params
  return (
    <View>
      <Text style={{ fontSize: 50, color: '#4b0082', margin: 20, padding: 80, textAlign: 'center' }}>About Page</Text>
      <Text style={{ fontSize: 25, color: '#ff4500', textAlign: 'center' }}>{data.name}</Text>
      <Text style={{ fontSize: 25, color: '#ff4500', textAlign: 'center' }}>{data.email}</Text>
      <Button onPress={() => navigation.setOptions({ title: 'Custome About' })} title="update navigation name" />

    </View>
  )
}




export default App;