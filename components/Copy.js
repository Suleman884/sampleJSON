import 'react-native-gesture-handler'
import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, TextInput} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native';
import NumberFormat from 'react-number-format'




const Copy = () => {
  const navigation = useNavigation()
  
    const [people, setPeople] = useState([
        { name: 'Muhammad Imran Sup...', price: 30000000 , date: '31-08-2020', items: '10 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM', key: '1'},
        { name: 'My Self', price:  40000,date: '28-08-2020',items: '15 items',order: 'Order By: Usman Jamil',time:'9:30 AM',updateby: 'Updated by: Usman Jamil', key: '2'},
        { name: 'Usman Super ', price:  50000,date: '20-08-2020',items: '12 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM',updateby: '', key: '3'},
        { name: 'Melf', price:  30000,date: '11-08-2020',items: '11 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM',updateby: 'Updated by: Usman ahsan', key: '4'},
        { name: 'Khurram Super Sore', price:  48000000,date: '01-08-2020',items: '11 items',order: 'Order By: Ahsan Chaudary',time:'9:30 AM',updateby: 'Updated by: Usman ali', key: '6'},
        { name: 'Khurram Super tore', price:  48000000,date: '02-08-2020',items: '21 items',order: 'Order By: Ali Hamza',time:'9:30 AM', key: '7'},
        { name: 'Khurram Supee', price:  48000000,date: '03-08-2020',items: '22 items',order: 'Order By: Jamshaid Ali',time:'9:30 AM',updateby: '', key: '8'},
        { name: 'Muhammad Imrup...', price: 30000000, date: '31-08-2020', items: '10 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM',updateby: '', key: '9'},
        { name: 'Mel', price: 40000,date: '28-08-2020',items: '15 items',order: 'Order By: Usman Jamil',time:'9:30 AM',updateby: '', key: '10'},
        { name: 'Usmae', price:  50000,date: '20-08-2020',items: '12 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM',updateby: '', key: '11'},
        { name: 'M', price: 30000,date: '11-08-2020',items: '11 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM',updateby: '', key: '12'},
        { name: 'Khurrae', price: 48000000,date: '01-08-2020',items: '11 items',order: 'Order By: Ahsan Chaudary',time:'9:30 AM',updateby: '', key: '13'},
        { name: 'Khur Store', price: 48000000,date: '02-08-2020',items: '21 items',order: 'Order By: Ali Hamza',time:'9:30 AM',updateby: '', key: '14'},
        { name: 'Khe', price: 48000000,date: '03-08-2020',items: '20 items',order: 'Order By: Jamshaid Ali',time:'9:30 AM',updateby: '', key: '15'},
        { name: 'M', price: 30000,date: '11-08-2020',items: '11 items',order: 'Order By: Jamshaid Saleem',time:'9:30 AM',updateby: '', key: '16'},
        { name: 'Khurrae', price: 48000000,date: '01-08-2020',items: '10 items',order: 'Order By: Ahsan Chaudary',time:'9:30 AM',updateby: '', key: '17'},
        { name: 'adnan', price: 48000000,date: '02-08-2020',items: '20 items',order: 'Order By: Ali Hamza',time:'9:30 AM',updateby: '', key: '18'},
        { name: 'salman', price: 48000000,date: '03-08-2020',items: '20 items',order: 'Order By: Jamshaid Ali',time:'9:30 AM',updateby: 'Suleman', key: '19'},
        { name: 'salman', price: 48000000,date: '03-08-2020',items: '20 items',order: 'Order By: Jamshaid Ali',time:'9:30 AM',updateby: 'Suleman', key: '20'},
    ])
     
    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    searchItems = text => {
      let newData = people.filter(item => {
        const itemData = `${item.name.toUpperCase()}`;
        const textData = text.toUpperCase();
      if(text.length >0 ){
        return itemData.indexOf(textData) > -1;
      }
      });
      setData(newData)
      setValue(text)
    };
    const ListFooter = () => {
      return(
      <View style = {{height: 350}}>
      </View>
      )
  }
  const ListHeader = () => {
   return(
      <View style = {{height: 20}}>
      
      </View>
   )
  }
  let total = 0
  
      people.forEach((item) =>{
          
          total = total+1
          
          
      })
      function RNFormat( value ) {
        return (
          <NumberFormat
            value={value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rs. '}
            renderText={formattedValue => <Text>{formattedValue}</Text>} // <--- Don't forget this!
          />
        );
      }
  
             return(
                 <View>

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
                  
                 <FlatList 
                 data = {value == '' ?people: data}
                 
                 renderItem={({item})=>(
                    <View style = {styles.list}>
                     <TouchableOpacity
                    
                     onPress = {()=> navigation.navigate('Order Details')}
                     >
                    <View style = {styles.nameprice}>
                      <Text style = {styles.name}>{item.name}</Text>
                      <Text style = {styles.price}>{RNFormat(item.price)}</Text>
                   </View>
                   <View style = {styles.imagedate786}>   
                   <View style = {styles.imagedate}>
                   <Image 
                        style = {styles.image1}
                        source = {require('../assests/date_copy_4.png')}
                      />
                      <Text style = {styles.date}>{item.date}</Text>
                      <Image
                      style = {styles.clock} 
                        source = {require('../assests/clock1.png')}
                      />
                      <Text style = {styles.time1}>{item.time}</Text>
                      </View>
                      <View style = {styles.items}>
                      <Text style={styles.item1}>{item.items}</Text>
                      </View>
                      </View>
   
                      <View style = {styles.imageupdate}>
                      
                       <Image
                       style= {styles.person}
                         source={require('../assests/user_copy.png')}
                       />
                      
                       <Text style = {styles.order}>{item.order}</Text>
   
                      </View>
                      {!item.updateby == '' ? (
                        <View style = {{flexDirection: 'row'}}>
                        <Image
                        style = {{marginLeft:8,marginTop:2, height: 17, width: 17, marginBottom: 5 }}
                          source={require('../assests/user_copy.png')}
                          
                        />
                        <Text style = {{marginLeft: 10, color: '#7E7F80', fontSize: 16, marginBottom: 4}}>{item.updateby}</Text>
                        </View>
                      ) : null}
                      
                       </TouchableOpacity>
                    </View>
                 )}

               // keyExtractor = {item => item.key}
               ListFooterComponent = {ListFooter}

                   ListHeaderComponent = {ListHeader}
                 />
                 
                 </View>
             )
             }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
    },
    list: {
                
                borderWidth: 1,
                 marginTop: 15,
                 
                 marginLeft: 20,
                 marginRight: 20,
                 borderRadius: 5,
                 
                 borderColor: '#D5D3DF'
                
               
             }, 
    nameprice: {
          flexDirection: 'row',
          justifyContent: 'space-between'
    },
    imagedate: {
        flexDirection: 'row',
        marginLeft: 8
        
    },
    imagedate786: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
    imageupdate: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 16,
        marginLeft: 8,
        marginTop: 5,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 17,
        marginRight: 6,
        marginTop: 5,
        fontWeight: 'bold'
    },
    image1: {
        
        marginTop: 5,
        height: 16,
        width: 16
    },
    item1: {
        marginLeft: 50,
        marginRight: 4,
        marginTop: 3,
        color: '#7E7F80'
    },
    order: {
      marginBottom: 8,
      marginTop: 4,
      marginLeft: 9,
      color: '#7E7F80',
      fontSize: 16
    },
    person: {
      marginTop: 5,
      marginLeft: 8,
      height: 17,
      width: 17
    },
    date: {
      marginLeft: 10,
      marginTop: 3,
      color: '#7E7F80',
    },
    clock: {
      height: 25,
      width: 25,
      marginLeft: 15,
      
    },
    time1: {
      marginLeft: 3,
      marginTop: 3,
      color: '#7E7F80'
    },
    items: {
      marginRight: 4
    },
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

export default Copy                                                                                                                        