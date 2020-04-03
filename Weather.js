import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";

import { MaterialCommunityIcons, onicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// https://uigradients.com/#OrangeFun
const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "thunder!!!! storm!!!!",
        subtitle: "scary",
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "what is drizzle????",
        subtitle: "I don't know",
    },
    Rain: {
        iconName: "weather-lightning-rainy",
        gradient: ["#2980B9", "#6DD5FA"],
        title: "RAINY!! :(",
        subtitle: "I hate it.",
    },
    Clouds: {
        iconName: "cloud",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "there's many many cloud",
        subtitle: "it will be rain",
    },
    Snow: {
        iconName: "snowman",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "snow~~~~~~~~~~~~~~~",
        subtitle: "make snowman",
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FDC830", "#F37335"],
        title: "Sunny Day",
        subtitle: "go outside, enjoy picnic"
    }
};

export default function Weather({ temp, condition }) {
    return <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}>
            <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
            <Text style={styles.temp}>{temp}°C</Text>
        </View>
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
    </LinearGradient>
}

// https://openweathermap.org/weather-conditions
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds']).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 32,
        color: "white",
    },
    condition: {
        fontSize: 52,
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
         color: "white",
         fontSize: 22
    },
    textContainer: {
        paddingHorizontal: 30,
        alignItems: "flex-start"
    }
});