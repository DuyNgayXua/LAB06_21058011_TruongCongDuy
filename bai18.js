const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];
  
  // Calculate recommended food for each dog
  dogs.forEach((dog) => {
    dog.recommendedFood = dog.weight * 0.75 * 28;
  });
  
  // Find Sarah's dog and log whether it's eating too much or too little
  const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
  console.log(
    `Sarah's dog is eating ${
      sarahsDog.curFood > sarahsDog.recommendedFood ? "too much" : "too little"
    }`
  );
  
  // Get the owners whose dogs eat too much and too little
  const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recommendedFood)
    .flatMap((dog) => dog.owners);
  const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recommendedFood)
    .flatMap((dog) => dog.owners);
  
  console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much.`);
  console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little.`);
  
  // Check if any dog is eating the recommended amount of food
  console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));
  
  // Check if any dog is eating an okay amount of food (within ±10%)
  const isEatingOkay = (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1;
  console.log(dogs.some(isEatingOkay));
  
  // Get dogs that are eating an okay amount of food
  const dogsEatingOkay = dogs.filter(isEatingOkay);
  console.log(dogsEatingOkay);
  
  // Create a copy of the dogs array sorted by recommended food portion
  const dogsSorted = dogs
    .slice()
    .sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(dogsSorted);
  