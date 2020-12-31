import 'react-native-gesture-handler'
import React, {useState, useEffect} from 'react'
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, TextInput} from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native';




const List = () => {
  const navigation = useNavigation()
    const [people, setPeople] = useState([])
     
    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    useEffect(()=> {
      fetch('https://my-json-server.typicode.com/typicode/demo/comments')
          .then(response => response.json())
          .then((json) => {
              setData(json.data)
          })
          .catch(err=>{
            console.log(err)
          })
  });

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
  
             return(
                 <View>
                  
                 <FlatList 
                 data = {data}
                 
                 renderItem={({item})=>(
                    <View style = {styles.list}>
                     <TouchableOpacity
                    
                     onPress = {()=> navigation.navigate('Order Details')}
                     >
                    <View style = {styles.nameprice}>
                      <Text style = {styles.name}>{item.body}</Text>
                      <Text style = {styles.price}>{item.price}</Text>
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
    }

})

export default List                                                                                                                         