// Main Settings
const GAMES = 75
const GAME_SIZE = 200
const GAME_UNIT = 10
const FRAME_RATE = 45
// This is to prevent endless loops
const MAX_TURNS = 609609
const LOWEST_SCORE_ALLOWED = -10

// NEAT Settings
const MUTATION_RATE = 0.5
const MUTATION_AMOUNT = 5
const ELITISM = Math.round(0.15 * GAMES)
// const ADD_NODE = 0.5
// const MOD_BIAS = 1

// Score Settings
const POINTS_MOVED_TOWARDS_FOOD = 2
const POINTS_MOVED_AGAINST_FOOD = -3
const POINTS_ATE_FOOD = 4
