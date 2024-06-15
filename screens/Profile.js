import { View, Text,TextInput, SafeAreaView, ScrollView } from 'react-native'
import COLORS from '../constants/color';
import Button from '../components/Button';
import { useState } from 'react';
import { Session } from '@supabase/supabase-js'



export default function Profile(){
    
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
            }}>Profile</Text>
        </View>
    )
}