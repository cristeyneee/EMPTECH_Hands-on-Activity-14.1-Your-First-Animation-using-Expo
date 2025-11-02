import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function SpringAnimation() {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
  }));

  return (
    <View style={{ /* keep sizing to content inside ScrollView */ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 20, color: '#ffffff' }}>Spring Animation</Text>
      <Animated.View
        style={[
          {
            height: 300,
            borderRadius: 12,
            overflow: 'hidden',
            marginBottom: 20,
          },
          animatedStyle,
        ]}
      >
        <ImageBackground source={require('../assets/fv1.jpg')} style={{ flex: 1 }} resizeMode="cover" />
      </Animated.View>
      <Button title="Click me" onPress={handlePress} color="#7a42f4" />
      <View style={{ height: 1, width: '80%', backgroundColor: '#444', marginTop: 30 }} />
    </View>
  );
}
