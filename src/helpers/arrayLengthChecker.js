const initImages = () => {

	let cleanImageArr = []

	cleanImageArr = [...imageList].map((image, index) => ({
		...image,
		id: index,
		imageName: "The cat meows at midnight",
		clicked: false
	}))
	return cleanImageArr
}

export default initImages;