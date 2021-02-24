import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import styles from './style';

import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
const DestinationSeacrhScreen = (props) => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/*Input Component*/}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/*List Component*/}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSeacrhScreen;
