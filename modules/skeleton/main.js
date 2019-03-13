// the bot variable is already set for you

async function run(tab) {
  bot.generalProcedure()

  if (bot.getProtocol() == 'init') {
    bot.setProtocol('main')
  }

  if (bot.getProtocol() == 'main') {

  }

  setTimeout(function () { run().catch(e=>consoleHandleError(e)); }, bot.getRunDelay());
}
