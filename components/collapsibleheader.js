import React, { useRef } from "react";
import { View, Animated, Image, ScrollView, Text } from "react-native";

const H_MAX_HEIGHT = 430;
const H_MIN_HEIGHT = 200;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const CollapsibleHeader = ({ children }) => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;

    const headerScrollHeight = scrollOffsetY.interpolate({
        inputRange: [0, H_SCROLL_DISTANCE],
        outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
        extrapolate: 'clamp'
    });

    const scaleZoom = scrollOffsetY.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 1.05],
        extrapolate: 'extend'
    });
    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: headerScrollHeight,
                    width: "100%",
                    zIndex: 0,
                }}
            >
                <Animated.Image
                    source={require('../assets/image/bg.png')}
                    style={{
                        flex: 1,
                        transform: [{ scale: scaleZoom }]
                    }}
                    resizeMode={'cover'}
                />
            </Animated.View>
            <ScrollView
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                style={{
                    marginTop: 100
                }}
            >
                <View style={{ paddingTop: H_MAX_HEIGHT - 100 - 30, borderTopLeftRadius: 30 }}>
                    {children}
                </View>
            </ScrollView>
        </View >
    )
}

export default CollapsibleHeader;