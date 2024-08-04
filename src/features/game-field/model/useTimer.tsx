import { useState, useEffect } from 'react';

export const useTimer = (isTimerRunning: boolean) => {
	const [seconds, setSeconds] = useState(60);
	const minutesString = String(Math.floor(seconds / 60).toString()).padStart(
		2,
		'0'
	);
	const secondsString = String((seconds % 60).toString()).padStart(2, '0');

	const isLowTime = seconds < 10;

	useEffect(() => {
		if (isTimerRunning) {
			const interval = setInterval(() => {
				setSeconds(prev => Math.max(prev - 1, 0));
			}, 1000);

			return () => {
				clearInterval(interval);
				setSeconds(60);
			};
		}
	}, [isTimerRunning]);

	return {
		minutesString,
		secondsString,
		isLowTime,
	};
};
