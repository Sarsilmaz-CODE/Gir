exports.run = async (client, message) => {
    const voiceChannel = message.member.voice.channel;
    if (!message.member.voice.channel) { return message.channel.send("<a:unlm:785184315540897803>`Kanka Ses Kanalında Olman Lazım Yoksa Giremem`<a:unlm:785184315540897803>"); }
    const permissions = message.member.voice.channel.permissionsFor(message.guild.me);
    if (permissions.has("CONNECT") === false) { return message.channel.send("<a:unlm:785184315540897803>`Odaya girmek için yetkim yok Reis`<a:unlm:785184315540897803>"); }
    message.member.voice.channel.join();
    return message.channel.send("Geliyorum | 🔰 SARSILMAZ GUARD 🔰");
    
  };
  
  exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ['katıl'],
    permLevel: 1,
    botPerms: [],
    requiredFuncs: [],
  };
  
  exports.help = {
    name: "gir",
    description: "Bulunduğunuz odaya giriş yapar",
    usage: "gir",
    usageDelim: "",
  }; 