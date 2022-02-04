import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeView from '../Pages/home'
import DetailView from '../Pages/detail'
import HeaderView from '../components/header'

const header = [
    {
        ic_1: require('../assets/image/ic-menu.png'),
        ic_2: require('../assets/image/ic-search.png'),
        ic_3: require('../assets/image/image-9.png'),
    },
    {
        ic_1: require('../assets/image/a-left.png'),
        ic_2: require('../assets/image/ic-heart.png'),
        ic_3: require('../assets/image/ic-share.png'),
    }
]

const Stack = createStackNavigator();

function StackView({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="home"
            screenOptions={{
                cardOverlayEnabled: false,
                headerStyle: { elevation: 0 },
                ...TransitionPresets.SlideFromRightIOS,
                headerShown: true,
                headerTransparent: true
            }}
            headerMode="float"
        >
            <Stack.Screen name="home" component={HomeView}
                options={{
                    headerTitle: () => (<HeaderView navigation={navigation} icHeader={header[0]} />),
                    cardStyle: { paddingTop: 110, paddingBottom: 30 }
                }} />
            <Stack.Screen name="detail" component={DetailView}
                options={{
                    headerTitle: () => (<HeaderView navigation={navigation} icHeader={header[1]} />),
                    headerLeft: null
                }}
            />
        </Stack.Navigator>
    );
}

export default StackView;