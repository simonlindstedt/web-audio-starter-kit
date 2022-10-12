// General variables
const startButton = document.querySelector('button.start');

// Audio context
import { createAudioContext } from './helpers';

const audio = createAudioContext();

const master = audio.context.createGain();

master.gain.setValueAtTime(0.3, audio.context.currentTime);

master.connect(audio.output);

startButton.addEventListener('click', () => {
	switch (audio.context.state) {
		case 'running':
			audio.context.suspend();
			break;
		case 'suspended':
			audio.context.resume();
			break;
	}
});
