import React from 'react';
import { Calendar } from 'react-native-calendars'
import { LocaleConfig } from 'react-native-calendars';
import Arrow from './Arrow';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';

const { width } = Dimensions.get('window');

const CalendarView = (props) => {
  LocaleConfig.locales['fr'] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'],
    dayNames: ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
  };
  LocaleConfig.defaultLocale = 'fr';




  renderArrow = (direction) => {
    if (direction === 'left') {
      return <Image
        style={{ tintColor: '#7a4796' }}
        source={require('./arrow.png')} />
    } else {
      return <Image
        style={{ tintColor: '#7a4796' }}
        source={require('./rightArrow2.png')} />
    }
  }
  return (
    <View>
      <TouchableWithoutFeedback
        style={{ alignContent: 'flex-end' }}
        onPress={props.onPress}>
        <Text style={{ color: 'white', fontSize: 25, left: 315, top: -170, position: 'absolute', }}>X</Text>
      </TouchableWithoutFeedback>

      <Calendar
        hideExtraDays
        current={props.current}
        onDayPress={props.onDayPress}
        renderArrow={this.renderArrow}
        minDate={props.minDate}
        maxDate={props.maxDate}
        theme={{
          textSectionTitleColor: '#646973',
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
              marginTop: 0,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: 'white',
            },
            arrowImage: {
              width: 50,
              height: 50,
              tintColor: '#7a4796'
            },
            arrow: {
              padding: 0
            },
            dayHeader: {
              fontWeight: '800',
              fontSize: 18,
            },
            header: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
              alignItems: 'center',
              backgroundColor: 'white'
            }
          },
          'stylesheet.day.basic': {
            selected: {
              borderRadius: 0,
              backgroundColor: '#B0B0B0',
            },
            selectedText: {
              fontWeight: '700',
              color: '#ffffff'
            }
          },
          'stylesheet.calendar.main': {
            container: {
              padding: 12,

            }
          }
        }}

        style={styles.calendar}
        markedDates={{ [props.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}

      />
    </View>
  )

}


const styles = StyleSheet.create({

  calendar: {
    width: width,
    paddingHorizontal: 12,
  }
});


export default CalendarView;
