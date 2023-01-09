import React from 'react';
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantInfo } from '../../components/restaurants-info-card';

export const Restaurantscreens = () => (


<SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
         <RestaurantInfo/>
        </View>
      </SafeAreaView>



)
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
      padding:30,
    },
    search: {
      padding: 30,
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "white",
    },
  });