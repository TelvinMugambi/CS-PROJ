import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text } from "react-native";
import { Home, Notifications, Profile, Bookings} from "../screens";
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function Application({navigation}:any){
    return (
      
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Tab.Screen name = "Notifications" component={Notifications} options={{headerShown: false}} />
        <Tab.Screen name = "Booking" component={Bookings} options={{headerShown: false}} />
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      </Tab.Navigator>
    )
}