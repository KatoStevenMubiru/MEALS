import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({restaurant = {}}) => {

    const {name ='Restaurant 1',
     photos = ['https://partiesenevents.com/wp-content/uploads/2018/09/catering-services-for-weddings-in-Uganda-wedding-introduction-kuhingira-caterers-in-Kampala-Uganda-is-2krestaurant-uganda5.jpg'],
      icon,
       address = '122 Kampala Highway',
        isOpenNow = true, 
        rating = 4, 
        isClosedTempolary
    } = restaurant;


    return <> 
    <Card elevation={5} style={styles.card}>
      <Card.Cover key ={name} style={styles.cover} source = {{uri :photos[0]}} />
<Text style={styles.title}>{name}</Text>
    </Card>
    
    </>
}

const styles = StyleSheet.create({

cover:{
    padding: 20,
    backgroundColor: 'white'
},
card:{
    backgroundColor: 'white'
},

title:{
padding : 16
}

})


