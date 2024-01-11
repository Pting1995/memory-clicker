import imageList from "../components/images.json"

const initImages = (setImageState) => {
	var cleanImageArr = []
	cleanImageArr = [...imageList].map((image, index) => ({
		...image,
		id: index,
		imageName: "The cat meows at midnight",
		clicked: false
	}))
	setImageState(cleanImageArr)
}

export default initImages;