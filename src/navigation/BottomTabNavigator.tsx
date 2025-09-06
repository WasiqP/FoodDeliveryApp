import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme';
import Home from '../main/Home';
import Search from '../main/Search';
import Cart from '../main/Cart';
import Profile from '../main/Profile';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused, color, size }: any) => {
    const getIcon = () => {
        switch (name) {
            case 'Home':
                return focused ? '🏠' : '🏡';
            case 'Search':
                return focused ? '🔍' : '🔎';
            case 'Cart':
                return focused ? '🛒' : '🛍️';
            case 'Profile':
                return focused ? '👤' : '👥';
            default:
                return '❓';
        }
    };

    return (
        <View style={styles.iconContainer}>
            <Text style={[styles.icon, { fontSize: size, color }]}>
                {getIcon()}
            </Text>
        </View>
    );
};

export default function BottomTabNavigator() {
    const theme = useTheme();
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => (
                    <TabIcon 
                        name={route.name} 
                        focused={focused} 
                        color={color} 
                        size={size} 
                    />
                ),
                tabBarActiveTintColor: theme.primary,
                tabBarInactiveTintColor: theme.textSecondary,
                tabBarStyle: {
                    backgroundColor: theme.card,
                    borderTopColor: theme.border,
                    borderTopWidth: 1,
                    paddingBottom: Platform.OS === 'ios' ? insets.bottom : 5,
                    paddingTop: 5,
                    height: Platform.OS === 'ios' ? 60 + insets.bottom : 60,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    shadowColor: theme.black,
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                    marginTop: 2,
                },
                headerStyle: {
                    backgroundColor: theme.primary,
                },
                headerTintColor: theme.white,
                headerTitleStyle: {
                    fontFamily: 'Poppins-Bold',
                    fontSize: 18,
                },
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    title: 'Home',
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={Search}
                options={{
                    title: 'Search',
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Cart" 
                component={Cart}
                options={{
                    title: 'Cart',
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    title: 'Profile',
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        textAlign: 'center',
    },
});
