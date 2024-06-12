import { useCallback } from "react";
import { Platform, View, StyleSheet, Text as NativeText } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Text({ children, style }) {
    const [isLoaded] = useFonts({
        "Roboto": require("../assets/fonts/Roboto.ttf"),
        "Arial": require("../assets/fonts/Arial.ttf"),
    });

    const handleOnLayout = useCallback(async () => {
        if (isLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return null;
    }

    return (
        <NativeText onLayout={handleOnLayout} style={[styles.text, style]}>
            {children}
        </NativeText>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.select({
            android: 'Roboto',
            ios: 'Arial',
            default: 'System',
          })
    },
});