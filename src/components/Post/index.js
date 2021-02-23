import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles.js';

const Post = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:post.image}}
      />
      {/*Bed & Bedroom*/}

      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedrooms} bedroom
      </Text>

      {/*Description*/}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/*Old price & New Price*/}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}> ${post.newPrice}</Text>/ night
      </Text>
      {/*Total Price*/}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
