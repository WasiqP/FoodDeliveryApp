import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { useTheme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

// Static search data
const allFoodItems = [
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
    },
    {
        id: '5',
        name: 'Chicken Caesar Salad',
        price: 11.99,
        rating: 4.4,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
        category: 'Salads',
        description: 'Fresh romaine lettuce with grilled chicken, parmesan, and caesar dressing'
    },
    {
        id: '6',
        name: 'Chocolate Brownie',
        price: 7.99,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
        category: 'Desserts',
        description: 'Rich chocolate brownie with vanilla ice cream'
    },
    {
        id: '7',
        name: 'Bacon Cheeseburger',
        price: 14.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
        category: 'Burgers',
        description: 'Beef patty with crispy bacon, cheddar cheese, and special sauce'
    },
    {
        id: '8',
        name: 'Margherita Pizza',
        price: 13.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        category: 'Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil'
    }
];

const popularSearches = [
    'Burger', 'Pizza', 'Fries', 'Salad', 'Dessert', 'Drink'
];

export default function Search() {
    const theme = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(allFoodItems);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredItems(allFoodItems);
        } else {
            const filtered = allFoodItems.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase()) ||
                item.description.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    };

    const handlePopularSearch = (term: string) => {
        setSearchQuery(term);
        handleSearch(term);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
            paddingBottom: 80, // Add padding for bottom tab bar
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: theme.primary,
        },
        backButton: {
            marginRight: 15,
        },
        backButtonText: {
            fontSize: 24,
            color: theme.white,
        },
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.white,
            flex: 1,
            fontFamily: 'Poppins-Bold',
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
        popularContainer: {
            paddingHorizontal: 20,
            marginBottom: 20,
        },
        popularTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 15,
            fontFamily: 'Poppins-Bold',
        },
        popularItem: {
            backgroundColor: theme.backgroundSecondary,
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 20,
            marginRight: 10,
            marginBottom: 10,
        },
        popularText: {
            fontSize: 14,
            color: theme.textSecondary,
            fontFamily: 'Poppins-Medium',
        },
        resultsContainer: {
            paddingHorizontal: 20,
        },
        resultsTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 15,
            fontFamily: 'Poppins-Bold',
        },
        foodItem: {
            flexDirection: 'row',
            backgroundColor: theme.card,
            borderRadius: 15,
            marginBottom: 15,
            padding: 15,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        foodImage: {
            width: 80,
            height: 80,
            borderRadius: 10,
            marginRight: 15,
        },
        foodInfo: {
            flex: 1,
            justifyContent: 'space-between',
        },
        foodName: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 5,
            fontFamily: 'Poppins-Bold',
        },
        foodDescription: {
            fontSize: 12,
            color: theme.textSecondary,
            marginBottom: 8,
            fontFamily: 'Poppins-Regular',
        },
        foodFooter: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        foodPrice: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        rating: {
            fontSize: 12,
            color: theme.textSecondary,
            fontFamily: 'Poppins-Medium',
        },
        addButton: {
            backgroundColor: theme.primary,
            paddingHorizontal: 15,
            paddingVertical: 6,
            borderRadius: 15,
            marginTop: 8,
        },
        addButtonText: {
            color: theme.white,
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Poppins-Bold',
        },
        emptyState: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 40,
        },
        emptyStateText: {
            fontSize: 18,
            color: theme.textSecondary,
            textAlign: 'center',
            marginBottom: 10,
            fontFamily: 'Poppins-Medium',
        },
        emptyStateSubtext: {
            fontSize: 14,
            color: theme.textSecondary,
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
        },
    });

    const renderFoodItem = ({ item }) => (
        <View style={styles.foodItem}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{item.name}</Text>
                <Text style={styles.foodDescription}>{item.description}</Text>
                <View style={styles.foodFooter}>
                    <Text style={styles.foodPrice}>${item.price}</Text>
                    <Text style={styles.rating}>⭐ {item.rating}</Text>
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
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Search Food</Text>
            </View>
            
            <View style={styles.searchContainer}>
                <Text style={{ fontSize: 20, color: theme.textSecondary }}>🔍</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for food..."
                    placeholderTextColor={theme.textSecondary}
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            {searchQuery === '' ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.popularContainer}>
                        <Text style={styles.popularTitle}>Popular Searches</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                            {popularSearches.map((term, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={styles.popularItem}
                                    onPress={() => handlePopularSearch(term)}
                                >
                                    <Text style={styles.popularText}>{term}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.resultsContainer}>
                        <Text style={styles.resultsTitle}>All Items</Text>
                        <FlatList
                            data={allFoodItems}
                            renderItem={renderFoodItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                        />
                    </View>
                </ScrollView>
            ) : (
                <View style={styles.resultsContainer}>
                    <Text style={styles.resultsTitle}>
                        {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''} found
                    </Text>
                    {filteredItems.length > 0 ? (
                        <FlatList
                            data={filteredItems}
                            renderItem={renderFoodItem}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                        />
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyStateText}>No results found</Text>
                            <Text style={styles.emptyStateSubtext}>
                                Try searching with different keywords
                            </Text>
                        </View>
                    )}
                </View>
            )}
        </SafeAreaView>
    );
}
