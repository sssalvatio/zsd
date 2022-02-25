var mineflayer = require("mineflayer");
var config = require("./config.json");
var chalk = require("chalk");

const antiAfk = require('mineflayer-antiafk')
const armorManager = require('mineflayer-armor-manager')
const autoEat = require('mineflayer-auto-eat')


// =======================
// BOT LOGIN INFORMATION
// =======================

let ip = config.host;
let port = config.port;
let username = config.username;

const bot = mineflayer.createBot({
  host: ip,
  port: port,
  username: username
});

bot.on('login', async() => {
  bot.chat("Hi! I'm MoneyTreesGuard! please contact asv#5797 on discord if you have problems on the server or want to give a good feedback!")
})

// ========================
// MINECRAFT BOT ACTIVITY
// ========================

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.loadPlugin(armorManager)
bot.loadPlugin(autoEat)
bot.loadPlugin(antiAfk)

bot.on('spawn', () => {
  bot.afk.setOptions({ fishing: false });
  bot.afk.start();
})

bot.on('spawn', () => {
  bot.afk.setOptions({ jumpWalk: true });
  bot.afk.start();
})


// =========================
// SET ACTIVITY BOT LOG 
// =========================

bot.on('login', async() => {
    console.log(chalk.blue('=-()-=-=()=--=()=--=()=--=()=--=()=-()-=-=()=--=()=--=()=--=()=--=()'))
    console.log(chalk.magenta(`Bot is Online on ${ip}`))
    console.log(chalk.red('=-()-=-=()=--=()=--=()=--=()=--=()=-()-=-=()=--=()=--=()=--=()=--=()'))
    console.log()
})

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('kicked', async() => {
  console.log(chalk.red(`Bot has been KICKED`))
})

bot.on('error', async() => {
  console.log(chalk.red(`There's an error, check the minecraft server or the ip and port again.`))
})