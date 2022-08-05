import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';

import Constants from 'expo-constants';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
console.log(Constants);

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {
    return (
        <Screen>
        <FlatList
        data={messages}  // data k andar message wala array of object agaya jo oper dia hai.

        keyExtractor={message => message.id.toString()} // keyextractor unique key extract karne k liye hota hai.

        renderItem={({item}) => 
        <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
         />}

         ItemSeparatorComponent={ListItemSeparator}

         />

         </Screen>
    );
}

export default MessagesScreen;

const styles = StyleSheet.create({
    
})

// <Screen> name ka component use kar rahay hain.
// <Screen> Re-useable component bana lia jise ab kahi bhi use kar sakte hain.
// <Safeareaview> k jagah ab <Screen> use karenge tou same kaam karega.

//FlatList react native ka built-in API component hai or os k props bhi hain.


// keyExtractor here we have to pass a function that will use to extract a unique key from each object of an array.

// so we can pass an arrow function like message goes to message.id.toString() tosting mai convert karna parhega warna wo warning dega.

// renderItem used to rendering each item.

// renderItem takes an item from data and render it into the list.

// Flatlist component has a prop called ItemSeparatorComponent={}

// separator har bar use karna parhega tou os k liye re-usable component bana lenge ItemSeparatorComponent k liye.

// ItemSeparatorComponent mai ab custom function ki jagah re-useable component use kar rahay hain ListItemSeparator k naam ka.

