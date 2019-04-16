
import React, { Component } from 'react'
import {  StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import CalendarView from './components/calendarView';
import moment from 'moment';

let calendarDate = moment();

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: calendarDate.format('YYYY-MM-DD'),
      isVisible: false,
    }
  }

  onShowCalendar = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  onDayPress = (day) => {
    this.setState({
      selected: day.dateString
    });
  }

  updateCalendarDate = () => {
    this.setState({
      calendarDate: calendarDate.format('YYYY-MM-DD')
    });
  }
  render() {
    const { selected, } = this.state;
    return (

      <View style={styles.container}>

        {
          this.state.isVisible &&
          <Text style={{ fontSize: 40, color: 'white' }}>{selected}</Text>
        }
        <TouchableOpacity
          onPress={this.onShowCalendar}>
          <Text style={{margin: 10, color: '#ffffff', borderColor: '#ffffff', borderWidth: 0.5, padding: 5}}>Show Calendar</Text>
        </TouchableOpacity>

        {
          this.state.isVisible ?

            <CalendarView
              markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
              current={selected}
              minDate={calendarDate.format('YYYY-MM-DD')}
              onDayPress={this.onDayPress}
            />
            :
            null
        }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7a4796',
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 355,
    width: 355
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
