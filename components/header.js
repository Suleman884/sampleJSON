import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const Header = () => {
  return(
    <View style = {styles.header}>
      <Image 
      style = {styles.image}
        source = {require('../assests/path.png')}
      />
      <Text style = {styles.text}>Purchase History</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#085BAD',
        height: 60
    },
    image: {
        marginLeft: 25,
        marginTop: 18
    },
    text: {
        marginLeft: 20,
        marginTop: 15,
        fontSize:22,
        color: 'white'
    }
})

export default Header