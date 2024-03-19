const scoreIncrementer = (scoreState, setScoreState) => {
	let newScore = scoreState.currentScore + 1;
	if (newScore > scoreState.highScore) {
		setScoreState({
			currentScore: newScore,
			highScore: newScore
		})
	}
	else {
		setScoreState({
			...scoreState,
			currentScore: newScore
		})
	}
}

export default scoreIncrementer;