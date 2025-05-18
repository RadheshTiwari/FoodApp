import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { height } = Dimensions.get('window');

const AnimatedSymbolScreen = () => {
    // Set up navigation prop
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    // Animated values for the symbol, gradient, and text
    const translateY = useRef(new Animated.Value(-100)).current;
    const gradientOpacity = useRef(new Animated.Value(0)).current;
    const textScale = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animate symbol to the center
        Animated.timing(translateY, {
            toValue: height / 2 - 50, // Adjust the value if symbol height is different
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            // After symbol reaches the center, animate gradient and text
            Animated.parallel([
                Animated.timing(gradientOpacity, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.sequence([
                    Animated.timing(textOpacity, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(textScale, {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();

            // Navigate to Main after 3 seconds
            setTimeout(() => {
                navigation.replace('Login');
            }, 2000);
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Background Gradient Animation */}
            <Animated.View style={[StyleSheet.absoluteFill, { opacity: gradientOpacity }]}>
                <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={StyleSheet.absoluteFill}
                />
            </Animated.View>

            {/* Symbol and Text */}
            <Animated.View style={[styles.symbolContainer, { transform: [{ translateY }] }]}>
                <Text style={styles.symbol}>🔄</Text>

                <Animated.Text
                    style={[
                        styles.label,
                        {
                            opacity: textOpacity,
                            transform: [{ scale: textScale }],
                        },
                    ]}
                >
                    TOP/Brass
                </Animated.Text>
            </Animated.View>
        </View>
    );
};

export default AnimatedSymbolScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
    },
    symbolContainer: {
        position: 'absolute',
        left: '50%',
        marginLeft: -25,
        alignItems: 'center',
    },
    symbol: {
        fontSize: 50,
    },
    label: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
        fontWeight: '600',
    },
});
