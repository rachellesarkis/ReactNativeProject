import React, {useState} from "react";
import {StyleSheet, View, TextInput, FlatList, Text, Image, ScrollView } from "react-native";

const ImagesComponent = () => {

    const [ images, setImages ] = useState([
        {id: 1, source: require('../Images/explorelist1.png'), title: 'Explore list 1' },
        {id: 2, source: require('../Images/explorelist3.png'), title: 'Explore list 2' },
        {id: 3, source: require('../Images/explorelist3.png'), title: 'Explore list 3' },
        {id: 4, source: require('../Images/explorelist4.png'), title: 'Explore list 4' },
        {id: 5, source: require('../Images/explorelist1.png'), title: 'Explore list A' },
        {id: 6, source: require('../Images/explorelist3.png'), title: 'Explore list B' }
    ]);


    const numberOfColumns = 2;

    return (
        <View >
        <FlatList
        style={{marginTop: "3%", marginLeft: "2.3%"}}
        numColumns={numberOfColumns}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
        <ScrollView>
        <Text
        style={{fontSize: 18, fontWeight: "bold", paddingBottom:"3%", textAlign: "center", color: "#BC8F8F"}}
        >{item.title} </Text>
        <Image style={{width: 190, height: 190, marginBottom: "5%"}} source={item.source} />
        </ScrollView>
         )}
      />
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
  
    
   }
}) ;

export default ImagesComponent;