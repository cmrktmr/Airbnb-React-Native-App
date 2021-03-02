/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SearchResultsScreen from './src/screens/SearchResults';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import DestinationSeacrhScreen from './src/screens/DestinationSearch'
import GuestsScreen from './src/screens/Guests'
import 'react-native-gesture-handler'
import Router from './src/navigation/Router'
const post1 = feed[0];
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
    <Router/>
    </>
  );
};

export default App;
