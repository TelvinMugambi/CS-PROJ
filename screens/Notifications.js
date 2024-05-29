import { View, Text } from 'react-native'


export default function Notifications(){
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