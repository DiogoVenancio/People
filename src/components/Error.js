import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Error = (props) => {
    return (
        <View>
            <Image source={{ uri: "https://i.ytimg.com/vi/Xw1C5T-fH2Y/maxresdefault.jpg" }} style={styles.image} />
            <Text style={styles.error}>Oops... something happended =(</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    error: {
        color: "red",
        fontSize: 20,
        alignSelf: "center",
    },
    image: {
        aspectRatio: 1,
        width: 300,
        height: 300,
        borderRadius: 200,
        alignSelf: "center",
    }
});

export default Error;