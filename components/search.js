import React from 'react'
import {View, Text, Image, StyleSheet, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Search = () => {
  return(
    <TouchableOpacity>
    <View style = {styles.search}>
  
       <Image 
       style = {styles.image}
         source = {require('../assests/shape.png')}
       />
       <TextInput 
       style = {styles.placeholder}
        placeholder = 'Store Name'
        placeholderTextColor='#DCDBDF'
        onChangeText = {(text) => searchItems(text)}
        
        >
        
       </TextInput>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        borderWidth: 1,
        height: 63, 
        marginTop: 20,
        marginLeft: 20,
        marginRight:20,
        borderRadius:5,
        borderColor: '#D5D3DF'
    },
    image: {
        marginTop: 17,
        marginLeft: 15,
        height: 28,
        width: 28
    },
    placeholder: {
        fontSize: 20,
        marginLeft: 7,
        width:300, 
       
        
    }
})

export default Search