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
bot.on("message", message => {
    if (message.content === "Quand ouvre le serveur ?")
        message.reply(" Le 24 février à 15h 👍");})
bot.on("message", message => {
    if (message.content === "Combien d'abonnés pour être grade Youtubeur ?")
        message.reply(" Il en faut 500");})
bot.on("message", message => {
    if (message.content === "Quel est le ts ?")
        message.reply(" ts.minozia.fr");})
bot.on("message", message => {
    if (message.content === "Quel est le site du serveur ?")
        message.reply(" https://minozia.fr");}) 
bot.on("message", message => {
    if (message.content === "Qui est le plus bg?")
        message.reply(" Le plus beau est celui qui fût celui qui fût le plus beau, j'ai nommé Zerko(c pas moi c fujeen)");})
bot.on("message", message => {
    if (message.content === "Qui est là ?")
        message.reply(" MOIIIIII");}) 
bot.on("message", message => {
    if (message.content === "Qui est ton générateur à Idée?")
        message.reply(" c'est nox!");})
bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split (" ");

    var args2 = message.content.split(" ").slice(1);

    var suffix = args2.join(" ");

    var reason = args2.slice(1).join(" ");
    
    var reasontimed = args2.slice(2).join(' ')


    var user = message.mentions.users.first();
    
    var guild = message.guild;
    
    var member = message.member;

    var roleJoueur= member.guild.roles.find("name", "membres")
    
    var roleMute = member.guild.roles.find("name", "| • « MUET »  • |")
    
    var modlog = member.guild.channels.find("name", "log")
    
    var user = message.mentions.users.first();
    
    const serverQueue = queue.get(message.guild.id);

    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

    switch (args[0].toLowerCase()) {
        case "membres":
            message.reply("Nous sommes **" + bot.users.size + "** sur le discord !");
        break
        case "unmute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
        if(!modlog) return message.reply("Je ne trouve pas de channel log.");
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("À qui je retire le mute?")
        member.removeRole(roleMute)
        message.channel.sendMessage(user.toString() + " a bien été unmute.")
        
        var embed = new Discord.RichEmbed()
        .addField("Commande :", "UNMUTE")
        .addField("Utilisateur :", user.username)
        .addField("Modérateur :", message.author.username)
        .addField("Heure:", message.channel.createdAt)
        .setColor("#01A9DB")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
        case "mute":
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu n'as pas la permission.");
        if(!modlog) return message.reply("Je ne trouve pas de channel mod-log.");  
        let time = parseInt(args2[1]) * 60000;
        if(!time) return message.reply("Tu as oublié le temps.")
        if (!reasontimed) return message.reply("Tu as oublié la raison.")
        var member = message.mentions.members.first();
        if (message.mentions.users.size < 1) return message.reply("Quelle personne dois-je mute?")
        message.channel.sendMessage(member.toString() + " a bien été mute.")
        member.addRole(roleMute)
        setTimeout(() => { member.removeRole(roleMute); }, time);

        var embed = new Discord.RichEmbed()
        .addField("Action :", "Mute")
        .addField("Utilisateur :", user.toString())
        .addField("Modérateur :", message.author.toString())
        .addField("Raison :", reasontimed)
        .addField("Temps de la sanction :", args2[1] + " minute(s)")
        .setColor(0x808000)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTimestamp()
        member.guild.channels.find("name", "log").sendEmbed(embed);
        break;
            case "help":
            var embed = new Discord.RichEmbed()
                .addField("A!ban", "Cette commande permet de bannir un utilisateur ! Pour l'utiliser, faites M!ban @(utilisateur) (raison)")
                .addField("A!kick", "Cette commande permet de kick un utilisateur ! Pour l'utiliser, faites M!kick @(utilisateur) (raison)")
                .addField("A!purge", "Cette commande permet de supprimé des messages beaucoup plus rapidement ! Pour l'utiliser, faites M!purge (nombredemessages)")
                .addField("A!mute", "Cette commande permet de muté un utilisateur pendant un certain temps. Pour l'utiliser, faites M!mute @(utilisateur) (temps) (raison)")
                .addField("A!unmute", "Cette commande permet d'unmute un utilisateur. Pour l'utiliser, faites A!unmute @(utilisateur)")
                .setColor("#01A9DB")
                .setFooter("Idée de commande ? Proposer en MP!")
                .setAuthor(message.author.username, message.author.avatarURL)
                .setDescription("Voici les commandes du bot !")
                .setTimestamp()
                message.delete()
                message.channel.sendEmbed(embed);
            break;               
        case "Roll":
            break;
        case "kick":
            
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande. :x:");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu n'as pas mis son pseudo au complet ! :o")
            message.guild.member(user).kick();
            message.channel.send(user.toString() + " a bien été kick.")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "KICK")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);381242462053728267
            bot.channels.get('387078781866606593').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
            message.author.send("```Vous avez été kick pour: ```" + reason);
            message.delete();
            break;
        case "ban":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois bannir..")
            
            message.guild.ban(user, 2);
            message.channel.send(user.toString() + " a bien été banni.")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "BAN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('387078781866606593').sendMessage(":white_check_mark: Le joueur " + user.username + " à bien été kick pour: " + reason);
            message.author.send("```Vous avez été bannis pour: ```" + reason);
            message.delete();
            break;
            
            case "warn":
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            if(!modlog) return message.reply("Je ne trouve pas de channel log.");
            if (reason.length < 1) return message.reply("Tu as oublié la raison.");
            if (message.mentions.users.size < 1) return message.reply("Tu as oublié de préciser qui je dois warn..")
            
            
            message.channel.send(user.toString() + " a bien été warn.")

            var embed = new Discord.RichEmbed()
            .addField("Commande :", "WARN")
            .addField("Utilisateur :", user.username)
            .addField("Modérateur :", message.author.username)
            .addField("Raison : ", reason)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTimestamp()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            
            bot.channels.get('387078781866606593').sendMessage(":white_check_mark: Le joueur " + user.username + " à été warn pour: " + reason);
            message.author.send("Vous avez été warn pour: **`" + reason + "** Si vous continuer, vous risquez de vous faire bannir.");
            message.delete();
            break;
        case "purge":
            if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendMessage("Tu ne peux exécuter cette commande.");
            var messagecount = parseInt(args2.join(" "));
            if(!messagecount) return message.channel.send("Tu dois mettre un certain nombre de messages.")
            message.channel.fetchMessages({
                limit: messagecount
            }).then(messages => message.channel.bulkDelete(messagecount));
                        message.delete()
            var embed = new Discord.RichEmbed()
            .addField("Commande :", "PURGE")
            .addField("Modérateur :", message.author.username)
            .addField("Message supprimé", messagecount)
            .addField("Heure:", message.channel.createdAt)
            .setColor("#01A9DB")
            .setFooter("Ouf ! Sa as fait un bon ménage dans le channel ! ^^")
            message.delete()
            member.guild.channels.find("name", "log").sendEmbed(embed);
            break;;
  } 
});
