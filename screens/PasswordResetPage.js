import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/color';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { supabase } from '../lib/supabase';


const PasswordResetPage = ({ navigation }) => {
    const [newpassword, setnewpassword] = useState('');
    const [confirmnewpassword, setconfirmnewpassword] = useState('');

    const changepassword = async () =>{
        try{
            if( newpassword !== confirmnewpassword) {
                return alert('Passwords do not match')
            }
            const {data, error} = await supabase.auth.updateUser({
                password: data.newpassword,
                
            })
        } 

        catch(error){
            console.log(error)
        }

        
    }
    
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
                    Create your new password
                </Text>

                
            </View>

            <View style={{ marginBottom: 12 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>New password</Text>

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
                        placeholder='Enter your new password'
                        placeholderTextColor={COLORS.black}
                        onChangeText={(newpassword) => setnewpassword(newpassword)}
                        value={newpassword}
                        secureTextEntry={true}
                        style={{
                            width: "100%"
                        }}
                    />

                </View>
            </View>

            <View style={{ marginBottom: 12 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>Confirm password</Text>

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
                        placeholder='Confirm your new password'
                        placeholderTextColor={COLORS.black}
                        onChangeText={(text) => setconfirmnewpassword(text)}
                        value={confirmnewpasswordnewpassword}
                        secureTextEntry={true}
                        style={{
                            width: "100%"
                        }}
                    />

                </View>


            </View>

            <View style={{ marginBottom: 12 }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8
                }}>Confirm password</Text>

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
                        placeholder='Confirm your new password'
                        placeholderTextColor={COLORS.black}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        style={{
                            width: "100%"
                        }}
                    />

                </View>


            </View>

            <Button
                    title="Change Password"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={() => changepassword()}
                />  
                            
        </View>
        </SafeAreaView>
    )
}

export default PasswordResetPage
