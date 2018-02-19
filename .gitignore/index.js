const Discord = require ("discord.js");

var bot = new Discord.Client ();

bot.on("ready", () => {
    bot.user.setGame("La v3 😛😜😝");
    console.log("bot connected");
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === "Ça va")
        message.reply(" je vais toujours bien je suis un robot");})
bot.on("message", message => {
    if (message.content === "Salut")
        message.reply(" bonjour");})
bot.on("message", message => {
    if (message.content === "Quelle couche pour miner ?")
        message.reply(" Environ couche 6");})
bot.on("message", message => {
    if (message.content === "Qui est le fondateur ?")
        message.reply(" Zerko, Diabolo et Corld sont les fondateurs");})
bot.on("message", message => {
    if (message.content === "Comment voir  les different monde pour miner, nether...?")
        message.reply(" faits /warp in game 😜");})
bot.on("message", message => {
    if (message.content === "Quelle âge pour entrer dans le staff ?")
        message.reply(" 14ans pour modo chat et 16 pour modo joueur");})
bot.on("message", message => {
    if (message.content === "Qui est ton créateur ?")
        message.reply(" C'est Hihax");})
bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "join-leave").sendMessage(member.toString() + " Bienvenue sur le discord d'**AustelClient** ! :white_check_mark: -  N'hésite pas à faire la commande A!help :D");
    member.addRole(member.guild.roles.find("name", "MUET"));
});
