
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import CalendarView from './components/calendarView';
import Product from './components/ProductBlock/assets/Wine.jpg'
import ProductBlock from './components/ProductBlock/Product-Block';
import BirthDatePicker from './components/BirthDatePicker/Birth-DatePicker';
import moment from 'moment';


const { width, height } = Dimensions.get('window');
let calendarDate = moment();

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: calendarDate.format('YYYY-MM-DD'),
      isNotVisible: true,
      showCalendar: false,
      products: [
        {
          id: 1,
          title: 'Whisker',
          subtitle: 'Red Wine',
          image: Product
        },
        {
          id: 2,
          title: 'Whisker',
          subtitle: 'Red Wine',
          image: Product
        },
        {
          id: 3,
          title: 'Whisker',
          subtitle: 'Red Wine',
          image: Product
        },
        {
          id: 4,
          title: 'Whisker',
          subtitle: 'Red Wine',
          image: Product
        },
        {
          id: 5,
          title: 'Whisker',
          subtitle: 'Red Wine',
          image: Product
        },
        {
          id: 6,
          title: 'Whisker',
          subtitle: 'Red Wine',
          image: Product
        },
      ]
    }
  }

  onShowCalendar = () => {
    this.setState({ isNotVisible: !this.state.isNotVisible, showCalendar: !this.state.showCalendar })
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
    const { selected, products, isNotVisible } = this.state;
    return (

      <View style={styles.container}>
        {/* <BirthDatePicker/> */}
        {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
          {
            products.map((product) => (

              <ProductBlock
                key={product.id}
                onPress={() => alert('test')}
                title={product.title}
                subtitle={product.subtitle}
                source={product.image}
              />

            ))

          }
        </View> */}




        {/* <Cell
       title='Whiskers'
       subtitle='Red Wine'
       source={require('./components/cell/assets/Wine.jpg')}
       /> */}
        {/* {
          this.state.isVisible &&
          <Text style={{ fontSize: 40, color: 'white' }}>{selected}</Text>
        } */}
        {
          isNotVisible &&
          <TouchableOpacity
          onPress={this.onShowCalendar}>
          <Text style={{ margin: 10, color: '#ffffff', borderColor: '#ffffff', borderWidth: 0.5, padding: 5 }}>Show Calendar</Text>
        </TouchableOpacity>

        }
        
        {
          this.state.showCalendar ?

            <CalendarView
            onPress={() => this.setState({showCalendar: false, isNotVisible: true})}
              selected={selected}
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
  // calendar: {
  //   borderTopWidth: 1,
  //   paddingTop: 5,
  //   borderBottomWidth: 1,
  //   borderColor: '#eee',
  //   height: 355,
  //   width: 355
  // },
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
