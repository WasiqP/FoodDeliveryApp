import React from 'react';
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

export default function Profile() {
    const theme = useTheme();

    const menuItems = [
        { id: '1', title: 'My Orders', icon: '📋', color: theme.primary },
        { id: '2', title: 'Favorites', icon: '❤️', color: theme.error },
        { id: '3', title: 'Payment Methods', icon: '💳', color: theme.secondary },
        { id: '4', title: 'Delivery Address', icon: '📍', color: theme.foodGreen },
        { id: '5', title: 'Notifications', icon: '🔔', color: theme.warning },
        { id: '6', title: 'Help & Support', icon: '❓', color: theme.textSecondary },
        { id: '7', title: 'About', icon: 'ℹ️', color: theme.textSecondary },
        { id: '8', title: 'Logout', icon: '🚪', color: theme.error },
    ];

    const handleMenuPress = (item: any) => {
        if (item.id === '8') {
            Alert.alert(
                'Logout',
                'Are you sure you want to logout?',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Logout', style: 'destructive', onPress: () => {} }
                ]
            );
        } else {
            Alert.alert('Coming Soon', `${item.title} feature will be available soon!`);
        }
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundPrimary,
            paddingBottom: 80, // Add padding for bottom tab bar
        },
        header: {
            backgroundColor: theme.primary,
            paddingHorizontal: 20,
            paddingVertical: 20,
            paddingTop: 40,
        },
        profileContainer: {
            alignItems: 'center',
            marginBottom: 20,
        },
        profileImage: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 15,
            borderWidth: 3,
            borderColor: theme.white,
        },
        profileName: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.white,
            marginBottom: 5,
            fontFamily: 'Poppins-Bold',
        },
        profileEmail: {
            fontSize: 16,
            color: theme.lightBlue,
            fontFamily: 'Poppins-Regular',
        },
        statsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: theme.white,
            marginHorizontal: 20,
            marginTop: -20,
            borderRadius: 15,
            paddingVertical: 20,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        statItem: {
            alignItems: 'center',
        },
        statNumber: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.primary,
            fontFamily: 'Poppins-Bold',
        },
        statLabel: {
            fontSize: 14,
            color: theme.textSecondary,
            marginTop: 5,
            fontFamily: 'Poppins-Medium',
        },
        menuContainer: {
            paddingHorizontal: 20,
            marginTop: 20,
        },
        menuItem: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme.card,
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginBottom: 10,
            borderRadius: 15,
            shadowColor: theme.black,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 2,
        },
        menuIcon: {
            fontSize: 24,
            marginRight: 15,
        },
        menuTitle: {
            flex: 1,
            fontSize: 16,
            color: theme.textPrimary,
            fontFamily: 'Poppins-Medium',
        },
        menuArrow: {
            fontSize: 18,
            color: theme.textSecondary,
        },
        versionContainer: {
            alignItems: 'center',
            paddingVertical: 20,
        },
        versionText: {
            fontSize: 14,
            color: theme.textSecondary,
            fontFamily: 'Poppins-Regular',
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileContainer}>
                    <Image 
                        source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileName}>John Doe</Text>
                    <Text style={styles.profileEmail}>john.doe@example.com</Text>
                </View>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>12</Text>
                    <Text style={styles.statLabel}>Orders</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>8</Text>
                    <Text style={styles.statLabel}>Favorites</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>4.8</Text>
                    <Text style={styles.statLabel}>Rating</Text>
                </View>
            </View>

            <ScrollView style={styles.menuContainer} showsVerticalScrollIndicator={false}>
                {menuItems.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.menuItem}
                        onPress={() => handleMenuPress(item)}
                    >
                        <Text style={styles.menuIcon}>{item.icon}</Text>
                        <Text style={styles.menuTitle}>{item.title}</Text>
                        <Text style={styles.menuArrow}>›</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.versionContainer}>
                <Text style={styles.versionText}>Chipy App v1.0.0</Text>
            </View>
        </SafeAreaView>
    );
}
