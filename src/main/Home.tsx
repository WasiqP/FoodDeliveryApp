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
    { id: '1', name: 'Burgers', icon: '🍔', color: '#F97316' },
    { id: '2', name: 'Pizza', icon: '🍕', color: '#DC2626' },
    { id: '3', name: 'Fries', icon: '🍟', color: '#F59E0B' },
    { id: '4', name: 'Drinks', icon: '🥤', color: '#3B82F6' },
    { id: '5', name: 'Desserts', icon: '🍰', color: '#EC4899' },
    { id: '6', name: 'Salads', icon: '🥗', color: '#10B981' },
];

// Static data for featured food items
const featuredItems = [
    {
        id: '1',
        name: 'Chipy Classic Burger',
        price: 12.99,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        category: 'Burgers',
        description: 'Juicy beef patty with fresh lettuce, tomato, and our special sauce'
    },
    {
        id: '2',
        name: 'BBQ Chicken Pizza',
        price: 15.99,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
        category: 'Pizza',
        description: 'Tender chicken with BBQ sauce, red onions, and mozzarella'
    },
    {
        id: '3',
        name: 'Crispy French Fries',
        price: 6.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop',
        category: 'Fries',
        description: 'Golden crispy fries seasoned with sea salt'
    },
    {
        id: '4',
        name: 'Fresh Orange Juice',
        price: 4.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop',
        category: 'Drinks',
        description: 'Freshly squeezed orange juice'
    }
];

export default function Home() {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('1');
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: theme.primary,
        },
        headerText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.white,
            fontFamily: 'Poppins-Bold',
        },
        logo: {
            width: 40,
            height: 40,
            borderRadius: 20,
        },
        searchContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.backgroundPrimary,
            marginHorizontal: 20,
            marginVertical: 15,
            paddingHorizontal: 15,
            paddingVertical: 12,
            borderRadius: 25,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        searchInput: {
            flex: 1,
            marginLeft: 10,
            fontSize: 16,
            color: theme.textPrimary,
            fontFamily: 'Poppins-Regular',
        },
        categoriesContainer: {
            paddingHorizontal: 20,
            marginBottom: 20,
        },
        categoriesTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 15,
            fontFamily: 'Poppins-Bold',
        },
        categoryItem: {
            alignItems: 'center',
            marginRight: 15,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
            backgroundColor: theme.backgroundSecondary,
            minWidth: 80,
        },
        selectedCategory: {
            backgroundColor: theme.primary,
        },
        categoryIcon: {
            fontSize: 24,
            marginBottom: 5,
        },
        categoryName: {
            fontSize: 12,
            color: theme.textSecondary,
            fontFamily: 'Poppins-Medium',
        },
        selectedCategoryName: {
            color: theme.white,
        },
        featuredContainer: {
            paddingHorizontal: 20,
        },
        featuredTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 15,
            fontFamily: 'Poppins-Bold',
        },
        foodItem: {
            backgroundColor: theme.card,
            borderRadius: 15,
            marginBottom: 15,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            overflow: 'hidden',
        },
        foodImage: {
            width: '100%',
            height: 200,
            resizeMode: 'cover',
        },
        foodInfo: {
            padding: 15,
        },
        foodName: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 5,
            fontFamily: 'Poppins-Bold',
        },
        foodDescription: {
            fontSize: 14,
            color: theme.textSecondary,
            marginBottom: 10,
            fontFamily: 'Poppins-Regular',
        },
        foodFooter: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        foodPrice: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        ratingContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        rating: {
            fontSize: 14,
            color: theme.textSecondary,
            marginLeft: 5,
            fontFamily: 'Poppins-Medium',
        },
        addButton: {
            backgroundColor: theme.primary,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
        },
        addButtonText: {
            color: theme.white,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
        },
    });

    const renderCategory = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                selectedCategory === item.id && styles.selectedCategory
            ]}
            onPress={() => setSelectedCategory(item.id)}
        >
            <Text style={styles.categoryIcon}>{item.icon}</Text>
            <Text style={[
                styles.categoryName,
                selectedCategory === item.id && styles.selectedCategoryName
            ]}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );

    const renderFoodItem = ({ item }) => (
        <View style={styles.foodItem}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodDescription}>{item.description}</Text>
                <View style={styles.foodFooter}>
                    <Text style={styles.foodPrice}>${item.price}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐ {item.rating}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../assets/images/chipylogo.jpg')} 
                    style={styles.logo}
                />
                <Text style={styles.headerText}>Chipy</Text>
                <View style={{ width: 40 }} />
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchContainer}>
                    <Text style={{ fontSize: 20, color: theme.textSecondary }}>🔍</Text>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search for food..."
                        placeholderTextColor={theme.textSecondary}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                <View style={styles.categoriesContainer}>
                    <Text style={styles.categoriesTitle}>Categories</Text>
                    <FlatList
                        data={categories}
                        renderItem={renderCategory}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.featuredContainer}>
                    <Text style={styles.featuredTitle}>Featured Items</Text>
                    <FlatList
                        data={featuredItems}
                        renderItem={renderFoodItem}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}