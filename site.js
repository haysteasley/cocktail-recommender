let cocktails = {
  margarita:{
      name: "Classic Margarita",
      ingredients: "Tequila, Triple sec, lime juice, salt",
      instructions: "Rub the rim of the glass with the lime slice, then add salt on rim",
      glass: "Stemless rocks glass",
      image: "img/margarita.png",
  },
  frozenPinaColada:{
      name: "Frozen Pina Colada",
      ingredients: "Pineapple, cocnut cream, sweetened milk, dark rum, pineapple juice",
      instructions: "Whisk coconut cream and milk in a glass until smooth. Blend with frozen pineapple slices, ice, and rum",
      glass: "Poco Grande glass",
      image: "img/pinacolada.png",
  },
  manhattan:{
      name: "Classic Manhattan",
      ingredients: "Bourbon whiskey, sweet vermouth, bitters",
      instructions: "Pour all three ingredients into a glass filled with ice, and stir until cold",
      glass: "Martini Glass",
      image: "img/manhattan.png",
  },
  cosmopolitan:{
      name: "Cosmopolitan",
      ingredients: "Vodka, Cointreau, lime juice, cranberry juice",
      instructions: "Combine ingredients into cocktail shaker with ice, strain and pour",
      glass: "Martini Glass",
      image: "img/cosmopolitan.png",
  },
  oldfashioned:{
      name: "Old Fashioned",
      ingredients: "Bourbon whiskey, simple syrup, bitters, orange peel",
      instructions: "Combine ingredients into mixing glass, strain and pour over ice",
      glass: "Whiskey Glass",
      image: "img/oldfashioned.png",
  },
  chocolatemartini:{
    name: "Chocolate Martini",
    ingredients: "Chocolate liquer, Irish cream liquer, vodka, chocolate syrup",
    instructions: "Drizzle chocolate syrup into glass, shake equal parts liquers and vodka with ice",
    glass: "Martini Glass",
    image: "img/chocolatemartini.png",
  }
};

const recommendedCocktail = document.getElementById("recommended-cocktail");
const newRecommendationButton = document.getElementById("new-recommendation");
const favoriteCocktailButton = document.getElementById("favorite-cocktail");
const favoriteCocktailsList = document.getElementById("favorite-cocktails-list");

// new recommendation button
newRecommendationButton.addEventListener("click", () => {
    // function to put objects (cocktails) in an array, the randomly select from that index
    const randomCocktail = getRandomCocktail(cocktails);
    function getRandomCocktail(cocktails) {
      const cocktailNames = Object.keys(cocktails);
      const randomIndex = Math.floor(Math.random() * cocktailNames.length);
      const randomCocktailName = cocktailNames[randomIndex];
      const randomCocktail = cocktails[randomCocktailName];
      
      return randomCocktail;
  }
  
    
    // make recommendation display dynamic on site
    recommendedCocktail.innerHTML = `
        <h2>${randomCocktail.name}</h2>
        <p>Ingredients: ${randomCocktail.ingredients}</p>
        <p>Instructions: ${randomCocktail.instructions}</p>
        <p>Glass: ${randomCocktail.glass}</p>
        <img src="${randomCocktail.image}" alt="${randomCocktail.name} Image">
    `;
});

// button to create the list of favorites (kinda like a cookie)
favoriteCocktailButton.addEventListener("click", () => {
    const currentRecommendation = recommendedCocktail.querySelector("h2").textContent;
    const listItem = document.createElement("li");
    listItem.textContent = currentRecommendation;
    favoriteCocktailsList.appendChild(listItem);
});
