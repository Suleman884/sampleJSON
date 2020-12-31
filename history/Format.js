import 'react-native-gesture-handler'
import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, TextInput} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native';
import NumberFormat from 'react-number-format'




const Format = () => {
  const navigation = useNavigation()
    const [quantity, setQuantity] = useState([
        { name: 'Nestle Milk pack UHT 27z250ml 12% PK', units:' 2 units, 3 cartons', price: 1977,key: '0'},
        { name: 'Nestle yougart 8', units:' 1 units', price: 87, key: '1'},
        { name: 'Eges zafron parm', units:' 2 units', price: 30, key: '2'},
        { name: 'Prema Milk 2% grade lowfat 1602 edition', units:' 4 units', price: 445, key: '3'},
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
    function RNFormat( value ) {
        return (
          <NumberFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rs '}
            renderText={formattedValue => <Text style = {{fontSize: 22, color: 'white', fontWeight: 'bold', marginRight: 8}}>{formattedValue}</Text>} // <--- Don't forget this!
          />
        );
      }
    
      function RNativeFormat( value ) {
        return (
          <NumberFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            
            renderText={formattedValue => <Text>{formattedValue}</Text>} // <--- Don't forget this!
          />
        );
      }
    

     let totalPrice = 0
     

    quantity.forEach((item) =>{
        
        totalPrice+=item.price
        
        
        
        
    })


    const ListFooter = () => {
        return(
        <View style = {{height: 700}}>
        <TouchableOpacity>
          <View style = {styles.button}>
            <Text style = {{textAlign: 'center', marginTop: 15, fontSize: 22, color: 'white'}}>Reorder</Text>
          </View>
        </TouchableOpacity>
  
        <View style ={{ backgroundColor: '#2D44E7',  alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}}>        
           <Text style = {{fontSize: 22, color: 'white', fontWeight: 'bold', marginLeft: 10, marginRight: 20}}>TOTAL</Text>
           <Text style = {{height: 70, width: 0.5, backgroundColor: '#7A8FE3'}}></Text>
           {RNFormat(totalPrice)}
           
           </View>
 
           
           
           </View>
    
        
        
        )
    }
    const ListHeader = () => {
     return(
        <View>
        
        </View>
     )
    }
     
    
             return(
                   <View>
                   <FlatList
                   
                   data = {quantity}
                   renderItem = {({item})=>(
                       <View   style = {styles.container}>
                       <View style = {{marginHorizontal: 13}}>
                       <View>
                       <Text style = {styles.name}>{item.name}</Text>
                       </View>
                       <View style = {styles.unitsprice}>
                          <Text style = {{fontSize: 17}}>{item.units}</Text>
                          <Text style = {{fontSize: 19, fontWeight: 'bold'}}>{RNativeFormat(item.price)}</Text>
                       </View>
                       </View>
                       </View>
                       
                   )}
                   ListFooterComponent = {ListFooter}

                   ListHeaderComponent = {ListHeader}
                   />
                   </View>
                
             )
             }

const styles = StyleSheet.create({
    container: {
        
        borderWidth: 1,
        
        borderColor: '#C2CBD3',
        
        
     }, 
     name: {
         fontSize: 21.7,
         
         
         color: '#4A474F'
         
     },
     unitsprice: {
         flexDirection: 'row',
        paddingTop: 26,
        justifyContent: 'space-between',
        marginBottom: 5
        
     },
     button: {
         borderWidth: 1,
         marginTop: 20,
         height: 60,
         borderRadius: 6,
         marginVertical: 25,
         marginHorizontal: 25,
         backgroundColor: '#3DE2DD'
     },
     total: {
        borderWidth: 1,
        marginTop: 10,
        height: 70,
        marginVertical: 15,
        backgroundColor: '#2D44E7',
        borderColor: 'white',
      
        
     },
     totaldata: {
         flexDirection: 'row',
         justifyContent: 'space-around',
         marginVertical: 20,
         
         
         
     }

     
})

export default Format                                                                                                                      