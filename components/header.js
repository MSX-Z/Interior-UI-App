import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';


function HeaderView({ navigation, icHeader }) {

    const route = useRoute();

    return (
        <View style={styles.container}>
            <View style={styles.left_header}>
                <TouchableOpacity onPress={() => (route.name === 'home') ? navigation.openDrawer() : navigation.goBack()}>
                    <Image source={icHeader.ic_1} />
                </TouchableOpacity>
            </View>
            <View style={styles.right_header}>
                <TouchableOpacity>
                    <Image source={icHeader.ic_2} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={icHeader.ic_3} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        backgroundColor: 'transparent'
    },
    left_header: {
        width: '75%',
        justifyContent: 'center',
    },
    right_header: {
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})

export default HeaderView;