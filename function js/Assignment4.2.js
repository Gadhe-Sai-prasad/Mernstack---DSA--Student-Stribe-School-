//create a simple version 

function temperatureConverter (celsius) {
    let fahrenheit = (celsius *9/5) +32;
    return fahrenheit;
}

let temperature1 = temperatureConverter(0);
let temperature2 = temperatureConverter(50);


console.log("temperature converting from celsius to fahrenheit is :" + temperature1 + " F");
console.log("temperature converter from celsius to fahrenheit : is " +temperature2+ " F"
);


function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32)%5/9;
    return celsius;
}


let  celsius1 = fahrenheitToCelsius(40);


console.log(celsius1 + " C");


