import React from "react"
import { View, Modal, TouchableWithoutFeedback, StyleSheet, Text } from "react-native"
 
 

const ModalContent = (props) => {
	const { children, onBackDropPress, style, visible = false, bodyStyle, animationType = "none", align = "center"} = props

	return (
		<Modal animationType={animationType} transparent={true} visible={visible}>
			<View style={[styles.modalBody, bodyStyle]}>
				{align !== "top" && <TouchableWithoutFeedback onPress={onBackDropPress}>
					<View style={{ flex: 1 }} />
				</TouchableWithoutFeedback>}
				<View style={[{ padding: 20 }, style]}>
					<Surface style={{ borderRadius: 12 }}>{children}</Surface>
				</View>
				{align !== "bottom" && <TouchableWithoutFeedback onPress={onBackDropPress}>
					<View style={{ flex: 1 }} />
				</TouchableWithoutFeedback>}
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalBody: {
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		flex: 1,
		justifyContent: "center"
	}
})

export default ModalContent
