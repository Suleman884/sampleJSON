import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'





const Order = () => {
  

  const [quantity, setQuantity] = useState([
    { name: 'Nestle Milk pack UHT 27z250ml', units:' 2 units, 3 cartons', price: 1977,key: '0'},
    { name: 'Nestle yougart 8', units:' 1 units', price: 87, key: '1'},
    { name: 'Eges zafron parm', units:' 2 units', price: 30, key: '2'},
    { name: 'Nestle yougart 81', units:' 4 units', price: 80, key: '3'},
    { name: 'Nestle yougart 822', units:' 3 units', price: 200, key: '4'},
    { name: 'Nestle yougart 83', units:' 12 units', price: 20, key: '5'},
    { name: 'Nestle yougart 84', units:' 11 units', price: 79, key: '6'},
    { name: 'Nestle yougart 85', units:' 12 units', price: 37, key: '7'},
    { name: 'Nestle yougart 9', units:' 15 units', price: 388, key: '8'},
    { name: 'Nestle yougart 7', units:' 17 units', price: 30, key: '9'},
    { name: 'Nestle yougart 99', units:' 15 units', price: 388, key: '10'},
    { name: 'Nestle yougart 20', units:' 17 units', price: 30, key: '11'},
    { name: 'Nestle yougart 7', units:' 17 units', price: 30, key: '12'},
    { name: 'Nestle yougart 99', units:' 15 units', price: 388, key: '13'},
    { name: 'Nestle yougart 20', units:' 17 units', price: 30, key: '14'},
    
  
  ])
  
  
  let itemsum = 0
  
      quantity.forEach((item) =>{
          
          itemsum = itemsum+1
          
          
      })


  return(
      <TouchableOpacity>
    <View style = {styles.orders}>
    <View style = {styles.total}>
       <Text style = {styles.text}>Order Items: </Text>
       <Text style = {styles.sum}>{itemsum}
       </Text>
       </View>
       
       
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    orders: {
        flexDirection: 'row',
        borderWidth: 1,
        height: 60,
        marginTop: 25,
        backgroundColor: '#E1EAF3',
        borderColor: '#D5D3DF',
        backgroundColor: '#E5EAED',
    },
    text: {
        marginTop: 18,
        marginLeft: 15,
        fontSize: 18,
        color: '#4D5756'

    },
    image: {
        marginLeft: 180,
        marginTop: 10
    },
    total: {
      flexDirection: 'row'
    },
    sum: {
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 17
    }
})

export default Order