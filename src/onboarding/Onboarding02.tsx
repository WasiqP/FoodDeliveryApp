import { StyleSheet, Text, View } from 'react-native'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from '../../App';
import OnboardingCard from "../components/OboardingCard";
import OnboardingSvg from "../assets/images/Logo";
import React from 'react'


type Props = NativeStackScreenProps<RootStackParamList, "Onboarding02">;

const Onboarding02: React.FC<Props> = ({navigation}) => {
  return (
      <OnboardingCard
      Illustration={OnboardingSvg}
      title= "Ordering your Favourites?"
      description='Welcome to Geeko Food. Where you can Order Food Online yourself or order the Agent to do it for you'
      step={1}
      total={3}
      onNext={() => navigation.navigate("Onboarding03")}
      onSkip={() => navigation.replace("Login")}
    />
  )
}

export default Onboarding02

