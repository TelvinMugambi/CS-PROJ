import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,Text } from "react-native";
import { Home, Profile, Bookings, Search} from "../screens";
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
export default function Application({navigation}:any){
    return (
      
        <Tab.Navigator 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                position:'absolute',
                bottom: 22,
                left: 20,
                right: 20,
                elevation: 0, 
                backgroundColor: '#FFFFFF',
                borderRadius: 15,
                height: 60

            }
        }}
        >
        <Tab.Screen name="Home" component={Home} 
        options={{
            headerShown: false,
            tabBarIcon: ()=>(
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Ionicons name="home-outline" size={24} color="black" />
                    <Text>Home</Text>
                </View>
            )

        }} 
        />
        <Tab.Screen name="Search" component={Search} 
        options={{
            headerShown: false,
            tabBarIcon: ()=>(
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Ionicons name="search-outline" size={24} color="black" />
                    <Text>Search</Text>
                </View>
            )

        }} 
        />
        <Tab.Screen name = "Bookings" component={Bookings} 
        options={{
            headerShown: false,
            tabBarIcon: ()=>(
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Ionicons name="calendar-number-outline" size={24} color="black" />
                    <Text>Bookings</Text>
                </View>
            )
        }} />
        <Tab.Screen name = "Profile" component={Profile} 
        options={{
            headerShown: false,
            tabBarIcon: ()=>(
                <View style={{alignItems: 'center', justifyContent:'center'}}>
                    <Ionicons name="person-outline" size={24} color="black" />
                    <Text>Profile</Text>
                </View>
            )
        }} />
      </Tab.Navigator>
    )
}