import { View, Text,TextInput, SafeAreaView, ScrollView } from 'react-native'
import COLORS from '../constants/color';
import Button from '../components/Button';
import { useState } from 'react';


export default function Profile(){
    const {email, setEmail} = useState('')
    const {phone, setPhone} = useState('')
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>

                {/* Email view */}
            <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Show your email address'
                            placeholderTextColor={COLORS.black}
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                    {/* Phone number view */}
            <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Phone Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Show your phone number'
                            placeholderTextColor={COLORS.black}
                            onChangeText={(phone) => setPhone(phone)}
                            value={phone}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
                
                <Button title="Log out"/>
            </ScrollView>
        </SafeAreaView>
    )
}