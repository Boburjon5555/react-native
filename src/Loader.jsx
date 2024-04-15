
import React from 'react';
import { StyleSheet,Text } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';



export default function  Loader()  {
  
    return ( 
      <AnimatedLoader
      
        visible={true}
        overlayColor="rgb(0,0,255)"
        source={require("../assets/load.json")}  
        animationStyle={styles.lottie}
        speed={1}
      >
    
      </AnimatedLoader>
      );
  }

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
    backgroundColor: 'darkblue'
  }
});