import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  TextInput,
} from 'react-native';
import AppIcon from '../components/AppIcon';
import List from '../components/List';

export default function Profile({goNext, goBack}) {
  const TextInp = ({label, value}) => (
    <View style={styles.input}>
      <Text style={{fontSize: 15, color: 'rgba(0,0,0,.5)'}}>{label}</Text>
      <View style={{width: '70%'}}>
        <TextInput style={{flex: 1, fontSize: 15}} defaultValue={value} />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AppIcon
          source={require('../assets/Images/profile.png')}
          size={150}
          style={styles.profile}
        />
        <AppIcon
          source={require('../assets/Images/plus.png')}
          size={30}
          style={styles.plus}
        />
      </View>
      <TextInp label="Name" value="James J." />
      <TextInp label="School" value="Spring High senior sec. school" />
      <TextInp label="Class" value="III B" />

      <Button title="next" onPress={goNext} />
      <Button title="back" onPress={goBack} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profile: {
    alignSelf: 'center',
  },
  plus: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  input: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 20,
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
