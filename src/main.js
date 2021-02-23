const Neat = neataptic.Neat
const Config = neataptic.Config
const Node = neataptic.Node
const Methods = neataptic.Methods

Config.warnings = false

const neat = new Neat(8, 8, null, {
	popsize: GAMES,
	elitism: ELITISM,
	mutationRate: MUTATION_RATE,
	mutationAmount: MUTATION_AMOUNT,
	// mutation: [MOD_BIAS, ADD_NODE],
})

const chartData = {
	labels: [],
	datasets: [
		{ name: 'High Score', values: [] },
		{ name: 'Average Score', values: [] },
		{ name: 'Lowest Score', values: [] },
		{ name: 'Most Food Ate', values: [] },
	],
}
const chart = new Chart('#chart', {
	type: 'line',
	width: 1000,
	height: 175,
	data: chartData,
})

let highestScore = 0

const runner = new Runner({
	neat,
	games: GAMES,
	gameSize: GAME_SIZE,
	gameUnit: GAME_UNIT,
	frameRate: FRAME_RATE,
	maxTurns: MAX_TURNS,
	lowestScoreAllowed: LOWEST_SCORE_ALLOWED,
	score: {
		movedTowardsFood: POINTS_MOVED_TOWARDS_FOOD,
		movedAgainstFood: POINTS_MOVED_AGAINST_FOOD,
		ateFood: POINTS_ATE_FOOD,
	},

	onEndGeneration: ({ generation, max, avg, min, mostEat }) => {
		chartData.labels.push(generation.toString())
		chartData.datasets[0].values.push(max)
		chartData.datasets[1].values.push(avg)
		chartData.datasets[2].values.push(min)
		chartData.datasets[3].values.push(mostEat)

		if (chartData.labels.length > 200) {
			chartData.labels.shift()
			chartData.datasets.forEach((d) => d.values.shift())
		}

		chart.update(chartData)
		if (max > highestScore) {
			highestScore = max
		}
		document.getElementById('gen').innerHTML = generation
		document.getElementById('highScore').innerHTML = highestScore
		document.getElementById('mostFood').innerHTML = mostEat
	},
})

runner.startGeneration()
