const TOKEN = "MTAzMTE2Mjg2ODMwMjg3MjU3OA.G5fCLz.u3i377gi4nGIOHLFBWG3sRaSx3Kz9uwlIg5v8o"
const PREFIX = "!"

const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ],
    fetchAllMembers: true,
    partials: ['MESSAGE', 'REACTION'],
});

client.on('ready', () => {
    console.log('Bot prêt')
    const statuses = [
        () => `${client.guilds.cache.size} serveurs💻`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs😄`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'WATCHING'})
        i = ++i % statuses.length
    }, 1e4)
});

client.on("messageCreate", message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
})

client.login(TOKEN);