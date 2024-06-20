document.getElementById('convert').addEventListener('click', function() {
    const temperature = document.getElementById('temperature').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let result;

    if (isNaN(temperature) || temperature === '') {
        alert('Please enter a valid number');
        return;
    }

    const temp = parseFloat(temperature);

    switch (unit) {
        case 'Celsius':
            result = `Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F, Kelvin: ${(temp + 273.15).toFixed(2)} K`;
            break;
        case 'Fahrenheit':
            result = `Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C, Kelvin: ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
            break;
        case 'Kelvin':
            result = `Celsius: ${(temp - 273.15).toFixed(2)} °C, Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            break;
        default:
            result = 'Invalid unit';
    }

    document.getElementById('result').innerText = result;
});
