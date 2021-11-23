import React, { useRef } from "react"
import { SafeAreaView, Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native"

const Wrapper = (props) => {

    const {screenTitle, contentRight} = props

    return (
        <>

            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback>
                    <View>
                      <Text style={styles.title}>{screenTitle}</Text>
                      {contentRight}
                    </View>
                </TouchableWithoutFeedback>     
            </SafeAreaView>
            {props.children}
        </>
    )

}

const styles = StyleSheet.create({
    container: {
      marginTop:20,
      paddingVertical:10,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        color:"#fff",
        fontSize:25,
        paddingVertical:10,
    }
  });


export default Wrapper