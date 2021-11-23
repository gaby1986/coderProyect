import React from "react"
import { View, StyleSheet, Text, Button} from "react-native"
 

const Details = (props) => {
	
		const {idProduct, name} = props
	return (
		<>
			<View style={styles.containerDetail}>
					<Text>{name}</Text>
			</View>

		</>
	)
}
const styles = StyleSheet.create({
	containerDetail: {
	  flexDirection: "row",
	  alignItems: 'center',
	  justifyContent: 'center',
	  paddingTop:20,
	  marginBottom:20,
	},
	
  });
  
export default Details


