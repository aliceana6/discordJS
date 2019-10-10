//RichEmbed 

const embed = new Discord.RichEmbed()
.setTitle('oi')
.setColor('cor em hexColor')
.setURL('https://github.com/aliceana6')
.setAuthor('um nome', 'https://pbs.twimg.com/profile_images/1182056353906483201/I5UUQ9Zs_400x400.png')
.setDescription('uma descrição legal')
.setThumbnail('https://i.imgur.com/wSTFkRM.png')
.addField('um field legal', 'uma value legal')
.addBlankField() //um field vazio bem legal.
.addField('um field inline bem legal', 'uma value inline legal', true)
.addField('outro field', 'mais uma value', true)
.setImage('https://avatars2.githubusercontent.com/u/56371070?s=400&u=4b265faddd4dbc3fbb49c275bd901fdc2cca14b0&v=4')
.setTimestamp()
.setFooter('footer', <message>.author.displayAvatarURL)
<message>.channel.send(embed);

//Outro método

<message>.channel.send({
  embed: {
    color: 0xcor //color em hex só que sem # e com 0x na frente, e sem aspas.
	title: 'Título',
	url: 'https://github.com/aliceana6',
	author: {
		name: 'Author',
		icon_url: 'https://pbs.twimg.com/profile_images/1182056353906483201/I5UUQ9Zs_400x400.png',
	},
	description: 'Descrição',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	fields: [
		{
			name: 'Field1',
			value: 'Value1',
		},
		{
			name: '\u200b',
			value: '\u200b', //blankField
		},
		{
			name: 'Field2 inline',
			value: 'Value2 inline',
			inline: true,
		},
		{
			name: 'Field3 inline',
			value: 'Value4 inline',
			inline: true,
		},
	],
	image: {
		url: 'https://avatars2.githubusercontent.com/u/56371070?s=400&u=4b265faddd4dbc3fbb49c275bd901fdc2cca14b0&v=4',
	},
	timestamp: new Date(),
	footer: {
		text: 'Footer',
		icon_url: <message>.author.displayAvatarURL,
	},
  }
})

//Limites de embed:

/*
Os títulos da Embed não podem passar de 256 letras.
As descrições da Embed não podem passar de 2048 letras
Só podem ter 25 fields
O Nome de um Field é limitado em 256 letras e a Value em 1024 letras
O Texto do Footer é limitado em 2048 letras
O nome do autor é limitado em 256 letras
A soma de todas as letras da Embed não podem passar de 6000 letras
Um bot só pode mandar 1 embed por mensagem.
Webhooks só podem mandar 10 embeds por mensagem.*/
