const TOKEN = "MTAzMTE2Mjg2ODMwMjg3MjU3OA.G5fCLz.u3i377gi4nGIOHLFBWG3sRaSx3Kz9uwlIg5v8o"
const PREFIX = "trad"

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
        client.user.setActivity(statuses[i](), { type: 'WATCHING' })
        i = ++i % statuses.length
    }, 1e4)
});



const translate = require('@vitalets/google-translate-api');
const { MessageEmbed } = require('discord.js');


client.on("messageCreate", message => {
    const atrad = message.content.substr("trad ".length);
    //const atrad = args.join(' ')

    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    if (message.content.startsWith(PREFIX)) {
        if (!atrad) return message.channel.send('Veuillez indiquer une phrase à traduire.')

        translate(atrad, { from: 'fr', to: 'en' }).then(res => {
            //console.log(res.text);
            //console.log(res.from.text.autoCorrected);
            //console.log(res.from.text.value);
            //console.log(res.from.text.didYouMean);
        

        const firstMessageEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`**Traduction :**  ${atrad}`)
            .setDescription(`**${res.text}**`)
            .setTimestamp()
            .setFooter({ text: '© Laxyny' });

            message.channel.send({ embeds: [firstMessageEmbed] });

        }).catch(err => {
            console.error(err);
        });
    }
})

client.login(TOKEN);