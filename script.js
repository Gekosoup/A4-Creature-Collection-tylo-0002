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
const $collection = document.querySelector("#collection");
const $themeSelect = document.querySelector("#theme");
const $layoutSelect = document.querySelector("#layout");
const $message = document.querySelector("#status");

// Assignment-specific Local Storage key.
const STORAGE_KEY = "a4CreatureCollectionPreferences";


// 2. Generate creature entries using the supplied array.
// Create an image and an information container for each creature.
function generateCreatures() {
  $creatures.forEach((creature) => {

    const $item = document.createElement("li");
    $item.classList.add("creature");

    // Create creature image.
    const $image = document.createElement("img");
    $image.src = creature.image;
    $image.alt = creature.alt;

    // Create information container.
    const $info = document.createElement("div");
    $info.classList.add("creature-info");

    // Create creature name.
    const $heading = document.createElement("h3");
    $heading.textContent = creature.name;

    // Create creature description.
    const $description = document.createElement("p");
    $description.classList.add("creature-description");
    $description.textContent = creature.description;

    // Add name and description to information container.
    $info.appendChild($heading);
    $info.appendChild($description);

    // Add image and information to creature list item.
    $item.appendChild($image);
    $item.appendChild($info);

    // Add creature to the collection.
    $collection.appendChild($item);
  });
}


// 3. Apply the selected habitat theme.
function applyTheme(theme) {
  document.body.dataset.theme = theme;
}


// 4. Apply the selected collection layout.
function applyLayout(layout) {
  $collection.dataset.layout = layout;
}


// 5. Save both preferences together in Local Storage.
function savePreferences() {
  const preferences = {
    theme: $themeSelect.value,
    layout: $layoutSelect.value
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(preferences)
  );

  $message.textContent = "Your preferences have been saved!";
}


// 6. Listen for changes to the habitat theme.
$themeSelect.addEventListener("change", () => {
  applyTheme($themeSelect.value);
  savePreferences();
});


// 7. Listen for changes to the collection layout.
$layoutSelect.addEventListener("change", () => {
  applyLayout($layoutSelect.value);
  savePreferences();
});


// 8. Restore saved preferences when the page loads.
// Check Local Storage before attempting to parse saved data.
function restorePreferences() {
  const savedPreferences = localStorage.getItem(STORAGE_KEY);

  if (savedPreferences) {
    const preferences = JSON.parse(savedPreferences);

    $themeSelect.value = preferences.theme;
    $layoutSelect.value = preferences.layout;

    applyTheme(preferences.theme);
    applyLayout(preferences.layout);

    $message.textContent = "Your saved preferences have been restored!";
  } else {
    $message.textContent = "Welcome! Customize your creature collection.";
  }
}


// 9. Generate the collection and restore preferences.
generateCreatures();
restorePreferences();
