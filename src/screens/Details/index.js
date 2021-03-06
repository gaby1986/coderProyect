import React from "react"
import { View, StyleSheet, Text, Button} from "react-native"
import Wrapper from "../../components/Wrapper"

const Details = ({ navigation, route }) => {
	
	return (
		<Wrapper 
			screenTitle="Detalle"
			contentRight={<Button title="Volver" onPress={()=> navigation.goBack()}></Button>}>
			
			<View style={styles.containerDetail}>
					<Text>Nombre:{route.params.id}</Text>
					<Text>Id de Producto:{route.params.name}</Text>
					<Text>Descripcion: {route.params.description}</Text>
			</View>

		</Wrapper>
	)
}
const styles = StyleSheet.create({
	containerDetail: {
	  flexDirection: "column",
	  alignItems: 'center',
	  justifyContent: 'center',
	  textAlign:'left',
	  paddingTop:20,
	  marginBottom:20,
	},
	
  });
  
export default Details


