import { StyleSheet, Text, View } from 'react-native'
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList } from '../../App';
import OnboardingCard from "../components/OboardingCard";
import React from 'react'


type Props = NativeStackScreenProps<RootStackParamList, "Onboarding03">;

const Onboarding03: React.FC<Props> = ({navigation}) => {
  return (
      <OnboardingCard
      imageSource={require("../assets/images/onboarding3.png")}
      title= "Fast Delivery"
      description='Get your food delivered quickly and safely with our reliable delivery service'
      step={3}
      total={3}
      onNext={() => navigation.navigate("GetStarted")}
      onSkip={() => navigation.replace("GetStarted")}
    />
  )
}

export default Onboarding03

const styles = StyleSheet.create({})