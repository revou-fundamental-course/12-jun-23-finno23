// Get the form element
const temperatureForm = document.getElementById("temperatureForm");

// Add an event listener for form submission
temperatureForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get the user input
  const temperatureInput = document.getElementById("temperature");
  const scaleSelect = document.getElementById("scale");

  const temperature = parseFloat(temperatureInput.value);
  const scale = scaleSelect.value;

  // Perform the temperature conversion
  let result;
  let explanation;
  if (scale === "celsius") {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (temperature * 9/5) + 32;
    result = `${temperature}°C = ${fahrenheit}°F`;
    explanation = `Untuk Mengubah Celsius ke Fahrenheit, dengan cara mengalikan temperatur dengan 9 dibagi 5 dan menambahkan 32.
    matematikanya ${temperature}°C * 9/5 + 32 = ${fahrenheit}°F`;
  } else if (scale === "fahrenheit") {
    // Convert Fahrenheit to Celsius
    const celsius = (temperature - 32) * 5/9;
    result = `${temperature}°F = ${celsius}°C`;
    explanation = `Untuk Mengubah Fahrenheit ke Celsius, dengan cara mengurangi 32 dari temperatur dan mengalikan dengan 5 dibagi 9.
    matematikanya (${temperature}°F - 32) * 5/9 = ${celsius}°C`;
  }

  // Display the result and explanation
  const conversionResult = document.getElementById("conversionResult");
  conversionResult.textContent = result;

  const conversionExplanation = document.getElementById("conversionExplanation");
  conversionExplanation.textContent = explanation;
});
