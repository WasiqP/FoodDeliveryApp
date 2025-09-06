import { StyleSheet, Text, View } from 'react-native'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from '../../App';
import OnboardingCard from "../components/OboardingCard";
import React from 'react'


type Props = NativeStackScreenProps<RootStackParamList, "Onboarding02">;

const Onboarding02: React.FC<Props> = ({navigation}) => {
  return (
      <OnboardingCard
      imageSource={require("../assets/images/onboarding2.png")}
      title= "Order Your Favorites"
      description='Browse through our extensive menu and order your favorite dishes with just a few taps'
      step={2}
      total={3}
      onNext={() => navigation.navigate("Onboarding03")}
      onSkip={() => navigation.replace("GetStarted")}
    />
  )
}

export default Onboarding02

