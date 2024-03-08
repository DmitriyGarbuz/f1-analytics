import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet,Text,View,SafeAreaView,Button,Alert,Image,FlatList} from 'react-native';
import Driver_list from './component/Drivers_list';

const App = ()  => {
  // const TextPress = () => console.log('Text pressed 2');
  // const ButtonPressOk = () => Alert.alert('Yeh!','some massage text',[{text:"Yes", onPress: () => console.log('Oh') },{text: "No! No!", onPress: () => console.log('Oh') }]);
  // fetch('https://api.openf1.org/v1/drivers?&session_key=9472')
  // .then(response => response.json())
  // .then(jsonContent => jsonContent); 
    // Qael 9468
    // Race 9472
  const [arrDrivers, setDrivers] = React.useState(undefined);
let url_api = 'https://api.openf1.org/v1/drivers?&session_key=9472'
  const getF1Api = async (url_api) => {
     let result = await fetch(url_api);
     result = await result.json();
   //  console.log(result);
    setDrivers(result);
  };
  




React.useEffect(()=>{getF1Api(url_api);
},[])
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList data={arrDrivers} renderItem={({item}) => (
          <Driver_list el={item}/>
        )}/> 
      </View>
    

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default App;