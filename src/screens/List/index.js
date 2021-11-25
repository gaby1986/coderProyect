import React, { useState } from 'react';
import { Dimensions, StyleSheet,View} from 'react-native';
import MyList from '../../components/MyList'
import Wrapper from '../../components/Wrapper';

const List = () => {
 
const dummy = [
  { title: "Unidad 1", id: "1", description:"da dasad" },
  { title: "Unidad 2", id: "2", description:"asdas d" },
  { title: "Unidad 3", id: "3", description:"asdas da" },
  { title: "Unidad 4", id: "4", description:"dasd asd" }
]

const screenW = Dimensions.get("screen").width
const screenH = Dimensions.get("screen").height
const [damagePhotos, setDamagePhotos] = useState([{ url: "https://dummyimage.com/300x300/000/fff&text=test", id: "6" }])
const [idUnit, setUnit] = useState()
const [name, setName] = useState()

/**const handlerUnit = (selectedUnit, name) => {
  setUnit(selectedUnit)
  setName(name)
}*/



  return (
    <Wrapper 
      screenTitle="Listado"
      >
       <View style={styles.container}>
          <MyList
            arrayImages={dummy}
            width={screenW * 0.5}
            height={screenH * 0.27}
            setArrayImages={damagePhotos} 
          />
          
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

export default List