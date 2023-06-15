import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen, SignupScreen, WelcomeScreen } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import 'expo-dev-client';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Sign Up"
        component={SignupScreen}
        options={
          {
            headerShown: false
          }
        }   
        />
        <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options={
          {
            headerShown: false
          }
        }   
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
