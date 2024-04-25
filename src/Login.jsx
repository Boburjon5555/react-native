import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { useState } from 'react';



const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  const handleLogin = async () => {
    // Perform login authentication here
    // For now, let's just navigate to the next page  

    const users = [
        { username: 'admin', password: 'password' },
        { username: 'user', password: '1234' }
      ];
  
      // Check if the provided username and password match any user data
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        // Login successful
        navigation.navigate('Home', { user });
      } else {
        // Login failed
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    };

   /* if (username === 'admin' && password === 'password') { 
        navigation.navigate('Home')
        Alert.alert('Logged in successfully!');
        
      } else {
        Alert.alert('Invalid username or password');}
  };*/  

 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'aqua',
    },
    heading: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });


export default Login   

