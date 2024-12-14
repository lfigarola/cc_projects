// Load data from the JSON file
async function loadData() {
    const response = await fetch('data.json');
    return await response.json();
}

// Generate a random item from an array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate the past life sentence
async function generatePastLife() {
    const data = await loadData();

    const characteristic = getRandomItem(data.characteristics).toLowerCase();
    const profession = getRandomItem(data.professions).toLowerCase();
    const action = getRandomItem(data.actions).toLowerCase();
    const cause = getRandomItem(data.causes).toLowerCase();

    const pastLife = `You were a <span class="ch">${characteristic} ${profession}</span> that <span class="ac">${action}</span>, because you <span class="cs">${cause}</span>.`;

    document.getElementById('past-life').innerHTML = pastLife;
}

// Add event listener to the button
document.getElementById('generate-btn').addEventListener('click', generatePastLife);
