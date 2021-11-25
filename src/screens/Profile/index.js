import React from "react"
import { View, StyleSheet, Text, Button} from "react-native"
import Wrapper from "../../components/Wrapper"

const Profile = ({ navigation, route }) => {
	
	return (
		<Wrapper 
			screenTitle="Mi perfil"
			contentRight={<Button title="Volver" onPress={()=> navigation.goBack()}></Button>}>
			
			<View style={styles.containerDetail}>
					<Text>Nombre:</Text>
					<Text>Apellido:</Text>
					<Text>Edad:</Text>
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
  
export default Profile


