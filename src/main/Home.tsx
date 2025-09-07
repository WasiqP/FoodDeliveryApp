import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    Image, 
    TextInput,
    FlatList,
    Dimensions
} from 'react-native';
import { useTheme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width } = Dimensions.get('window');

// Static data for food categories
const categories = [
    { id: '1', name: 'Meat', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=100&h=100&fit=crop' },
    { id: '2', name: 'Cold drinks', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=100&h=100&fit=crop' },
    { id: '3', name: 'Dessert', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=100&h=100&fit=crop' },
    { id: '4', name: 'Burger', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop' },
    { id: '5', name: 'Pizza', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '6', name: 'Salad', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop' },
];

// Static data for bestsellers
const bestsellers = [
    {
        id: '1',
        name: 'Bacon Bliss Bomb...',
        price: 10.99,
        originalPrice: 12.99,
        discount: '10% off',
        rating: '1.2k',
        deliveryTime: '30 min',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200&h=150&fit=crop',
        isNew: true,
        isFavorite: false
    },
    {
        id: '2',
        name: 'Sizzling Lemon Garlic Chicken',
        price: 8.99,
        originalPrice: null,
        discount: null,
        rating: '1.2k',
        deliveryTime: '30 min',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200&h=150&fit=crop',
        isNew: false,
        isFavorite: false
    },
    {
        id: '3',
        name: 'Golden Glaze Deli...',
        price: 8.99,
        originalPrice: 9.99,
        discount: '10% off',
        rating: '1.2k',
        deliveryTime: '30 min',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=150&fit=crop',
        isNew: false,
        isFavorite: false
    },
    {
        id: '4',
        name: 'Arctic Frost Quenc...',
        price: 10.99,
        originalPrice: null,
        discount: null,
        rating: '1.2k',
        deliveryTime: '30 min',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=150&fit=crop',
        isNew: false,
        isFavorite: true
    }
];

// Static data for restaurants
const restaurants = [
    {
        id: '1',
        name: 'Savory Bites Bistro',
        distance: '15km',
        rating: '1.2k',
        discount: '20% off Up to $10.25',
        image: 'https://plus.unsplash.com/premium_photo-1723491285855-f1035c4c703c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '2',
        name: 'Urban Spice Fusion',
        distance: '15km',
        rating: '1.2k',
        discount: '20% off Up to $10.25',
        image: 'https://images.unsplash.com/photo-1693822998952-b8d18c61043b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '3',
        name: 'Heavenly Eats',
        distance: '15km',
        rating: '1.2k',
        discount: '20% off Up to $10.25',
        image: 'https://images.unsplash.com/photo-1739792598744-3512897156e3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default function Home() {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [cartCount] = useState(1);
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: theme.backgroundPrimary,
        },
        menuIcon: {
            fontSize: 24,
            color: theme.primary,
        },
        locationContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        locationIcon: {
            fontSize: 16,
            color: theme.primary,
            marginRight: 5,
        },
        locationText: {
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            color: theme.primary,
            letterSpacing: 1,
        },
        cartContainer: {
            position: 'relative',
        },
        cartIcon: {
            fontSize: 24,
            color: theme.primary,
        },
        cartBadge: {
            position: 'absolute',
            top: -8,
            right: -8,
            backgroundColor: theme.error,
            borderRadius: 10,
            minWidth: 20,
            height: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        cartBadgeText: {
            color: theme.white,
            fontSize: 12,
            fontFamily: 'Poppins-Bold',
            letterSpacing: 1,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.white,
            marginHorizontal: 20,
            marginVertical: 15,
            paddingHorizontal: 15,
            paddingVertical: 12,
            borderRadius: 15,
            borderWidth: 1,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            marginBottom: 20,
        },
        searchIcon: {
            fontSize: 20,
            color: theme.textSecondary,
            marginRight: 10,
        },
        searchInput: {
            flex: 1,
            fontSize: 16,
            color: theme.textPrimary,
            fontFamily: 'Poppins-Regular',
            letterSpacing: 1,
        },
        filterIcon: {
            fontSize: 20,
            color: theme.textSecondary,
        },
        sectionTitle: {
            fontSize: 40,
            fontFamily: 'Poppins-Bold',
            color: theme.primary,
            marginBottom: 10,
            fontWeight: '700',
            letterSpacing: -0.5,
            lineHeight: 30,
        },
        seeAllText: {
            fontSize: 14,
            fontFamily: 'Poppins-Medium',
            color: theme.primary,
            letterSpacing: 0.3,
        },
        sectionHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 15,
        },
        categoryItem: {
            alignItems: 'center',
            marginRight: 0,
            width: 80,
        },
        categoryImage: {
            width: 60,
            height: 60,
            borderRadius: 30,
            marginBottom: 8,
        },
        categoryName: {
            fontSize: 13,
            fontFamily: 'Poppins-Medium',
            color: theme.textPrimary,
            textAlign: 'center',
            letterSpacing: 0.2,
        },
        freeDeliveryBanner: {
            backgroundColor: theme.black,
            borderWidth: 1,
            marginHorizontal: 22,
            marginTop: 10,
            marginBottom: 30,
            borderColor: theme.white,
            borderRadius: 15,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        freeDeliveryText: {
            fontSize: 26,
            fontFamily: 'Poppins-Bold',
            color: theme.white,
            fontWeight: 'bold',
            marginBottom: 5,
            letterSpacing: 1,
            width: "100%",

        },
        orderNowButton: {
            width: "65%",
            backgroundColor: theme.white,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 20,
        },
        orderNowText: {
            color: theme.primary,
            textAlign: 'center',
            fontSize: 14,
            fontFamily: 'Poppins-Bold',
            fontWeight: 'bold',
            letterSpacing: 1,
        },
        deliveryImage: {
            width: "38%",
            height: "100%",
            marginLeft: 20,
            borderTopLeftRadius: 55,
        },
        bestsellerItem: {
            backgroundColor: theme.white,
            borderRadius: 15,
            marginRight: 15,
            width: 200,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            overflow: 'hidden',
            borderWidth: 1,
            marginBottom: 20,
        },
        bestsellerImage: {
            width: '100%',
            height: 120,
            resizeMode: 'cover',
        },
        newArrivedBadge: {
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: theme.primary,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
        },
        newArrivedText: {
            color: theme.white,
            fontSize: 10,
            fontFamily: 'Poppins-Bold',
            letterSpacing: 1,
        },
        heartIcon: {
            position: 'absolute',
            top: 10,
            right: 10,
            fontSize: 20,
            color: theme.error,
        },
        bestsellerInfo: {
            padding: 15,
        },
        bestsellerName: {
            fontSize: 14,
            fontFamily: 'Poppins-Bold',
            color: theme.primary,
            marginBottom: 5,
            letterSpacing: 1,
        },
        bestsellerDetails: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
        },
        clockIcon: {
            fontSize: 12,
            color: theme.textSecondary,
            marginRight: 5,
        },
        deliveryTime: {
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            color: theme.textSecondary,
            marginRight: 15,
            letterSpacing: 1,
        },
        starIcon: {
            fontSize: 12,
            color: theme.warning,
            marginRight: 5,
        },
        rating: {
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            color: theme.textSecondary,
            letterSpacing: 1,
        },
        priceContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        priceText: {
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
            color: theme.primary,
            letterSpacing: 1,
        },
        originalPrice: {
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            color: theme.textSecondary,
            textDecorationLine: 'line-through',
            marginLeft: 5,
            letterSpacing: 1,
        },
        addButton: {
            backgroundColor: theme.primary,
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
        },
        addButtonText: {
            color: theme.white,
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
        },
        familyFeastBanner: {
            backgroundColor: theme.white,
            marginHorizontal: 20,
            marginTop: 20,
            borderWidth: 1,
            marginBottom: 20,
            borderRadius: 10,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        familyFeastTitle: {
            fontSize: 18,
            fontFamily: 'Poppins-Bold',
            color: theme.primary,
            marginBottom: 5,
            letterSpacing: 1,
        },
        familyFeastDescription: {
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            color: theme.textSecondary,
            marginBottom: 5,
            letterSpacing: 1,
        },
        familyFeastCode: {
            fontSize: 14,
            fontFamily: 'Poppins-Bold',
            color: theme.primary,
            letterSpacing: 1,
        },
        familyFeastImage: {
            width: 100,
            height: 80,
            marginLeft: 20,
            borderRadius: 10,
        },
        discountBadge: {
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: theme.primary,
            borderRadius: 15,
            paddingHorizontal: 8,
            paddingVertical: 4,
        },
        discountText: {
            color: theme.white,
            fontSize: 12,
            fontFamily: 'Poppins-Bold',
            letterSpacing: 1,
        },
        restaurantItem: {
            backgroundColor: theme.white,
            borderRadius: 15,
            marginRight: 15,
            width: 200,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            overflow: 'hidden',
        },
        restaurantImage: {
            width: '100%',
            height: 100,
            resizeMode: 'cover',
        },
        restaurantDiscount: {
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: theme.textSecondary,
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 12,
        },
        restaurantDiscountText: {
            color: theme.white,
            fontSize: 10,
            fontFamily: 'Poppins-Bold',
            letterSpacing: 1,
        },
        restaurantInfo: {
            padding: 15,
        },
        restaurantName: {
            fontSize: 14,
            fontFamily: 'Poppins-Bold',
            color: theme.primary,
            marginBottom: 8,
            letterSpacing: 1,
        },
        restaurantDetails: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        locationPinIcon: {
            fontSize: 12,
            color: theme.textSecondary,
            marginRight: 5,
        },
        distance: {
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            color: theme.textSecondary,
            marginRight: 15,
            letterSpacing: 1,
        },
        restaurantStarIcon: {
            fontSize: 12,
            color: theme.warning,
            marginRight: 5,
        },
        restaurantRating: {
            fontSize: 12,
            fontFamily: 'Poppins-Regular',
            color: theme.textSecondary,
            letterSpacing: 1,
        },
    });

    const renderCategory = ({ item }: { item: any }) => (
        <TouchableOpacity 
            style={styles.categoryItem}
            activeOpacity={0.7}
            onPress={() => {
                console.log('Category pressed:', item.name);
            }}
        >
            <Image 
                source={{ uri: item.image }} 
                style={styles.categoryImage}
                resizeMode="cover"
            />
            <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderBestseller = ({ item }: { item: any }) => (
        <View style={styles.bestsellerItem}>
            <View style={{ position: 'relative' }}>
                <Image source={{ uri: item.image }} style={styles.bestsellerImage} />
                {item.isNew && (
                    <View style={styles.newArrivedBadge}>
                        <Text style={styles.newArrivedText}>New Arrived</Text>
                    </View>
                )}
                <Text style={[styles.heartIcon, { color: item.isFavorite ? theme.error : theme.textSecondary }]}>
                    ♥
                </Text>
            </View>
            <View style={styles.bestsellerInfo}>
                <Text style={styles.bestsellerName}>{item.name}</Text>
                <View style={styles.bestsellerDetails}>
                    <Text style={styles.clockIcon}>🕐</Text>
                    <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
                    <Text style={styles.starIcon}>⭐</Text>
                    <Text style={styles.rating}>{item.rating}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.priceText}>${item.price}</Text>
                        {item.originalPrice && (
                            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
                        )}
                    </View>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    const renderRestaurant = ({ item }: { item: any }) => (
        <View style={styles.restaurantItem}>
            <View style={{ position: 'relative' }}>
                <Image source={{ uri: item.image }} style={styles.restaurantImage} />
                <View style={styles.restaurantDiscount}>
                    <Text style={styles.restaurantDiscountText}>{item.discount}</Text>
                </View>
            </View>
            <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <View style={styles.restaurantDetails}>
                    <Text style={styles.locationPinIcon}>📍</Text>
                    <Text style={styles.distance}>{item.distance}</Text>
                    <Text style={styles.restaurantStarIcon}>⭐</Text>
                    <Text style={styles.restaurantRating}>{item.rating}</Text>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Text style={styles.menuIcon}>☰</Text>
                    </TouchableOpacity>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text style={styles.locationText}>Gulshan-e-Iqbal</Text>
                        <Text style={styles.locationIcon}>, KHI</Text>
                    </View>
                    <TouchableOpacity style={styles.cartContainer}>
                        <Text style={styles.cartIcon}>🛒</Text>
                        <View style={styles.cartBadge}>
                            <Text style={styles.cartBadgeText}>{cartCount.toString().padStart(2, '0')}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Text style={styles.searchIcon}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search your food"
                        placeholderTextColor={theme.textSecondary}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <TouchableOpacity>
                        <Text style={styles.filterIcon}>☰</Text>
                    </TouchableOpacity>
                </View>

                {/* Our Menu Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Our Menu</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={categories}
                    renderItem={renderCategory}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ 
                        paddingHorizontal: 10,
                        paddingBottom: 20,
                    }}
                />

                {/* Free Delivery Banner */}
                <View style={styles.freeDeliveryBanner}>
                    <View style={{ flex: 0.95 }}>
                        <Text style={styles.freeDeliveryText}>Free Delivery Within Your Reach.</Text>
                        <TouchableOpacity style={styles.orderNowButton}>
                            <Text style={styles.orderNowText}>Order now</Text>
                        </TouchableOpacity>
                    </View>
                    <Image 
                        source={require('../assets/images/deliveryBoy.jpg')}
                        style={styles.deliveryImage}
                    />
                </View>

                {/* Bestsellers Section */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Best Sellers</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={bestsellers}
                    renderItem={renderBestseller}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20 }}
                />
                {/* Family Feast Banner */}
                <View style={styles.familyFeastBanner}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.familyFeastTitle}>Family Feast</Text>
                        <Text style={styles.familyFeastDescription}>Special price on our family meal bundle!</Text>
                        <Text style={styles.familyFeastCode}>J150250</Text>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <Image 
                            source={{ uri: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=120&h=100&fit=crop' }} 
                            style={styles.familyFeastImage}
                        />
                        <View style={styles.discountBadge}>
                            <Text style={styles.discountText}>47% Off!</Text>
                        </View>
                    </View>
                </View>

                {/* Restaurant Nearby Section
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Restaurant nearby</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>View all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={restaurants}
                    renderItem={renderRestaurant}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                />
                <View style={styles.paginationDots}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View> */}
            </ScrollView>
        </SafeAreaView>
    );
}