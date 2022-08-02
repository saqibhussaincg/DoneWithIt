import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  const handlePress = () => console.log('Text Cliked')
  return (
    // <View style={styles.container}>
    //   <Text>Hello World</Text>
    //   <StatusBar style="auto" />
    // </View>



    <SafeAreaView style={styles.container}>

      <Text 
      numberOfLines={1}
      onPress={handlePress}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </Text>

      {/* <Image style={{width : 300, height: 300}}
      source={require('./assets/icon.png')}
      /> */}

      <StatusBar style="auto" />
    </SafeAreaView>

  );

}
console.log("app executed");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
