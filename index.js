const { Client, Intents } = require('discord.js'); //discord.js からClientとIntentsを読み込む
require("dotenv").config();
const TOKEN = process.env.TOKEN;
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS] }); //clientインスタンスを作成する

client.once('ready', async () => { //ここにボットが起動した際のコードを書く(一度のみ実行)
	console.log('起動完了');
    let msgTest = await client.channels.cache.get('985451546055688212').messages.fetch('992405731032694884');
    /*
    let memberTest =  await client.guilds.cache.get('625551832479039488').members.fetch();
    //msg.
    console.log(JSON.stringify(memberTest));
    memberTest.forEach(member => {
        console.log(member.displayName);
        /*
        var boolAdmin = false;

        member.roles.cache.map(role => role.name).forEach(roleName => {
            if(roleName=="admin"){
                boolAdmin = true;
            }else{
                
            }

        });
        
        if(boolAdmin==true){
            
        }else{
            var memberData = {name: member.displayName, id: member.user.tag};
            arrMemOne.push(memberData);
        }
        */
    //});
    console.log(msgTest);
    msgTest.react('1️⃣');
    msgTest.react('2️⃣');
    msgTest.react('3️⃣');
    msgTest.react('4️⃣');
    msgTest.react('🇵');
    msgTest.react('🇲');
    msgTest.react('🇩');
});



function regExists(member){
    let boolRegExists = new Boolean(false);
    member.roles.cache.map(role => role.id).forEach(roleId => {
        if((roleId=="992405538912608346")||(roleId=="992405578599108648")||(roleId=="992405602057846844")||(roleId=="992405629987733605")){
            boolRegExists = Boolean(true);
        }
    });
    return boolRegExists;
}

client.on('messageReactionAdd', async (reaction, user) => {
    
    console.log(`${reaction.message.guild} で ${user.tag} が ${reaction.emoji.name} をリアクションしました`);

    if(reaction.message.guild.id=="625551832479039488"){

        if(reaction.message.channel.id=="985451546055688212"){

            if(user.id!="985405501485486090"){
                //1 2 3 4
                if(reaction.emoji.name=="1️⃣"){
                    if(regExists(reaction.message.member)==false){
                        reaction.message.member.roles.add("992405538912608346");
                        let test = await client.guilds.cache.get('992394150014095393').members.fetch(reaction.message.member.id);
                        test.roles.add("994976666596159538");
                    }else{
                        reaction.users.remove(reaction.message.member.user);
                    }
                }else if(reaction.emoji.name=="2️⃣"){
                    if(regExists(reaction.message.member)==false){
                        reaction.message.member.roles.add("992405578599108648");
                    }else{
                        reaction.users.remove(reaction.message.member.user);
                    }
                }else if(reaction.emoji.name=="3️⃣"){
                    if(regExists(reaction.message.member)==false){
                        reaction.message.member.roles.add("992405602057846844");
                    }else{
                        reaction.users.remove(reaction.message.member.user);
                    }
                }else if(reaction.emoji.name=="4️⃣"){
                    if(regExists(reaction.message.member)==false){
                        reaction.message.member.roles.add("992405629987733605");
                    }else{
                        reaction.users.remove(reaction.message.member.user);
                    }

                //p m d
                }else if(reaction.emoji.name=="🇵"){
                    reaction.message.member.roles.add("992405443823550585");
                }else if(reaction.emoji.name=="🇲"){
                    reaction.message.member.roles.add("992405470134415450");
                }else if(reaction.emoji.name=="🇩"){
                    reaction.message.member.roles.add("992405492129341532");
                }
            }
        }
    }
});


client.on('messageReactionRemove', async (reaction, user) => {

    console.log(`${reaction.message.guild} で ${user.tag} が ${reaction.emoji.name} のリアクションを削除しました`);

    //Eins
    if(reaction.message.guild.id=="625551832479039488"){

        if(reaction.message.channel.id=="985451546055688212"){

            let testmember = await reaction.message.member.roles;

            if(reaction.emoji.name=="1️⃣"){
                testmember.remove("992405538912608346");
                let test = await client.guilds.cache.get('992394150014095393').members.fetch(reaction.message.member.id);
                test.roles.remove("994976666596159538");
            }else if(reaction.emoji.name=="2️⃣"){
                testmember.remove("992405578599108648");
            }else if(reaction.emoji.name=="3️⃣"){
                testmember.remove("992405602057846844");
            }else if(reaction.emoji.name=="4️⃣"){
                testmember.remove("992405629987733605");
            }else if(reaction.emoji.name=="🇵"){
                testmember.remove("992405443823550585");
            }else if(reaction.emoji.name=="🇲"){
                testmember.remove("992405470134415450");
            }else if(reaction.emoji.name=="🇩"){
                testmember.remove("992405492129341532");
            }

        }

    }
    
});

/*

function arrayShuffle(array) {
    for(var i = (array.length - 1); 0 < i; i--){
  
      // 0〜(i+1)の範囲で値を取得
      var r = Math.floor(Math.random() * (i + 1));
  
      // 要素の並び替えを実行
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
}







client.on('messageCreate', async message => {
    if (message.content.startsWith('!members') && message.guild) {
        if (message.mentions.members.size !== 1) return message.channel.send('メンバーを1人指定してください');
        const member = message.mentions.members.first();
        if (!member.voice.channel) return message.channel.send('指定したメンバーがボイスチャンネルに参加していません');
        const tags = member.voice.channel.members.map(member => member.user.tag);
        message.channel.send(tags.join('\n'));
    }
});
*/



/*
client.on('interactionCreate', async interaction => { //メッセージを受け取ったら
    if (!interaction.isCommand()) return; //コマンド以外は無視

    const { commandName } = interaction;

    var array = ["Kanade", "ロキシー", "toshiki1793", "TOAH-Χ", "Prot0TypePotato", "有栖川【公式】", "聴覚", "ねこまんま", "味醂", "highlight (野田)", "カロ①"];
    arrayShuffle(array);
    var team = new Array();

    if (commandName === 'ping') { //pingコマンド
        
        console.log(array.length + ", " + array.length / 3 + ", " + array.length % 3);
        for(var i = 0; i < (array.length / 3) - 1; i++){
            console.log("test" + i);
            team.push([array[i*3 + 0], array[i*3 + 1], array[i*3 + 2]])
        }

        if(array.length % 3==1){
            team[0].push(array[array.length - 1]);
        }

        if(array.length % 3==2){
            team[0].push(array[array.length - 2]);
            team[1].push(array[array.length - 1]);
        }


        console.log(team);


        await interaction.reply('Server info');
    } else if (commandName === 'server') { //serverコマンド
        const vcch = interaction.guild.channels.cache.get('985488257456422972');
        console.log(vcch.members.size);

        var list = new Array();
        var text = "";
        var arrMemOne = new Array();
        var team = new Array();

        vcch.members.forEach(member => {
            var boolAdmin = false;
            console.log("test");

            member.roles.cache.map(role => role.name).forEach(roleName => {
                if(roleName=="Group2"){
                    boolAdmin = true;
                }else{
                    
                }

            });
            
            /*
            console.log("test");
            member.roles.add("986262076395761704");
            if(member.displayName=="deltaEichi"){
                console.log("test");
                member.roles.add("986262076395761704");
            }
            */

            /*
            if(boolAdmin==true){
                var memberData = {name: member.displayName, id: member.user.tag, role:"運営"};
                arrMemOne.push(memberData);
                text = text + "name:" + member.displayName + " id:" + member.user.tag + "role:運営\n";
                list.push({memberName:member.displayName, id:member});
                console.log(member.displayName + "さんはGroup2です");
            }else{
            }

        });
        console.log(text);

        arrayShuffle(list);
        /////
        //console.log(array.length + ", " + array.length / 3 + ", " + array.length % 3);
        for(var i = 0; i < (list.length / 2); i++){
            console.log("test" + i);
            team.push([list[i*2 + 0], list[i*2 + 1]]);
            list[i*2 + 0].id.roles.add("986262187859410954");
            list[i*2 + 1].id.roles.add("986262187859410954");
        }

        if(list.length % 2==1){
            team[0].push(list[list.length - 1]);
        }

        if(list.length % 2==2){
            team[0].push(list[list.length - 2]);
            team[1].push(list[list.length - 1]);
        }


        console.log(team);


        await interaction.reply('User info.' + interaction.member.voice.channel.members.size);

    } else if (commandName === 'user') { //userコマンド
        const vcch = interaction.guild.channels.cache.get('625551833032556565');
        console.log(vcch.members.size);

        var arrMemOne = new Array();

        vcch.members.forEach(member => {
            var boolAdmin = false;

            member.roles.cache.map(role => role.name).forEach(roleName => {
                if(roleName=="admin"){
                    boolAdmin = true;
                }else{
                    
                }

            });
            
            if(boolAdmin==true){
                
            }else{
                var memberData = {name: member.displayName, id: member.user.tag};
                arrMemOne.push(memberData);
            }

        });
        console.log(arrMemOne);

        ////////////

        console.log(array.length + ", " + array.length / 3 + ", " + array.length % 3);
        for(var i = 0; i < (array.length / 3) - 1; i++){
            console.log("test" + i);
            team.push([array[i*3 + 0], array[i*3 + 1], array[i*3 + 2]])
        }

        if(array.length % 3==1){
            team[0].push(array[array.length - 1]);
        }

        if(array.length % 3==2){
            team[0].push(array[array.length - 2]);
            team[1].push(array[array.length - 1]);
        }


        console.log(team);

        /////
        await interaction.reply('User info.' + interaction.member.voice.channel.members.size);

    }
});
*/

client.login(TOKEN); //ログインする