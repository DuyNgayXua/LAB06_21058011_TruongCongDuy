const game = {
    team1: "Bayern Munich",
    team2: "Borussia Dortmund",
    players: [
      [
        "Neuer",
        "Pavard",
        "Martinez",
        "Alaba",
        "Davies",
        "Kimmich",
        "Goretzka",
        "Coman",
        "Muller",
        "Gnabry",
        "Lewandowski",
      ],
      [
        "Burki",
        "Schulz",
        "Hummels",
        "Akanji",
        "Hakimi",
        "Weigl",
        "Witsel",
        "Hazard",
        "Brandt",
        "Sancho",
        "Gotze",
      ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  // Extracting players for each team
  const players1 = game.players[0];
  const players2 = game.players[1];
  
  // Extracting the goalkeeper from team 1 and field players
  const gk = players1[0];
  const fieldPlayers = players1.slice(1);
  
  // Creating an array containing all players from both teams
  const allPlayers = [...players1, ...players2];
  
  // Creating a final players array for team 1 with substitutes
  const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
  
  // Extracting odds for each outcome
  const { team1, x: draw, team2 } = game.odds;
  
  // Function to print the number of goals and goal scorers
  const printGoals = (...players) => {
    console.log(`${players.length} goals were scored by: ${players.join(", ")}`);
  };
  
  // Example usages of printGoals function
  printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
  printGoals(...game.scored);
  
  // Determine which team is more likely to win
  const likelyWinner =
    team1 < team2 ? game.team1 : game.team2;
  
  console.log(`${likelyWinner} is more likely to win.`);
  