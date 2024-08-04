export const computeWinner = (
	cells: any[],
	sequenceSize: number = 5,
	fieldSize: number = 19
) => {
	const gap: number = Math.floor(sequenceSize / 2);

	function compareElements(indexes: number[]): boolean {
		let result = true;

		for (let i = 1; i < indexes.length; i++) {
			result &&= cells[indexes[i]] !== null;
			result &&= cells[indexes[i]] === cells[indexes[i - 1]];
		}

		return result;
	}

	function getSequenceIndexes(i: number): number[][] {
		const res = [[], [], [], []];

		for (let j = 0; j < sequenceSize; j++) {
			res[0].push(i + (j - gap)); // горизонталь
			res[1].push(i + fieldSize * (j - gap) + (j - gap)); // диагональ \
			res[2].push(i - fieldSize * (j - gap) + (j - gap)); // диагональ /
			res[3].push(i + fieldSize * (j - gap)); // вертикаль
		}

		return res;
	}

	for (let i = 0; i < cells.length; i++) {
		if (cells[i]) {
			const indexRows = getSequenceIndexes(i);
			const winnerIndexes = indexRows.find(row => compareElements(row));

			if (winnerIndexes) {
				return winnerIndexes;
			}
		}
	}

	return [];
};
