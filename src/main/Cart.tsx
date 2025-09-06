import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity, 
    Image,
    Alert
} from 'react-native';
import { useTheme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

// Static cart data
const cartItems = [
    {
        id: '1',
        name: 'Chipy Classic Burger',
        price: 12.99,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    },
    {
        id: '2',
        name: 'BBQ Chicken Pizza',
        price: 15.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    },
    {
        id: '3',
        name: 'Crispy French Fries',
        price: 6.99,
        quantity: 3,
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop',
    }
];

export default function Cart() {
    const theme = useTheme();
    const [items, setItems] = useState(cartItems);
    
    const updateQuantity = (id: string, change: number) => {
        setItems(prevItems => 
            prevItems.map(item => 
                item.id === id 
                    ? { ...item, quantity: Math.max(0, item.quantity + change) }
                    : item
            ).filter(item => item.quantity > 0)
        );
    };

    const removeItem = (id: string) => {
        Alert.alert(
            'Remove Item',
            'Are you sure you want to remove this item from your cart?',
            [
                { text: 'Cancel', style: 'cancel' },
                { 
                    text: 'Remove', 
                    style: 'destructive',
                    onPress: () => setItems(prevItems => prevItems.filter(item => item.id !== id))
                }
            ]
        );
    };

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalItems = () => {
        return items.reduce((total, item) => total + item.quantity, 0);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
            paddingBottom: 80, // Add padding for bottom tab bar
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
        cartItem: {
            flexDirection: 'row',
            backgroundColor: theme.card,
            marginHorizontal: 20,
            marginVertical: 8,
            borderRadius: 15,
            padding: 15,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        itemImage: {
            width: 80,
            height: 80,
            borderRadius: 10,
            marginRight: 15,
        },
        itemInfo: {
            flex: 1,
            justifyContent: 'space-between',
        },
        itemName: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.textPrimary,
            fontFamily: 'Poppins-Bold',
        },
        itemPrice: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        quantityContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
        },
        quantityButton: {
            backgroundColor: theme.backgroundSecondary,
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
        },
        quantityText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.textPrimary,
            fontFamily: 'Poppins-Bold',
        },
        quantity: {
            marginHorizontal: 15,
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.textPrimary,
            fontFamily: 'Poppins-Bold',
        },
        removeButton: {
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: theme.error,
            width: 25,
            height: 25,
            borderRadius: 12.5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        removeButtonText: {
            color: theme.white,
            fontSize: 16,
            fontWeight: 'bold',
        },
        emptyCart: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 40,
        },
        emptyCartText: {
            fontSize: 18,
            color: theme.textSecondary,
            textAlign: 'center',
            marginBottom: 20,
            fontFamily: 'Poppins-Medium',
        },
        emptyCartSubtext: {
            fontSize: 14,
            color: theme.textSecondary,
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
        },
        checkoutContainer: {
            backgroundColor: theme.card,
            padding: 20,
            margin: 20,
            borderRadius: 15,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        totalRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
        },
        totalLabel: {
            fontSize: 16,
            color: theme.textSecondary,
            fontFamily: 'Poppins-Medium',
        },
        totalValue: {
            fontSize: 16,
            fontWeight: 'bold',
            color: theme.textPrimary,
            fontFamily: 'Poppins-Bold',
        },
        grandTotal: {
            borderTopWidth: 1,
            borderTopColor: theme.border,
            paddingTop: 10,
            marginTop: 10,
        },
        grandTotalLabel: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.textPrimary,
            fontFamily: 'Poppins-Bold',
        },
        grandTotalValue: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        checkoutButton: {
            backgroundColor: theme.primary,
            paddingVertical: 15,
            borderRadius: 25,
            marginTop: 15,
        },
        checkoutButtonText: {
            color: theme.white,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Poppins-Bold',
        },
    });

    if (items.length === 0) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Cart</Text>
                </View>
                <View style={styles.emptyCart}>
                    <Text style={styles.emptyCartText}>Your cart is empty</Text>
                    <Text style={styles.emptyCartSubtext}>
                        Add some delicious food items to get started!
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Cart ({getTotalItems()})</Text>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false}>
                {items.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                        <Image source={{ uri: item.image }} style={styles.itemImage} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>${item.price}</Text>
                            <View style={styles.quantityContainer}>
                                <TouchableOpacity 
                                    style={styles.quantityButton}
                                    onPress={() => updateQuantity(item.id, -1)}
                                >
                                    <Text style={styles.quantityText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{item.quantity}</Text>
                                <TouchableOpacity 
                                    style={styles.quantityButton}
                                    onPress={() => updateQuantity(item.id, 1)}
                                >
                                    <Text style={styles.quantityText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity 
                            style={styles.removeButton}
                            onPress={() => removeItem(item.id)}
                        >
                            <Text style={styles.removeButtonText}>×</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.checkoutContainer}>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Subtotal</Text>
                    <Text style={styles.totalValue}>${getTotalPrice().toFixed(2)}</Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Delivery Fee</Text>
                    <Text style={styles.totalValue}>$2.99</Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Tax</Text>
                    <Text style={styles.totalValue}>${(getTotalPrice() * 0.08).toFixed(2)}</Text>
                </View>
                <View style={[styles.totalRow, styles.grandTotal]}>
                    <Text style={styles.grandTotalLabel}>Total</Text>
                    <Text style={styles.grandTotalValue}>
                        ${(getTotalPrice() + 2.99 + (getTotalPrice() * 0.08)).toFixed(2)}
                    </Text>
                </View>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
