import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomePage,Login, Notifications, PasswordResetPage, ResetPassword, Signup, Welcome } from "./screens";
import * as Linking from "expo-linking";
import { createSessionFromUrl } from './components/Auth';
import React from "react";
const Stack = createNativeStackNavigator();

export default function App() {

  const url = Linking.useURL();

  React.useEffect(() => {
    if (url) {
      createSessionFromUrl(url);
    }
  }, [url]);

  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Reset Password"
          component={ResetPassword}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Password Reset"
          component={PasswordResetPage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};