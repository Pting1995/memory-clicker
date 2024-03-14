const scoreResetter = (scoreState, setScoreState) => {
	const resetScoreState = scoreState
	resetScoreState.currentScore = 0
	setScoreState(resetScoreState)
}

export default scoreResetter;