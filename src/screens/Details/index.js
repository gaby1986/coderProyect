import React, {useEffect} from "react"
import { View, StyleSheet, Text, Button} from "react-native"
import Wrapper from "../../components/Wrapper"
import { useSelector } from "react-redux"

const Details = ({ navigation, route }) => {
	
	const item = useSelector(state => state.list.selected);
	
	useEffect(() => {
		
	}, [item])

	return (
		<Wrapper 
			screenTitle="Detalle"
			contentRight={<Button title="Volver" onPress={()=> navigation.goBack()}></Button>}>
			
			<View style={styles.containerDetail}>
					<Text>Id de Producto:{item}</Text>
					<Text>Nombre:{route.params.name}</Text>
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


