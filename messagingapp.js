
process.env.NTBA_FIX_319 = 1;
require('dotenv').config()
const fetch = require('node-fetch')
const userName = process.env.GMAILUSER;
const passWord = process.env.GMAILPASS;
const telegramChatid=process.env.TELEGRAMCHATID;
const telegramToken = process.env.TELEGRAMTOKEN;
const weatherToken = process.env.WEATHERTOKEN;

const Telegram = require('node-telegram-bot-api');
const bot = new Telegram(process.env.TELEGRAMTOKEN,{polling: true});

const weatherURL = new URL('https://api.openweathermap.org/data/2.5/weather')
weatherURL.searchParams.set('id', '1880251')
weatherURL.searchParams.set('APPID', weatherToken)
weatherURL.searchParams.set('units', 'metric')

const getWeatherData = async () => {
  const resp = await fetch(weatherURL.toString())
  const body = await resp.json()
  return body
}


  const main = async () => {
  const weatherData = await getWeatherData()
  console.log("weather data")
    }

main()
