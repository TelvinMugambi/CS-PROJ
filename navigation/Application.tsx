import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View,Text } from "react-native";
import { Home, Notifications, Profile, Calendar, Maps, Chats } from "../screens";
import { Ionicons } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();
export default function Application({navigation}:any){
    return (
        <Drawer.Navigator 

        drawerContent={(props) => <View><Text>Drawer</Text><DrawerItemList {...props} /></View>}
        >
            <Drawer.Screen
                name = "Home" 
                component={Home} 
                options={{
                    headerShown: true,
                    drawerIcon: (props: {color:string; size: number; focused: boolean;}) => <Ionicons name="home-outline" size={24} color="black" />
                }}
             />
            <Drawer.Screen name = "Profile" component={Profile} options={{
                headerShown: true,
                drawerIcon: (props: {color: string;size: number;focused: boolean;
                  }) => <Ionicons name="person-outline" size={24} color="black" />
            }} />
            <Drawer.Screen name = "Notifications" component={Notifications} options={{
                headerShown: true,
                drawerIcon: (props: {color:string,  size: number, focused: boolean;})=><Ionicons name="chatbox-outline" size={24} color="black" />
            }} />
            <Drawer.Screen name = "Calendar" component={Calendar} options={{
                headerShown: true,
                drawerIcon: (props: {color:string, size:number, focused:boolean;}) => <Ionicons name="calendar-clear-outline" size={24} color="black" />    
            }} />
            <Drawer.Screen name = "Chats" component={Chats} options={{
                headerShown: true,
                drawerIcon: (props:{color:string, size:number, focused:boolean;})=> <Ionicons name="calendar-clear-outline" size={24} color="black" />

            }} />
            <Drawer.Screen name = "Maps" component={Maps} options={{headerShown: true,
                drawerIcon: (props:{color:string, size:number, focused:boolean;})=> <Ionicons name="map-outline" size={24} color="black" />
            }} />
        </Drawer.Navigator>
    )
}