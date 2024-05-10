export const scoreIncrementer = (scoreState, setScoreState) => {
	const newCurrentScore = scoreState.currentScore + 1;
	const newHighScore = Math.max(newCurrentScore, scoreState.highScore);

	const newScoreState = {
		...scoreState,
		currentScore: newCurrentScore,
		highScore: newHighScore
	}

	setScoreState(newScoreState)
}

export const scoreResetter = (scoreState, setScoreState) => {
	const newScoreState = {
		...scoreState,
		currentScore: 0
	}
	setScoreState(newScoreState)
}

export const checkMaxScore = (maxScore, scoreState, setScoreState) => {
	const newScoreState = {
		...scoreState,
		maxScore: maxScore
	}
	setScoreState(newScoreState)
}