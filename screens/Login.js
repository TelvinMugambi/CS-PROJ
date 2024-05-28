import { View, Text, Image , Pressable, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/color';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { supabase } from '../lib/supabase';
import { sendMagicLink} from '../components/Auth';

import HomePage from './HomePage';
//Implementing Login with supabase
// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    //Sign In with Email
    // async function signInWithEmail() {
    //     setLoading(true)
    //     const {error } = await supabase.auth.signInWithPassword({
    //       email: email,
    //       password: password,
    //     })

    //     if (!error){
    //         navigation.navigate("HomePage");
    //     }
    //     else{
    //         Alert.alert('User does not exist')
    //     }
    //     if (error) Alert.alert(error.message)
    //     setLoading(false)
    // }

    // GoogleSignin.configure({
    //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //     webClientId: '277252988630-p5ra1tsj7j8cpibcahm2q7f0v4dde97q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    // });

    //Google sign in functionality
    // googlesignIn = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const userInfo = await GoogleSignin.signIn();
    //       console.log(JSON.stringify(userInfo, null, 2))
    //     //   setState({ userInfo });
    //     } catch (error) {
    //       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    //         // user cancelled the login flow
    //       } else if (error.code === statusCodes.IN_PROGRESS) {
    //         // operation (e.g. sign in) is in progress already
    //       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    //         // play services not available or outdated
    //       } else {
    //         // some other error happened
    //       }
    //     }
    // };    
    //Sign in with magic link
    // const signInWithEmail = async () => {
    //     try {
    //       await sendMagicLink(email);
    //       alert("Magic link sent to your email");
    //     } catch (error) {
    //       alert("Error sending magic link: " + error.message);
    //     }
    //   };

  

    
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Hello again you have been missed!</Text>
                </View>

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
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            onChangeText={(email) => setEmail(email)}
                            value={email}
                            autoCapitalize={'none'}
                            keyboardType='email-address'
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
                    }}>Password</Text>

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
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                

                <Button
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    disabled={loading} onPress={() => signInWithEmail()}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Login with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    

                    <TouchableOpacity
                        onPress={() =>googlesignIn()}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register</Text>
                    </Pressable>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 0
                }}>
                    <Text style={{fontSize: 16, color: COLORS.black }}>Forgot Password ? </Text>
                    <Pressable onPress={() => navigation.navigate("Reset Password")}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Reset password</Text>
                    </Pressable>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login