import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export default function FadeAnimation() {
  const opacity = useSharedValue(1);

  const handlePress = () => {
    opacity.value = withTiming(opacity.value === 1 ? 0 : 1, { duration: 600 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20, color: '#ffffff' }}>Fade Animation</Text>
      <Animated.View
        style={[
          {
            width: 300,
            height: 300,
            borderRadius: 12,
            overflow: 'hidden',
            marginBottom: 20,
          },
          animatedStyle,
        ]}
      >
        <ImageBackground source={require('../assets/fv4.jpg')} style={{ flex: 1 }} resizeMode="cover" />
      </Animated.View>
  <Button title="Click me" onPress={handlePress} color="#7a42f4" />
      <View style={{ height: 1, width: '80%', backgroundColor: '#ccc', marginTop: 30 }} />
    </View>
  );
}
