import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './routes/homestack';



export default function App() {
  return(
    <NavigationContainer>
    <Navigator />
     </NavigationContainer>
  )
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height:'100%',
//     display:'flex',
//     backgroundColor: '#FFF8F8',
//     alignItems: 'center',
//      justifyContent: 'center',
//   },

//   image:{
//     alignSelf:"center",
//     position: "relative",
//     top:'-10%',
//   },

//   text:{
//     fontSize:14,
//     position: "relative",
//     top:'-10%',
//     fontFamily:"Inter-Regular"
//   },

//   bigtext:{
//     fontSize:24,
//     marginTop:16,
//     fontStyle:"italic",
//     fontWeight:'bold',
//     position: "relative",
//     top:'-10%',
//     fontFamily:'Inter-ExtraBold',
//     marginBottom:8.
//   }
// });
