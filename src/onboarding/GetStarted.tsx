import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App.tsx';
import { useTheme } from '../theme';

const { width, height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'GetStarted'>;

const GetStarted: React.FC <Props>= ({navigation}) => {
  const theme = useTheme();
  
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor: theme.backgroundPrimary }]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <View>
              <Text style={styles.locationText}>Current location</Text>
              <Text style={styles.addressText}>Jl. Soekarno Hatta 15A...</Text>
            </View>
          </View>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationIcon}>🔔</Text>
            <View style={styles.notificationBadge} />
          </View>
        </View>

        {/* Search Bar */}
        <View style={[styles.searchContainer, { backgroundColor: theme.backgroundPrimary }]}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchPlaceholder}>Search menu, restaurant or etc</Text>
          <Text style={styles.filterIcon}>⚙️</Text>
        </View>

        {/* Promotional Banner */}
        <View style={[styles.banner, { backgroundColor: theme.foodGreen }]}>
          <View style={styles.bannerContent}>
            <View style={styles.bannerTextContainer}>
              <Text style={styles.bannerTitle}>Claim your discount 30% daily now!</Text>
              <Pressable style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Order now</Text>
              </Pressable>
            </View>
            <View style={styles.bannerImageContainer}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop' }}
                style={styles.bannerImage}
              />
            </View>
          </View>
          <View style={styles.bannerIndicators}>
            <View style={[styles.indicator, { backgroundColor: theme.foodGreen }]} />
            <View style={styles.indicator} />
            <View style={styles.indicator} />
          </View>
        </View>

        {/* Top Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Categories</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>
          <View style={styles.categoriesContainer}>
            {[
              { name: 'Beverages', icon: '🥤', color: theme.foodGreen },
              { name: 'Snack', icon: '🍿', color: theme.foodOrange },
              { name: 'Seafood', icon: '🦐', color: theme.primary },
              { name: 'Dessert', icon: '🍰', color: theme.foodRed },
            ].map((category, index) => (
              <View key={index} style={styles.categoryItem}>
                <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                  <Text style={styles.categoryEmoji}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Top Discount */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Discount</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>
          <View style={styles.discountContainer}>
            {[
              { name: 'Starbuck Borobudur', distance: '1.0 km', rating: '4.8', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=200&h=120&fit=crop' },
              { name: 'Baegopa Suhat', distance: '500 m', rating: '4.8', image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=200&h=120&fit=crop' },
            ].map((restaurant, index) => (
              <View key={index} style={[styles.restaurantCard, { backgroundColor: theme.card }]}>
                <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
                <View style={styles.restaurantDetails}>
                  <Text style={styles.restaurantDistance}>{restaurant.distance}</Text>
                  <Text style={styles.restaurantDot}>•</Text>
                  <Text style={styles.restaurantRating}>⭐ {restaurant.rating} reviews</Text>
                </View>
              </View>
            ))}
          </View>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingTop: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Medium',
  },
  addressText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationIcon: {
    fontSize: 24,
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF4444',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 25,
    marginVertical: 15,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 14,
    color: '#999',
    fontFamily: 'Poppins-Regular',
  },
  filterIcon: {
    fontSize: 18,
  },
  banner: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
    fontFamily: 'Poppins-Bold',
  },
  orderButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  orderButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  bannerImageContainer: {
    marginLeft: 15,
  },
  bannerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  bannerIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 4,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#999',
    fontFamily: 'Poppins-Medium',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantCard: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  restaurantImage: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
    marginHorizontal: 8,
    fontFamily: 'Poppins-Bold',
  },
  restaurantDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  restaurantDistance: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  restaurantDot: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 4,
  },
  restaurantRating: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Poppins-Regular',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
    marginBottom: 30,
  },
  getStartedBtn: {
    flex: 1,
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
    flex: 1,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 2,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
})