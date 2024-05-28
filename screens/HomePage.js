import { View, Text} from "react-native";

const HomePage = ({navigation}) =>{
    return(
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
            }}>WELCOME</Text>
        </View>
    )
}

export default HomePage