var cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();

cron.schedule('*/60 * * * * *', () => {
    axios.post('https://zenith-funding.herokuapp.com/api/executeJob').catch((err) => {console.log("err")})
    console.log("Job Executed", "⌛️" ,new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));
  });