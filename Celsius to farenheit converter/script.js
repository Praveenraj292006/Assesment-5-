document.getElementById('convertBtn').addEventListener('click', function () {
  const input = document.getElementById('tempInput').value;
  const resultText = document.getElementById('resultText');
  const value = parseFloat(input);
  const conversionType = document.querySelector('input[name="conversion"]:checked').value;

  if (isNaN(value)) {
    resultText.textContent = "Please enter a valid temperature.";
    return;
  }

  let result;

  if (conversionType === "CtoF") {
    result = (value * 9 / 5) + 32;
    resultText.textContent = `${value}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (value - 32) * 5 / 9;
    resultText.textContent = `${value}°F = ${result.toFixed(2)}°C`;
  }
});
