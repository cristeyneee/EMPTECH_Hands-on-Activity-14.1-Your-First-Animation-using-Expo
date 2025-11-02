import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function RotationAnimation() {
  const rotation = useSharedValue(0);

  const handlePress = () => {
    rotation.value = withSpring(rotation.value + 45);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontWeight: 'bold',
          marginBottom: 20,
          color: '#ffff',
          fontSize: 16,
          zIndex: 2,
        }}
      >
        Rotation Animation
      </Text>

      {/* Animated Image Container */}
      <View
        style={{
          width: 320,
          height: 320,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 5,
          zIndex: 1,
        }}
      >
        <Animated.View
          style={[
            {
              width: 250,
              height: 250,
              borderRadius: 12,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 6,
              elevation: 4,
            },
            animatedStyle,
          ]}
        >
          <ImageBackground
            source={require('../assets/fv3.jpg')}
            style={{ flex: 1 }}
            resizeMode="cover"
          />
        </Animated.View>
      </View>

      {/* Button */}
      <View style={{ zIndex: 10, marginVertical: 15 }}>
        <Button title="Click me" onPress={handlePress} color="#7a42f4" />
      </View>

      {/* Divider */}
      <View
        style={{
          height: 1,
          width: '80%',
          backgroundColor: '#ccc',
          marginTop: 30,
        }}
      />
    </View>
  );
}
