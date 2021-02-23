import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      {/*Bed & Bedroom*/}

<Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/*Description*/}
      <Text style={styles.description}numberOfLines={2} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt quam at est eleifend imperdiet. Donec venenatis quam condimentum lectus eleifend gravida. Curabitur sagittis nec nunc eget imperdiet.  </Text>

      {/*Old price & New Price*/}
<Text style={styles.prices}>
  <Text style={styles.oldPrice}>$36</Text>
  <Text style={styles.price}>  $30</Text>
  / night


</Text>
      {/*Total Price*/}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
