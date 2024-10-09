import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from "expo-font";

function Prime ({navigation}) {
 const [fontsLoaded] = useFonts({
        'Inter-ExtraBold': require('../assets/fonts/static/Inter-ExtraBold.ttf'),
        'Inter-Regular': require('../assets/fonts/static/Inter-Regular.ttf')
      });
      if(!fontsLoaded)return undefined;
      setTimeout(() => {
        navigation.navigate('Login')
      }, 3000)
      return (
        <View style={styles.container}>  
          <Image style={styles.image} source={require('../assets/fractalShard.png')} />
          <Text style={styles.bigtext}>SHARD</Text>
          <Text style={styles.text}>Enhance your productivity</Text>
          <StatusBar style="auto" />
        </View>
      );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:'100%',
      display:'flex',
      backgroundColor: '#FFF8F8',
      alignItems: 'center',
       justifyContent: 'center',
    },
  
    image:{
      alignSelf:"center",
      position: "relative",
      top:'-10%',
    },
  
    text:{
      fontSize:14,
      position: "relative",
      top:'-10%',
      fontFamily:"Inter-Regular"
    },
  
    bigtext:{
      fontSize:24,
      marginTop:16,
      fontStyle:"italic",
      fontWeight:'bold',
      position: "relative",
      top:'-10%',
      fontFamily:'Inter-ExtraBold',
      marginBottom:8.
    }
  });

  export default Prime;