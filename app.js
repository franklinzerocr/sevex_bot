const { Telegraf } = require('telegraf');
const config = require('config');
// should be on .env file
const bot = new Telegraf(config.telegram.key);

bot.start(async (ctx) => {
  ctx.reply('¡Bienvenid@ ');
});
bot.hears('#P2PLN', (ctx) => {
  console.log(ctx.update.message);
  ctx.forwardMessage(config.channel);
});
bot.hears('#p2pln', (ctx) => {
  console.log(ctx.update.message);
  ctx.forwardMessage(config.channel);
});

bot.launch();

bot.catch((error) => {
  console.log('------- telegraf error------\n', error);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
