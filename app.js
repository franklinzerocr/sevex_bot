const { Telegraf } = require('telegraf');
const config = require('config');
// should be on .env file
const bot = new Telegraf(config.telegram.key);

bot.start(async (ctx) => {
  ctx.reply('¡Bienvenid@ a SeVEx Bot. Este bot fue desarrollado por @franklinzerocr y solo se encarga de darle forward a los mensajes que contengan el #P2PLN al canal determinado en la configuracion del proyecto.\n\nEl repositorio publico del proyecto lo puedes encontrar en https://github.com/franklinzerocr/sevex_bot');
});

bot.hears('#P2PLN', (ctx) => {
  ctx.forwardMessage(config.channel);
});

bot.hears('#p2pln', (ctx) => {
  ctx.forwardMessage(config.channel);
});

bot.launch();

bot.catch((error) => {
  console.log('------- telegraf error------\n', error);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
