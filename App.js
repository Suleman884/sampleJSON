import 'react-native-gesture-handler'
import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import Header from './components/header'
import Search from './components/search'
import Orders from './components/orders'
import List from './components/List'
import Copy from './components/Copy'
import Filter from './history/filter'
import Icons from './history/icons'
import Order from './history/order'
import Format from './history/Format'
//import Total from './history/total'



// navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'



const HomeScreen = ({navigation}) => {


  return(

    
     <View>
     
     
      <Search />
      
      <List />
      </View>
      
    
  )
}

const DetailScreen = ({navigation}) =>{
  return (
    
      <View>
      <Filter />
      <Icons />
      <Order />
      <Format />
      
      </View>
    
  )
}


const Stack = createStackNavigator()


const App = () => {
  return(
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Purchase History' ,
      headerStyle: {
        backgroundColor: '#4C64B8',
        height: 70
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        marginLeft: 40,
        fontSize: 20,
        
      }
      }}/>
        <Stack.Screen name="Order Details" component={DetailScreen} options={{  
        headerStyle: {
          backgroundColor: '#4C64B8',
          height: 70
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          
          fontSize: 25,
          
        }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App