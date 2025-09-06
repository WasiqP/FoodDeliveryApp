import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    Image,
    Dimensions
} from 'react-native';
import { useTheme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

// Static food detail data
const foodDetail = {
    id: '1',
    name: 'Chipy Classic Burger',
    price: 12.99,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Burgers',
    description: 'Our signature burger with a juicy beef patty, fresh lettuce, ripe tomatoes, onions, and our special Chipy sauce. Served with crispy golden fries.',
    ingredients: [
        'Beef Patty (100g)',
        'Fresh Lettuce',
        'Ripe Tomatoes',
        'Red Onions',
        'Cheddar Cheese',
        'Chipy Special Sauce',
        'Sesame Seed Bun'
    ],
    nutrition: {
        calories: 650,
        protein: 35,
        carbs: 45,
        fat: 28
    },
    size: [
        { name: 'Regular', price: 12.99, selected: true },
        { name: 'Large', price: 15.99, selected: false }
    ],
    addOns: [
        { name: 'Extra Cheese', price: 1.50, selected: false },
        { name: 'Bacon', price: 2.00, selected: false },
        { name: 'Avocado', price: 1.75, selected: false },
        { name: 'Extra Sauce', price: 0.50, selected: false }
    ]
};

export default function FoodDetail() {
    const theme = useTheme();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('Regular');
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

    const toggleAddOn = (addOn: string) => {
        setSelectedAddOns(prev => 
            prev.includes(addOn) 
                ? prev.filter(item => item !== addOn)
                : [...prev, addOn]
        );
    };

    const getTotalPrice = () => {
        let basePrice = foodDetail.size.find(s => s.name === selectedSize)?.price || foodDetail.price;
        let addOnPrice = selectedAddOns.reduce((total, addOn) => {
            const addOnData = foodDetail.addOns.find(a => a.name === addOn);
            return total + (addOnData?.price || 0);
        }, 0);
        return (basePrice + addOnPrice) * quantity;
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
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
        foodImage: {
            width: width,
            height: 250,
            resizeMode: 'cover',
        },
        content: {
            padding: 20,
        },
        foodName: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 10,
            fontFamily: 'Poppins-Bold',
        },
        foodCategory: {
            fontSize: 16,
            color: theme.textSecondary,
            marginBottom: 10,
            fontFamily: 'Poppins-Medium',
        },
        ratingContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
        },
        rating: {
            fontSize: 16,
            color: theme.textSecondary,
            marginLeft: 5,
            fontFamily: 'Poppins-Medium',
        },
        reviews: {
            fontSize: 14,
            color: theme.textSecondary,
            marginLeft: 10,
            fontFamily: 'Poppins-Regular',
        },
        description: {
            fontSize: 16,
            color: theme.textPrimary,
            lineHeight: 24,
            marginBottom: 20,
            fontFamily: 'Poppins-Regular',
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.textPrimary,
            marginBottom: 15,
            fontFamily: 'Poppins-Bold',
        },
        ingredientsList: {
            marginBottom: 20,
        },
        ingredientItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
        },
        ingredientBullet: {
            width: 6,
            height: 6,
            borderRadius: 3,
            backgroundColor: theme.primary,
            marginRight: 10,
        },
        ingredientText: {
            fontSize: 14,
            color: theme.textSecondary,
            fontFamily: 'Poppins-Regular',
        },
        nutritionContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: theme.backgroundSecondary,
            padding: 15,
            borderRadius: 10,
            marginBottom: 20,
        },
        nutritionItem: {
            alignItems: 'center',
        },
        nutritionValue: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        nutritionLabel: {
            fontSize: 12,
            color: theme.textSecondary,
            marginTop: 5,
            fontFamily: 'Poppins-Medium',
        },
        sizeContainer: {
            marginBottom: 20,
        },
        sizeOption: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.backgroundSecondary,
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
        },
        selectedSize: {
            backgroundColor: theme.primary,
        },
        sizeName: {
            fontSize: 16,
            color: theme.textPrimary,
            fontFamily: 'Poppins-Medium',
        },
        selectedSizeName: {
            color: theme.white,
        },
        sizePrice: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        selectedSizePrice: {
            color: theme.white,
        },
        addOnsContainer: {
            marginBottom: 20,
        },
        addOnItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: theme.backgroundSecondary,
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
        },
        selectedAddOn: {
            backgroundColor: theme.primary,
        },
        addOnName: {
            fontSize: 16,
            color: theme.textPrimary,
            fontFamily: 'Poppins-Medium',
        },
        selectedAddOnName: {
            color: theme.white,
        },
        addOnPrice: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        selectedAddOnPrice: {
            color: theme.white,
        },
        quantityContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
        },
        quantityButton: {
            backgroundColor: theme.backgroundSecondary,
            width: 40,
            height: 40,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
        },
        quantityText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.textPrimary,
            fontFamily: 'Poppins-Bold',
        },
        quantity: {
            marginHorizontal: 20,
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.textPrimary,
            fontFamily: 'Poppins-Bold',
        },
        bottomContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.card,
            padding: 20,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
        },
        priceContainer: {
            flex: 1,
        },
        totalPrice: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        addToCartButton: {
            backgroundColor: theme.primary,
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderRadius: 25,
        },
        addToCartText: {
            color: theme.white,
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'Poppins-Bold',
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backButtonText}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Food Details</Text>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={{ uri: foodDetail.image }} style={styles.foodImage} />
                
                <View style={styles.content}>
                    <Text style={styles.foodName}>{foodDetail.name}</Text>
                    <Text style={styles.foodCategory}>{foodDetail.category}</Text>
                    
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐ {foodDetail.rating}</Text>
                        <Text style={styles.reviews}>({foodDetail.reviews} reviews)</Text>
                    </View>
                    
                    <Text style={styles.description}>{foodDetail.description}</Text>
                    
                    <Text style={styles.sectionTitle}>Ingredients</Text>
                    <View style={styles.ingredientsList}>
                        {foodDetail.ingredients.map((ingredient, index) => (
                            <View key={index} style={styles.ingredientItem}>
                                <View style={styles.ingredientBullet} />
                                <Text style={styles.ingredientText}>{ingredient}</Text>
                            </View>
                        ))}
                    </View>
                    
                    <Text style={styles.sectionTitle}>Nutrition (per serving)</Text>
                    <View style={styles.nutritionContainer}>
                        <View style={styles.nutritionItem}>
                            <Text style={styles.nutritionValue}>{foodDetail.nutrition.calories}</Text>
                            <Text style={styles.nutritionLabel}>Calories</Text>
                        </View>
                        <View style={styles.nutritionItem}>
                            <Text style={styles.nutritionValue}>{foodDetail.nutrition.protein}g</Text>
                            <Text style={styles.nutritionLabel}>Protein</Text>
                        </View>
                        <View style={styles.nutritionItem}>
                            <Text style={styles.nutritionValue}>{foodDetail.nutrition.carbs}g</Text>
                            <Text style={styles.nutritionLabel}>Carbs</Text>
                        </View>
                        <View style={styles.nutritionItem}>
                            <Text style={styles.nutritionValue}>{foodDetail.nutrition.fat}g</Text>
                            <Text style={styles.nutritionLabel}>Fat</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.sectionTitle}>Size</Text>
                    <View style={styles.sizeContainer}>
                        {foodDetail.size.map((size, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.sizeOption,
                                    selectedSize === size.name && styles.selectedSize
                                ]}
                                onPress={() => setSelectedSize(size.name)}
                            >
                                <Text style={[
                                    styles.sizeName,
                                    selectedSize === size.name && styles.selectedSizeName
                                ]}>
                                    {size.name}
                                </Text>
                                <Text style={[
                                    styles.sizePrice,
                                    selectedSize === size.name && styles.selectedSizePrice
                                ]}>
                                    ${size.price}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    
                    <Text style={styles.sectionTitle}>Add-ons</Text>
                    <View style={styles.addOnsContainer}>
                        {foodDetail.addOns.map((addOn, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.addOnItem,
                                    selectedAddOns.includes(addOn.name) && styles.selectedAddOn
                                ]}
                                onPress={() => toggleAddOn(addOn.name)}
                            >
                                <Text style={[
                                    styles.addOnName,
                                    selectedAddOns.includes(addOn.name) && styles.selectedAddOnName
                                ]}>
                                    {addOn.name}
                                </Text>
                                <Text style={[
                                    styles.addOnPrice,
                                    selectedAddOns.includes(addOn.name) && styles.selectedAddOnPrice
                                ]}>
                                    +${addOn.price}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity 
                            style={styles.quantityButton}
                            onPress={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            <Text style={styles.quantityText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <TouchableOpacity 
                            style={styles.quantityButton}
                            onPress={() => setQuantity(quantity + 1)}
                        >
                            <Text style={styles.quantityText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
            <View style={styles.bottomContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.totalPrice}>${getTotalPrice().toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
