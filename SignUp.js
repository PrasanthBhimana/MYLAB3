// SignUp.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Platform, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(null);
  const [biography, setBiography] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(Platform.OS === 'ios');
    setBirthdate(currentDate);
  };

  const handleSubmit = () => {
    console.log({
      email,
      password,
      name,
      birthdate: birthdate.toISOString().split('T')[0],
      country,
      gender,
      biography
    });
    Alert.alert('Sign Up', 'User data logged to console.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inner}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.button}>
            <Text style={styles.buttonText}>Select Birthdate</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={birthdate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {/* Country Dropdown */}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.pickerLabel}>Select Country</Text>
            <RNPickerSelect
              placeholder={{ label: 'Select Country', value: null }}
              items={[
                { label: 'USA', value: 'USA' },
                { label: 'Canada', value: 'Canada' },
                { label: 'India', value: 'India' },
                { label: 'UK', value: 'UK' }
              ]}
              onValueChange={setCountry}
              value={country}
              style={pickerStyle}
            />
            {country && <Text style={styles.selectedValue}>Selected Country: {country}</Text>}
          </View>

          {/* Gender Dropdown */}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.pickerLabel}>Select Gender</Text>
            <RNPickerSelect
              placeholder={{ label: 'Select Gender', value: null }}
              items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
                { label: 'Other', value: 'Other' }
              ]}
              onValueChange={setGender}
              value={gender}
              style={pickerStyle}
            />
            {gender && <Text style={styles.selectedValue}>Selected Gender: {gender}</Text>}
          </View>

          {/* Biography Input */}
          <View style={styles.biographyContainer}>
            <Text style={styles.pickerLabel}>Biography</Text>
            <TextInput
              placeholder="Write your biography here..."
              value={biography}
              onChangeText={setBiography}
              style={styles.biographyInput}
              multiline={true}
            />
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
  },
  inner: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2C6B6F',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#B2DFDB',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C6B6F',
    marginBottom: 10,
  },
  selectedValue: {
    fontSize: 16,
    color: '#00796B',
    marginTop: 5,
  },
  biographyContainer: {
    marginBottom: 20,
  },
  biographyInput: {
    height: 80,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  inputAndroid: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
});

export default SignUp;
