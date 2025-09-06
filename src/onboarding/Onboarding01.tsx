import { StyleSheet, Text, View } from 'react-native'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from '../../App';
import OnboardingCard from "../components/OboardingCard";
import React from 'react'


type Props = NativeStackScreenProps<RootStackParamList, "Onboarding01">;

const Onboarding01: React.FC<Props> = ({navigation}) => {
  return (
      <OnboardingCard
      imageSource={require("../assets/images/onboarding1.jpg")}
      title= "Welcome to Chipy"
      description='Discover delicious food from your favorite restaurants and get them delivered right to your doorstep'
      step={1}
      total={3}
      onNext={() => navigation.navigate("Onboarding02")}
      onSkip={() => navigation.replace("GetStarted")}
    />
  )
}

export default Onboarding01
