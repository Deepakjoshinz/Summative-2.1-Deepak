// scraper.js

// Function to scrape data from Google Maps
function scrapeData() {
  // Clear previous results
  document.getElementById("resultsContainer").innerHTML = "";

  // Get the search query entered by the user
  var query = document.getElementById("searchQuery").value;

  // Fetch data using the AllOrigins proxy
  fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=YOUR_API_KEY`
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Extract the desired information from the API response
      var results = JSON.parse(data.contents).results;

      // Display the scraped data
      results.forEach(function (entry) {
        var resultDiv = document.createElement("div");
        resultDiv.innerHTML = `
              <h3>${entry.name}</h3>
              <p>Contact Number: ${entry.formatted_phone_number || "N/A"}</p>
              <p>Category: ${entry.types[0] || "N/A"}</p>
              <hr>
            `;
        document.getElementById("resultsContainer").appendChild(resultDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
