import { View, Text,TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import COLORS from '../constants/color';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import Account from '../components/Account';
import { Session } from '@supabase/supabase-js'



export default function Profile(){
    const{email, setEmail} = useState('')
    return(
        <Account />
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    editIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 2,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    designation: {
      color: 'gray',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });