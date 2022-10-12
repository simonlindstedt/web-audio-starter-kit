const createAudioContext = () => {
	try {
		const audioContext = new AudioContext();
		audioContext.suspend();
		return { context: audioContext, output: audioContext.destination };
	} catch (e) {
		console.error(e);
		return null;
	}
};

export { createAudioContext };
