import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, Signup, Login, PasswordResetPage,ResetPassword } from "../screens";

const Stack = createNativeStackNavigator();

export default function Authentication(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Welcome" component={Welcome} options={{headerShown:false}} />
            <Stack.Screen name = "Signup" component={Signup} options={{headerShown:false}} />
            <Stack.Screen name = "Login" component={Login} options={{headerShown:false}} />
            <Stack.Screen name = "ResetPassword" component={ResetPassword} options={{headerShown:false}} />
            <Stack.Screen name = "PasswordResetPage" component={PasswordResetPage} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}