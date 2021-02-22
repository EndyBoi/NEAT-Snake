// Main Settings
const GAMES = 50
const GAME_SIZE = 200
const GAME_UNIT = 5
const FRAME_RATE = 145
// This is to prevent endless loops
const MAX_TURNS = 609609
const LOWEST_SCORE_ALLOWED = -50

// NEAT Settings
const MUTATION_RATE = 0.5
const MUTATION_AMOUNT = 5
const ELITISM = Math.round(0.1 * GAMES)

// Score Settings
const POINTS_MOVED_TOWARDS_FOOD = 1
const POINTS_MOVED_AGAINST_FOOD = -1.5
const POINTS_ATE_FOOD = 2
