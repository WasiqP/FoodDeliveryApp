import { StyleSheet, Text, View } from 'react-native'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from '../../App';
import OnboardingCard from "../components/OboardingCard";
import OnboardingSvg from "../assets/images/Logo";
import React from 'react'


type Props = NativeStackScreenProps<RootStackParamList, "Onboarding03">;

const Onboarding03: React.FC<Props> = ({navigation}) => {
  return (
      <OnboardingCard
      Illustration={OnboardingSvg}
      title= "Are You Hungry?"
      description='Welcome to Geeko Food. Where you can Order Food Online yourself or order the Agent to do it for you'
      step={1}
      total={3}
      onNext={() => navigation.navigate("GetStarted")}
      onSkip={() => navigation.replace("Login")}
    />
  )
}

export default Onboarding03

const styles = StyleSheet.create({})