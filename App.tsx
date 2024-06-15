import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Linking from "expo-linking";
import { createSessionFromUrl } from './components/Auth';
import React from "react";
import Authentication from './navigation/Authentication';
import Application from './navigation/Application';
import { Session } from '@supabase/supabase-js'

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
  <Stack.Navigator>
        <Stack.Screen name = "Authentication" component={Authentication} options={{headerShown:false}} />
        <Stack.Screen name = "Application" component={Application} options={{headerShown:false}} />
      </Stack.Navigator>

    </NavigationContainer>
    
    
  );
};