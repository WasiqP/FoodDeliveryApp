import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App.tsx';
import { useTheme } from '../theme';

const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const GetStarted: React.FC<Props> = ({ navigation }) => {
  const theme = useTheme();
  
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.backgroundPrimary }]}>
      <View style={styles.container}>
        {/* Logo at the top */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/images/chipylogo.jpg')} 
            style={styles.logo}
          />
        </View>

        {/* Main content area with images */}
        <View style={styles.imageContainer}>
          {/* Blue vector background */}
          <Image 
            source={require('../assets/images/bluevector.jpg')} 
            style={styles.blueVector}
            resizeMode="contain"
          />
          
          {/* GetStarted image overlay */}
          <Image 
            source={require('../assets/images/GetStarted.png')} 
            style={styles.getStartedImage}
            resizeMode="contain"
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <Pressable 
            style={[styles.getStartedBtn, { backgroundColor: theme.primary }]} 
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </Pressable>
          <Pressable 
            style={[styles.loginBtn, { borderColor: theme.primary }]} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.loginText, { color: theme.primary }]}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 40,
  },
  blueVector: {
    width: width * 0.8,
    height: height * 0.4,
    position: 'absolute',
  },
  getStartedImage: {
    width: width * 0.6,
    height: height * 0.3,
    zIndex: 1,
  },
  actionButtons: {
    flexDirection: 'column',
    gap: 15,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  getStartedBtn: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  loginBtn: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
})