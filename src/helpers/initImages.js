import imageList from "../components/images.json"

const initImages = (setImageState) => {
	var imageState = []
	imageState = [...imageList].map((image, index) => ({
		...image,
		id: index,
		imageName: "The cat meows at midnight",
		clicked: false
	}))
	setImageState(imageState)
}

export default initImages;