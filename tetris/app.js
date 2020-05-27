document.addEventListener('DOMContentLoaded', () => {
	console.log('Tetris is fun');

	const board = document.querySelector('.board')
	let squares = Array.from(document.querySelectorAll('.board div'))
	const scoreDisplay = document.querySelector('#score')
	const startButton = document.querySelector('#start-button')
	const width = 10 


//  here are the tetrimonos
	const lTetromino = [
		[1, width+1, width*2+1, 2],
		[width, width+1, width+2, width*2+2],
		[1, width+1, width*2+1, width*2],
		[width, width*2, width*2+1, width*2+2]
	]

	const tTetromino = [
		[1, width, width+1, width+2 ],
		[1, width+1, width+2, width*2+1]
		[width, width+1, width+2, width*2+1],
		[1, width, width+1, width*2+1],
	]

	const zTetromino = [
		[0, width, width+1, width*2+1],
		[width+1, width+2, width*2, width*2+1],
		[0,width,width+1,width*2+1],
		[width+1, width+2, width*2, width*2+1]
	]

	const oTetromino = [
		[0,1,width,width+1],
		[0,1,width,width+1],
		[0,1,width,width+1],
		[0,1,width,width+1]
	]

	const iTetromino = [
		[1, width+1, width*2+1, width*3+1],
		[width, width+1, width+2, width+3],
		[1, width+1, width*2+1, width*3+1],
		[width, width+1, width+2, width+3]
	]

	cosnt theTetrominos =[ lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

	

})