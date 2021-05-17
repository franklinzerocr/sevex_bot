const { Telegraf } = require('telegraf');
const config = require('config');
// should be on .env file
const bot = new Telegraf(config.telegram.key);

bot.start(async (ctx) => {
  ctx.reply('Este bot te ayudará a completar tus intercambios P2P usando Bitcoin vía Lightning Network.\n\nEs fácil:\n\n1. Únete al grupo @satoshienvenezuela\n2. Publica tu oferta de compra o venta o calificación en el grupo, usando SIEMPRE el hashtag #P2PLN\n3. Tu oferta o calificación estará visible en el canal @SEVLIGHTNING\n\n¡Intercambia seguro y rápido!\n\nSupport: @franklinzerocr');
});

bot.on('text', (ctx) => {
  if (ctx.update.message.text.toUpperCase().includes('#P2PLN')) {
    console.log(ctx.update.message);
    ctx.forwardMessage(config.channel);
  }
});

bot.launch();

bot.catch((error) => {
  console.log('------- telegraf error------\n', error);
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
