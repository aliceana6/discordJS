//criação de variáveis

const Discord = require('discord.js');
const fs = require('fs');
let clientOptions = {}
const client = new Discord.Client(clientOptions);

//colar as functions cmd() e event() aqui...

cmd('local')
event('local')
client.login('token')
