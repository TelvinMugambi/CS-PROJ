import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PhoneInput, {
  ICountry,
} from 'react-native-international-phone-number';
import COLORS from '../constants/color';

export default function PhoneNumberInput() {
  const [selectedCountry, setSelectedCountry] =
    useState<null | ICountry>(null);
  const [phone, setphone] = useState<string>('');

  function handlephone(phoneNumber: string) {
    setphone(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  return (
    <View style={{ 
        width: '100%', 
        flex: 1, 
        padding: 22,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        }}>
      <PhoneInput
        value={phone}
        onChangePhoneNumber={handlephone}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
        
      />
      <View style={{ marginTop: 10 }}>
        <Text>
          Country:{' '}
          {`${selectedCountry?.name?.en} (${selectedCountry?.cca2})`}
        </Text>
        <Text>
          Phone Number:{' '}
          {`${selectedCountry?.callingCode} ${phone}`}
        </Text>
      </View>
    </View>
  );
}