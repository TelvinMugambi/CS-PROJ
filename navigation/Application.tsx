import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Text } from "react-native";
import { Home, Notifications, Profile, Calendar, Maps, Chats } from "../screens";

const Drawer = createDrawerNavigator();
export default function Application({navigation}:any){
    return (
        <Drawer.Navigator 
        initialRouteName='Home'
        drawerContent={props =>
            <DrawerContentScrollView{...props}>
                <Text style={{
                    color:'#000', 
                    fontSize: 12, 
                    textAlign: 'center', 
                    fontWeight:'bold'
                }}>HELPY</Text>
                <DrawerItem label={'Home'} onPress={()=>navigation.navigate("Home")} />
                <DrawerItem label={'Notifications'} onPress={()=>navigation.navigate("Notifications")} />
                <DrawerItem label={'Profile'} onPress={()=>navigation.navigate("Profile")} />
                <DrawerItem label={'Chats'} onPress={()=>navigation.navigate("Chats")} />
                <DrawerItem label={'Profile'} onPress={()=>navigation.navigate("Profile")} />
                <DrawerItem label={'Maps'} onPress={()=>navigation.navigate("Maps")} />


            </DrawerContentScrollView>}
        >
            <Drawer.Screen
                name = "Home" 
                component={Home} 
                options={{headerShown: true}}
             />
            <Drawer.Screen name = "Profile" component={Profile} options={{headerShown: true}} />
            <Drawer.Screen name = "Notifications" component={Notifications} options={{headerShown: true}} />
            <Drawer.Screen name = "Calendar" component={Calendar} options={{headerShown: true}} />
            <Drawer.Screen name = "Chats" component={Chats} options={{headerShown: true}} />
            <Drawer.Screen name = "Maps" component={Maps} options={{headerShown: true}} />
        </Drawer.Navigator>
    )
}