let currencyElement = document.querySelector(".js-currency");
let currency2Element = document.querySelector(".js-currency2");
let formElement = document.querySelector(".js-form");
let rateElement = document.querySelector(".js-rate");
let euroElement = document.querySelector(".js-euro");
let dolarElement = document.querySelector(".js-dolar");
let funtElement = document.querySelector(".js-funt");

console.log(currencyElement);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;


    let euro = currency * 0.23;
    let dolar = currency * 0.24;
    let funt = currency * 0.19;

    if(euroElement.selected) {
        rateElement.innerText = euro;
    } else if(dolarElement.selected) {
        rateElement.innerText = dolar;
    } else {
        rateElement.innerText = funt.toFixed(2);
    }

}



);