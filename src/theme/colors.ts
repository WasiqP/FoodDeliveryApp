export const Palatte = {
    black: '#000000',
    white: '#FFFFFF',
    // Blue color scheme
    primaryBlue: '#1E3A8A', // Dark blue
    secondaryBlue: '#3B82F6', // Medium blue
    lightBlue: '#DBEAFE', // Light blue
    accentBlue: '#1D4ED8', // Accent blue
    // Supporting colors
    gray: '#6B7280',
    grayLight: '#F3F4F6',
    grayDark: '#374151',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    // Food app specific colors
    foodOrange: '#F97316',
    foodRed: '#DC2626',
    foodGreen: '#16A34A',
}

export default Palatte;

export const theme = {
    background: Palatte.white,
    text: Palatte.black,
    textDim: Palatte.gray,
    primary: Palatte.primaryBlue,
    secondary: Palatte.secondaryBlue,
    tertiary: Palatte.lightBlue,
    accent: Palatte.accentBlue,
    card: Palatte.white,
    border: Palatte.lightBlue,
    success: Palatte.success,
    warning: Palatte.warning,
    error: Palatte.error,
    // Food specific
    foodOrange: Palatte.foodOrange,
    foodRed: Palatte.foodRed,
    foodGreen: Palatte.foodGreen,
    // Text colors
    textPrimary: Palatte.black,
    textSecondary: Palatte.gray,
    textLight: Palatte.grayLight,
    // Background colors
    backgroundPrimary: Palatte.white,
    backgroundSecondary: Palatte.lightBlue,
    backgroundDark: Palatte.primaryBlue,
    // Basic colors
    white: Palatte.white,
    black: Palatte.black,
    lightBlue: Palatte.lightBlue,
}

export type AppTheme = typeof theme;