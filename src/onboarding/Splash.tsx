import React, {useEffect,useRef} from 'react'
import {Animated, StyleSheet, View, StatusBar} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Logo from "../assets/images/Logo";
import { useTheme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';



type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

const Splash: React.FC<Props> = ({navigation}) => {
  const t = useTheme();
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(fade, {toValue: 1, duration: 1000, useNativeDriver: true}),
  //     Animated.timing(scale, {toValue: 1, duration: 1000, useNativeDriver: true}),
  //   ]).start(() => {
  //    setTimeout(() => { navigation.replace("GetStarted"), 700})
  //   });
  // }, [fade,scale,navigation]);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fade,{toValue:1, duration: 1000, useNativeDriver:true}),
      Animated.timing(scale, {toValue: 1, duration: 1000, useNativeDriver: true}),
    ]).start(() => {
      setTimeout(() => {navigation.replace("MainTabs"), 700})
    })
  }, [fade,scale,navigation]
);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: t.background }]}>      
      <StatusBar barStyle="light-content" />
      <Animated.View style={{ opacity: fade, transform: [{ scale }] }}>
        <Logo size={120} />
      </Animated.View>
  <Animated.Text style={[styles.brand, { color: t.primary, opacity: fade }]}>Chipy</Animated.Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  brand: { marginTop: 24, fontSize: 32, fontWeight: '800', letterSpacing: 0.5, fontFamily: 'Poppins-Bold' },
});
export default Splash;

