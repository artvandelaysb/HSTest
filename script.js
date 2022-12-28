console.log("Hi Mom")

highScoreTable = [["XXX", 0], ["YYY", 0]]
highScoresString= JSON.stringify(highScoreTable);

sessionStorage.setItem("test",10)
localStorage.setItem("scores",highScoresString)
if (localStorage.clickcount) {
  localStorage.clickcount = Number(localStorage.clickcount) + 1;
} else {
  localStorage.clickcount = 1;
}


console.log(localStorage.clickcount)
myscores = localStorage.scores
extractedTable = JSON.parse(myscores)
hs0= extractedTable[0];
console.log(hs0)