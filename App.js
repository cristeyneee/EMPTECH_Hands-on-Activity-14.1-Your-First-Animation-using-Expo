// App.js
import React, { useState } from 'react';
import 'react-native-reanimated';
import { ScrollView, View, Text, StatusBar, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SpringAnimation from './components/SpringAnimation';
import TimingAnimation from './components/TimingAnimation';
import RotationAnimation from './components/RotationAnimation';
import FadeAnimation from './components/FadeAnimation';

export default function App() {
  const [selected, setSelected] = useState('spring');
  const HEADER_HEIGHT = 110; // keep header fixed at top

  return (
    <View style={{ flex: 1, backgroundColor: '#0f0f10', paddingTop: HEADER_HEIGHT }}>
      <StatusBar backgroundColor="#0f0f10" barStyle="light-content" />
      {/* Elegant Header Section */}
      <LinearGradient
        colors={['#8a2be2', '#b19cd9']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_HEIGHT,
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          elevation: 4,
          shadowColor: '#8a2be2',
          zIndex: 20,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
          GROUP 2 💜
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#f3e8ff',
            textAlign: 'center',
            marginTop: 5,
          }}
        >
          Hands-on Activity 14.2 — Different Animation Styles using Expo
        </Text>
      </LinearGradient>

      {/* Selector: choose which animation to show */}
      <View style={{ paddingVertical: 18, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Pressable onPress={() => setSelected('spring')} style={{ marginHorizontal: 6 }}>
            <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: selected === 'spring' ? '#7a42f4' : 'transparent', borderWidth: 1, borderColor: '#7a42f4' }}>
              <Text style={{ color: selected === 'spring' ? '#fff' : '#f3e8ff', fontWeight: '600' }}>Spring</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSelected('timing')} style={{ marginHorizontal: 6 }}>
            <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: selected === 'timing' ? '#7a42f4' : 'transparent', borderWidth: 1, borderColor: '#7a42f4' }}>
              <Text style={{ color: selected === 'timing' ? '#fff' : '#f3e8ff', fontWeight: '600' }}>Timing</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSelected('rotation')} style={{ marginHorizontal: 6 }}>
            <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: selected === 'rotation' ? '#7a42f4' : 'transparent', borderWidth: 1, borderColor: '#7a42f4' }}>
              <Text style={{ color: selected === 'rotation' ? '#fff' : '#f3e8ff', fontWeight: '600' }}>Rotation</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setSelected('fade')} style={{ marginHorizontal: 6 }}>
            <View style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: selected === 'fade' ? '#7a42f4' : 'transparent', borderWidth: 1, borderColor: '#7a42f4' }}>
              <Text style={{ color: selected === 'fade' ? '#fff' : '#f3e8ff', fontWeight: '600' }}>Fade</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* Show only the selected animation */}
      <ScrollView contentContainerStyle={{ paddingVertical: 40, alignItems: 'center', justifyContent: 'center' }}>
        {selected === 'spring' && <SpringAnimation />}
        {selected === 'timing' && <TimingAnimation />}
        {selected === 'rotation' && <RotationAnimation />}
        {selected === 'fade' && <FadeAnimation />}
      </ScrollView>
    </View>
  );
}
