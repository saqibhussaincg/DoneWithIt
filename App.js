import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TouchableHighlight,
TouchableNativeFeedback, Button, Alert, Dimensions, StatusBar, Platform } from 'react-native';

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';

import Card from './app/components/Card';

export default function App() {

  return(
    // <WelcomeScreen />
    // <ViewImageScreen />

    // === BORDERS ===
    // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'royalblue',
    //     borderRadius: 50,
    //     // borderTopWidth: 20,
    //     // borderTopLeftRadius: 50,
    //     }}>
    //   </View>
    // </View>

    // === SHADOWS ===
    // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    //   <View style={{
    //     backgroundColor: "dodgerblue",
    //     width: 100,
    //     height: 100,
    //     }}>
    //   </View>
    // </View>

    // === STYLING TEXT ===

    // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    //   {/* <Text style={{
    //     // fontFamily: "Poppins",
    //     fontSize: 30,
    //     fontStyle: 'italic',
    //     fontWeight: '600',
    //     color: 'tomato',
    //     textTransform: 'capitalize',
    //   }}>I Love React Native</Text> */}
    //   <AppText>I Love React Native</AppText>
    // </View>

        // === ICONS ===

        // <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

        // <MaterialCommunityIcons name='email' size={200} color="dodgerblue" />

        // </View>

        // === <AppText> ===

        //  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        //  <AppText>I LOVE REACT</AppText>
        //  </View>

        // === <AppButton> ===

        //  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        //  <AppButton title="login" onPress={() => console.log('tapped')}></AppButton>
        //  </View>

        // === CARD COMPONENT ===
        <View style={{
          backgroundColor: '#f8f4f4',
          padding: 20,
          paddingTop: 100,
        }}>
          <Card 
            title="Red Jacket For Sale"
            subTitle="$100"
            image={require("./app/assets/jacket.jpg")}
          />
        </View>


  )
    {/* {/* // <View 
    // style={{
    //   backgroundColor: "#fff", flex: 1,
    //   }}>

    // <View 
    // style={{
    //   backgroundColor: "dodgerblue", flex: 2,
    //   }}/>
    // <View 
    // style={{
    //   backgroundColor: "gold", flex: 1,
    //   }}/>
    // <View 
    // style={{
    //   backgroundColor: "tomato", flex: 1,
    //   }}/>

    // </View> */}
  
{/* 
  // console.log(Dimensions.get("screen"))
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());

  // const {landscape} = useDeviceOrientation();

  // const handlePress = () => console.log('Text Cliked') */}
 



      {/* <View 
        style={{
        backgroundColor: 'orange',
        width: '100%',
        height: '30%',
      }}>
      </View> */}

      
      {/* <View 
        style={{
        backgroundColor: 'orange',
        width: '100%',
        height: landscape ? "100%" : "30%",
      }}>
      </View> */}

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

      {/* <StatusBar style="auto" /> */}
  

 

}
console.log("app executed");


{/* // const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// }); */}



// const containerStyle = { backgroundColor: "orange",
// width: 400,
// height: 50,
// alignItems: 'center',
// justifyContent: 'center',

// } */}
