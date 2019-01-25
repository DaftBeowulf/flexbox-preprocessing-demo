const smashSeries = [
  {
    name: "Legend of Zelda",
    games: 19,
    protagonist: "Link",
    antagonist: "Ganon",
    location: "Hyrule"
  },
  {
    name: "Mario",
    games: 200,
    protagonist: "Mario",
    antagonist: "Bowser",
    location: "Mushroom Kingdom"
  },
  {
    name: "Metroid",
    games: 14,
    protagonist: "Samus Aran",
    antagonist: "Ridley",
    location: "space"
  },
  {
    name: "F-Zero",
    games: 9,
    protagonist: "Captain Falcon",
    antagonist: "Black Shadow",
    location: "racetrack"
  }
];

// forEach
// smashSeries.forEach(series => series.games += 1)
console.log(smashSeries[0]);

// map
let mappedArr = smashSeries.map(series => series.name.toUpperCase());
console.log(mappedArr);
console.log(smashSeries);

// filter
let filteredAndMappedArr = smashSeries
  .filter(series => series.games > 15)
  .map(series => series.name.toUpperCase());
console.log(filteredAndMappedArr);

// reduce
let reducedNum = smashSeries.reduce(
  (runningTotal, currentSeries) => (runningTotal += currentSeries.games),
  0
);
console.log(reducedNum);
