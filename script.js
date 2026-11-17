// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.

// 1. Select the collection and preference controls.
const $collection = document.querySelector("#creature-collection");
const $themeSelect = document.querySelector("#theme-select");
const $layoutSelect = document.querySelector("#layout-select");
const $message = document.querySelector("#status-message");

// Assignment-specific Local Storage key.
const STORAGE_KEY = "a4CreatureCollectionPreferences";

// 2. Generate creature entries using the supplied array.
// Loop through each creature and create its image, name and description.
function generateCreatures() {
  $creatures.forEach((creature) => {
    const $article = document.createElement("article");
    $article.classList.add("creature-card");

    const $image = document.createElement("img");
    $image.src = creature.image;
    $image.alt = creature.alt;

    const $heading = document.createElement("h2");
    $heading.textContent = creature.name;

    const $description = document.createElement("p");
    $description.textContent = creature.description;

    $article.appendChild($image);
    $article.appendChild($heading);
    $article.appendChild($description);

    $collection.appendChild($article);
  });
}

// 3. Apply the selected habitat theme to the body.
function applyTheme(theme) {
  document.body.dataset.theme = theme;
}

// 4. Apply the selected layout to the creature collection.
function applyLayout(layout) {
  $collection.dataset.layout = layout;
}

