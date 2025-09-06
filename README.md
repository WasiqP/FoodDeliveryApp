# Chipy Food App

A modern React Native food delivery app for the Chipy fast food restaurant chain.

## Features

- **Home Screen**: Browse food categories and featured items
- **Search**: Find food items by name, category, or description
- **Cart**: Manage your order with quantity controls and pricing
- **Profile**: User account management and app settings
- **Food Details**: Detailed view with ingredients, nutrition, and customization options

## Design

- **Color Scheme**: Blue theme with dark blue (#1E3A8A), medium blue (#3B82F6), and light blue (#DBEAFE)
- **Typography**: Poppins font family throughout the app
- **Logo**: Custom Chipy logo (chipylogo.jpg)

## Screens

### Main Screens
- **Home**: Food categories, featured items, and search
- **Search**: Search functionality with popular searches
- **Cart**: Shopping cart with quantity controls and checkout
- **Profile**: User profile and app settings

### Authentication Screens
- **Splash**: App loading screen with Chipy branding
- **Login**: User login with email/password
- **SignUp**: User registration

### Detail Screens
- **FoodDetail**: Individual food item details with customization options

## Navigation

The app uses React Navigation with:
- Stack Navigator for main navigation flow
- Bottom Tab Navigator for main app screens
- Native Stack Navigator for screen transitions

## Installation

1. Install dependencies:
```bash
npm install
```

2. For iOS:
```bash
cd ios && pod install && cd ..
```

3. Run the app:
```bash
# Android
npm run android

# iOS
npm run ios
```

## Dependencies

- React Native 0.81.1
- React Navigation 6.x
- React Native Safe Area Context
- TypeScript

## Project Structure

```
src/
├── assets/
│   └── images/
│       └── chipylogo.jpg
├── authentication/
│   ├── Login.tsx
│   └── SignUp.tsx
├── main/
│   ├── Home.tsx
│   ├── Search.tsx
│   ├── Cart.tsx
│   ├── Profile.tsx
│   └── FoodDetail.tsx
├── navigation/
│   └── BottomTabNavigator.tsx
├── onboarding/
│   ├── Splash.tsx
│   ├── GetStarted.tsx
│   ├── Onboarding01.tsx
│   ├── Onboarding02.tsx
│   └── Onboarding03.tsx
└── theme/
    ├── colors.ts
    └── index.ts
```

## Features in Detail

### Home Screen
- Food categories with emoji icons
- Featured food items with images and ratings
- Search functionality
- Add to cart buttons

### Cart Screen
- Item quantity controls
- Price calculations with tax and delivery
- Remove items functionality
- Checkout button

### Search Screen
- Real-time search filtering
- Popular search suggestions
- Category-based filtering
- Empty state handling

### Profile Screen
- User statistics (orders, favorites, rating)
- Menu options for account management
- App version information

### Food Detail Screen
- High-quality food images
- Detailed descriptions and ingredients
- Nutrition information
- Size and add-on options
- Quantity selection
- Dynamic pricing

## Static Data

The app currently uses static data for:
- Food items with images, prices, and descriptions
- Categories with icons and colors
- User profile information
- Cart items

## Future Enhancements

- Backend integration for real data
- User authentication with real API
- Payment processing
- Order tracking
- Push notifications
- Offline support

## Development

The app is built with TypeScript and follows React Native best practices. All components use the centralized theme system for consistent styling and colors.

## License

This project is proprietary to Chipy Food Restaurant.