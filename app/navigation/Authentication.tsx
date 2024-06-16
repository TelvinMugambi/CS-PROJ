import { Stack } from 'expo-router/stack';
import { Welcome, Signup, Login, ResetPassword, PasswordResetPage } from '../screens';

export default function Authentication(){
    return(
        <Stack>
            <Stack.Screen name = "Welcome"  options={{headerShown:false}} />
            <Stack.Screen name = "Signup"  options={{headerShown:false}} />
            <Stack.Screen name = "Login"  options={{headerShown:false}} />
            <Stack.Screen name = "ResetPassword"  options={{headerShown:false}} />
            <Stack.Screen name = "PasswordResetPage"  options={{headerShown:false}} />
        </Stack>
    )
}