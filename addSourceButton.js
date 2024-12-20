// Function to add the view source button to the media-controls div

function addButtonToMediaControls() {
    // Create a new button element
    const viewSource = document.createElement("a");

    // Get the current URL of the website (you can adjust this based on what part you need)
    const currentUrl = window.location.href; // Full current URL
    const urlPart = currentUrl.split('/').slice(-1)[0]; // Example: Get the last part of the URL path

    // Set attributes for the button
    viewSource.id = "viewSourceButton"; // Set a unique id
    viewSource.classList.add("control-button"); // Add the same class as other buttons
    viewSource.title = "Zeige Quelldatensatz zum Objekt"; // Set the title of the button
    viewSource.style.cssText = "display: inline-block; position: relative; pointer-events: auto;"; // Apply similar styles as the existing buttons

    viewSource.href = `https://api.deutsche-digitale-bibliothek.de/items/${urlPart}/source/record`;
    viewSource.target = "_blank";
    viewSource.innerHTML = "🔎";

    // Get the media-controls div
    const mediaControlsDiv = document.querySelector(".media-controls");

    // Append the new button to the media-controls div
    mediaControlsDiv.appendChild(viewSource);
}

// Call the function to add the button
addButtonToMediaControls();
