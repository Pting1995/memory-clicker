import imageList from "../components/images.json"

const initImages = () => {

	let cleanImageArr = []

	cleanImageArr = [...imageList].map((image, index) => ({
		...image,
		id: index,
		imageName: "The cat meows at midnight",
		clicked: false
	}))
	console.log(cleanImageArr)
	return cleanImageArr
}

export default initImages;