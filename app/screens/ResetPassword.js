import { View, Text, Image , Pressable, TextInput, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/color';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { supabase } from '../lib/supabase';



export const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [resetpassword, setresetpassword] = useState(false);
    const [sendsuccess, setsendsuccess] = useState(false);

    const sendresetpassword = async () => {
        try {
          const { error } = await supabase.auth.resetPasswordForEmail(email, {

            redirectTo: "bio.telvin://screens/PasswordResetPage"
            // replace with the actual URL of your PasswordResetPage
          });
          if (error) {
            throw error;
          }
        } catch (error) {
          console.log(error);
        }
      };
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22,  }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        Reset your password
                    </Text>

                    
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        alignItems: 'center',
                        justifyContent: 'center'
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
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
                
                <Button
                    title="Reset Password"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={() => sendresetpassword()}
                />                
            </View>
        </SafeAreaView>
    )
}

export default ResetPassword;