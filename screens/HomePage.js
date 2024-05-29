import { View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, NotificationsScreen, CalendarScreen } from './screens';

const Drawer = createDrawerNavigator();


export default function HomePage({navigation}){
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomePage">
        <Drawer.Screen name="HomePage" component={(

        <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                }}>Home Page</Text>
            </View>



        )} />
      </Drawer.Navigator>
    </NavigationContainer>

}

