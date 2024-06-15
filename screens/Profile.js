import { View, Text,TextInput, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import COLORS from '../constants/color';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Session } from '@supabase/supabase-js'



export default function Profile(){
    const{email, setEmail} = useState('')
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
  
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={console.log('Insert Image')}>
            {/* A way to choose an Image */}
            <View style={styles.editIcon}>
              <Ionicons name="pencil" size={20} color="orange" />
            </View>
          </TouchableOpacity>
          <Text style={styles.name}>GFXAgency</Text>
          <Text style={styles.designation}>UI UX DESIGN</Text>
        </View>
  
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
  
        <Button title="Logout" onPress={console.log("Handle log out")} color="orange" />
      </View>
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