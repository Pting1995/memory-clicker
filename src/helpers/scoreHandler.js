export const scoreIncrementer = (scoreState, setScoreState) => {
	const previousScore = scoreState.currentScore
	const newCurrentScore = previousScore + 1;
	const newHighScore = Math.max(newCurrentScore, scoreState.highScore);

	const newScoreState = {
		...scoreState,
		highScore: newHighScore,
		currentScore: newCurrentScore,
		priorScore: previousScore
	}

	setScoreState(newScoreState)
}

export const scoreResetter = (scoreState, setScoreState) => {
	const newScoreState = {
		...scoreState,
		currentScore: 0,
		priorScore: scoreState.currentScore
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