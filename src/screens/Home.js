import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import List from '../components/List';

export default function Home({goNext, goBack}) {
  const data = [
    {
      id: 1,
      image: require('../assets/Images/quiz.png'),
      text: 'Quiz',
      footerPercentage: '33%',
    },
    {
      id: 1,
      image: require('../assets/Images/quiz.png'),
      text: 'Quiz',
      footerPercentage: '33%',
    },
    {
      id: 1,
      image: require('../assets/Images/quiz.png'),
      text: 'Quiz',
      footerPercentage: '33%',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 33, fontWeight: 'bold'}}>Hi James!</Text>
          <Text style={{fontSize: 17}}>Welcome back</Text>
        </View>
        <AppIcon
          source={require('../assets/Images/Mask.png')}
          style={styles.headerIcon}
        />
      </View>
      <Text style={styles.listheader}>Today's assignment</Text>
      <List
        header="Today's assignment"
        data={data}
        numColumns={2}
        backgroundColor="#27AAE0"
      />
      <Button title="next" onPress={goNext} />
      <Button title="back" onPress={goBack} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    height: 250,
    width: 200,
  },
  listheader: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
});
