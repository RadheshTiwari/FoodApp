import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter OTP</Text>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
