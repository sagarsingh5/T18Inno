import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  FlatList,
  Button,
} from 'react-native';
const circle = 20;

export default function Writing({goNext}) {
  const header = ['Writing', 'Reading', 'Quiz'];
  const [index, setIndex] = useState(0);
  const writings = [
    {
      id: 1,
      header: 'Writing',
      subheader:
        'Pariatur ullamco aute incididunt velit enim adipisicing excepteur.',
      color: 'green',
    },
    {
      id: 2,
      header: 'Writing',
      subheader:
        'Pariatur ullamco aute incididunt velit enim adipisicing excepteur.',
      color: 'green',
    },
    {
      id: 3,
      header: 'Writing',
      subheader:
        'Pariatur ullamco aute incididunt velit enim adipisicing excepteur.',
      color: 'red',
    },
  ];
  const WritingsComp = ({header, subheader, color}) => (
    <View style={styles.wirtingCover}>
      <View style={{width: '70%'}}>
        <Text>{header}</Text>
        <Text>{subheader}</Text>
      </View>
      <View style={[styles.circle, {backgroundColor: color}]} />
    </View>
  );
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          {header.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => setIndex(i)}
              style={[
                styles.headerTextCover,
                {
                  backgroundColor:
                    index === i ? 'rgba(255,255,255,0.5)' : 'transparent',
                },
              ]}>
              <Text style={styles.headerText}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <View style={{marginVertical: 10}}>
          <Text style={styles.writing}>Writing</Text>
          <Text style={{fontSize: 17}}>22 Jul 2021</Text>
        </View>
        <View>
          <FlatList
            data={writings}
            keyExtractor={data => data.id.toString()}
            renderItem={({item, index}) => (
              <WritingsComp
                header={`${item.header} ${index}`}
                subheader={item.subheader}
                color={item.color}
              />
            )}
          />
        </View>

        <Button title="next" onPress={goNext} />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    // alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: '#A7355A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  headerTextCover: {
    padding: 15,
    margin: 2,
    width: '32%',
    alignItems: 'center',
    borderRadius: 15,
  },
  headerText: {
    color: '#fff',
  },
  wirtingCover: {
    backgroundColor: '#fff',
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    width: '99%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  circle: {
    height: circle,
    width: circle,
    borderRadius: circle / 2,
    marginRight: 15,
  },
  writing: {
    color: '#A73559',
    fontSize: 33,
    fontWeight: 'bold',
  },
});
