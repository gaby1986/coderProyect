import React, { useState } from 'react';
import { Dimensions, StyleSheet,View} from 'react-native';
import MyList from '../../components/MyList'
import Wrapper from '../../components/Wrapper';
import { useSelector } from 'react-redux';



const List = () => {
 
const screenW = Dimensions.get("screen").width
const screenH = Dimensions.get("screen").height
const [damagePhotos, setDamagePhotos] = useState([{ url: "https://dummyimage.com/300x300/000/fff&text=test", id: "6" }])
 
const list1 = useSelector(state => state.list.list);
 

  return (
    <Wrapper 
      screenTitle="Listado"
      >
       <View style={styles.container}>
          <MyList
            arrayImages={list1}
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