document.getElementById('convertBtn').addEventListener('click', convertTemp);

function convertTemp() {
  const value = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unitInput').value;
  const errorMsg = document.getElementById('errorMsg');
  const results = document.getElementById('results');
  
  errorMsg.textContent = '';
  results.textContent = ''; 

  if (isNaN(value)) {
    errorMsg.textContent = 'Please enter a numeric value.';
    return;
  }

  let celsius;
  if (unit === 'C') celsius = value;
  else if (unit === 'F') celsius = (value - 32) * 5/9;
  else if (unit === 'K') celsius = value - 273.15;

  if (celsius < -273.15) {
    errorMsg.textContent = 'Value below absolute zero is not possible!';
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;

  results.innerHTML = `
    <strong>Converted Values:</strong><br>
    Celsius: ${celsius.toFixed(2)} °C<br>
    Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    Kelvin: ${kelvin.toFixed(2)} K
  `;
}
