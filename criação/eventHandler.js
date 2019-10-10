/*
*
* Dependências - fs e Discord.JS
*
*/

async function event(local){ //para executar utilize event('pasta')
  fs.readdir(local, (e, f)=>{ //lê a pasta
    f.forEach(i => { //para cada arquivo na pasta
      const evento = require(`${local}/${i}`) //procura o arquivo
      <client>.on(i.split('.')[0], (...args) => evento.run(...args)) //executa o evento usando a function run() definida lá.
    })
  })
}
