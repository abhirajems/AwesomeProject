import { View, Text } from 'react-native'
import React from 'react'
import SignUp from './src/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Fakestore from './src/Fakestore';
const Stack = createNativeStackNavigator();

const StackNavigator =()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignUp" 
      component={SignUp}
      />
       <Stack.Screen name="Fakestore" 
      component={Fakestore}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}


const App = () => {
  return (
   
    <Provider store={store}>
      <StackNavigator />
  </Provider>
  )
}

export default App