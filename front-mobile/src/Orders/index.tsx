import React, { useEffect, useState } from 'react';
import {Alert, StyleSheet, Text, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { fetchOrders} from '../api';
import { Order } from '../type';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  
  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
    .then(response => {      
      setOrders(response.data)
      console.log(orders);
    })
    .catch(error => {
      console.log(error);
      Alert.alert("houve um erro na consulta");
    })
    .finally(() => {
      console.log("finally");
      setIsLoading(false);
      
    });
  }

  useEffect(()=>{
    fetchData();
  })
  /*useEffect(() =>{
    if(isFocused){
      fetchData();
    }
  }, [isFocused])*/

  

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrdersDetails', {
      order
    });
  }

  return (
      <>
    <Header></Header>
    <ScrollView style={styles.container} > 
     { isLoading ? (
       <Text>Buscando pedidos...</Text>
       
     ): (
       
      orders.map(order =>{    
        console.log(order);    
        
        <TouchableWithoutFeedback key={order.id} 
        onPress={() => handleOnPress(order)}>
          <Text>teste</Text> 
          <OrderCard order={order} />
        </TouchableWithoutFeedback>
      })
     )}
     
    </ScrollView>
    
    </>
  );
}

const styles = StyleSheet.create(
  {

    container: {
      paddingRight: '35%',
      paddingLeft: '35%'
    }

    
  }
   
);
