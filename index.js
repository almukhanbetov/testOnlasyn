const TelegramBot = require('node-telegram-bot-api');
const token = '6759613347:AAHq4ln8y7AC42kGLF9YlwvBzS-com8YGR0';
const bot = new TelegramBot(token, {polling: true});
const Pool = require("pg").Pool
const pool = new Pool({
    'host':'localhost',
    'user':'postgres',
    'password':'Zxcvbnm123',
    'port': 5432,
    'database':'onlas'
})
bot.on('message', async  (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    switch(text){
        case '/start':
            await bot.sendMessage(chatId, `${msg.from.first_name}====${chatId}`)
            await bot.sendMessage(chatId, "Я бот") 
            break;
        case '⭐️Командование':
            await getData(chatId,  1); 
            break;        
    }     
});