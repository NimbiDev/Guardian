# Guardian
Discord Bot built in discord.js v13

This bot is a WIP template build. As it stands, it may or may not work. 
We will be building this up over time.

Anyone wanting to contribute is free to do so. This is an open-source project and we freely accept new featues and contributions for it.


---

**Current Features**<br />
Currently availavle features are as follows

**Commands**

 * **Administration**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| ban | Ban a specified user | /ban [user] |
| kick | Kick a specified user  | /kick [user] |

* **Moderation**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| prune | Delete a specified anumber of messages from the channel | /prune [amount] |

* **Utility**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| avatar | Fetch a specified user's avatar. If no user is specified, return's your avatar| /avatar [user] |
| options-info | Returns information about the options provided | /options-info [option] |
| ping | Responds with Pong! | /ping |
| beep | Responds with Boop! | /beep |
| server | Retruns information about the current guild | /server |
| user-info | Returns information about the specified user. If no user is specified, returns your information. | /user-info |

---

**Planned Features**<br />
For now our currently planned features are as follows

**Logging**: `automod`, `auditlog`, `modlog`<br />
**Utilities**: `welcomer`

  
**Commands**

 * **Administration**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| ban | Ban a specified user for a specified time and reason | /ban [user] [time] [reason] |
| kick | Kick a specified user for a specified time and reason | /kick [user] [time] [reason] |
| slowmode | Set the slowmode for a specified channel  | /slowmode [channel] [time] |
| role | Create, edit, or delete a role - OR - Add or remove a role from a user. | /role [create | delete | edit | add | remove] [user] |
| channel | Create, delete, or edit a channel | /channel [create | delete | edit] |
| set | Configure the bot and it's features in your guild | /set [category] [option] [option] [option] |

 * **Moderation**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| mute | Mute a specified user for a specified time and reason  | /mute [user] [time] [reason] |
| warn | Warn a specified user for a specified reason | /warn [user] [reason] |

 * **Information**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| help | Get help with a specified command | help [command] |
| search | Search the web for a specified result | |search [query] |

 * **Images and Gifs**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |

| waifu | Returns a random waifu image or gif by tag from waifu.pics | /waifu [option] [tag] |
| anime | Returns a random anime image or gif by tag  | /anime [query] |
| dog | Returns a random dog image or gif by tag | /dog |
| cat | Returns a random cat image or gif by tag | /cat | 
| slap | Slap a spcified user | /slap [user] | 
| baka | Call a specified user a baka | /baka [user] | 
| tigger | Make a specified user triggered! | /trigger [user] |

 * **Music**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| play | Play a selected song or url | /play [track | url] |
| queue | Display the current queue | /queue |
| skip | Skip the selected track | /skip [option] |
| pause | Pause the currently playing song or queue | /pause |
| leave | Make the bot leave the current voice channel | /leave |
| stop | Stop the curently playing song or queeu and automatically clear it | /stop |
| np | Display the curently playing song | /np |
| vol | Set the volume level | /vol [number] |
| eq | Set the equalizer | /eq [option] |
| loop | loop the currently playing track or queue | /loop [option] |

 * **Stream Alerts**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| twitch | Returns the specified info for a specified streamer | /twitch [option] [option] |
| picarto | Returns the specified info for a specified streamer | /picarto [option] [option] |
| mixer | Returns the specified info for a specified streamer | /mixer [option] [option] |
| youtube | Returns the specified info for a specified streamer | /youtube [option] [option] |

* **Utility**

| Command | Description | Usage |
| -------------- | -------------- | -------------- |
| info | Returns the specified info | /info [guild | user | options] |
| ping | Returns the bot's current ping and api latency | /ping |


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
