import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TimeButton from '../TimeBlock';
import moment from 'moment';


export default class BirthDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: '',
      chosenDay: '',
      chosenTime: '',
      isDateTimePickerVisible: false,
      isTimePickerVisible: false

    };
  }

  showOrHideTime = (timeType, val) => {
    this.setState({ [timeType]: val });
  }

  hideTime = (timeType, val) => {
    this.setState({ [timeType]: val });
  }

  //if DatePicker is showing set the values for date 
  handleTimePicked = (date) => {
    if (this.state.isDateTimePickerVisible) {
      this.setState({ chosenDate: moment(date).format(' MMMM, D YYYY'), chosenDay: moment(date).format(' dddd ') })
      this.showOrHideTime('isDateTimePickerVisible', false)
    }
    else {
      // else if TimePicker is true set the values for time
      if (this.state.isTimePickerVisible) {
        this.setState({ chosenTime: moment(date).format(' h:mm a') })
        this.showOrHideTime('isTimePickerVisible', false)

      }
    }
  }

  render() {
    const { chosenDate, chosenTime, chosenDay } = this.state;

    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TimeButton
            chosenDay={chosenDay}
            chosenDate={chosenDate}
            showDatePicker={() => this.showOrHideTime('isDateTimePickerVisible', true)}
            mode={true} />

          <TimeButton
            chosenTime={chosenTime}
            showTimePicker={() => this.showOrHideTime('isTimePickerVisible', true)}
            mode={false} />
        </View>


        <DateTimePicker

          mode='date'
          titleStyle={{ fontSize: 15, color: '#8E8E93', fontWeight: 'bold', letterSpacing: -0.24, lineHeight: 20 }}
          hideTitleContainerIOS={true}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleTimePicked}
          onCancel={() => this.showOrHideTime('isDateTimePickerVisible', false)}
        />

        <DateTimePicker
          backdropColor='white'
          hideTitleContainerIOS={true}
          titleIOS='Pick a time'
          titleStyle={{ fontSize: 15, color: '#8E8E93', fontWeight: 'bold', letterSpacing: -0.24, lineHeight: 20 }}
          mode='time'
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this.handleTimePicked}
          onCancel={() => this.showOrHideTime('isTimePickerVisible', false)}
        />

      </View>
    );
  }

}


