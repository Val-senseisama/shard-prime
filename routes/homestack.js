import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Prime from '../Screens/Prime';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
      <Stack.Navigator 
      initialRouteName='Prime'
      screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Prime"
          component={Prime}
        //   options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
};
export default Navigator;