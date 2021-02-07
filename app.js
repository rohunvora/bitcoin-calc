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
    let btcPriceComma = (btcPrice).toLocaleString()
    btcPriceElement.innerText = "$" + "BTC Price: " + `${btcPriceComma}`
    })
  )}

// Invoke BTC Price Fetch
getBTCPrice()

// Identify HTML Elements
const btcPriceElement = document.getElementById('btcPrice')
const shuffleButton = document.getElementById('shuffle');
const product = document.getElementById('stupid');
const currentPrice = document.getElementById('amount')
let percentage = document.getElementById('percent')
let productImage = document.getElementById('productImage')
let fuckinSwitch = document.getElementById('fuckin')
// const replaceText = "if u bought" + "\n" + "bitcoin instead" + "\n" + "of fuckin" + "\n" + "tesla," + "\n" + "you'd have $7,408,000."

let buttonPhrases = ["I should've listened to my friend.", "Bruhh", "Warren Buffet is a bum.", "Big F", "Fat L", "FML", "That internship was not worth it.", "This is fine. I'm fine. :)", "Fuck."]

shuffleButton.onclick = function shuffle() {
  // Set Initial Variables
    let randMax = productArray.length
    let randMaxTwo = buttonPhrases.length
    let randomIndex = Math.floor(Math.random() * randMax)
    let randomIndexTwo = Math.floor(Math.random() * randMaxTwo)
    let randomProduct = productArray[randomIndex]
    let randomPhrase = buttonPhrases[randomIndexTwo]
    let productName = randomProduct.name
    let currentValue = Math.round(randomProduct.btcAmount) * Math.round(btcPrice)
    console.log(currentValue)
    let percentChange = Math.round((currentValue - randomProduct.originalPrice) / (randomProduct.originalPrice)).toLocaleString() + "x" + "\n" + "return"
    console.log(percentChange)
    let percentElement = document.createElement('h1')
    counter(currentPrice, randomProduct.originalPrice, currentValue, 10000);

    if (randomProduct.singular == true) {
      fuckinSwitch.innerText = "of a fuckin"
    } else {
      fuckinSwitch.innerText = "of fuckin"
    }

  // Change DOM Elements
    percentElement.innerText = (randomProduct.btcAmount).toFixed(2) + "\n" + "Bitcoin"
    percentElement.id = "percent"
    percentElement.className = "bodyText"
    let percentage = document.getElementById('percent')
    product.innerText = productName
    productImage.src = randomProduct.image
    percentage.parentNode.replaceChild(percentElement, percentage)
    currentPrice.innerText = "$" + (currentValue).toLocaleString('en')
    productArray.splice(randomIndex, 1)
    shuffleButton.innerText = randomPhrase

  // Console Logs
    console.log(productArray)
    console.log(productName + ", " + currentValue + ", " + percentChange);
    console.log(randomProduct)
    console.log(btcPrice)
}

function counter(id, start, end, duration) {
      shuffleButton.disabled = true,
      obj = id,
      current = start,
      range = end - start,
      increment = Math.floor((end - start) / 100)
      step = Math.floor(duration / range),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = "$" + (current).toLocaleString()
        if (current > end) {
          obj.textContent = "$" + (end).toLocaleString();
          clearInterval(timer);
          shuffleButton.disabled = false
        }
      }, step);
  }








// Product Objects
  const shakeWeight = {
    name: 'Shakeweight',
    originalPrice: 29,
    singular: true,
    btcAmount: 290000.01,
    image: 'btcimage/Shake Weight.png',
  }

  const beatsSolo = {
    name: 'Beats Solo HD',
    originalPrice: 199,
    singular: true,
    btcAmount: 3980.13,
    image: "btcimage/Beats Hd.png"
  }

  const sapiens = {
    name: 'Sapiens',
    originalPrice: 24.99,
    singular: false,
    btcAmount: 833.48,
    image: "btcimage/Sapiens.png"
  }

  const tesla = {
    name: 'V1 Tesla',
    originalPrice: 69420,
    singular: true,
    btcAmount: 680.588235,
    image: "btcimage/Tesla v1.png"
  }

  const nintendoDS = {
    name: 'Nintendo 3DS',
    originalPrice: 249,
    singular: true,
    btcAmount: 286.206897,
    image: "btcimage/Nintendo DS.png"
  }

  const oculus = {
    name: 'Oculus',
    originalPrice: 299,
    singular: true,
    btcAmount: 26.2972735,
    image: "btcimage/Oculus.png"
  }

  const goPro = {
    name: 'GoPro Hero 3',
    originalPrice: 299,
    singular: true,
    btcAmount: 23.142,
    image: "btcimage/Go Pro.png"
  }

  const starbucks = {
    name: 'Starbucks in 2011',
    originalPrice: 4.95,
    singular: true,
    btcAmount: 16.5134,
    image: "btcimage/Starbucks cup.png"
  }

  const cardsAgainst = {
    name: 'Cards Against Humanity',
    originalPrice: 25,
    singular: false,
    btcAmount: 7.26744186,
    image: "btcimage/Cards Against Humanity.png"
  }

  const iPhone = {
    name: 'Iphone 5',
    originalPrice: 749,
    singular: true,
    btcAmount: 5.84882087,
    image: "btcimage/I phone 5.png"
  }

  const googleGlass = {
    name: 'Google Glass',
    originalPrice: 1500,
    singular: false,
    btcAmount: 3.3572068,
    image: "btcimage/Google Glass.png"
  }

  const coachellaTickets = {
    name: 'Coachella Tickets',
    originalPrice: 375,
    singular: false,
    btcAmount: 1.68463607,
    image: "btcimage/Coachella tickets.png"
  }

  const juicero = {
    name: 'Juicero',
    originalPrice: 699,
    singular: true,
    btcAmount: 1.60644237,
    image: "btcimage/Juicero.png"
  }

  const ps4 = {
    name: 'PS4',
    originalPrice: 399,
    singular: true,
    btcAmount: 1.07576166,
    image: "btcimage/PS$.png"
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
