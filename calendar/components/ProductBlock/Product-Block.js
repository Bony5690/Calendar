import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const ProductBlock = (props) => {
    return (
        <View style={{ backgroundColor: '#ebebeb', width: 195, height: 275, margin: 5 }}>
            <TouchableOpacity 
            onPress={props.onPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ marginTop: 10, textAlign: 'center', }}>
                    <Text style={{ color: '#181818', fontSize: 22, fontFamily: 'Marion-Regular' }}>{props.title}</Text>
                    <Text style={{ color: '#181818', fontSize: 20 }}>{props.subtitle}</Text>
                </View>

                <View style={{ paddingTop: 25 }}>
                    <Image
                        style={{ width: 43, height: 175 }}
                        source={props.source} />
                </View>
            </TouchableOpacity>
        </View>
    )

}


export default ProductBlock;

