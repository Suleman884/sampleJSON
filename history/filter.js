import React from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'

const Filter =()=>{
    return (
        <View>
        <View style = {styles.imagename}>
        <View style = {styles.imageborder}>
        <Image 
        style = {styles.image}
          source = {require('../assests/logo.png')}
        />
        </View>
          <Text style = {styles.name}>Muhammad Imran Super Store</Text>
          </View>
          <View>
          <Text style = {styles.address}>110 B New Muslim Town, Lahore</Text>
          </View>
          </View>
    )
}

const styles = StyleSheet.create({
   imagename: {
     flexDirection: 'row',
     
     
   },
   image: {
     marginLeft: 13,
     marginTop: 27,
     marginRight: 8,
   },
   imageborder: {
     borderWidth: 1,
     height: 80,
     width: 80,
     marginTop: 20,
     marginLeft: 20,
     borderColor: '#D5DEE7'
     
   },
   name: {
     marginTop: 16,
     fontSize: 25,
     marginLeft: 6,
     marginRight: 20,
     fontWeight: 'bold',
     flexShrink: 1
     
     
   },
   address: {
     marginLeft: 105,
     marginTop: -18,
     color: '#2183E5',
     fontSize: 14,
     color: '#67CBC2'
     
   }
})

export default Filter