const scoreResetter = (scoreState, setScoreState) => {
	const newScoreState = {
		...scoreState,
		currentScore: 0
	}
	setScoreState(newScoreState)
}

export default scoreResetter;