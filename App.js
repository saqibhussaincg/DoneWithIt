import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TouchableHighlight,
TouchableNativeFeedback, Button, Alert, Dimensions } from 'react-native';


export default function App() {

  console.log(Dimensions.get("screen"))

  const handlePress = () => console.log('Text Cliked')
  return (
    // <View style={styles.container}>
    //   <Text>Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>

    

    <SafeAreaView style={styles.container}>

      <View style={{
        backgroundColor: 'dodgerblue',
        width: '50%',
        height: 50,
      }}>

      </View>

      {/* <View style={containerStyle}>
      <Text 
      numberOfLines={1}
      onPress={handlePress}>
        Hello React
      </Text>
      </View> */}
      

      {/* <Image style={{width : 300, height: 300}}
      source={require('./assets/icon.png')}
      /> */}

      {/* <TouchableOpacity onPress={() => console.log("Image Touched")}>
      <Image
      source={{
        width: 200,
        height: 300,
        uri:"https://picsum.photos/200/300",
      }}
      />
      </TouchableOpacity> */}

      {/* <TouchableHighlight>
      <Image
      source={{
        width: 200,
        height: 300,
        uri:"https://picsum.photos/200/300",
      }}
      />  
      </TouchableHighlight> */}
{/* 
      <TouchableNativeFeedback>
        <View style={{width: 200, height: 70, backgroundColor: "dodgerblue"}}></View>
      </TouchableNativeFeedback> */}



      {/* <Button
        color="orange"
        title="Alert Button"
        onPress={() => alert('Button Clicked')}
      /> */}



      {/* <Button
        color="grey"
        title="Alert Asking Button"
        onPress={() => Alert.alert('My Title', 'My Message', [
          { text : 'Yes', onPress: () => console.log('Yes')},
          { text : 'No', onPress: () => console.log('No')}
        ])}
      /> */}

      
      {/* <Button
        title="Promt Button"
        onPress={() => Alert.prompt('My Title', 'My Message', (text) => console.log(textw) )}
      />
     */}

      <StatusBar style="auto" />
    </SafeAreaView>

  );

}
console.log("app executed");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// const containerStyle = { backgroundColor: "orange",
// width: 400,
// height: 50,
// alignItems: 'center',
// justifyContent: 'center',

// }
