/*
*
* Aqui, iremos fazer o famoso CommandHandler. Ele serve para rodar seus comandos em arquivos separados. Aqui usaremos a Dependência fs e a Discord.js, além de definirmos algumas coisinhas antes, então vamos começar.
*
*/

<client>.cmds = new Discord.Collection();
<client>.aliases = new Discord.Collection(); //Opcional caso queira utilizar um handler com Aliases.


//Para fazer o Command Handler, iremos criar uma function chamada cmd, a qual será utilizada no ar quivo principal.

async function cmd(local){ // Quando for executá-la, utilize cmd('pasta'), por exemplo cmd('./comandos'), sem barra no fim.
  fs.readdir(local, (e,f) => { //lê a pasta
    f.forEach(x => { //para cada arquivo na pasta
      const comando = require(`${local}/${x}`) //encontra o arquivo
      <client>.cmds.set(comando.help.name, comando) //adiciona na Collection o nome dele (setado no arquivo) e o local.
      //Caso não use o sistema de Aliases, não copie o que está a seguir.
      comando.help.aliases.forEach(i => <client>.aliases.set(i, comando.help.name) // adiciona na Collection o nome da alias e o nome do comando (setado no arquivo)
    })
  })
}
