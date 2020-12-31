import React from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'



const Icons = () => {
    return(
      <View style = {styles.icons}>
        <View style = {styles.icon1}>
        <TouchableOpacity>
        <Image 
        style = {styles.whatsapp}
        source = {require('../assests/whatsapp.png')}
        />
        </TouchableOpacity>
        </View>
        <View style = {styles.icon2}>
        <TouchableOpacity>
        <Image 
        style = {styles.whatsapp}
        source = {require('../assests/phone.png')}
        />
        </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    icons: {
    
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon1: {
        flex: 1,
        marginTop: 15,
        borderWidth: 1,
        height: 50,
        marginRight: 20,
        marginLeft: 16,
        borderRadius: 6,
        borderColor: '#67CBC2'
    },
    icon2: {
        flex: 1,
        borderWidth: 1,
        height: 50,
        marginRight: 16,
        marginTop: 16, 
        borderRadius: 6,
        borderColor: '#67CBC2'
    },
    whatsapp: {
       height: 40,
       width: 40,
       marginLeft: 56,
       marginTop: 5
    }
})

export default Icons