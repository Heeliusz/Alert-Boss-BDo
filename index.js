const { prefix, Token, ChanelId, RoleAdm } = require("./confing.json");
var schedule = require("node-schedule");
const { Client, MessageEmbed, User, Message, CategoryChannel } = require("discord.js");
const client = new Client({ partials: ["MESSAGE", "REACTION"] });
let jest = false;
client.on("ready", () => {
  client.user.setActivity("Bossy.. Bossy.. bossy O_o", {
    type: "STREAMING",
  });

  //////////////////////Poniedziałek/////////////////////
  //////////////////////Karada , Kutum//////////////////
  const KaradaKutumMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/DWDbvFH.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada , Kutum");
  /////////////////////////////funkcja///////////////////////////
  var KaradaKutum = schedule.scheduleJob("00 00 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaKutumMsg);
    KaradaKutumMsg.delete({ timeout: 900000 });
  });
  /////////////////////////////Karada//////////////////////////////
  const KaradaMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada2 = schedule.scheduleJob("45 01 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg2);
    KaradaMsg2.delete({ timeout: 900000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg4 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka4 = schedule.scheduleJob("45 04 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg4);
    KzarkaMsg4.delete({ timeout: 800000 });
  });

  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg5 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka5 = schedule.scheduleJob("45 08 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg5);
    KzarkaMsg5.delete({ timeout: 800000 });
  });
  //////////////////////////////////////ofin/////////////////////
  const OffinMsg3 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cmq8CNP.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Offin");
  /////////////////////////funkcja////////////////////////////
  var Offin3 = schedule.scheduleJob("45 11 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(OffinMsg3);
    OffinMsg3.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum//////////////////////////
  const KutumMsg4 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum4 = schedule.scheduleJob("45 15 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg4);
    KutumMsg4.delete({ timeout: 800000 });
  });
  /////////////////////////////nouver///////////////////
  const NouverMsg6 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver6 = schedule.scheduleJob("45 18 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg6);
    NouverMsg6.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg6 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka6 = schedule.scheduleJob("00 22 * * 1", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg6);
    KzarkaMsg6.delete({ timeout: 800000 });
  });
  ///////////////////////////////////Koniec Pon///////////////////
  ////////////////////////////////Wtorek/////////////////////////
  //////////////////////////Karada/////////////////////////////////
  const KaradaMsg12 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada12 = schedule.scheduleJob("00 00 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg12);
    KaradaMsg12.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum//////////////////////////
  const KutumMsg5 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum5 = schedule.scheduleJob("45 01 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg5);
    KutumMsg5.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg7 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka7 = schedule.scheduleJob("45 04 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg7);
    KzarkaMsg7.delete({ timeout: 800000 });
  });
  /////////////////////////////nouver///////////////////
  const NouverMsg7 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver7 = schedule.scheduleJob("45 08 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg7);
    NouverMsg7.delete({ timeout: 800000 });
  });
  ////////////////////////Kutum//////////////////////////
  const KutumMsg7 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum7 = schedule.scheduleJob("45 11 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg7);
    KutumMsg7.delete({ timeout: 800000 });
  });
  /////////////////////////////nouver///////////////////
  const NouverMsg8 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver8 = schedule.scheduleJob("45 15 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg8);
    NouverMsg8.delete({ timeout: 800000 });
  });
  //////////////////////////Karada/////////////////////////////////
  const KaradaMsg16 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada16 = schedule.scheduleJob("45 18 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg16);
    KaradaMsg16.delete({ timeout: 800000 });
  });
  /////////////////////////Garmoth//////////////////////////////
  const GarmothMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/gPTUScx.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Garmoth");
  /////////////////////////////funkcja////////////////////
  var Garmoth2 = schedule.scheduleJob("00 22 * * 2", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(GarmothMsg2);
    GarmothMsg2.delete({ timeout: 800000 });
  });
  ///////////////////////////////Koniec Wtorku//////////////////////
  /////////////////////////////Środa///////////////////////////////
  //////////////////////////////Kutum, Kzarka//////////////////
  const KzarkaKutumMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/tE5bxmI.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver, Kutum");
  /////////////////////funkcja/////////////////////////////
  var KzarkaKutum = schedule.scheduleJob("00 00 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaKutumMsg);
    KzarkaKutumMsg.delete({ timeout: 800000 });
  });
  //////////////////////////Karada/////////////////////////////////
  const KaradaMsg14 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada14 = schedule.scheduleJob("45 01 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg14);
    KaradaMsg14.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg9 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka9 = schedule.scheduleJob("45 04 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg9);
    KzarkaMsg9.delete({ timeout: 800000 });
  });
  //////////////////////////Karada/////////////////////////////////
  const KaradaMsg6 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada6 = schedule.scheduleJob("45 08 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg6);
    KaradaMsg6.delete({ timeout: 800000 });
  });
  ///////////////////////////Offin,Kutum////////////////////////////
  const OffinKutumMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Offin,Kutum");
  ///////////////////////funkcja////////////////////
  var OffinKutum = schedule.scheduleJob("45 15 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(OffinKutumMsg);
    OffinKutumMsg.delete({ timeout: 800000 });
  });
  /////////////////////////vell//////////////////////////////
  const VellMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/C3X1tu9.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Vell");
  /////////////////////////////funkcja////////////////////
  var Vell2 = schedule.scheduleJob("45 18 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(VellMsg2);
    VellMsg2.delete({ timeout: 800000 });
  });
  ///////////////////////////////////Karada, Kzarka//////////
  const KAradaKzarkaMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/pqasFj4.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada, Kzarka");
  //////////////////////funkcja////////////////////
  var KAradaKzarka2 = schedule.scheduleJob("00 22 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KAradaKzarkaMsg2);
    KAradaKzarkaMsg2.delete({ timeout: 800000 });
  });
  ///////////////////Quint,Muraka/////////////////
  const QuintMurakaMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/QfvqMqM.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Quint,Muraka");
  //////////////////////////funkcja///////////////////////////
  var QuintMuraka2 = schedule.scheduleJob("00 23 * * 3", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(QuintMurakaMsg2);
    QuintMurakaMsg2.delete({ timeout: 800000 });
  });
  //////////////////////////////Koniec Środy///////////////////////
  ////////////////////////////CZwartek////////////////////////////
  /////////////////////////////nouver///////////////////
  const NouverMsg10 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver10 = schedule.scheduleJob("00 00 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg10);
    NouverMsg10.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum//////////////////////////
  const KutumMsg3 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum3 = schedule.scheduleJob("45 01 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg3);
    KutumMsg3.delete({ timeout: 800000 });
  });
  /////////////////////////////nouver///////////////////
  const NouverMsg11 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver11 = schedule.scheduleJob("45 04 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg11);
    NouverMsg11.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum//////////////////////////
  const KutumMsg9 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum9 = schedule.scheduleJob("45 08 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg9);
    KutumMsg9.delete({ timeout: 800000 });
  });
  /////////////////////////////nouver///////////////////
  const NouverMsg12 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver12 = schedule.scheduleJob("45 11 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg12);
    NouverMsg12.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg11 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka11 = schedule.scheduleJob("45 15 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg11);
    KzarkaMsg11.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum//////////////////////////
  const KutumMsg10 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum10 = schedule.scheduleJob("45 18 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg10);
    KutumMsg10.delete({ timeout: 800000 });
  });
  /////////////////////////Garmoth//////////////////////////////
  const GarmothMsg3 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/gPTUScx.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Garmoth");
  /////////////////////////////funkcja////////////////////
  var Garmoth3 = schedule.scheduleJob("00 22 * * 4", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(GarmothMsg3);
    GarmothMsg3.delete({ timeout: 800000 });
  });
  /////////////////////////////Koniec CZwartku/////////////////////
  /////////////////////////////Piątek/////////////////////////////
  ///////////////////////////////////Karada, Kzarka//////////
  const KAradaKzarkaMsg4 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/pqasFj4.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada, Kzarka");
  //////////////////////funkcja////////////////////
  var KAradaKzarka4 = schedule.scheduleJob("00 00 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KAradaKzarkaMsg4);
    KAradaKzarkaMsg4.delete({ timeout: 800000 });
  });
  /////////////////////Nouvwer///////////////////////////////////////
  const NouverMsg13 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver13 = schedule.scheduleJob("45 01 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg13);
    NouverMsg13.delete({ timeout: 800000 });
  });
  //////////////////////////Karada/////////////////////////////////
  const KaradaMsg4 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada4 = schedule.scheduleJob("45 04 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg4);
    KaradaMsg4.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum//////////////////////////
  const KutumMsg13 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum13 = schedule.scheduleJob("45 08 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg13);
    KutumMsg13.delete({ timeout: 800000 });
  });
  //////////////////////////Karada/////////////////////////////////
  const KaradaMsg5 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada5 = schedule.scheduleJob("45 11 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg5);
    KaradaMsg5.delete({ timeout: 800000 });
  });
  /////////////////////Nouvwer///////////////////////////////////////
  const NouverMsg14 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver14 = schedule.scheduleJob("45 15 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg14);
    NouverMsg14.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg15 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka15 = schedule.scheduleJob("45 18 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg15);
    KzarkaMsg15.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum, Kzarka//////////////////
  const KzarkaKutumMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/tE5bxmI.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver, Kutum");
  /////////////////////funkcja/////////////////////////////
  var KzarkaKutum2 = schedule.scheduleJob("00 22 * * 5", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaKutumMsg2);
    KzarkaKutumMsg2.delete({ timeout: 800000 });
  });
  ////////////////////////////Sobota///////////////////////////////
  //////////////////////////Karada/////////////////////////////////
  const KaradaMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Edj0nml.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada");
  ///////////////////////funkcja////////////////////
  var Karada = schedule.scheduleJob("00 00 * * 6", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KaradaMsg);
    KaradaMsg.delete({ timeout: 800000 });
  });
  //////////////////////////////////////ofin/////////////////////
  const OffinMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cmq8CNP.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Offin");
  /////////////////////////funkcja////////////////////////////
  var Offin = schedule.scheduleJob("45 01 * * 6", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(OffinMsg);
    OffinMsg.delete({ timeout: 800000 });
  });
  ///////////////////////////////nouver/////////////////////////
  const NouverMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////////funkcja///////////////////////////
  var Nouver = schedule.scheduleJob("45 04 * * 6", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg);
    NouverMsg.delete({ timeout: 800000 });
  });
  //////////////////////////////Kutum//////////////////////////
  const KutumMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  ///////////////////////////funkcja//////////////////////
  var Kutum = schedule.scheduleJob("45 08 * * 6", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg);
    KutumMsg.delete({ timeout: 800000 });
  });
  ///////////////////////////////Nouver///////////////////
  const NouverMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////funkcja//////////////////////
  var Nouver2 = schedule.scheduleJob("45 11 * * 6", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg2);
    NouverMsg2.delete({ timeout: 800000 });
  });
  ///////////////////Quint,Muraka/////////////////
  const QuintMurakaMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/QfvqMqM.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Quint,Muraka");
  //////////////////////////funkcja///////////////////////////
  var QuintMuraka = schedule.scheduleJob("45 15 * * 6", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(QuintMurakaMsg);
    QuintMurakaMsg.delete({ timeout: 800000 });
  });
  ///////////////////////////////////Karada, Kzarka//////////
  const KAradaKzarkaMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/pqasFj4.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Karada, Kzarka");
  //////////////////////funkcja////////////////////
  var KAradaKzarka = schedule.scheduleJob("45 18 * * 6", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KAradaKzarkaMsg);
    KAradaKzarkaMsg.delete({ timeout: 800000 });
  });
  /////////////////////////////Koniec Soboty/////////////////////
  /////////////////////////////Niedziela////////////////////////

  ////////////////////////////Nouver, Kutum////////////////////
  const NouverKutumMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/MAmSMTd.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver, Kutum");
  /////////////////////funkcja/////////////////////////////
  var NouverKutum = schedule.scheduleJob("00 00 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverKutumMsg);
    NouverKutumMsg.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka = schedule.scheduleJob("45 01 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg);
    KzarkaMsg.delete({ timeout: 800000 });
  });
  ///////////////////////////////////Kutum//////////////////////////////
  const KutumMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/umi4tP6.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kutum");
  /////////////////////////////funkcja////////////////////
  var Kutum2 = schedule.scheduleJob("45 04 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KutumMsg2);
    KutumMsg2.delete({ timeout: 800000 });
  });
  /////////////////////Nouver//////////////////////////
  const NouverMsg3 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/cMJDCj1.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Nouver");
  /////////////////////////funkcja//////////////////////
  var Nouver3 = schedule.scheduleJob("45 08 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(NouverMsg3);
    NouverMsg3.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka//////////////////////////////
  const KzarkaMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/Szkk0pU.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka");
  /////////////////////////////funkcja////////////////////
  var Kzarka2 = schedule.scheduleJob("45 11 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaMsg2);
    KzarkaMsg2.delete({ timeout: 800000 });
  });
  /////////////////////////vell//////////////////////////////
  const VellMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/C3X1tu9.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Vell");
  /////////////////////////////funkcja////////////////////
  var Vell = schedule.scheduleJob("45 15 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(VellMsg);
    VellMsg.delete({ timeout: 800000 });
  });
  /////////////////////////Garmoth//////////////////////////////
  const GarmothMsg = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/gPTUScx.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Garmoth");
  /////////////////////////////funkcja////////////////////
  var Garmoth = schedule.scheduleJob("45 18 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(GarmothMsg);
    GarmothMsg.delete({ timeout: 800000 });
  });
  /////////////////////////Kzarka,Nouver//////////////////////////////
  const KzarkaNouverMsg2 = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Project-helius", "https://i.imgur.com/dQcXxf1.png")
    .setImage("https://i.imgur.com/gPTUScx.png")
    .setTitle("Halo Halo Boss sie respi za 15 min!??! ===> Kzarka, Nouver");
  /////////////////////////////funkcja////////////////////
  var KzarkaNouver = schedule.scheduleJob("00 22 * * 7", function () {
    const channel = client.channels.cache.get(ChanelId);
    channel.send(KzarkaNouverMsg2);
    KzarkaNouverMsg2.delete({ timeout: 800000 });
  });
  /////////////////////////////////////Koniec tyg///////////////////////////////
});

client.login(Token);
