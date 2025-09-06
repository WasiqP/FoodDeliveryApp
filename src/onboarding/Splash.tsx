import React, {useEffect,useRef} from 'react'
import {Animated, StyleSheet, View, StatusBar, Image} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
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
      setTimeout(() => {navigation.replace("Onboarding01"), 700})
    })
  }, [fade,scale,navigation]
);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: t.primary }]}>      
      <StatusBar barStyle="light-content" backgroundColor={t.primary} />
      <Animated.View style={{ opacity: fade, transform: [{ scale }] }}>
        <Image 
          source={require('../assets/images/chipylogo.jpg')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { 
    width: 120, 
    height: 120, 
    borderRadius: 60 
  },
});
export default Splash;

