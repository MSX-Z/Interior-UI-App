import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CollapsibleHeader from '../components/collapsibleheader';
import StoryView from '../components/story_item';
import { data } from '../model/data';

function DetailView({ navigation, route }) {
    return (
        <CollapsibleHeader>
            <View style={styles.container}>
                <View
                    style={{
                        width: '50%',
                        height: 8,
                        backgroundColor: '#DEDCDC',
                        alignSelf: 'center',
                        marginBottom: 20,
                        borderRadius: 10,
                    }}
                >
                </View>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>10 best interior ideas for your living room</Text>
                <View style={styles.row}>
                    <Image
                        source={require('../assets/image/Jean-Louis.png')}
                        style={{ width: 60, height: 60 }}
                        resizeMode={'cover'} />
                    <View style={{ justifyContent: 'center', marginLeft: 15 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Jean-Louis</Text>
                        <Text style={{ color: '#BFBFBF', fontSize: 15 }}>Interior Designer</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>Interior</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.button, marginHorizontal: 15 }}>
                        <Text style={styles.text_button}>40m²</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>Ideas</Text>
                    </TouchableOpacity>
                </View>


                <Text style={{ marginBottom: 20, textAlign: 'justify' }}>
                    Nobody wants to stare at a blank wall all day long, which is why wall art is such a crucial step in the decorating process. And once you start brainstorming, the rest is easy. From gallery walls to DIY pieces like framing your accessories and large-scale photography, we've got plenty of wall art ideas to spark your creativity. And where better to look for inspiration that interior designer-decorated walls. Lorem ipsum, dolor sit amet consectetur adipisicing elit. At enim, nulla exercitationem dolorum sunt praesentium delectus illum dolor odit dolores? Nostrum cupiditate in rem velit aut, laborum vitae nesciunt, cumque ullam ex quae ut tempore distinctio at aperiam praesentium fugit soluta. Dignissimos, vitae eum veniam asperiores est, natus veritatis expedita nesciunt accusantium maxime quo aspernatur doloremque placeat nostrum sed eveniet perspiciatis aliquam quasi nam incidunt id reiciendis, dolor eligendi consequatur. Voluptatum ut est esse facilis ducimus odit possimus? Optio quos ad libero atque possimus praesentium error dignissimos non voluptatem, nostrum nisi eaque illum placeat labore explicabo omnis porro eveniet facilis!
                </Text>

                <Text style={{ fontSize: 20, marginBottom: 20 }}>Storys</Text>
                <View style={{ height: 80 }}>
                    <FlatList
                        horizontal
                        data={data}
                        keyExtractor={(item) => item.key}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => <StoryView item={item} />}
                    />
                </View>
            </View>
        </CollapsibleHeader>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white'
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#DEDCDC',
        borderWidth: 2,
        borderRadius: 5,
        width: 70,
        padding: 5
    },
    text_button: {
        fontSize: 12,
        textAlign: 'center'
    }
})

export default DetailView;