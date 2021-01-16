// load current bitcoin price
// set variables for blanks & create objects for products
// create button
// select random object from array
// onclick, calculate current value & percent change
// populate blank fields w/ item name & current value & percent change & image of item
// push out the item from the original array


// Set variable for BTC Price
let btcPrice = 40000

// Fetch current BTC Price from Coindesk API
function getBTCPrice() {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((response) => response.json()
  .then(data => {
    console.log(data.bpi.USD.rate_float);
    btcPrice = data.bpi.USD.rate_float;
    })
  )}

// Invoke BTC Price Fetch
getBTCPrice()

// Identify HTML Elements
const shuffleButton = document.getElementById('shuffle');

const mainText = document.getElementById('mainTexts');

const replaceText = "if u bought" + "\n" + "bitcoin instead" + "\n" + "of fuckin" + "\n" + "tesla," + "\n" + "you'd have $7,408,000."


shuffleButton.onclick = function shuffle() {
    mainText.innerText = replaceText;
    console.log(btcPrice)
}
