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
const product = document.getElementById('stupid');
const currentPrice = document.getElementById('amount')
const percentage = document.getElementById('percent')
// const replaceText = "if u bought" + "\n" + "bitcoin instead" + "\n" + "of fuckin" + "\n" + "tesla," + "\n" + "you'd have $7,408,000."


shuffleButton.onclick = function shuffle() {
    let randMax = productArray.length
    let randomIndex = Math.floor(Math.random() * randMax)
    let randomProduct = productArray[randomIndex]
    let productName = randomProduct.name
    let currentValue = Math.round(randomProduct.btcAmount) * Math.round(btcPrice)
    let percentChange = Math.round((currentValue - randomProduct.originalPrice) / (randomProduct.originalPrice))
    product.innerText = productName
    currentPrice.innerText = "$" + (currentValue).toLocaleString('en')
    percentage.innerText = (percentChange).toLocaleString('en') + "%";
    productArray.splice(randomIndex, 1)
    console.log(productArray)
    // console.log(productName + ", " + currentValue + ", " + percentChange);
    // console.log(randomProduct)
    // console.log(btcPrice)
}

// Product Objects
  const shakeWeight = {
    name: 'Shakeweight',
    originalPrice: 29,
    singular: true,
    btcAmount: 290000
  }

  const beatsSolo = {
    name: 'Beats Solo HD',
    originalPrice: 199,
    singular: true,
    btcAmount: 3980
  }

  const sapiens = {
    name: 'Sapiens',
    originalPrice: 24.99,
    singular: true,
    btcAmount: 833
  }

  const tesla = {
    name: 'V1 Tesla',
    originalPrice: 69420,
    singular: true,
    btcAmount: 680.588235
  }

  const nintendoDS = {
    name: 'Nintendo 3DS',
    originalPrice: 249,
    singular: true,
    btcAmount: 286.206897
  }

  const oculus = {
    name: 'Oculus',
    originalPrice: 299,
    singular: true,
    btcAmount: 26.2972735
  }

  const goPro = {
    name: 'GoPro Hero 3',
    originalPrice: 299,
    singular: true,
    btcAmount: 23
  }

  const starbucks = {
    name: 'Starbucks in 2011',
    originalPrice: 4.95,
    singular: true,
    btcAmount: 16.5
  }

  const cardsAgainst = {
    name: 'Cards Against Humanity',
    originalPrice: 25,
    singular: true,
    btcAmount: 7.26744186
  }

  const iPhone = {
    name: 'Iphone 5',
    originalPrice: 749,
    singular: true,
    btcAmount: 5.84882087
  }

  const googleGlass = {
    name: 'Google Glass',
    originalPrice: 1500,
    singular: true,
    btcAmount: 3.3572068
  }

  const coachellaTickets = {
    name: 'Coachella Tickets',
    originalPrice: 375,
    singular: false,
    btcAmount: 1.68463607
  }

  const juicero = {
    name: 'Juicero',
    originalPrice: 699,
    singular: true,
    btcAmount: 1.60644237
  }

  const productArray = [
    shakeWeight,
    beatsSolo,
    sapiens,
    tesla,
    nintendoDS,
    oculus,
    goPro,
    starbucks,
    cardsAgainst,
    iPhone,
    googleGlass,
    coachellaTickets,
    juicero,
  ];
