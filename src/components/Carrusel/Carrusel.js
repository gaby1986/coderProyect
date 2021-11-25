import React, { useState, useEffect } from "react"
import { Image, StyleSheet, View } from "react-native"
import Carousel from "react-native-snap-carousel"
import Colors from "../../constants/Colors"
import ImageDownloadHelper from "../../helpers/ImageDownloadHelper"

export default function CarouselImage(props) {
	const { arrayImages, height, width } = props
	const [arrayImageDownload, setArrayImageDownload] = useState([])

	useEffect(() => {
		downloadFiles()
	}, [])

	const downloadFiles = async () => {
		try {
			const urlFile = await ImageDownloadHelper({
				images: arrayImages,
				arrayGetFirstImage: false,
				width: Math.round(width),
				height: Math.round(height)
			})
			if (urlFile !== null && typeof urlFile !== "string") {
				setArrayImageDownload(urlFile)
			}
		} catch (error) {
			logSentry(error)
		}
	}

	const renderImages = ({ item }) => {
		return <Image style={{ width: width, height: height, resizeMode: "contain" }} source={{ uri: item }}></Image>
	}

	return (
		<View style={{ ...styles.viewContentMap, width: width }}>
			{arrayImageDownload.length === 0 && (
				<Image style={{ width: width, height: height }} source={require("../../../assets/parkingLoad.jpg")}></Image>
			)}
			{arrayImageDownload.length > 0 && (
				<Carousel
					removeClippedSubviews={false}
					layout={"default"}
					data={arrayImageDownload}
					sliderWidth={width}
					itemWidth={width}
					renderItem={renderImages}
				></Carousel>
			)}
		</View>
	)
}
const styles = StyleSheet.create({
	viewContentMap: {
		paddingBottom: 0,
		borderBottomWidth: 1,
		borderColor: Colors.primary
	}
})
