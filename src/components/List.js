import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
import AppIcon from './AppIcon';

export default function List({
  data,
  numColumns,
  backgroundColor,
  borderRadius = 30,
  iconSize = 60,
}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(data);
  }, []);
  console.log(items);
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.itemContainer,
            {
              width: (Dimensions.get('screen').width - 50) / numColumns,
              backgroundColor: backgroundColor,
              borderRadius: borderRadius,
            },
          ]}>
          {/* <Button title="kol" onPress={() => console.log(item)} /> */}
          <AppIcon source={item.image} size={iconSize} />
          {item.text && <Text>{item.text}</Text>}
          {item.footerPercentage && (
            <View style={styles.footer}>
              <View
                style={{
                  flex: 1,
                  width: item.footerPercentage,
                  backgroundColor: 'green',
                }}
              />
            </View>
          )}
        </View>
      ))}
      {/* // /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  itemContainer: {
    alignItems: 'center',
    padding: 30,
    margin: 5,
    alignSelf: 'center',
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },

  footer: {
    marginVertical: 10,
    width: '100%',
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
