import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

type Mode = 'default' | 'signIn' | 'createAccount';

const LoginScreen = () => {
  const [mode, setMode] = useState<Mode>('default');
  const [mobileNumber, setMobileNumber] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const translateY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);
  const contentTranslateY = useSharedValue(20);
  const labelOpacity = useSharedValue(1);

  const animateTo = (targetMode: Mode, moveY: number) => {
    labelOpacity.value = withTiming(0, { duration: 150 }, () => {
      runOnJS(setMode)(targetMode);
      labelOpacity.value = withTiming(1, { duration: 150 });
    });

    translateY.value = withTiming(moveY, { duration: 500 }, () => {
      contentOpacity.value = withTiming(1, { duration: 300 });
      contentTranslateY.value = withTiming(0, { duration: 300 });
    });
  };

  const handleBack = () => {
    contentOpacity.value = withTiming(0, { duration: 300 });
    contentTranslateY.value = withTiming(20, { duration: 300 }, () => {
      runOnJS(setMode)('default');
    });
    labelOpacity.value = withTiming(0, { duration: 150 }, () => {
      labelOpacity.value = withTiming(1, { duration: 150 });
    });
    translateY.value = withTiming(0, { duration: 500 });
  };

  const handleSubmit = () => {
    Alert.alert('Mobile Number', mobileNumber || 'Please enter a mobile number');
  };

  const handleCreateAccount = () => {
    Alert.alert('Form Submitted', JSON.stringify(form, null, 2));
  };

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const animatedContentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateY: contentTranslateY.value }],
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    opacity: labelOpacity.value,
  }));

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {mode !== 'default' && (
        <View style={styles.header}>
          <Pressable onPress={handleBack}>
            <Text style={styles.backArrow}>←</Text>
          </Pressable>
        </View>
      )}

      <Animated.View style={[styles.buttonWrapper, animatedButtonStyle]}>
        {mode === 'default' && (
          <>
            <Pressable onPress={() => animateTo('signIn', 100)} style={styles.button}>
              <Animated.Text style={[styles.buttonText, animatedTextStyle]}>
                Sign In
              </Animated.Text>
            </Pressable>

            <View style={{ height: 20 }} />

            <Pressable onPress={() => animateTo('createAccount', 160)} style={styles.button}>
              <Animated.Text style={[styles.buttonText, animatedTextStyle]}>
                Create Account
              </Animated.Text>
            </Pressable>
          </>
        )}

        {mode === 'signIn' && (
          <Pressable onPress={handleSubmit} style={styles.button}>
            <Animated.Text style={[styles.buttonText, animatedTextStyle]}>
              Submit
            </Animated.Text>
          </Pressable>
        )}

        {mode === 'createAccount' && (
          <Pressable onPress={handleCreateAccount} style={styles.button}>
            <Animated.Text style={[styles.buttonText, animatedTextStyle]}>
              Register
            </Animated.Text>
          </Pressable>
        )}
      </Animated.View>

      {mode === 'signIn' && (
        <Animated.View style={[animatedContentStyle, styles.animatedInput]}>
          <TextInput
            placeholder="Enter Mobile Number"
            style={styles.input}
            keyboardType="phone-pad"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholderTextColor="black"
          />
        </Animated.View>
      )}

      {mode === 'createAccount' && (
        <Animated.View style={[animatedContentStyle, styles.animatedInput]}>
          <ScrollView>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={form.name}
              onChangeText={(val) => setForm({ ...form, name: val })}
              placeholderTextColor="black"
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              value={form.email}
              onChangeText={(val) => setForm({ ...form, email: val })}
              placeholderTextColor="black"
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              value={form.password}
              onChangeText={(val) => setForm({ ...form, password: val })}
              placeholderTextColor="black"
            />
          </ScrollView>
        </Animated.View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  buttonWrapper: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3478f6',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
    elevation: 3,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    width: 250,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 8,
  },
  animatedInput: {
    position: 'absolute',
    top: '32%',
  },
});

export default LoginScreen;
