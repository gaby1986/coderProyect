import React, {useState} from "react"
import { View, FlatList, TouchableOpacity ,StyleSheet, Text, Button, TextInput} from "react-native"
import { useNavigation } from "@react-navigation/core"
import { useSelector, useDispatch } from 'react-redux';
import { SelectItem } from '../../store/actions/List.actions';

const MyList = (props) => {
	const dispatch = useDispatch();
	const { arrayImages, width, height, onGetUnit } = props
	const navigation = useNavigation()
	const [textValue, setTextValue] = useState("")
	const [thelist, setThelist] = useState(arrayImages)
	const [selectedUnit, setSelectedUnit] = useState()

	const handleModal = (imgData) => {
		setModalImg(imgData)
		setVisible(true)
	}	
	const handleChangeText = (value) => {
		setTextValue(value)
	}
	const addItem = () => {
		const item = {
			title: textValue,
			id: Math.random().toString()
		}
		setThelist([...thelist, item])
		setTextValue("")
	}
	const onDelete = (id) => {
		const imgs = [...thelist]
		const filteredImgs = imgs.filter((item) => item.id !== id)	
	 	setThelist(filteredImgs)
	}
	const onGoDetail = (item) => {
		
		dispatch(SelectItem(item.id))
		navigation.navigate("Detalle",{
			name: item.title,
			idProduct: item.id, //Pasar el id es mas para uso global es mejo usar dispatch
			description: item.description,
		});
	}

	  React.useEffect(() => {
		setThelist(arrayImages)
	}, [arrayImages])


	return (
		<>
			<View style={styles.containerButton}>
					<TextInput
						placeholder="ADD item"
						onChangeText={handleChangeText}
						value={textValue}
					/>
					<TouchableOpacity
						onPress={addItem}
						title="Add"
						style={styles.button}
					>
						<Text style={styles.text}>ADD</Text>
					</TouchableOpacity>
			</View>
			
			<FlatList
				data={thelist}
				keyExtractor={(_, index) => index.toString()}
				vertical
				renderItem={({ item }) =>
					item.id && (
						<View style={styles.container}>
								<Text>{item.title}</Text>
								<Button
									onPress={() => onDelete(item.id)}
									title="Borrar"
									color="#841584"
									accessibilityLabel=""
								/>
								<Button
									onPress={() => onGoDetail(item)}
									title="ver"
									color="green"							 
								/>
						</View>
					)
				}
			/>
			
		</>
	)
}
const styles = StyleSheet.create({
	containerButton: {
	  flexDirection: "row",
	  alignItems: 'center',
	  justifyContent: 'center',
	  paddingTop:20,
	  marginBottom:20,
	},
	container: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom:20,
		borderBottomWidth:4,
		borderColor:"#f5f5f5f5"
	  },
	text:{
		color:"#fff",
	},
	
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		backgroundColor: 'blue',
		marginLeft:10
	  },
  });
  
export default MyList


