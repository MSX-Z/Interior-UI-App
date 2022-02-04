import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

function StoryView({ item }) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image resizeMode="cover" source={item.image} style={styles.image_size} />
                <Text style={{ color: 'gray' }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image_size: {
        width: 55,
        height: 55
    }
});
export default StoryView;