import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function CustomDrawer(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView
                contentContainerStyle={{
                    paddingTop: 0,
                }}
            >
                <ImageBackground
                    source={require('../assets/image/bg.png')}
                    style={{ paddingTop: 50 }}>
                    <View
                        style={{ padding: 20 }}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Image source={require('../assets/image/image-9.png')} />
                            <TouchableOpacity onPress={() => { props.navigation.closeDrawer(); }}>
                                <AntDesign name="closecircle" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text
                            style={styles.text}>
                            John Doe
                        </Text>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="alternate-email" size={12} color="white" />
                            <Text
                                style={{
                                    ...styles.text,
                                    fontSize: 12,
                                    fontWeight: '500',
                                    marginLeft: 5
                                }}>
                                john.doe@gmail.com
                            </Text>
                        </View>


                    </View>

                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
})

export default CustomDrawer;