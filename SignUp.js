// SignUp.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Platform, ScrollView, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
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
    <ScrollView contentContainerStyle={styles.container}>
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
      <RNPickerSelect
        placeholder={{ label: 'Select Country', value: null }}
        items={[
          { label: 'USA', value: 'USA' },
          { label: 'Canada', value: 'Canada' },
        ]}
        onValueChange={setCountry}
        style={pickerStyle}
      />
      <RNPickerSelect
        placeholder={{ label: 'Select Gender', value: null }}
        items={[
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' },
          { label: 'Other', value: 'Other' },
        ]}
        onValueChange={setGender}
        style={pickerStyle}
      />
      <TextInput
        placeholder="Biography"
        value={biography}
        onChangeText={setBiography}
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E8F5E9',
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
});

const pickerStyle = StyleSheet.create({
  inputIOS: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
  inputAndroid: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#B2DFDB',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
  },
});

export default SignUp;
