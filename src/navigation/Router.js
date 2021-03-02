import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSeacrhScreen from '../screens/DestinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from "./HomeTabNavigator"

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home '}
          component={HomeTabNavigator}
          options={{
             headerShown:false
          }}
        />

<Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
              title:"How many people?"
          }}
        />

<Stack.Screen
          name={"Destination Search"}
          component={DestinationSeacrhScreen}
          options={{
              title:"Search your destination"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
