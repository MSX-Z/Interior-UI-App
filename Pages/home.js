import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { data, photo } from '../model/data'
import StoryView from '../components/story_item'

function HomeView({ navigation }) {
    const onPress = () => {
        navigation.navigate('detail');
    }
    return (
        <View style={styles.container}>
            <View style={{ marginHorizontal: 30 }}>
                <View style={styles.content}>
                    <Text style={styles.text}>Top Designer</Text>
                    <TouchableOpacity>
                        <Image resizeMode="cover" source={require('../assets/image/a-right.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 30, height: 80 }}>
                    <FlatList
                        horizontal
                        data={data}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <StoryView item={item} />}
                    />
                </View>
                <View style={{ ...styles.content, marginBottom: 23 }}>
                    <Text style={styles.text}>Popular Design</Text>
                    <TouchableOpacity>
                        <Image resizeMode="cover" source={require('../assets/image/a-right.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 1, alignItems: 'center'}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => onPress(0)} style={styles.image}>
                        <Image source={photo[0].image} />
                    </TouchableOpacity>
                    <View style={{flex: 1, width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View> 
                            <TouchableOpacity onPress={(onPress)} style={styles.image}>
                                <Image
                                    source={photo[1].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPress} style={styles.image}>
                                <Image
                                    source={photo[3].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={onPress} style={styles.image}>
                                <Image
                                    source={photo[2].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPress} style={styles.image}>
                                <Image
                                    source={photo[4].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'column-reverse'}}>
                            <TouchableOpacity onPress={onPress} style={styles.image}>
                                <Image
                                    source={photo[2].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPress} style={styles.image}>
                                <Image
                                    source={photo[4].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'column-reverse'}}> 
                            <TouchableOpacity onPress={onPress} style={styles.image}>
                                <Image
                                    source={photo[1].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => onPress(8)} style={styles.image}>
                                <Image
                                    source={photo[3].image}
                                    resizeMode={'cover'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        margin: 7,
    }
});

export default HomeView;