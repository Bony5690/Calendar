import React from 'react';
import { Calendar } from 'react-native-calendars'
import {LocaleConfig} from 'react-native-calendars';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const CalendarView = (props) => {
  LocaleConfig.locales['fr'] = {
    monthNames: ['January','February','March','April','May','June','August','September','October','November','December'],
    dayNames: ['Sunday','Monday','Thursday','Wednesday','Thursday','Friday','Saturday'],
    dayNamesShort: ['SU','MO','TU','WE','TH','FR','SA']
  };
  LocaleConfig.defaultLocale = 'fr';
    return (
        <View>
             <Calendar
           hideExtraDays
         current={props.current}
          onDayPress={props.onDayPress}
          minDate={props.minDate}
          maxDate={props.maxDate}
          theme={{
            textSectionTitleColor:  '#646973',
            textDayHeaderFontSize: 18,
            textMonthFontWeight: '700',
            dayTextColor: '#7a4796',
            todayTextColor: '#7a4796',
            selectedDayTextColor: 'white',
            textDayFontSize: 20,
            monthTextColor: '#000000',
            textDisabledColor: 'gray',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              arrowImage: {
                width: 50,
                height: 50,
                tintColor: '#7a4796'
              },
              arrow:{
                padding: 0
              },
              dayHeader:{
                fontWeight: '800',
                fontSize: 18,
              }
            },
            'stylesheet.day.basic': {
              selected: {
                borderRadius: 0,
                backgroundColor: '#878c96'
              }
            }
        
          }}
          
          style={styles.calendar}
          markedDates={props.markedDates}

        /> 
        </View>
    )
  
}


const styles = StyleSheet.create({
  
  calendar: {
    height: 375,
    width: 355
  }
});


export default CalendarView;
