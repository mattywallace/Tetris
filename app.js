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
		[1, width+1, width+2, width*2+1],
		[width, width+1, width+2, width*2+1],
		[1, width, width+1, width*2+1],
	]

	const zTetromino = [
		[0, width, width+1, width*2+1],
		[width+1, width+2, width*2, width*2+1],
		[0, width, width+1, width*2+1],
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

	const theTetrominoes = [ lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

	let currentPosition = 4
	let currentRotation = 0

	console.log(theTetrominoes[0][0]);
	// get a random tetromino 
	let random = Math.floor(Math.random()*theTetrominoes.length)
	let current = theTetrominoes[random][currentRotation]

	// draw the tetrominos

	function draw() {
		current.forEach(index => {
			squares[currentPosition + index].classList.add('tetromino')
		})
	}


	function undraw() {
		current.forEach(index => {
			squares[currentPosition + index].classList.remove('tetromino')
		})
	}
	// make the tetromino move down every second 
	timerId = setInterval(moveDown, 1000)

	function moveDown () {
		undraw()
		currentPosition += width
		draw()
		freeze()
	}

	// write a freeze function 
	function freeze() {
		if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
			current.forEach(index => squares[currentPosition + index].classList.add('taken'))
			nextRandom = Math.floor(Math.random() * theTetrominoes.length)
			random = nextRandom
			current = theTetrominoes[random][currentRotation]
			currentPostition = 4
			draw()
		}
	}

})

	

