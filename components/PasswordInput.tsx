// PasswordInput.tsx
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import COLORS from '../constants/color';
import { Ionicons } from "@expo/vector-icons";

interface Guidelines {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  specialChar: boolean;
}

interface PasswordInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {
    const [guidelines, setGuidelines] = useState<Guidelines>({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
    });

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const checkPassword = (text: string) => {
    const length = text.length >= 8;
    const uppercase = /[A-Z]/.test(text);
    const lowercase = /[a-z]/.test(text);
    const number = /[0-9]/.test(text);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(text);

    setGuidelines({
      length,
      uppercase,
      lowercase,
      number,
      specialChar,
    });

    setPassword(text);
  };

  return (
    <View style={styles.container}>
        <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 8
        }}>Password
        </Text>
        <View style={{
            
        }}>

            <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor={COLORS.black}
                    secureTextEntry={isPasswordShown}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    
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
      
      <View style={styles.guidelines}>
        <Text style={[styles.guideline, guidelines.length && styles.valid]}>
          {guidelines.length ? '✔ ' : '✘ '} Minimum 8 characters
        </Text>
        <Text style={[styles.guideline, guidelines.uppercase && styles.valid]}>
          {guidelines.uppercase ? '✔ ' : '✘ '} At least one uppercase letter
        </Text>
        <Text style={[styles.guideline, guidelines.lowercase && styles.valid]}>
          {guidelines.lowercase ? '✔ ' : '✘ '} At least one lowercase letter
        </Text>
        <Text style={[styles.guideline, guidelines.number && styles.valid]}>
          {guidelines.number ? '✔ ' : '✘ '} At least one number
        </Text>
        <Text style={[styles.guideline, guidelines.specialChar && styles.valid]}>
          {guidelines.specialChar ? '✔ ' : '✘ '} At least one special character
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
    padding: 10,
    marginBottom: 10,
    
  },
  guidelines: {
    marginTop: 10,
    borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
  },
  guideline: {
    color: '#999',
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8
  },
  valid: {
    color: 'green',
  },
});

export default PasswordInput;
