class Runner {
	constructor({
		neat,
		games,
		gameSize,
		gameUnit,
		frameRate,
		maxTurns,
		lowestScoreAllowed,
		score,
		onEndGeneration,
	}) {
		this.neat = neat
		this.games = []
		this.gamesFinished = 0
		this.onEndGeneration = onEndGeneration

		for (let i = 0; i < games; i++) {
			this.games.push(
				new Game({
					size: gameSize,
					unit: gameUnit,
					frameRate,
					maxTurns,
					lowestScoreAllowed,
					score,
					onGameOver: () => this.endGeneration(),
				})
			)
		}
	}

	startGeneration() {
		this.gamesFinished = 0

		for (let i = 0; i < this.games.length; i++) {
			this.games[i].snake.brain = this.neat.population[i]
			this.games[i].snake.brain.score = 0
			this.games[i].start()
		}
	}

	endGeneration() {
		if (this.gamesFinished + 1 < this.games.length) {
			this.gamesFinished++
			return
		}

		this.neat.sort()

		var mostEat = 0
		var minEaten = 10000000
		var avgEaten = 0

		for (let i = 0; i < this.games.length; i++) {
			avgEaten = avgEaten + this.games[i].snake.foodNumber
			if (this.games[i].snake.foodNumber > mostEat) {
				mostEat = this.games[i].snake.foodNumber
			}
			if (this.games[i].snake.foodNumber < minEaten) {
				minEaten = this.games[i].snake.foodNumber
			}
		}
		avgEaten = avgEaten / this.games.length

		this.onEndGeneration({
			generation: this.neat.generation,
			max: this.neat.getFittest().score,
			avg: Math.round(this.neat.getAverage()),
			min: this.neat.population[this.neat.popsize - 1].score,
			network: this.neat.getFittest(),
			mostEat: mostEat,
		})

		const newGeneration = []

		for (let i = 0; i < this.neat.elitism; i++) {
			newGeneration.push(this.neat.population[i])
		}

		for (let i = 0; i < this.neat.popsize - this.neat.elitism; i++) {
			newGeneration.push(this.neat.getOffspring())
		}

		this.neat.population = newGeneration
		this.neat.mutate()
		this.neat.generation++
		this.startGeneration()
	}
}
