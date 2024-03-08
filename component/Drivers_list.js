import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';

import { StyleSheet,View, Text, SafeAreaView,Image,FlatList,ActivityIndicator } from 'react-native';
import Analityc from './Analityc';

const Driver_list = ({el}) => {
  const [isLoad, setIsLoad] = useState(false);
  const [lapData, setLapData] = useState();


  
   // setTimeout(console.log(data),1500);  
    

 
  let url_api = 'https://api.openf1.org/v1/laps?session_key='+el.session_key+'&driver_number='+el.driver_number;
  const getF1Api = async (url_api) => {
    setIsLoad(false);1
     let result = await fetch(url_api);
     result = await result.json();
    // console.log(result);
   // await fast_lap(result);
    
    let data= result[1];
     for (let i = 0; i < result.length; i++) {
        if(data.lap_duration > result[i].lap_duration && result[i].lap_duration != null && result[i].is_pit_out_lap != true){
          data = result[i];
        //  console.log('for: '+i+' result.length: '+result.length);
          
        }
    }


    let duration_sector_1= result[1].duration_sector_1;
     for (let i = 0; i < result.length; i++) {
        if(duration_sector_1 > result[i].duration_sector_1 && result[i].duration_sector_1 != null && result[i].is_pit_out_lap != true){
           console.log(duration_sector_1);
           
          duration_sector_1 = result[i].duration_sector_1;
        //  console.log('for: '+i+' result.length: '+result.length);
          
        }
    }


    let duration_sector_2= result[1].duration_sector_2;
    for (let i = 0; i < result.length; i++) {
       if(duration_sector_2> result[i].duration_sector_2 && result[i].duration_sector_2 != null && result[i].is_pit_out_lap != true){

        duration_sector_2 = result[i].duration_sector_2;
       //  console.log('for: '+i+' result.length: '+result.length);
         
       }
   }

   let duration_sector_3= result[1].duration_sector_3;
   for (let i = 0; i < result.length; i++) {
      if(duration_sector_3 > result[i].duration_sector_3 && result[i].duration_sector_3 != null && result[i].is_pit_out_lap != true){
        duration_sector_3 = result[i].duration_sector_3;
      //  console.log('for: '+i+' result.length: '+result.length);
        
      }
  }
  data.fast_sector1 =duration_sector_1;
  data.fast_sector2 =duration_sector_2;
  data.fast_sector3 =duration_sector_3;
    setTimeout(setLapData(data),6000);
 //    console.log('записал');
  //   console.log(data);
     setTimeout(setIsLoad(true),7000);
  };

  // const fast_lap = async (jsonContent) => { 
  //   var data = jsonContent[1];
  //    for (let i = 0; i < jsonContent.length; i++) {
  //       if(data.lap_duration > jsonContent[i].lap_duration && jsonContent[i].lap_duration != null && jsonContent[i].is_pit_out_lap != true){
  //         data = jsonContent[i];
  //         console.log('for'+i);
  //       }
  //   }
  //   setLapData(data);
  //   console.log(data);
  //   };

  useEffect( () => {
    getF1Api(url_api);
  }
  ,[])

  if(isLoad == true ){ 
    return (
      <SafeAreaView style={styles.container}>
  
        <View style={styles.row}>
          <Image style={{borderWidth: 5, borderColor: '#'+el.team_colour, borderRadius: 5}} blurRadius={0} source={{width: 80,height: 100,uri:el.headshot_url}} />
          <View style={styles.column}>
            <Text >{el.full_name} - |<Text style={{color: '#'+el.team_colour}}>{el.name_acronym}</Text>| Country:  |<Text style={{color: '#'+el.team_colour}}>{el.country_code}</Text>|</Text> 
            <Text >Team: {el.team_name}</Text>
          </View>    
        </View>
  
        <View style={styles.column_border}>
       
             <Analityc el={lapData}/>
       
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );

  }

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.center}>
      <ActivityIndicator size="large"/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );







  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:'20px',
      marginBottom:'30px'
      
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
  
  export default Driver_list;