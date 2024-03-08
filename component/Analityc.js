import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';

import { StyleSheet,View, Text, SafeAreaView,Image,FlatList,ActivityIndicator } from 'react-native';


const Analityc = ({el}) => {
 
   // Серйозная математика
    let minutes = Math.trunc(el.lap_duration/60);
   // console.log('minutes '+minutes);
    let secondes = el.lap_duration - (minutes*60);
    secondes=secondes.toFixed(3);
   // console.log('secondes '+secondes);
    let time = minutes+'.'+secondes;

    let possible = el.fast_sector1 + el.fast_sector2 + el.fast_sector3
       // Серйозная математика
       let possible_minutes = Math.trunc(possible/60);
       // console.log('minutes '+minutes);
        let possible_secondes = possible - (possible_minutes*60);
        possible_secondes=possible_secondes.toFixed(3);
       // console.log('secondes '+secondes);
        let possible_time = possible_minutes+'.'+possible_secondes;

        let increase_minutes = minutes-possible_minutes;
        let increase_secondes = secondes-possible_secondes;
        increase_secondes=increase_secondes.toFixed(3);
        let increase = increase_minutes+'.'+increase_secondes;
 
    return (

  
        <View>
            <Text >Fast lap: {time}</Text>
            <Text >Fast Sector 1: {el.fast_sector1} Fast Sector 2: {el.fast_sector2} Fast Sector 3: {el.fast_sector3}</Text>
            <Text >possible lap:{possible_time}</Text>
            <Text >increase:{increase}</Text>
          <StatusBar style="auto" />
        </View>
       

    );

  


  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:'20px',
      
    },
    center: {
      alignItems: 'center',
      justifyContent:'center'
    },
    row: {
      width: 400,
      padding: 5,
      margin: 5,
      flexDirection: 'row',
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 2,
      justifyContent:'space-around'
    },
    column: {
      flexDirection: 'column'
    },
    column_border: {
      width: 400,
      padding: 5,
      margin: 5,
      flexDirection: 'column',
      borderRadius: 5,
      borderColor: 'black',
      borderWidth: 2,
      justifyContent:'space-around'
    }
    // button: {
    //    marginTop:'25px',
    //    backgroundColor: '#fff',
    // },
  });
  
  export default Analityc;