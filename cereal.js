input = process.argv[2];

cereal1 = ["Apple, Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
cereal2 = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];

for (var i = 0; i < input; i++) {
  choice1 = Math.floor(Math.random() * (cereal1.length-1) + 1);
  choice2= Math.floor(Math.random() * (cereal2.length-1) + 1);
  var combi =cereal1[choice1] + " " + cereal2[choice2]
  console.log(combi);
}
