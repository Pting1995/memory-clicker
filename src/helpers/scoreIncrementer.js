const scoreIncrementer = (scoreState, setScoreState) => {
	const newScore = scoreState.currentScore + 1;
	const newHighScore = Math.max(newScore, scoreState.highScore);

	setScoreState({
		currentScore: newScore,
		highScore: newHighScore
	});
}

export default scoreIncrementer;