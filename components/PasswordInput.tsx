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

  const [suggestions, setSuggestions] = useState([]);
  const [strength, setStrength] = useState('');

  const validatePassword = (input) => {
    let newSuggestions = [];
    if (input.length < 8) {
      newSuggestions.push('Password should be at least 8 characters long')
    }
    if (!/\d/.test(input)) {
      newSuggestions.push('Add at least one number')
    }

    if (!/[A-Z]/.test(input) || !/[a-z]/.test(input)) {
      newSuggestions.push('Include both upper and lower case letters')
    }

    if (!/[^A-Za-z0-9]/.test(input)) {
      newSuggestions.push('Include at least one special character')
    }

    setSuggestions(newSuggestions);

    // Determine password strength based on suggestions 
    if (newSuggestions.length === 0) {
      setStrength('Very Strong');
    }
    else if (newSuggestions.length <= 1) {
      setStrength('Strong')
    }
    else if (newSuggestions.length <= 2) {
      setStrength('Moderate')
    }
    else if (newSuggestions.length <= 3) {
      setStrength('Weak')
    }
    else {
      setStrength('Too Weak')
    }
  }
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

        {/* <TextInput
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

                </TouchableOpacity> */}
        <View>

          <TextInput placeholder="Enter your password"
          onChangeText={(text) => {
            setPassword(text);
            validatePassword(text)
          }}
          style={styles.textInput} />

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
        
        <Text style={styles.strengthText}>
          Password Strength: {strength}
        </Text>
        <Text style={styles.suggestionsText}>
          {suggestions.map((suggestion, index) => (
            <Text key={index}>
              {suggestion}{'\n'}
            </Text>))}
        </Text>
        <View style={styles.strengthMeter}>
          <View style={{
            width: `${(strength === 'Very Strong' ? 100 :
              (strength === 'Strong' ? 75 :
                (strength === 'Moderate' ? 50 :
                  (strength === 'Weak' ? 25 : 0))))}%`,
            height: 20,
            backgroundColor: strength === 'Too Weak' ? 'red' :
              (strength === 'Weak' ? 'orange' :
                (strength === 'Moderate' ? 'yellow' :
                  (strength === 'Strong' ? 'green' : 'limegreen')))
          }}>
          </View>
        </View>

      </View>

{/* 
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
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: { 
    flex: 1, 
    alignItems: 'center', 
}, 
Heading: { 
    marginTop: 40, 
    padding: 40, 
}, 
HeadingText: { 
    fontSize: 25, 
    alignItems: 'center', 
    fontWeight: 'bold', 
}, 
textInput: { 
    borderWidth: 1, 
    width: 300, 
    padding: 10, 
    marginBottom: 10, 
}, 
strengthText: { 
    fontWeight: 'bold', 
    fontSize: 18, 
    color: '#007700', 
}, 
suggestionsText: { 
    color: 'red', 
}, 
strengthMeter: { 
    width: '80%', 
    height: 20, 
    backgroundColor: '#ccc', 
    marginTop: 20, 
    borderRadius: 10, 
    overflow: 'hidden', 
}, 
});

export default PasswordInput;
