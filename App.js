import React, { useState } from 'react';
import { Button, FlatList, Dimensions, StyleSheet, Text, View } from 'react-native';
import Details from './src/components/Details';
import MyList from './src/components/MyList';
import Wrapper from './src/components/Wrapper';

export default function App() {

 
  //const [count, setCount] = useState(0);
  const dummy = [
    { title: "Unidad 1", id: "1" },
    { title: "Unidad 2", id: "2" },
    { title: "Unidad 3", id: "3" },
    { title: "Unidad 4", id: "4" }
  ]

  const screenW = Dimensions.get("screen").width
  const screenH = Dimensions.get("screen").height
  const [damagePhotos, setDamagePhotos] = useState([{ url: "https://dummyimage.com/300x300/000/fff&text=test", id: "6" }])
  const [idUnit, setUnit] = useState()
  const [name, setName] = useState()

  const handlerUnit = (selectedUnit, name) => {
    setUnit(selectedUnit)
    setName(name)
  }

  const content = idUnit ?
    <Details idProduct={idUnit} name={name}/> :
      <MyList
        arrayImages={dummy}
        width={screenW * 0.5}
        height={screenH * 0.27}
        setArrayImages={damagePhotos} 
        onGetUnit={handlerUnit}  
      />
     

  return (
    <Wrapper 
      screenTitle="Listado"
      contentRight={
        idUnit ?
        <Button title="Volver" onPress={()=>handlerUnit("")}></Button>: <Text></Text>
      }>
       <View style={styles.container}>
        {content}
      </View>
       
    </Wrapper>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
