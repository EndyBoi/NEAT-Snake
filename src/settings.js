// Main Settings
const GAMES = 100
const GAME_SIZE = 150
const GAME_UNIT = 4
const FRAME_RATE = 30

// This is to prevent endless loops
const MAX_TURNS = 6000
const LOWEST_SCORE_ALLOWED = -50

// NEAT Settings
const MUTATION_RATE = 0.5
const ELITISM = Math.round(0.1 * GAMES)

// Score Settings
const POINTS_MOVED_TOWARDS_FOOD = 1.5
const POINTS_MOVED_AGAINST_FOOD = -2
const POINTS_ATE_FOOD = 3
