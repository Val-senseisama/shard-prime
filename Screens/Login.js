import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useFonts } from "expo-font";

function Login ({navigation}) {
    const [Email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
 const [fontsLoaded] = useFonts({
        'Inter-ExtraBold': require('../assets/fonts/static/Inter-ExtraBold.ttf'),
        'Inter-Regular': require('../assets/fonts/static/Inter-Regular.ttf'),
         'Inter-Bold': require('../assets/fonts/static/Inter-Bold.ttf'),
         'ACME-Regular': require('../assets/fonts/Acme/Acme-Regular.ttf'),
      });
      if(!fontsLoaded)return undefined;
     
      return (
        // <ScrollView style={styles.containers}>
        <View style={styles.container}>  
          <Image style={styles.image} source={require('../assets/Fractal shard-sm.png')} />
          <Text style={styles.bigtext}> SIGN IN</Text>

          {/* box */}
          <View style={[styles.box, styles.elevation, styles.androidShadow]}>
            <Text style={styles.label}>Email</Text>
          <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={Email}
        placeholder='Email'
        placeholderTextColor={"#B9B9B9"}
      />
     <Text style={styles.label}>Password</Text>

        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Password'
        placeholderTextColor={"#B9B9B9"}
      />
      <Text style={styles.smoltext}>Or sign in with</Text>

      <View style={styles.social}>
        <Image source={require('../assets/Frame 2.png')}></Image>
        <Image source={require('../assets/Frame 7.png')}></Image>
        <Image source={require('../assets/fb.png')}></Image>
      </View>

      <Text style={styles.smoltext}>Don't have an account? <Text style={styles.colorText}>Click here</Text> </Text>
          </View>
          <StatusBar style="auto"  />
        </View>
        // </ScrollView>
      );
}



const styles = StyleSheet.create({
    containers:{
      marginTop:200
    },
    container: {
      flex: 1,
      minHeight:'100%',
      display:'flex',
      backgroundColor: '#FFF8F8',
      alignItems: 'center',
       justifyContent: 'center',
       overflow:'none'
    },
  
    image:{
      alignSelf:"center",
      position: "relative",
     // top:'-10%',
    },

    box:{
        backgroundColor: '#FFF8F8',
        position: "relative",
      //top:'-10%',
      paddingTop:32,
      paddingHorizontal:16,
      paddingBottom:24,
      height:390,
      borderRadius:30
    },

    elevation:{
        elevation:25,
      shadowColor:'#52006A',
      shadowOffset:{
        width:3,
        height:3
      },
      shadowOpacity:0.67,
      shadowRadius:6
    },

    androidShadow:{
        elevation:20,
    },

    input:{
        backgroundColor: 'transparent',
        margin:8,
        minWidth:254,
        minHeight:32,
        borderBottomColor:'#B9B9B9',
        borderBottomWidth:1,
        fontSize:14,
    },
  
    text:{
      fontSize:14,
      fontFamily:"Inter-Regular"
    },

    label:{
        fontSize:14,
        fontFamily:'ACME-Regular',
        margin:4,
        color:'#B9B9B9'
    },
  
    bigtext:{
      fontSize:24,
      margin:32,
      fontWeight:'bold',
      position: "relative",
     // top:'-10%',
      fontFamily:'Inter-Bold',
      marginBottom:32.
    },
    smoltext:{
      fontSize:10,
      fontFamily:'Inter-Regular',
      padding:16,
      textAlign:'center',
      fontStyle:'italic',
      color:"#1e1e1e"
    },
    social:{
      width:'82%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      marginVertical:12,
    },
    colorText:{
      color:"#"
    }
  });

  export default Login;