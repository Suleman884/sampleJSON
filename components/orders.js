import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

const Orders = () => {


  const [people, setPeople] = useState([
    { name: 'Muhammad Imran Sup...', price: 'Rs. 30,000,000', date: '31-08-2020', items: '10 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '1'},
    { name: 'My Self', price: 'Rs. 40,000',date: '28-08-2020',items: '15 items',order: 'Order By: Usman Jamil',time:'9:30 AM', key: '2'},
    { name: 'Usman Super ', price: 'Rs. 50,000',date: '20-08-2020',items: '12 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '3'},
    { name: 'Melf', price: 'Rs. 30,000',date: '11-08-2020',items: '11 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '4'},
    { name: 'Khurram Super Sore', price: 'Rs. 48,000,000',date: '01-08-2020',items: '11 items',order: 'Order By: Ahsan Chaudary',time:'9:30 AM', key: '6'},
    { name: 'Khurram Super tore', price: 'Rs. 48,000,000',date: '02-08-2020',items: '21 items',order: 'Order By: Ali Hamza',time:'9:30 AM', key: '7'},
    { name: 'Khurram Supee', price: 'Rs. 48,000,000',date: '03-08-2020',items: '22 items',order: 'Order By: Jamshaid Ali',time:'9:30 AM', key: '8'},
    { name: 'Muhammad Imrup...', price: 'Rs. 30,000,000', date: '31-08-2020', items: '10 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '9'},
    { name: 'Mel', price: 'Rs. 40,000',date: '28-08-2020',items: '15 items',order: 'Order By: Usman Jamil',time:'9:30 AM', key: '10'},
    { name: 'Usmae', price: 'Rs. 50,000',date: '20-08-2020',items: '12 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '11'},
    { name: 'M', price: 'Rs. 30,000',date: '11-08-2020',items: '11 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '12'},
    { name: 'Khurrae', price: 'Rs. 48,000,000',date: '01-08-2020',items: '11 items',order: 'Order By: Ahsan Chaudary',time:'9:30 AM', key: '13'},
    { name: 'Khur Store', price: 'Rs. 48,000,000',date: '02-08-2020',items: '21 items',order: 'Order By: Ali Hamza',time:'9:30 AM', key: '14'},
    { name: 'Khe', price: 'Rs. 48,000,000',date: '03-08-2020',items: '20 items',order: 'Order By: Jamshaid Ali',time:'9:30 AM', key: '15'},
    { name: 'M', price: 'Rs. 30,000',date: '11-08-2020',items: '11 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '16'},
    { name: 'Khurrae', price: 'Rs. 48,000,000',date: '01-08-2020',items: '10 items',order: 'Order By: Ahsan Chaudary',time:'9:30 AM', key: '17'},
    { name: 'adnan', price: 'Rs. 48,000,000',date: '02-08-2020',items: '20 items',order: 'Order By: Ali Hamza',time:'9:30 AM', key: '18'},
    { name: 'salman', price: 'Rs. 48,000,000',date: '03-08-2020',items: '20 items',order: 'Order By: Jamshaid Ali',time:'9:30 AM', key: '19'},
])

  let total = 0
  
      people.forEach((item) =>{
          
          total = total+1
          
          
      })

  return(
    <View style = {styles.orders}>
    <View style = {styles.totalorders}>
    <Text style = {styles.total}>{total}</Text>
       <Text style = {styles.text}>Orders</Text>
       </View>
       
       <Image 
         
         style = {styles.image}
         source = {require('../assests/rounded_rectangle_4.png')}
       />
       
    </View>
  )
}

const styles = StyleSheet.create({
    orders: {
        flexDirection: 'row',
        borderWidth: 1,
        height: 56,
        marginTop: 25,
        backgroundColor: '#E5EAED',
        borderColor: '#D5D3DF'
    },
    text: {
        marginLeft: 6,
        marginTop: 16,
        fontSize: 18,
        
    },
    image: {
        marginLeft: 216,
        marginTop: 18,
        height: 20,
        width: 23
    },
    total: {
      marginTop: 16,
      marginLeft: 18,
      fontSize: 18
    },
    totalorders: {
      flexDirection: 'row'
    }
})

export default Orders