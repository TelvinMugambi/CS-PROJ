
import * as Linking from "expo-linking";
import { createSessionFromUrl } from "./components/Auth";
import Authentication from "./navigation/Authentication";
import Application from './navigation/Application';
import { Stack } from 'expo-router/stack';
import React from "react";

import { Text, View } from "react-native";

const url = Linking.useURL();

  React.useEffect(() => {
    if (url) {
      createSessionFromUrl(url);
    }
  }, [url]);

export default function index(){
    return(
      <Stack>
        <Stack.Screen name = "Authentication"  options={{headerShown:false}} />
        <Stack.Screen name = "Application" options={{headerShown:false}} />
      </Stack>
    )
}
