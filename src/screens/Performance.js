import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Pressable,
} from 'react-native';
import List from '../components/List';

export default function Performance({goNext, goBack}) {
  const data = [
    {
      image: require('../assets/Images/math.png'),
    },
    {
      image: require('../assets/Images/science.png'),
    },
    {
      image: require('../assets/Images/english.png'),
    },
    {
      image: require('../assets/Images/computer.png'),
    },
    {
      image: require('../assets/Images/hindi.png'),
    },
    {
      image: require('../assets/Images/social.png'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <List
        data={data}
        numColumns={3}
        backgroundColor="#fff"
        borderRadius={10}
        iconSize={90}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Test wise</Text>
      </Pressable>
      <Button title="back" onPress={goBack} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#27AAE0',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 24,
    color: '#fff',
  },
});
