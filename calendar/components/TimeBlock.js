import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';


const TimeButton = (props) => {
    return (
        <View>
            {
                props.mode ?
                    <TouchableOpacity onPress={props.showDatePicker}>
                        <View style={styles.wrapperStyle}>
                            <Text style={styles.timeTitle}>Date</Text>
                            <Text style={styles.timeStyle}>{props.chosenDay}</Text>
                            <Text style={styles.timeStyle}>{props.chosenDate}</Text>
                        </View>
                    </TouchableOpacity>

                    :
                    <TouchableOpacity onPress={props.showTimePicker}>
                        <View style={styles.wrapperStyle}>
                            <Text style={styles.timeTitle}>Time</Text>
                            <Text style={styles.timeStyle}>{props.chosenTime}</Text>
                        </View>
                    </TouchableOpacity>

            }
        </View>

    )
}


export default TimeButton;


const styles = StyleSheet.create({

    wrapperStyle: {
        width: 175, height: 100, backgroundColor: 'white', padding: 5, borderRadius: 6, shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 0,
        elevation: 1
    },
    timeStyle: {
        fontSize: 17, color: '#6DA3D3', marginTop: 5, fontWeight: '400'
    },

    timeTitle: {
        padding: 5, fontSize: 15, color: '#8E8E93', fontWeight: 'bold', letterSpacing: -0.24, lineHeight: 20
    },

});
