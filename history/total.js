import React from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Total = () =>{
    return(
        <View>
          <TouchableOpacity>
          <View style = {styles.button}>
            <Text></Text>
            </View>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        marginTop: 20,
        height: 60,
        borderRadius: 6,
        marginLeft: 25,
        marginRight: 25,
        backgroundColor: '#3DE2DD'
    }
})

export default Total