/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ImagesComponent = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      source: require('../Images/explorelist1.png'),
      title: 'Explore list 1',
    },
    {
      id: 2,
      source: require('../Images/explorelist3.png'),
      title: 'Explore list 2',
    },
    {
      id: 3,
      source: require('../Images/explorelist3.png'),
      title: 'Explore list 3',
    },
    {
      id: 4,
      source: require('../Images/explorelist4.png'),
      title: 'Explore list 4',
    },
    {
      id: 5,
      source: require('../Images/explorelist1.png'),
      title: 'Explore list A',
    },
    {
      id: 6,
      source: require('../Images/explorelist3.png'),
      title: 'Explore list B',
    },
    {
      id: 7,
      source: require('../Images/explorelist3.png'),
      title: 'Explore list B',
    },
    {
      id: 8,
      source: require('../Images/explorelist3.png'),
      title: 'Explore list B',
    },
    {
      id: 9,
      source: require('../Images/explorelist3.png'),
      title: 'Explore list B',
    },
  ]);

  const numberOfColumns = 2;

  return (
    <>
      <FlatList
        numColumns={numberOfColumns}
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => Alert.alert(item.id.toString(), item.title)}
            style={styles.container}>
            <Image style={styles.image} source={item.source} />
            <Text style={styles.text}>{item.title} </Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#ddd',
    // alignItems: 'center',
  },
  image: {
    //   flex: 1,
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BC8F8F',
    // flex: 1,
    alignSelf: 'center',
  },
});

export default ImagesComponent;
