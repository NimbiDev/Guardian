# Guardian
Discord Bot built in discord.js v13

This bot is a WIP template build. As it stands, it may or may not work. 
We will be building this up over time.

Anyone wanting to contribute is free to do so. This is an open-source project and we freely accept new featues and contributions for it.


---

**Current Features**<br />
Currently availavle features are as follows

**Commands**

<img align="right" width="250" src="Guardian.png">

 * **Avatar [user]**: Return a specified user's avatar. If no user is specified, return's your avatar. 
 * **Beep**: Boop!
 * **Kick <user>**: Kick a specified user from the guild. 
 * **Options-Info <input>**: Returns information about the options provided.
 * **Ping**: Pong!
 * **Prune [amount]**: Prune up to 99 messages. 
 * **Server**: Returns info about the current guild.
 * **User-Info [user]**: Returns information about a specified user. If no user is specified, returns your information.
<br /><br /><br />

---

**Planned Features**<br />
For now our currently planned features are as follows
  
**Commands**

<img align="right" width="250" src="Guardian.png">

 * **Administration**: `ban <user> [time] [reason]`, `slowmode <channel> <time>`, `channel [create | delete | edit]`, `role [create | delete | edit | add | remove] [user]` 
 * **Moderation**: `mute <user> [time]`, `warn <user> [reason]`
 * **Information**: `help [command]`, `search [query]`
 * **Images and Gifs**: `anime [query]`, `dog`, `cat`, `slap [user]`, `baka [user]`, `trigger [user]`, `waifu [option] [tag]`
 * **Music**: `play [track | url]`, `queue`, `skip`, `pause`, `leave`, `stop`, `nowplaying`, `volume [number]`, `equalizer [option]`, `loop`, `loopqueue`
 * **Stream Alerts**: `twitch`, `youtube`, `picarto`, `mixer`
 * **Logging**: `automod`, `auditlog`, `modlog`
 * **Utilities**: `welcomer`, `set <categoy> [option] [option] [option]`
<br /><br /><br />

---

**Integrations**


<img align="left" width="250" src="https://www.fullstackpython.com/img/logos/heroku.png">
<br /><br /><br /><br />
 
---

**Important Note**<br />
Currently this bot is in the early stages of it's build and as such is not reccommended for use. However, if you would like to contribute, here are the current dependenicies:<br />

```yml
dependencies: 
    @discordjs/builders: 0.6.0
    @discordjs/rest: 0.1.0-canary.0
    discord-api-types: 0.23.1
    discord.js: 13.2.0

devDependencies:
    eslint: 7.32.0
    nodemon: 2.0.13

engine:
    node: 16.10.0
```

---
