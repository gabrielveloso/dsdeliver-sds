import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';
import OrderCard from '../OrderCard';
import { Order } from '../type';

type Props = {
    route: {
        params: {
            order: Order;
        }
    }
}

export default function OrderDetails({route}: Props) {
const {order} = route.params;
const navigation = useNavigation();

const handlerOnCancel = () => {
    navigation.navigate('Orders');
}

const handleConfirmDelivery = () =>{
    confirmDelivery(order.id)
    .then(()=>{
        Alert.alert(`Pedido ${order.id} confirmado!`)
        navigation.navigate('Orders');
    })
    .catch(()=>{
        Alert.alert(`Erro ao confirmar pedido ${order.id}!`);
    })
}

  return (
      
   <View style={styles.container}>
       <OrderCard order={order}></OrderCard>
       <RectButton style={styles.button}>
           <Text style={styles.buttonText}>Iniciar Navegação</Text>
       </RectButton>
       <RectButton style={styles.button}>
           <Text style={styles.buttonText}>Confirmar Entrega</Text>
       </RectButton>
       <RectButton style={styles.button} onPress={handlerOnCancel}>
           <Text style={styles.buttonText}>Cancelar</Text>
       </RectButton>
       
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
      },
      button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
      }
});
