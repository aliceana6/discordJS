//para setar uma permissão em um cargo

<guild>.roles.get('id do cargo').setPermissions(['nome das permissões']);

//criando um cargo com permissões...

<guild>.createRole({
  name: 'nome',
  permissions: ['permissões']
})

//checando uma permissão...

<message>.member.hasPermission(['nome da permissão']) //retornará um valor Boolean, ou seja, true || false

//setando permissões para um canal...

<channel>.overwritePermissions('id do cargo / user', {<permissão>: false || true || null})

//criando um canal com perms definidas

<guild>.createChannel('nome', 'tipo', [{id: 'id do cargo / user', deny: ['permissões negadas'], allow: ['permissões ativadas']}])

//copiando as permissões de outro canal...

let other = <guild>.channels.get('id do canal')
<channel>.replacePermissionOverwrites({overwrites: other.overwrites});

//substituindo as permissões

<channel>.replacePermissionOverwrites({overwrites: [
  // mesma coisa do [{}] do "criando um canal com perms definidas" 
]})

//checar se um usuário tem um cargo a partir do id.

<member>.roles.has('id') //retorna Boolean;

//checar se um usuário tem um cargo checando o nome de todos os cargos dele.

<member>.roles.some(r => r.name === 'nome') //retorna Boolean;
