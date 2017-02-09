const patternHelper = (_this, cells, x, y, d, type) => {
	let newCells = cells.slice()
	const row = y / d
	const col = x / d

	let drawItBro = (indexArr) => {
		indexArr.map(el => {
			_this.drawAliveBox(el[1] * d, el[0] * d)
		})
	}
	let updateCellState = (indexArr) => {
		indexArr.map(el => {
			newCells[el[0]][el[1]] = true
		})
	}

	if(type === 'Gosper Gun') {
		let indexArr = []
		indexArr.push(
			[row+1, col],
			[row+2, col],
		)
		updateCellState(indexArr)
		drawItBro(indexArr)

		console.log('newCells', newCells)
		return newCells

	} else {
			console.log('not Gosper gun')
	}

}

export default patternHelper
