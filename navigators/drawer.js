import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackView from './stack'
import CustomDrawer from '../components/custom_drawer';

const Drawer = createDrawerNavigator();

function DrawerView() {
    return (
        <Drawer.Navigator
            initialRouteName="main"
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 10 },
            }}
            drawerContent={(props) => (<CustomDrawer {...props}/>)}
        >
            <Drawer.Screen name="main" component={StackView} options={{ title: "Home" }} />
        </Drawer.Navigator>
    );
}

export default DrawerView;