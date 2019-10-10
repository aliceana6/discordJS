//no evento message.js

let prefixos =['prefixo[0]', 'prefixo[1]', 'prefixo[2]'] //funciona com mention, prefixo com espaço etc.

if(!message.content.startsWith(prefixos[0]) && !message.content.startsWith(prefixos[1]) && !message.content.startsWith(prefixos[2])) return;

let args = message.content.startsWith(prefixos[0]) ? message.content.slice(prefixos[0].length).trim().split(/ +/g) : message.content.startsWith(prefixos[1]) ? message.content.slice(prefixos[1].length).trim().split(/ +/g) : message.content.slice(prefixos[2].length).trim().split(/ +/g)
let cmd = args.shift().toLowerCase();
