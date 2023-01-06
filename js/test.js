const API_KEY = 'your-api-key';
const API_URL = `https://www.kitco.com/api/v2/spot_price/gold/json?api_key=${API_KEY}`;

async function getGoldPrice() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.prices.price);
    document.getElementById('price').innerHTML = data.prices.price;
  } catch (error) {
    console.error(error);
  }
}

getGoldPrice();