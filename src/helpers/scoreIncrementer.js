const scoreIncrementer = (scoreState, setScoreState) => {
	const newCurrentScore = scoreState.currentScore + 1;
	const newHighScore = Math.max(newCurrentScore, scoreState.highScore);

	const newScoreState = {
		...scoreState,
		currentScore: newCurrentScore,
		highScore: newHighScore
	}

	setScoreState(newScoreState)
}

export default scoreIncrementer;