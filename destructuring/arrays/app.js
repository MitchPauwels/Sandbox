const scores = [1221312, 45463432, 3434523, 5654875, 3232, 5363, 432423, 6635];

const highScores = scores[0];
const secondHighScores = scores[1];

const [gold, silver, bronze, ...other] = scores;

console.log(gold, silver, bronze, other);
