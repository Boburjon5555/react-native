import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './src/Homescreen';
import Tourscreen from './src/Tourscreen';
import Login from './src/Login'


const Stack = createNativeStackNavigator();

export default function App() { 


return   (
  
    <SafeAreaProvider>
      <StatusBar style='dark' /> 
      <NavigationContainer> 
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>

           <Stack.Screen name={'Login'} component={Login} /> 
          <Stack.Screen name={'Home'} component={Homescreen} />
          <Stack.Screen name={'Tour'} component={Tourscreen} /> 
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}
