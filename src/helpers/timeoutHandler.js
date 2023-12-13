const timeoutHandler = (func, updateVar, time) => {
	const timer = setTimeout(() => {
		func(updateVar)
	}, time);
	// prevent memory leaks
	return () => {
		clearTimeout(timer);
	};
}

export default timeoutHandler;